// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        },(error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  },(error) => console.log(error));
},(error) => console.log(error));

// Iteration 2 - using promises

obtainInstruction ("steak", 0)
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 1)
  })
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 2)
  })
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 3)
  })
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 4)
  })
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 5)
  })
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 6)
  })  
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
    return obtainInstruction("steak", 7)
  })
  .then((value) => {
    document.querySelector("#steak").innerHTML += `<li>${value}</li>` 
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready</li>`
    document.querySelector("#steakImg").removeAttribute("hidden")
  })

// Iteration 3 using async/await

const makeBroccoli = async () => {
  try {
    const valor1 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${valor1}</li>`

    const valor2 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${valor2}</li>`

    const valor3 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${valor3}</li>`

    const valor4 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${valor4}</li>`

    const valor5 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${valor5}</li>`

    const valor6 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${valor6}</li>`

    const valor7 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${valor7}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden")

  } catch (error) {
    console.error(error)
  }
}

makeBroccoli()

// Bonus 2 - Promise all

const loopOverInstructions = async () => {
  const arrayOfPromises = []
  brusselsSprouts.forEach((element, index) => {
    arrayOfPromises.push(obtainInstruction("brusselsSprouts",index))
  })
  Promise.all(arrayOfPromises).then((arrayOfStrings) => {
    arrayOfStrings.forEach((instruction) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`
    })
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts is ready</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  })
}

loopOverInstructions()
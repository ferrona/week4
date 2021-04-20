let ingredients = [`bottom bun`, `beef patty`, `cheese`, `onion`, `tomato`, `lettuce`, `special sauce`,`top bun`]

// Goal: write each ingredient of the burger, in order of assembly, to the JavaScript console

// without a loop (what if i add an ingredient?)
// console.log(ingredients[0])
// console.log(ingredients[1])
// console.log(ingredients[2])
// console.log(ingredients[3])
// console.log(ingredients[4])
// console.log(ingredients[5])
// console.log(ingredients[6])
// when we added the sepecial sauce before the bun, this method will miss it

// with a loop
// for (declare a variable for counting ("counter variable"); determine the criteria for the number of times to loop; increment the counter)

for (let i = 0; i < ingredients.length; i++) { //for the last one (the increment), i++ is the same as i + 1
    // the { is for code that repeats
    // i stands for index, and pretty standard as a variable nae
    console.log(`remember to buy ${ingredients[i]}`)
}
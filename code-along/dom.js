let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = `Movies to Watch!`

let movieElements = document.querySelectorAll(`.movies-to-watch li`)

// // loop through all the elements (all the list)
// for (let i=0; i<movieElements.length; i++) {
//     // store reference to each movie li
//     let movieElement = movieElements[i]

//     // change the HTML for each li
//     movieElement.innerHTML = `Spaceballs`
// } this is replacing all bulletpoints into Spaceballs

// a reference to the "movies-to-watch" ul
let moviesList = document.querySelector(`.movies-to-watch`)

// insert some HTML before the end of the ul
moviesList.insertAdjacentHTML (`beforeend`, `
<li> Spaceballs </li>
<li> Star Wars </li>
`)
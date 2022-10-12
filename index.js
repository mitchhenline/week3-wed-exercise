function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector("input").value
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
  
    movieTitle.textContent = inputField
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
  
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", deleteMovie)
  
    document.querySelector("input").value = ""

    inputField = "" //figure this out for later
}
  
function deleteMovie(event) {
  event.target.parentNode.remove()
  console.log("hit delete movie")
}

document.querySelector('form').addEventListener("submit", addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
}



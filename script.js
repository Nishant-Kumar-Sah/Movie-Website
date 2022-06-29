const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const leftArrow = document.querySelectorAll(".left-arrow")

arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        leftArrow[i].style.opacity = "1"
        movieLists[i].style.transform = "translate(-400px)"
        arrow.style.opacity = "0"

    })
})
leftArrow.forEach((leftarrow, i) => {
    leftarrow.addEventListener("click", () => {
        leftArrow[i].style.opacity = "0"
        movieLists[i].style.transform = "translate(10px)"

        arrows[i].style.opacity = "1"

    })
})


const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.navbar-container,.sidebar,.sidebar-icon,.toggle,.movie-list-title,.movie-list-item-title,.movie-list-item-desc,.footer,.logos")

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
let contentdaown = document.querySelectorAll('.content-on-daown')
let icondaown = document.querySelectorAll('.card-lang')

for (let i = 0; i < icondaown.length; i++) {
  icondaown[i].addEventListener('click', () => {
    contentdaown[i].classList.toggle('content-on-daown-active')
})
}







document.addEventListener('DOMContentLoaded', function () {


    const left = document.querySelector('.left')
    const rigth = document.querySelector('.rigth')
    const articleUl = document.querySelector('.article__ul')
  
    let index = 0
  
    left.addEventListener('click', function () {
      
      index = (index > 0) ? --index : 5 - 1
      articleUl.style.transform = `translateX(-${index * 100}%)`
    })
  
    rigth.addEventListener('click', function () {
      
      index = (index < 5 - 1) ? ++index : 0
      articleUl.style.transform = `translateX(-${index * 100}%)`
    })
  })
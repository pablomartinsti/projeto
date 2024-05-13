let buttonnext= document.querySelector('.next')
let buttonback= document.querySelector('.back')

let container =document.querySelector('.container')
let list =document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

buttonnext.onclick =() =>moveItemsOnClick('next')
buttonback.onclick =() =>moveItemsOnClick('back')

function moveItemsOnClick(type){
    let listItems =document.querySelectorAll('.list .list-item')
    let thumbitems =document.querySelectorAll('.thumb .thumb-item')
  if(type === 'next'){
    list.appendChild(listItems[0])
    thumb.appendChild(thumbitems[0])
    container.classList.add('next')

  }else {

  list.prepend(listItems[listItems.length-1])
  thumb.prepend(thumbitems[listItems.length-1])
  container.classList.add('back')
  }

 setTimeout(() => {
  container.classList.remove('next')
  container.classList.remove('back')
  
 }, 3000);

}
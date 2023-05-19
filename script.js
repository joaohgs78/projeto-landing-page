// nav mobile

const menu = document.querySelector('.mobile-menu')
console.log(menu)

const navList = document.querySelector('nav ul')
console.log(navList)

menu.addEventListener('click', (e) => {

    console.log('menuclick')

    navList.classList.toggle('active')
    
    menu.classList.toggle('open')

    document.body.classList.toggle('menu-expanded')

    window.scroll(0,0)

})

// ------ corrosel

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {

    isLeft = e.target // captura o click botão
    
    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }


    items.forEach((item) => item.classList.remove("current-item")); // Deixar bonitinho a passagem

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
// Haalt mijn classes op uit CSS //

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

// Hier heb ik een mousemove event aangeroepen //

document.addEventListener("mousemove", moveCursor);

// Eerst heb ik de x en y as aangeroepen. Zo werkt het event als er over x of y as gehoverd wordt//

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
innerCursor.style.left = `${x}px`;
innerCursor.style.top = `${y}px`;
outerCursor.style.left = `${x}px`;
outerCursor.style.top = `${y}px`;
}

// Hier heb ik via een array al mijn elementen waar de muis groter moet worden neergezet//

let text = Array.from(document.querySelectorAll("h1, h2, h3, a, .image"));

text.forEach((tekst) => { 
  tekst.addEventListener("mouseover", () => {
  innerCursor.classList.add("grow");
  });
    tekst.addEventListener("mouseleave", () => { 
    innerCursor.classList.remove("grow");
    });
});





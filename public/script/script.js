let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
innerCursor.style.left = `${x}px`;
innerCursor.style.top = `${y}px`;
outerCursor.style.left = `${x}px`;
outerCursor.style.top = `${y}px`;
}

let text = Array.from(document.querySelectorAll("h1, h2, h3, a, .colormode"));

text.forEach((tekst) => { 
  tekst.addEventListener("mouseover", () => {
  innerCursor.classList.add("grow");
  });
    tekst.addEventListener("mouseleave", () => { 
    innerCursor.classList.remove("grow");
    });
});





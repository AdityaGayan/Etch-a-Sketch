let random = () => {
    return Math.floor(256 * Math.random());
}
const container = document.querySelector(".container");
for(let i = 0; i < 256; i++){
    console.log("div created");
    const div = document.createElement("div");;
    div.setAttribute("style", `background-color: blue; width: 60px; height: 60px; border: 1px solid black; box-sizing: border-box`);
    div.addEventListener("mouseenter", () => {
        let clr = `rgb(${random()}, ${random()}, ${random()})`;
        div.style.backgroundColor = `${clr}`;
    })
    container.appendChild(div);
}
const button = document.querySelector("button");

let gridSelector = () => {
    let X = prompt("Enter no. of squares per side (max 100)");
    while(X > 100 || isNaN(X) || X <= 0){
        alert(`Wrong Input`);
        X = prompt("Enter no. of squares per side (max 100)");
    }
    container.replaceChildren();
    for(let i = 0; i < X * X; i++){
    console.log("div created");
    const div = document.createElement("div");
    div.setAttribute("style", `background-color: blue; width: calc(100%/${X}); height: calc(100%/${X}); border: 1px solid black; box-sizing: border-box`);
    div.addEventListener("mouseenter", () => {
        let clr = `rgb(${random()}, ${random()}, ${random()})`;
        div.style.backgroundColor = `${clr}`;
    })
    container.appendChild(div);
    }
}
button.addEventListener("click", gridSelector);

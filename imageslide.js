let container = document.querySelector(".image-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");



let count = 0;
let width = 500;

prev.addEventListener("click", () => {
    count--;
    let newPosition = width * count;
    if (count >= 0) {
        container.style.transform = `translateX(-${newPosition}px)`;
    } else {
        count = 0;
    }
})

next.addEventListener("click", () => {
    count++;
    let newPosition = width * count;
    if (count < container.children.length) {
        container.style.transform = `translateX(-${newPosition}px)`;
    } else {
        count = container.children.length - 1;
        let newImg = document.createElement('img');
        newImg.src = `https://picsum.photos/500/500/?random/${count}`;
        container.appendChild(newImg);
    }
})





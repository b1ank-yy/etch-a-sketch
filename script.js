const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');

function draw() {
    for (i = 0; i < squareCount; i++) {
        const square = document.createElement('div');

        container.appendChild(square);

        for (j = 0; j < squareCount; j++) {
            const insideSquare = document.createElement('div');

            insideSquare.style.width = "16px";
            insideSquare.style.height = "16px";
            insideSquare.style.backgroundColor = "darkgray";
            insideSquare.classList = "square";

            square.appendChild(insideSquare);

            insideSquare.addEventListener('mouseover', () => {
                insideSquare.style.backgroundColor = `rgb(${randomNumRGB()} ${randomNumRGB()} ${randomNumRGB()})`;
            });
        }   
    }
}

function randomNumRGB() {
    min = 0;
    max = 255;
    
    random = min + Math.floor(Math.random() * (max - min + 1));
    
    return random;
}

squareCount = 64;
draw();

clearBtn.addEventListener('click', () => {
    squareCount = prompt("How many Squares per side?", 64);

    if (squareCount > 64) {
        squareCount = 64;
    }
    
    while (container.firstChild) container.removeChild(container.firstChild);

    draw();
});
    




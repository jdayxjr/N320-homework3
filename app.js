class Game {
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99ff00";
    normalColor = "#7700aa";
    gameZone = document.getElementById("gameZone");
    foundBar = new foundBar();

    constructor() {
        // make circles 
        for (var i = 0; i < 25; i++) {
            // create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle")
            // circle style class
            newCirc.document.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);
            // add the circle to the screen


            // randomly choose what reveal color the circle is 
            if (Math.random() < .3) {
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            }
            else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            // mouse events
            // on mouse over, show the hidden color in the data hiddencolor attribute
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;

            })

            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";

            })
            newCirc.addEventListener("click", (event) => {
                // if the user clicked on something with the "looking for" color
                if (event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();

                    // store how many have been clicked on
                    this.foundCircles++;

                    //update the found UI
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })
            this.gameZone.appendChild(newCirc)
        }

    }
}

class foundBar {
    element = document.getElementById("foundBar")
    maxSize = 130;
    percent = 0;


    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);

    }
}



let g = new Game();

// new comment 
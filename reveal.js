// JavaScript for Toggle Button 

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("options")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active"); 
})


// JavaScript for Text Reveal to Top

window.addEventListener("scroll", revealTop);

function revealTop() {
    var revealsTop = document.querySelectorAll(".revealTop");
    for (var i=0; revealsTop.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = revealsTop[i].getBoundingClientRect().top;
        var revealPoints = 150;

        if (revealTop < windowheight - revealPoints) {
            revealsTop[i].classList.add("active");
        }
        else {
            revealsTop[i].classList.remove("active");
        };
    }
};

// JavaScript for Text Reveal to Right

window.addEventListener("scroll", revealRight);

function revealRight() {
    var revealsRight = document.querySelectorAll(".revealRight");
    for (var i=0; revealsRight.length; i++) {
        var windowRightheight = window.innerHeight;
        var revealRight = revealsRight[i].getBoundingClientRect().right;
        var revealRightPoints = 150;

        if (revealRight > windowRightheight - revealRightPoints) {
            revealsRight[i].classList.add("activeRight");
        }
        else {
            revealsRight[i].classList.remove("activeRight");
        };
    }
};

// JavaScript for Text Reveal to Left

window.addEventListener("scroll", revealLeft);

function revealLeft() {
    var revealsLeft = document.querySelectorAll(".revealLeft");
    for (var i=0; revealsLeft.length; i++) {
        var windowLeftheight = window.innerHeight;
        var revealLeft = revealsLeft[i].getBoundingClientRect().left;
        var revealLeftPoints = 150;

        if (revealLeft < windowLeftheight - revealLeftPoints) {
            revealsLeft[i].classList.add("activeLeft");
        }
        else {
            revealsLeft[i].classList.add("activeLeft");
        };
    }
};

// JavaScript for Text Reveal to Left

let elementsArray = document.querySelectorAll(".reveal");

window.addEventListener('scroll', reveal ); 

function reveal() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i];
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("active");
        } 
        else {
            elem.classList.remove("active");
        }
    }
}
reveal();


////////////////////////////////////////////////////////


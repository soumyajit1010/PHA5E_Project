window.addEventListener("load", function () {
    setTimeout(function () {
        let navbar = document.getElementById("nav");
        if (navbar) {
            navbar.style.display = "flex"; // Show navbar after loading
        }
    }, 4800); // Adjust timing to match your animation
});

// Menu toggle for mobile
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const fullMenu = document.getElementById("full");

menuIcon.addEventListener("click", () => {
    fullMenu.style.right = "0";
});

closeIcon.addEventListener("click", () => {
    fullMenu.style.right = "-100%";
});









gsap.to("#loa", {
    opacity: 0.0,   // Fades to 30% visibility
    duration: 0.8,  // Takes 0.8 seconds
    repeat: -1,     // Infinite loop
    yoyo: true,     // Reverses back to full opacity
    ease: "power1.inOut"  // Smooth transition
});


var tl = gsap.timeline()

tl.to("text", {
    strokeDashoffset: 0,  // Reveal the outline by drawing along the path
    duration: 2,          // Slower animation (was 2, now 4)
    stagger: 0.5,         // More delay between each letter
    ease: "power1.inOut"
});


// Step 2: Instantly fill the text after the outline completes
tl.to("text", {
    fill: "white",        // Change the text fill to white instantly
    duration: 1,        // Instant transition
    ease: "power2.out"
});

tl.to("#body", {
    opacity: 0.0,   // Fades to 30% visibility
    duration: 0.8,  // Takes 0.8 seconds
    yoyo: true,     // Reverses back to full opacity
    ease: ""  // Smooth transition
})

    .to("#body", {
        opacity: 0,
        duration: 0,
        ease: "power2.inOut",
        onComplete: function () {
            document.getElementById("body").style.display = "none"; // Hide loading section
            document.querySelector(".hero-section").style.display = "flex"; // Show hero section
        }
    }, "+=1") // Wait 1 second before hiding
    .from(".text-container h1", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power2.out"
    });











/*  Hero Section   */

document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".text");
    const imageComponents = document.querySelectorAll(".image-component");
    const textContainer = document.querySelector(".text-container");
    const circularLayout = document.querySelector(".circular-layout");

    setTimeout(() => {
        texts.forEach((text) => text.classList.add("text-emerged"));
    }, 24);

    imageComponents.forEach((component, index) => {
        component.addEventListener("mouseenter", () => {
            texts.forEach((text) => {
                text.style.color = "#242434";
                text.style.textShadow =
                    "-1px -1px 0 #444454, 1px -1px 0 #444454, -1px 1px 0 #444454, 1px 1px 0 #444454";
            });

            // Set higher z-index for hovered image
            circularLayout.style.zIndex = "30";
            component.style.zIndex = "31";
            textContainer.style.zIndex = "20";

            // Replace content of other components with transparent stuff
            imageComponents.forEach((otherComponent, otherIndex) => {
                if (otherIndex !== index) {
                    otherComponent.style.zIndex = "29";
                    otherComponent.querySelector(".custom-component").style.display =
                        "none";
                    otherComponent.querySelector(".transparent-content").style.display =
                        "block";
                }
            });
        });

        component.addEventListener("mouseleave", () => {
            texts.forEach((text) => {
                text.style.color = "#ffffff";
                text.style.textShadow = "none";
            });

            // Reset z-index
            circularLayout.style.zIndex = "10";
            imageComponents.forEach((otherComponent) => {
                otherComponent.style.zIndex = "10";
                otherComponent.querySelector(".custom-component").style.display =
                    "flex";
                otherComponent.querySelector(".transparent-content").style.display =
                    "none";
            });
            textContainer.style.zIndex = "20";
        });

        component.addEventListener("click", () => {
            console.log(`Clicked element ${index}`);
            // You can replace this with your own click handler
        });
    });
});

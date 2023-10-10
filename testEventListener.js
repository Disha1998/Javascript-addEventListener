const container = document.getElementById("container");
console.log(container);

container.addEventListener("click", function (event) {
    const circle = document.createElement("div");

    circle.classList.add("circle");

    circle.style.left = `${event.clientX - 25}px`;
    circle.style.top = `${event.clientY - 25}px`;

    container.appendChild(circle);

    // Remove the circle after a delay (optional)
    setTimeout(() => {
        container.removeChild(circle);
    }, 1000);
    console.log(container);

});


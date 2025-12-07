let input = document.querySelector(".community-input");
let title = document.querySelector(".section-title");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const original = title.textContent;   // save old title
        title.textContent = "Thanks for sharing!";

        // change back after 2 seconds
        setTimeout(() => {
            title.textContent = original;
        }, 1500);

        input.value = ""; // optional: clear textarea
    }
});
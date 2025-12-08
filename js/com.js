let input = document.querySelector(".community-input");
let title = document.querySelector(".section-title");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const original = title.textContent;
        title.textContent = "Thanks for sharing!";

        setTimeout(() => {
            title.textContent = original;
        }, 1500);

        input.value = "";
    }
});
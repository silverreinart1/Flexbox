const panels = document.querySelectorAll(".panel");

panels.forEach((panel)) => {
    panel.addeEventListener("click", () => {
        classRemover();
        panel.classList.add("active");
    });
});

function classRemover() {
    panels.forEach((panel)) => {
        panel.classList.remove("active");
    });
}
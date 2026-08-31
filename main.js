document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

function openSection(id) {
    var panel = document.getElementById(id);
    if (panel) {
        panel.style.display = "block";
        var accordion = panel.previousElementSibling;
        if (accordion && accordion.classList.contains("accordion")) {
            accordion.classList.add("active");
        }
    }
}

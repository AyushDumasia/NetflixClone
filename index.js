let icons = document.querySelectorAll(".plus-icon");
let boxes = document.querySelectorAll(".add-panel2");

icons.forEach(function(icon, index) {
    icon.addEventListener("click", function() {
        let box = boxes[index];
        let p = box.querySelector(".add-acc-para");

        if (!p) {
            p = document.createElement("p");
            p.classList.add("add-acc-para");
            box.appendChild(p);
        }

        box.classList.toggle("accordion");

        if (box.classList.contains("accordion")) {
            box.style.height = "5rem";
            p.innerHTML = "This is Accordian";
        } else {
            box.style.height = "2rem"; 
            p.innerHTML = "";
        }
    });
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");

    });
}





// active menu item
let dropdown = document.getElementsByClassName("categories-item");
for (i = 0; i < dropdown.length; i++) {

    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("dropdown-active");
    });
    dropdown[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");

    });
}





let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".open-menu");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    sidebarBtn.classList.toggle("close-menu");
});
document.addEventListener("DOMContentLoaded", function () {
    let sidebar = undefined
    let sidebarVisible = false

    fetch('/lab-projekt-01/sidebar/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;

        });


    window.onload = function () {
        setTimeout(function () {
            contactButton.classList.add("visible");
        }, 1500);
    };

    const contactButton = document.getElementById("contact-btn");
    const popup = document.querySelector(".popup-visible");
    const closePopup = document.getElementById("closePopup");
    const submitButton = document.getElementById("submit");


    submitButton.addEventListener("click", function (event) {
        console.log('submited')
    })

    contactButton.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });


});


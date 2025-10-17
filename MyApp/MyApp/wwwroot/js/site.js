// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
    const homeButtons = document.querySelectorAll('[data-home-button="true"]');

    homeButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "/";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    // Check if a URL parameter named "userType" is set to "developer"
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get("userType");
    console.log("User Type:", userType);

    const publicContent = document.querySelector(".public");
    const developerContent = document.querySelector(".developer");

    if (publicContent && developerContent) {
        // Access the style property here
        if (userType == "dev") {
            // Show developer content and hide public content
            document.querySelector(".public").style.display = "none";
            document.querySelector(".developer").style.display = "block";
        } else {
            // Show public content and hide developer content
            document.querySelector(".public").style.display = "block";
            document.querySelector(".developer").style.display = "none";
        };
    };
});
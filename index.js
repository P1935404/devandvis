// Check if a URL parameter named "userType" is set to "developer"
const urlParams = new URLSearchParams(window.location.search);
const userType = urlParams.get("userType");

if (userType === "developer") {
    // Show developer content and hide public content
    document.querySelector(".public-content").style.display = "none";
    document.querySelector(".developer-content").style.display = "block";
} else {
    // Show public content and hide developer content
    document.querySelector(".public-content").style.display = "block";
    document.querySelector(".developer-content").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(paramName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(paramName);
    }

    // Get the "userType" query parameter
    const userType = getQueryParam("user");
    console.log(userType);

    if (userType === "dev") {
        // User type is "dev," so display developer content
        document.querySelector(".public").style.display = "none";
        document.querySelector(".developer").style.display = "block";
    } else {
        // User type is not "dev," so display public content
        document.querySelector(".public").style.display = "block";
        document.querySelector(".developer").style.display = "none";
    }
});
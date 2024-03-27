function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details) {
        if (details.style.display === "none") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    } else {
        console.error("Element with id '" + id + "' not found.");
    }
}

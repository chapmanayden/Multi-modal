document.getElementById("itCheckButton").addEventListener("click", function() {
    const advancedSection = document.getElementById("advancedSteps");
    advancedSection.style.display = "block";
    this.style.display = "none"; // Hide the button
});

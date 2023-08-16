
function nextStep(stepId) {
    // Hide all steps
    const steps = document.querySelectorAll(".step");
    for (let step of steps) {
        step.style.display = "none";
    }

    // Show the selected step
    const selectedStep = document.getElementById(stepId);
    selectedStep.style.display = "block";
}

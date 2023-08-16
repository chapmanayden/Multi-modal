function nextStep(stepId) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.style.display = 'none';
    });
    document.getElementById(stepId).style.display = 'block';
}

// Starting step
window.onload = function() {
    document.getElementById('start').style.display = 'block';
}
function resetTroubleshooting() {
  location.reload();
}

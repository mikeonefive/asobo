document.addEventListener('DOMContentLoaded', () => {
    const toggleSalutationSelect = document.getElementById('salutation');
    const otherInput = document.getElementById('salutation-other-group');

    // Function to show/hide based on current value
    const updateVisibility = () => {
        if (toggleSalutationSelect.value === 'other') {
            otherInput.style.display = 'block';
        } else {
            otherInput.style.display = 'none';
        }
    };

    // Call once on load
    updateVisibility();

    // And again when changed
    toggleSalutationSelect.addEventListener('change', updateVisibility);
});

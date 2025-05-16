document.addEventListener('DOMContentLoaded', () => {
    const toggleSalutationSelect = document.getElementById('salutation');
    const otherInput = document.getElementById('salutation-other-group');

    toggleSalutationSelect.addEventListener('change', function () {
        if (this.value === 'other') {
            otherInput.style.display = 'block';
        } else {
            otherInput.style.display = 'none';
        }
    });
});
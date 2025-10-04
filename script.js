//your JS code here. If required.

// Get the button element
var button = document.querySelector('input[type="button"]');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Get the select element
    var selectElement = document.getElementById('colorSelect');
    
    // Get the index of the currently selected option
    var selectedIndex = selectElement.selectedIndex;
    
    // Check if an option is selected
    if (selectedIndex !== -1) {
        // Remove the selected option
        selectElement.remove(selectedIndex);
    } else {
        // Alert if nothing is selected
        alert('Please select a color to remove.');
    }
});


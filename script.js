document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('dropdown');
    const newOptionInput = document.getElementById('newOption');
    const addOptionButton = document.getElementById('addOption');
    const removeOptionButton = document.getElementById('removeOption');
    const feedback = document.getElementById('feedback');  

    
    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = 'alert alert-' + type;
        setTimeout(() => {
            feedback.textContent = ''; 
            feedback.className = '';    
        }, 3000);
    }

    
    addOptionButton.addEventListener('click', function() {
        const newOption = newOptionInput.value;  
        if (newOption) {  
            const option = document.createElement('option');
            option.text = newOption;
            dropdown.add(option);  
            newOptionInput.value = '';  
            showFeedback('Option added successfully!', 'success');  
        } else {
            showFeedback('Please enter an option.', 'warning');  
        }
    });

   
    removeOptionButton.addEventListener('click', function() {
        const selectedOption = dropdown.selectedIndex;
        if (selectedOption > 0) {
            dropdown.remove(selectedOption);  
            showFeedback('Option removed successfully!', 'danger');  
        } else {
            showFeedback('No option selected to remove!', 'warning');  
        }
    });
});

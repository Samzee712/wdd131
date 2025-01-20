// References to DOM Elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapters');

// Event Listener for the Add Chapter Button
button.addEventListener('click', function () {
    const chapter = input.value.trim(); // Trim whitespace

    // Check if the input field is not empty
    if (chapter !== '') {
        // Create a list item
        const li = document.createElement('li');
        li.textContent = chapter;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Event Listener for the Delete Button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the list item
            input.focus(); // Focus back to the input
        });

        // Append delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the unordered list
        list.appendChild(li);

        // Clear the input field and reset focus
        input.value = '';
        input.focus();
    } else {
        // Handle empty input
        alert('Please enter a chapter!');
        input.focus();
    }
});

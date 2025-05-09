const tskList = document.getElementById('taskList');

function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim(); // Get the value from the input field, removing any extra spaces
    if (task === '') {
        alert('Please enter a task, stop Jocking.'); // Alert the user if the input is empty
        return;

    }// Check if the input is not empty
    const myList = document.createElement('li'); // Create a new list item
    myList.innerHTML = `
        <span onClick="toggleDone(this)">${task}</span> 
        <button class="removeBtn" onClick="deleteTask(this)">Delete</button>
    `; // Set the inner HTML of the list item // make the task as done when clicked // "this" is used for particulality
    tskList.appendChild(myList); // Append the new list item to the task list
    input.value = ''; // Clear the input field
}
function toggleDone(span) {
    span.classList.toggle('done'); // Toggle the 'done' class on the task

}
function deleteTask(button) {
    const li = button.parentElement; // Get the parent list item of the button
    tskList.removeChild(li); // Remove the list item from the task list

}
function clearAll() {
    tskList.innerHTML = ''; // Clear all tasks from the task list
}
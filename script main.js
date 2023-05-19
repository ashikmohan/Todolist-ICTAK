const todoListTableBody = document.getElementById('todo-list-table-body');

// Get reference to the Todo List menu
const todoListMenu = document.getElementById('todo-list-menu');

// Add click event listener to the Todo List menu
todoListMenu.addEventListener('click', () => {
  // Fetch the to-do lists from the API
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      // Clear the table body
      todoListTableBody.innerHTML = '';

      // Iterate through each to-do list item
      data.forEach(todo => {
        // Create a new table row
        const row = document.createElement('tr');

        // Set the ID column
        const idCell = document.createElement('td');
        idCell.textContent = todo.id;
        row.appendChild(idCell);

        // Set the title column
        const titleCell = document.createElement('td');
        titleCell.textContent = todo.title;
        row.appendChild(titleCell);

        // Set the completed column with a checkbox
        const completedCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', handleCheckboxChange);
        completedCell.appendChild(checkbox);
        row.appendChild(completedCell);

        // Append the row to the table body
        todoListTableBody.appendChild(row);
      });
    })
    .catch(error => console.log(error));
});

// Function to handle checkbox change event
function handleCheckboxChange() {
  // Get all checkboxes in the table
  const checkboxes = Array.from(document.querySelectorAll('#todo-list-table-body input[type="checkbox"]'));

  // Filter checked checkboxes
  const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked);

  // Check if 5 tasks have been completed
  if (checkedCheckboxes.length === 5) {
    alert(`Congrats. ${checkedCheckboxes.length} Tasks have been Successfully Completed`);
  }
}


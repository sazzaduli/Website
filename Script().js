// Function to filter table rows based on search input
document.getElementById('searchBox').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#projectTable tbody tr');
    rows.forEach(row => {
        let cells = row.querySelectorAll('td');
        let projectName = cells[1].textContent.toLowerCase();
        row.style.display = projectName.includes(filter) ? '' : 'none';
    });
});

// Function to sort table rows by year in descending order
function sortTable() {
    let table = document.getElementById('projectTable');
    let rows = Array.from(table.querySelectorAll('tbody tr'));
    let sortedRows = rows.sort((a, b) => {
        let yearA = new Date(a.cells[0].textContent);
        let yearB = new Date(b.cells[0].textContent);
        return yearB - yearA; // Sort in descending order
    });
    sortedRows.forEach(row => table.querySelector('tbody').appendChild(row));
}

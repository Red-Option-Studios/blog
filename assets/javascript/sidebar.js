// loadSidebar.js
function loadSidebar() {
    fetch('http://red-option-studios.github.io/assets/html/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebardiv').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

loadSidebar();
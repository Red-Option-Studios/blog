// Function to fetch the content from the text file and insert it into the sidebar
async function loadHtmlIntoSidebar() {
    try {
        // Fetch the content from the external txt file URL
        const response = await fetch('https://red-option-studios.github.io/lib/html/sidebar.txt');

        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Get the text content from the response
        const htmlContent = await response.text();

        // Find the sidebar div by its ID
        const sidebar = document.getElementById('sidebar');

        // Insert the HTML content into the sidebar
        sidebar.innerHTML = htmlContent;
    } catch (error) {
        console.error('Failed to fetch and load the HTML content:', error);
    }
}

// Call the function to load the content
loadHtmlIntoSidebar();
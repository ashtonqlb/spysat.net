function loadAboutPage() {
    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const aboutDoc = parser.parseFromString(data, 'text/html');

            // Replace content
            document.body.innerHTML = aboutDoc.body.innerHTML;

            // Replace stylesheet
            const oldStyleSheet = document.querySelector('link[href="main.css"]');
            const newStyleSheet = aboutDoc.querySelector('link[href="about.css"]');
            oldStyleSheet.setAttribute('href', newStyleSheet.getAttribute('href'));
        })
        .catch(error => console.error('Error loading about page:', error));
}

function loadMainPage() {
    fetch('main.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const mainDoc = parser.parseFromString(data, 'text/html');

            // Replace content
            document.body.innerHTML = mainDoc.body.innerHTML;

            // Replace stylesheet
            const oldStyleSheet = document.querySelector('link[href="about.css"]');
            const newStyleSheet = mainDoc.querySelector('link[href="main.css"]');
            oldStyleSheet.setAttribute('href', newStyleSheet.getAttribute('href'));
        })
        .catch(error => console.error('Error loading main page:', error));
}

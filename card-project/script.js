document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const villageInput = document.getElementById('village');
    const cityInput = document.getElementById('city');
    const saveBtn = document.getElementById('saveBtn');
    const userInfoDiv = document.getElementById('userInfo');
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    // const inputgroup = document.getElementsByClassName("input-group");

    // Load saved data from local storage
    function loadUserInfo() {
        const savedName = localStorage.getItem('name');
        const savedPhone = localStorage.getItem('phone');
        const savedVillage = localStorage.getItem('village');
        const savedCity = localStorage.getItem('city');

        if (savedName || savedPhone || savedVillage || savedCity) {
            userInfoDiv.innerHTML = `
                <h3>User Info</h3>
                <p><strong>Name:</strong> ${savedName || ''}</p>
                <p><strong>Phone Number:</strong> ${savedPhone || ''}</p>
                <p><strong>Village:</strong> ${savedVillage || ''}</p>
                <p><strong>City:</strong> ${savedCity || ''}</p>
            `;
        }
    }

    // Save user data to local storage
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('phone', phoneInput.value);
        localStorage.setItem('village', villageInput.value);
        localStorage.setItem('city', cityInput.value);

        loadUserInfo();  // Update the UI with the new data
    });

    // Toggle theme
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

    });

    loadUserInfo();  // Initialize the UI with saved data
});
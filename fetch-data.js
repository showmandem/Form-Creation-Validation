async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

try{
    const response = await fetch(apiUrl);
    const users = await response.json();
    console.log(users);
}
catch(error){
    console.error('Error fetching data:', error);
    dataContainer.textContent = 'Failed to load user data.';
}}
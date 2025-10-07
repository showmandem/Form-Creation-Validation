async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
}
try{
    const response = await fetch(apiUrl);
    const users = await response.json()
}
catch(error){
    // console.error("Error with data :" error);
}
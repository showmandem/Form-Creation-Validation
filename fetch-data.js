async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    dataContainer.innerHTML = "Loading the user"
try{
    const response = await fetch(apiUrl);
    const users = await response.json();
    console.log(users);
    dataContainer.innerHTML = ""
}
catch(error){
    console.error('Error fetching data:', error);
    dataContainer.textContent = 'Failed to load user data.';
}
// Create a <ul> element
const userList = document.createElement('ul');

// Loop through the array of users
users.forEach(user => {
  // Create a <li> for each user
  const listItem = document.createElement('li');
  
  // Set the text to the user's name
  listItem.textContent = user.name;
  
  // Add the <li> to the <ul>
  userList.appendChild(listItem);
});

// Append the complete <ul> to the container
dataContainer.appendChild(userList);

}
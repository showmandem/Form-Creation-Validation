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

const userList = document.createElement('ul');


users.forEach(user => {
  
  const listItem = document.createElement('li');
  
  listItem.textContent = user.name;
  
  userList.appendChild(listItem);
});

// Append the complete <ul> to the container
dataContainer.appendChild(userList);

}
document.addEventListener("DOMContentLoaded", fetchUserData);

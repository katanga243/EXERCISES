const user = {
    id: 1,
    name: "John",
    age: 25,
};

// Save object in localStorage
function saveUser() {
    localStorage.setItem("user", JSON.stringify(user));
}

saveUser();

// Method to recover data from localStorage and print it
function getSavedUser() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    console.log(savedUser);
    return savedUser;
}

getSavedUser();

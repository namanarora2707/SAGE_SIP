const output = document.getElementById("output");

// 1. Synchronous Example
function syncExample() {
    console.log("Task 1");
    console.log("Task 2");
    console.log("Task 3");

    output.innerHTML = `
        <h3>Synchronous Output</h3>
        Task 1 <br>
        Task 2 <br>
        Task 3
    `;
}

// 2. Asynchronous Example
function asyncExample() {
    output.innerHTML = "Check console for async output";

    console.log("Start");

    setTimeout(() => {
        console.log("Data Loaded");
    }, 2000);

    console.log("End");
}

// 3. XHR Example (GET)
function loadUsersXHR() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {
        let users = JSON.parse(xhr.responseText);

        let html = "<h3>Users from XHR</h3><ul>";
        users.forEach(user => {
            html += `<li>${user.name}</li>`;
        });
        html += "</ul>";

        output.innerHTML = html;
    };

    xhr.send();
}

// 4. Fetch API Example (GET)
function loadUsersFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            let html = "<h3>Users from Fetch API</h3><ul>";

            users.forEach(user => {
                html += `<li>${user.name}</li>`;
            });

            html += "</ul>";
            output.innerHTML = html;
        });
}

// 5. POST Request Example
function postData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Hello",
            body: "This is sample post",
            userId: 1
        })
    })
    .then(response => response.json())
    .then(data => {
        output.innerHTML = `
            <h3>POST Success</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    });
}

// 6. JSON Example
function jsonExample() {
    let userObj = {
        name: "Naman",
        age: 22
    };

    let jsonString = JSON.stringify(userObj);

    let parsedObject = JSON.parse(jsonString);

    output.innerHTML = `
        <h3>JSON Example</h3>
        JSON String: ${jsonString} <br><br>
        Parsed Object Name: ${parsedObject.name}
    `;
}
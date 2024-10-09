// Add your code here
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((data) => {
            const idElement = document.createElement("p");
            idElement.innerText = `New user ID: ${data.id}`;
            document.body.appendChild(idElement);
        });
}


fetch('https://api.github.com/users/Kashinka/repos')
    .then(response => response.json())

            .then(data => {

                data.forEach(item => {

                    document.getElementById('result').innerHTML += `<div>${item.name}</div>`

                });

            })

    .catch(err => console.log(err));
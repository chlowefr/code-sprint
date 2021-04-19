fetch("https://yesno.wtf/api")
    .then((resonse) => resonse.json())
    .then((data) => {
        console.log(data)

        let container = document.getElementById('container')
        container.innerHTML = `
            <h1>${data.answer}</h1>
            <img src="${data.image}" alt=""/>
        `
    })
    .catch((error) => console.log(error));

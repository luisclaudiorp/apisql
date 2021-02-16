const id = document.querySelector("#n_identificador")

const showData = (result) => {
    for (const campo in result) {
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

id.addEventListener("blur", (e) => {

    let search = id.value

    const options = {
        method: 'GET',
        modo: 'cors',
        cache: 'default'
    }

    fetch(`http://localhost:5000/${search}`, options)
        .then(data => {
            data.json()
                .then(data => showData(data[0]))
        })
        .catch(e => console.log('Error: ' + e, message))
})

fetch('https://api.slingacademy.com/v1/sample-data/photos')
    .then(response => {
        
        return response.json()
    })
    .then(response => {
        console.log('________Title Of Photos________')
        response.photos.forEach(element => {
            console.log(element.title)
        })
    })
    .catch(err => console.log("Erro: ", err))



const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log('________Url Of Photos________')
    data.photos.forEach(element => {
        console.log(element.url)
    })
}

fetchData('https://api.slingacademy.com/v1/sample-data/photos')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    name: "Goro",
    fatality: "Dragon Fangs"

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/character', (request, response) => {
    response.json(characters)
})
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
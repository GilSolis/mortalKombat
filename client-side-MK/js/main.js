
document.querySelector('button').addEventListener('click', getCharacter)

async function getCharacter() {
    try {
        const res = await fetch('http://localhost:8000/api/character')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)

    }
}
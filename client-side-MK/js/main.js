
document.querySelector('button').addEventListener('click', getCharacter)

async function getCharacter() {
    const name = document.querySelector('input').value
    try {
        const res = await fetch(`http://localhost:8000/api/characters/${name}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerText = data.fatality
    } catch (err) {
        console.log(err)

    }
}
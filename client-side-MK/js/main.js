
document.querySelector('button').addEventListener('click', getCharacter)

async function getCharacter() {
    const name = document.querySelector('input').value
    try {
        const res = await fetch(`http://localhost:8000/api/characters/${name}`)
        const data = await res.json()
        document.querySelector('h2').innerText = `Name: ${name.toUpperCase()}`
        document.querySelector('h3').innerText = `Moveset: ${data.moveset}`
    } catch (err) {
        console.log(err)
    }
}
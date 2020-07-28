import Card from "./components/card"
import Characters from "./components/character"

function getCharacter() {
    const elements = Characters.map(character => <p>{character.name}</p>)
    return <div>{this.elemants}</div>
}

export default getCharacter
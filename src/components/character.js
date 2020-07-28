import murdocPic from "./img/murdoc.png"
import twoDPic from "./img/2d.jpg"
import russelPic from "./img/russel.jpg"
import noodlePic from "./img/noodle.jpg"

const murdoc = {
    id: 0,
    name: "Murdoc",
    lastName: "Niccals",
    img: murdocPic,
    nickName: "God",
    birthYear: 1966,
    age: new Date().getFullYear() - 1966,
    description: `Reigns over Gorillaz as bassist, founder, and primary spokesperson - often rivaling 2-D as Gorillaz' true "frontman".
                 An unabashed narcissist, Murdoc claims the vast majority of the band's accomplishments to be solely thanks to his influence - regardless of factual accuracy.`,
    url: "https://gorillaz.fandom.com/wiki/Murdoc"
}

const twoD = {
    id: 1,
    name: "Stuart",
    lastName: "Pot",
    img: twoDPic,
    nickName: "2D",
    birthYear: 1978,
    age: new Date().getFullYear() - 1978,
    description: `He's the lead vocalist and keyboardist of Gorillaz.`,
    url: "https://gorillaz.fandom.com/wiki/2-D"
}

const russel = {
    id: 2,
    name: "Russel",
    lastName: "Hobbs",
    img: russelPic,
    nickName: "Russel",
    birthYear: 1975,
    age: new Date().getFullYear() - 1975,
    description: `He's the official drummer of Gorillaz.`,
    url: "https://gorillaz.fandom.com/wiki/Russel"
}

const noodle = {
    id: 3,
    name: "Noodle",
    lastName: "",
    img: noodlePic,
    nickName: "ヌードル",
    birthYear: 1990,
    age: new Date().getFullYear() - 1990,
    description: `She's the official lead guitarist of Gorillaz. She also wrote the entire Demon Days album.`,
    url: "https://gorillaz.fandom.com/wiki/Noodle"
}

const characters = [murdoc,twoD, russel, noodle]

export default characters
import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const petClicked = clickEvent.target
        if (petClicked.id.startsWith("pet")) {
            const [,petId] = petClicked.id.split("--")

            for (const thePet of pets) {
                for (const theWalker of walkers) {
                    if (thePet.walkerId === theWalker.id && thePet.id === parseInt(petId)) {
                        window.alert(`${thePet.name} is being walked by ${theWalker.name}`)
                    }
                }
            }
        }
    }
)


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id=pet--${pet.id}>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


let userName = getFirstName("Caroline-Alves-da-Silva", "-")
console.log(`Seja bem vindo ${userName}! `)

userName = getFirstName("Leonardo Capra", " ")
console.log(`Seja bem vindo ${userName}! `)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}
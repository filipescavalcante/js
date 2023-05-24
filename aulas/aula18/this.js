var pessoa = {
    firstName: 'Walter',
    lastName: 'White',
    nickName: 'Heisenberg',
    getFullName () {
        const {firstName, lastName, nickName} = this
        return `${pessoa.firstName} ${pessoa.lastName} ou ${pessoa.nickName}`
    },
    printBio () {
        const fullName = this.getFullName()
        console.log(`${fullName} é um personagem da série Breaking Bad.`)
    }
}

pessoa.printBio()
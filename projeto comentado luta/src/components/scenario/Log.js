class Log {
    list = []
    constructor(listElement) {
        this.listElement = listElement
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    render() {
        this.listElement.innerHTML = ''
        for (let i in this.list) {
            this.listElement.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}

// Trocar os que estão dentro do doAttack()
// console.log para this.log.AddMessage
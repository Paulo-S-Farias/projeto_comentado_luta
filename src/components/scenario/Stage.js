/**
 * 1 - saber as informações de quem está lutando
 * (qual o id que tem as informações do char 1 ou char 2)
 * 2 - ação de atacar dos chars
 * 3 - atualizar a barra de vida
 */

class Stage {
    constructor(char1, char2, char1Element, char2Element, logObject) {
        this.char1 = char1
        this.char2 = char2
        this.char1Element = char1Element
        this.char2Element = char2Element
        this.log = logObject
    }

    start() {
        this.update()

        // char 1
        this.char1Element.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.char1, this.char2))

        // char 2
        this.char2Element.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.char2, this.char1))
    }

    update() {
        // char1 - selecionando o nome do char
        this.char1Element.querySelector('.name').innerHTML = `${this.char1.name} - ${this.char1.life} HP`
        // barra de vida
        let char1HP = (this.char1.life / this.char1.maxLife) * 100
        this.char1Element.querySelector('.bar').style.width = `${char1HP}%`

        // char2 - selecionando o nome do char
        this.char2Element.querySelector('.name').innerHTML = `${this.char2.name} - ${this.char2.life} HP`
        // barra de vida
        let char2HP = (this.char2.life / this.char2.maxLife) * 100
        this.char2Element.querySelector('.bar').style.width = `${char2HP}%`
    }

    doAttack(attacking, attacked) {
        //console.log(`${attacking.name} está atacando ${attacked.name}!`)

        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Atacando cachorro morto.')
            return
        }

        // gerar um número aleatório para o attack e defense
        let attackFactor = (Math.random() * 2).toFixed(1)
        let defenseFactor = (Math.random() * 2).toFixed(1)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacking.defense * defenseFactor

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(1)} de dano ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu se defender...`)
        }

        // atualizar dados
        this.update()
    }
}
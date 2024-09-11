let log = new Log(document.querySelector('.log'))

let char = new Knight('John Wick')
let monster = new LittleMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()
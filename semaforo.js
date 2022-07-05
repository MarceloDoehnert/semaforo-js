const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let corInicio = 0
let intervalId = null

const semaforo = (evento) => {
  pararSemaforo()
  ligar[evento.target.id]()
}

const proximoIndice = () => corInicio = corInicio < 2 ? ++corInicio : 0


const trocaDeCor = () => {
  const cores = ['vermelho', 'amarelo', 'verde']
  const cor = cores[corInicio]
  ligar[cor]()
  proximoIndice()
}

const pararSemaforo = () => {
  clearInterval(intervalId)
}

const ligar = {
  'vermelho': () => img.src = './images/vermelho.png',
  'amarelo': () => img.src = './images/amarelo.png',
  'verde': () => img.src = './images/verde.png',
  'automatico': () => intervalId = setInterval(trocaDeCor, 3000)
}

buttons.addEventListener('click', semaforo);

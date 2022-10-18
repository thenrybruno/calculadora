//Declaração das variáveis globias
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Evento para capturar os valores dos dataset e usar nas contas
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

//Evento para limpar o campo de digitação
document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    resultInput.value = ''
    input.focus()
})

//Evento para verificar se as teclas digitadas estão inclusas no array e habilitar o backspace, enter e tecla c para limpar
input.addEventListener('keydown', function (ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'c'){
        input.value = ''
        resultInput.value = ''
    }

    if (ev.key === 'Enter') {
        calculate()
    }
})

//Evento para disparar a resolução da conta
document.getElementById('equal').addEventListener('click', calculate)

//Função para resolver a conta 
function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

//Evento para copiar o texto do resultado e manter na área de transferência
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget

    if (button.innerText === 'Copiar') {
        button.innerText = 'Copiado'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
        setTimeout(() => {
            button.innerText = 'Copiar'
            button.classList.remove('success')
        }, 3000)
    }
})

//Evento para alterar a cor do tema
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#4e4bff")
        main.dataset.theme = "light"
    }else{
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4e4bff")
        main.dataset.theme = "dark"
    }
})
# Calculadora

## Índice

- #visão geral
- #links
- #construído com
- #o-que-aprendi
- #desenvolvimento contínuo
- #autor
- #agradecimentos

## Visão geral

Calculadora desenvolvida como projeto prático do curso de programação de Javascript Full Stack, ministrado pela One Bit Code.

## Links

- URL da solução: (https://github.com/thenrybruno/calculadora)
- URL do site ativo: (https://thenrybruno.github.io/calculadora/)

## Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Flex Grid

## O que eu aprendi

Projeto prático com javascript que fez com que minhas habilidades com a minipulação do DOM através desta linguagem de programação tenha sido aperfeiçoada. Buscar constante evolução é um objetivo pessoal, e com esse trabalho pude realizar parte desse objetivo. Adquiri mais experiência em criar funções, adicionar eventos através do JS, capturar e limpar valores de inputs e usar funções nativas da linguagem.

```JS
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
```

### Desenvolvimento contínuo

Nos próximos projetos na qual estarei trabalhando, continuarei focado em aperfeiçoar minhas habilidades em HTML, CSS e JS. Aprender cada dia mais sobre essas técnologias e muitas outras é um foco na qual não irei deixar para trás.

## Autor

- Portifólio - Bruno Luiz (https://thenrybruno.github.io/portifolio)
- Github - thenrybruno (https://github.com/thenrybruno)
- LinkdIn - Bruno Almeida (https://www.linkedin.com/in/bruno-almeida-1a320422b/)

## Agradecimentos

Gostaria de agradecer a OneBitCode e todos os professores pelos estudos fornecidos e em especial ao professor Leonardo Scorza por sempre se empenhar e dedicar para que junto de seu time, possa sempre estar transmitindo para seus alunos aulas cada vez mais incríveis.
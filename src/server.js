const proffys = [
    {
        name: 'Gabriel Fróes',
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQFlGOnXxru5zw/profile-displayphoto-shrink_800_800/0?e=1602115200&v=beta&t=HoxYd9YfBvnLMrKYr2dg7EH3kmkU0vcbMFTLUS6QVi4",
        whatsapp: '999999999',
        bio: 'Conhecedor de inúmeros termos e tecnologias.<br><br>Toda semana explico um novo termo, uma tecnologia ou até uma simples palavrinha, utilizada por nós nesse incrível mundo da matemática.',
        subject: 'Matemática',
        cost: '20',
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: 'Mayk Brito',
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: '988888888',
        bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
        subject: 'Educação Física',
        cost: '30',
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }
]

function pageLanding(req, res) {
    return res.render('index.html')
}

function pageStudy(req, res) {
    return res.render('study.html')
}

function pageGiveClasses(req, res) {
    return res.render('give-classes.html')
}

const express = require('express')
const server = express()

// Configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


server
// Configurando arquivos estáticos
.use(express.static('public'))
// Rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// Configurando porta
.listen(5500)

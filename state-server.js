'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8001 })

server.state('hello', {
    ttl: 60 * 60 * 1000,
    isHttpOnly: true,
    encoding: 'iron',
    password: 'alkfjadslkfjlkasjdfkoasdjfjpkoajfpoijeiopjrfpajnvpisuen5640494a0fe4+aerfkafrjoj'
})

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            let hello = request.state.hello
            reply(`Cookies! ${hello}`)
             .state('hello', 'world')
        }
    }
})

server.start(() => console.log('Server started at: ', server.info.uri))

'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8001 })

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            let hello = request.state.hello
            reply(`Cookies! ${hello}`)
             .state('hello', 'amen', {
                 ttl: 60 * 60 * 1000,
                 isHttpOnly: true,
                 encoding: 'iron',
                 password: 'alkfjadslkfjlkasjdfkoasdjfjpkoajfpoijeiopjrfpajnvpisuen5640494a0fe4+aerfkafrjoj'
             })
        }
    }
})

server.start(() => console.log('Server started at: ', server.info.uri))

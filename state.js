'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8001 })

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            reply('cookies')
        }
    }
})

server.start(() => console.log('Server started at: ', server.info.uri))

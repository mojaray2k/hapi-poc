'use strict'

const Hapi = require('hapi')

// create a server with a host and port
const server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: 3000
})

// TDD add routes to a server to accept requests
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        const query = request.query

        reply('it works :)')
    }
})

server.start(() => console.log('Server started at: ', server.info.uri))
  
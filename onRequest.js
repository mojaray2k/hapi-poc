'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8001 })

server.ext('onRequest', (request, reply) => {
    request.setUrl('/')
    request.setMethod('GET')
    reply.continue()
})


server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        console.log('handler')
        reply('hello world')
    }
})

/**
 * When running the HTTP Pie command
 * http POST http://localhost:8001/foo
 * The following was outputed to the console
*/
/**
  handler
 */
server.start(() => {})
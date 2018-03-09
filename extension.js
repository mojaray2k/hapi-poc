'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ host: 'localhost', port: 8001 })

server.ext('onRequest', (request, reply) => {
    console.log('onRequest')
    reply.continue()
})

server.ext('onPreAuth', (request, reply) => {
    console.log('onPreAuth')
    reply.continue()
})

server.ext('onPostAuth', (request, reply) => {
    console.log('onPostAuth')
    reply.continue()
})

server.ext('onPreHandler', (request, reply) => {
    console.log('onPreHandler')
    reply.continue()
})

server.ext('onPostHandler', (request, reply) => {
    console.log('onPostHandler')
    reply.continue()
})

server.ext('onPreResponse', (request, reply) => {
    console.log('onPreResponse')
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
 * http GET localhost:8001
 * The following was outputed in the following order
*/
/**
 ====>>  onRequest
 ====>>  onPreAuth
 ====>>  onPostAuth
 ====>>  onPreHandler
 ====>>  handler
 ====>>  onPostHandler
 ====>>  onPreResponse
 */
server.start(() => {})
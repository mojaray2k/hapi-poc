'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })

function handler(request, reply) {
    reply(request.params)
}

server.route({
    method: 'GET',
    path: '/users',
    handler: handler
})

server.route({
    method: 'GET',
    path: '/files/{files*2}',
    handler: handler
})

server.route({
    method: 'GET',
    path: '/users/files/{files*}',
    handler: handler
})

server.route({
    method: 'GET',
    path: '/users/{userId}/files',
    handler: handler
})

server.route({
    method: 'GET',
    path: '/users/{userId}',
    handler: handler
})

/**
 * If you want a param to be optional use a '?'
 * server.route({
 *   method: 'GET',
 *   path: '/users/{userId?}',
 *   handler: handler
 * })
 */



server.start(() => console.log('Server started at: ', server.info.uri))
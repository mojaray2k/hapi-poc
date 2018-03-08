'use strict'

const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })
server.register(require('vision'), () => {

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {
            reply.view('home', { name: request.params.name || 'world'})
        }
    })

    server.start(() => console.log('Server started at: ', server.info.uri))
})


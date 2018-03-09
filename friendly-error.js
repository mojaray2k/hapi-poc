'use strict'

const Hapi = require('hapi')
const Boom = require('Boom')
const server = new Hapi.Server()
server.connection({ host: 'localhost', port: 8001 })

server.register(require('vision'), () => {

    server.views({
        engines: { hbs: require('handlebars')},
        relativeTo: __dirname,
        path: 'views'
    })

    server.ext('onPreResponse', (request, reply) => {
        let resp = request.response
        if(!resp.isBoom) return reply.continue()
        
        reply.view('error', resp.output.payload)
         .code(resp.output.statusCode)
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            //reply(Boom.badRequest())
            reply(Boom.notFound())
        }
    })

    server.start(() => {})
})


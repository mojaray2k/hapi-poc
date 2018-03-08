'use strict'

const Hapi = require('hapi')

// create a server with a host and port
const server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: 3000
})

let goodOptions = {
    reporters: [{
        reporter: require('good-console'),
        events: {log: ['error'], response: '*'}
    }]
}

server.register({
    register: require('good'),
    options: goodOptions
}, err => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            server.log('error','Oh no!')
            server.log('info', 'replying')
            reply('hello hapi')
        }
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {    
            reply(`hello ${request.params.name}`)
        }
    })
    
    server.start(() => console.log('Server started at: ', server.info.uri))
    
})
  
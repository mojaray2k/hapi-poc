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
    handler: function(request, reply){
        reply('Hello Hapi')
    }
})

server.start(function(err){
    if(err){
        throw err
    }

    console.log('Server started at: ', server.info.uri)
})
  
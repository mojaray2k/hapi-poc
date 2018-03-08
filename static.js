'use strict'

const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })
server.register(require('inert'), () => {

    // server.route({
    //     method: 'GET',
    //     path: '/hapi.png',
    //     /**
    //      * Serving static files version 1
    //      */
    //     // handler: (request, reply) => {   
    //     //     var path = Path.join(__dirname, 'public/hapi.png')
    //     //     reply.file(path) 
    //     // }

    //     /**
    //      * Serving static files version 2
    //      */
    //     // handler:  {   
    //     //     file: Path.join(__dirname, 'public/hapi.png')
    //     // }
    // })

    server.route({
        method: 'GET',
        path: '/{param*}',

        /**
         * Serving static files version 3
         */
        handler:  {   
            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    })



    server.start(() => console.log('Server started at: ', server.info.uri))
})


'use strict'

const Hapi = require('hapi')
const Boom = require('boom')

const server = new Hapi.Server()

server.connection({ port: 8001 })

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {   

        reply(Boom.notFound())
        /**
         * The Following out put is printed out
            HTTP/1.1 404 Not Found
            Connection: keep-alive
            Date: Thu, 08 Mar 2018 06:53:14 GMT
            Transfer-Encoding: chunked
            cache-control: no-cache
            content-encoding: gzip
            content-type: application/json; charset=utf-8
            vary: accept-encoding

            {
                "error": "Not Found",
                "statusCode": 404
            }
         */
    }
})
/**
 * You can make http request via the command line using HTTP PIE
 * https://httpie.org
 */


server.start(() => {})
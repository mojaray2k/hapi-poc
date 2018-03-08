'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })

server.route({
    method: ['POST', 'PUT'],
    path: '/',
    config: {
        payload: {
            output: 'data',
            parse: false
        }
    },
    handler: (request, reply) => {
        reply(request.payload)
    }
    
    /**
     * Here is a sample PUT request that when the config object is added to the server.route
     * and 'parse' is set to 'false' 
     * the url encoded for form submissions does not return json 
 ====>>  http -v --form PUT localhost:8001 fname=Amen-Moja lname=Ra
     */

    /**
     * The first part printed out is the request
    */
    // POST / HTTP/1.1
    // Accept: application/json, */*
    // Accept-Encoding: gzip, deflate
    // Connection: keep-alive
    // Content-Length: 32
    // Content-Type: application/json
    // Host: localhost:8001
    // User-Agent: HTTPie/0.9.9

    // fname=AM&lname=Ra

    /**
     * The second part printed out is the response
    */
    // HTTP/1.1 200 OK
    // Connection: keep-alive
    // Date: Thu, 08 Mar 2018 09:24:59 GMT
    // Transfer-Encoding: chunked
    // cache-control: no-cache
    // content-encoding: gzip
    // content-type: application/json; charset=utf-8
    // vary: accept-encoding

    // fname=AM&lname=Ra
})

/**
 * You can make http request via the command line using HTTP PIE
 * https://httpie.org
 */

server.start(() => {})

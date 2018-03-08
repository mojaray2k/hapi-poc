'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })

server.route({
    method: ['POST', 'PUT'],
    path: '/',
    handler: (request, reply) => {
        reply(request.payload)
    }
    /**
     * Here is a sample POST request in the command line using HTTPpie
 ====>>  http -v POST localhost:8001 fname=Amen lname=Ra
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

    // {
    //     "fname": "Amen",
    //     "lname": "Ra"
    // }

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

    // {
    //     "fname": "Amen",
    //     "lname": "Ra"
    // }

    /**
     * Here is a sample PUT request in the command line using HTTPpie
 ====>>  http -v PUT localhost:8001 fname=Moja lname=Ra
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

    // {
    //     "fname": "Amen",
    //     "lname": "Ra"
    // }

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

    // {
    //     "fname": "Moja",
    //     "lname": "Ra"
    // }

    /**
     * Here is a sample PUT request that is url encoded for form submissions in the command line using HTTPpie
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

    // fname=Amen-Moja&lname=Ra

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

    // {
    //     "fname": "Amen-Moja",
    //     "lname": "Ra"
    // }
})

/**
 * You can make http request via the command line using HTTP PIE
 * https://httpie.org
 */

server.start(() => {})

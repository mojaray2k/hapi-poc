'use strict'

const Hapi = require('hapi')
const Boom = require('boom')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })

server.route({
    method: 'GET',
    path: '/',
    // handler: (request, reply) => {   
    //     let resp = reply('hello world')
    //     resp.code(418)
    // }
    /**
     * The Following out put is printed out
 ====>> HTTP/1.1 418 I'm a teapot
        Connection: keep-alive
        Date: Thu, 08 Mar 2018 06:58:52 GMT
        Transfer-Encoding: chunked
        cache-control: no-cache
        content-encoding: gzip
====>>  content-type: text/html; charset=utf-8
        vary: accept-encoding

        hello world
    */
    // handler: (request, reply) => {   
    //     let resp = reply('hello world')
    //     resp.code(418)
    //     resp.type('text/plain')
    // }
    /**
     * The Following out put is printed out
 ====>> HTTP/1.1 418 I'm a teapot
        Connection: keep-alive
        Date: Thu, 08 Mar 2018 06:58:52 GMT
        Transfer-Encoding: chunked
        cache-control: no-cache
        content-encoding: gzip
====>>  content-type: text/plain; charset=utf-8
        vary: accept-encoding

        hello world
    */

//    handler: (request, reply) => {   
//         let resp = reply('hello world')
//         resp.code(418)
//         resp.type('text/plain')
//         resp.header('hello', 'world')
//     }
    /**
     * The Following out put is printed out
 ====>> HTTP/1.1 418 I'm a teapot
        Connection: keep-alive
        Date: Thu, 08 Mar 2018 06:58:52 GMT
        Transfer-Encoding: chunked
        cache-control: no-cache
        content-encoding: gzip
 ===>>  content-type: text/plain; charset=utf-8
 ===>>  hello: world
        vary: accept-encoding

        hello world
    */

//    handler: (request, reply) => {   
//         let resp = reply('hello world')
//         resp.code(418)
//         resp.type('text/plain')
//         resp.header('hello', 'world')
//         resp.state('hello', 'world')
//     }
    /**
     * The Following out put is printed out
====>>  HTTP/1.1 418 I'm a teapot
        Connection: keep-alive
        Date: Thu, 08 Mar 2018 06:58:52 GMT
        Transfer-Encoding: chunked
        cache-control: no-cache
        content-encoding: gzip
===>>   content-type: text/plain; charset=utf-8
===>>   hello: world
===>>   set-cookie: hello=world
        vary: accept-encoding

        hello world
    */

   handler: (request, reply) => {   
        let resp = reply('hello world')
        .code(418)
        .type('text/plain')
        .header('hello', 'world')
        .state('hello', 'world')
    }
    /**
     * The Following out put is printed out
====>>  HTTP/1.1 418 I'm a teapot
        Connection: keep-alive
        Date: Thu, 08 Mar 2018 06:58:52 GMT
        Transfer-Encoding: chunked
        cache-control: no-cache
        content-encoding: gzip
===>>   content-type: text/plain; charset=utf-8
===>>   hello: world
===>>   set-cookie: hello=world
        vary: accept-encoding

        hello world
    */

})
/**
 * You can make http request via the command line using HTTP PIE
 * https://httpie.org
 */


server.start(() => {})
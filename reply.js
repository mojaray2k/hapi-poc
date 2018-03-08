'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ host: 'localhost', port: 8001 })

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {   

        //reply(null, 'Hello world')
        /**
         * The Following out put is printed out
            HTTP/1.1 200 OK
            Connection: keep-alive
            Date: Thu, 08 Mar 2018 06:36:22 GMT
            Transfer-Encoding: chunked
            cache-control: no-cache
            content-encoding: gzip
            content-type: text/html; charset=utf-8
            vary: accept-encoding

            Hello world
         */
        
        //reply({hello: 'world'})
        /**
         * The Following out put is printed out
            HTTP/1.1 200 OK
            Connection: keep-alive
            Date: Thu, 08 Mar 2018 06:37:21 GMT
            Transfer-Encoding: chunked
            cache-control: no-cache
            content-encoding: gzip
            content-type: application/json; charset=utf-8
            vary: accept-encoding

            {
                "hello": "world"
            }
         */

         //reply(Promise.resolve('Hello world'))
         /**
         * The Following out put is printed out
            HTTP/1.1 200 OK
            Connection: keep-alive
            Date: Thu, 08 Mar 2018 06:41:50 GMT
            Transfer-Encoding: chunked
            cache-control: no-cache
            content-encoding: gzip
            content-type: text/html; charset=utf-8
            vary: accept-encoding

            Hello world
         */

         // reply(require('fs').createReadStream(__filename))
         /**
         * The Following out put is printed out
            HTTP/1.1 200 OK
            Connection: keep-alive
            Date: Thu, 08 Mar 2018 06:44:01 GMT
            Transfer-Encoding: chunked
            cache-control: no-cache
            vary: accept-encoding

            PRINTS OUT ALL THE CONTENT OF THIS FILE
         
         */

        reply(new Error('oops'))
        /**
         * The Following out put is printed out
            HTTP/1.1 500 Internal Server Error
            Connection: keep-alive
            Date: Thu, 08 Mar 2018 06:47:25 GMT
            Transfer-Encoding: chunked
            cache-control: no-cache
            content-encoding: gzip
            content-type: application/json; charset=utf-8
            vary: accept-encoding

            {
                "error": "Internal Server Error",
                "message": "An internal server error occurred",
                "statusCode": 500
            }
         */
    }
})
/**
 * You can make http request via the command line using HTTP PIE
 * https://httpie.org
 */


server.start(() => {})
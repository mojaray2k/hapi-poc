'use strict'

const Hapi = require('hapi')
const Joi = require('joi')
const server = new Hapi.Server()
server.connection({ port: 8001 })

server.route({
    method: ['POST', 'PUT'],
    path: `/user/{id?}`,
    config: {
        validate: {
            params: Joi.object({
                id: Joi.number()
            }),
            payload: Joi.object({
                id: Joi.number()
            })
        },
        handler: (request, reply) => {
            reply({
                params: request.params,
                query: request.query,
                payload: request.payload
            })
        }
    }    
})

server.start(() => console.log('Server started at: ', server.info.uri))

/**
 * When running the HTTP Pie command
 * http POST localhost:8001/user
 * The following was outputed 

    HTTP/1.1 200 OK
    Connection: keep-alive
    Date: Fri, 09 Mar 2018 03:42:49 GMT
    Transfer-Encoding: chunked
    cache-control: no-cache
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    vary: accept-encoding

    {
        "params": {},
        "payload": null,
        "query": {}
    }
*/

/**
 * When running the HTTP Pie command
 * http POST localhost:8001/user/123
 * The following was outputed 

    HTTP/1.1 200 OK
    Connection: keep-alive
    Date: Fri, 09 Mar 2018 03:46:40 GMT
    Transfer-Encoding: chunked
    cache-control: no-cache
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    vary: accept-encoding

    {
        "params": {
            "id": 123
        },
        "payload": null,
        "query": {}
    }
*/

/**
 * When running the HTTP Pie command
 * http POST localhost:8001/user/amen
 * The following was outputed 

    HTTP/1.1 400 Bad Request
    Connection: keep-alive
    Date: Fri, 09 Mar 2018 03:47:49 GMT
    Transfer-Encoding: chunked
    cache-control: no-cache
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    vary: accept-encoding

    {
        "error": "Bad Request",
        "message": "child \"id\" fails because [\"id\" must be a number]",
        "statusCode": 400,
        "validation": {
            "keys": [
                "id"
            ],
            "source": "params"
        }
    }
*/

/**
 * When running the HTTP Pie command
 * http POST localhost:8001/user/123 id=123
 * The following was outputed 

    HTTP/1.1 200 OK
    Connection: keep-alive
    Date: Fri, 09 Mar 2018 03:49:13 GMT
    Transfer-Encoding: chunked
    cache-control: no-cache
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    vary: accept-encoding

    {
        "params": {
            "id": 123
        },
        "payload": {
            "id": "123"
        },
        "query": {}
    }
*/

/**
 * When running the HTTP Pie command
 * http POST localhost:8001/user/123 id=123 email=myemail@mail.com
 * The following was outputed 

    HTTP/1.1 400 Bad Request
    Connection: keep-alive
    Date: Fri, 09 Mar 2018 03:51:36 GMT
    Transfer-Encoding: chunked
    cache-control: no-cache
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    vary: accept-encoding

    {
        "error": "Bad Request",
        "message": "\"email\" is not allowed",
        "statusCode": 400,
        "validation": {
            "keys": [
                "email"
            ],
            "source": "payload"
        }
    }
*/
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
                id: Joi.number(),
                email: Joi.string()
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
 * http POST localhost:8001/user/123 id=123 email=myemail@mail.com
 * The following was outputed 

    HTTP/1.1 200 OK
    Connection: keep-alive
    Date: Fri, 09 Mar 2018 03:54:17 GMT
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
            "email": "myemail@mail.com",
            "id": 123
        },
        "query": {}
    }
*/
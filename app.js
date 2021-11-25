// Servers - computers whose job is always to make sure if a resource is available 
// Browser - client computer which requests http messages to the server
// Could   - bunch of servers/computers connected together

//////////////////////////
// Request and Response //
//////////////////////////

// Request message - what the user is sending by using a browser/client - by seraching on web or by a web application
// General structure of request message
// Method (post, get, put, delete) url(/content) http-version --- in start line of request message
// GET /contact HTTP/1.1 - line 1 (we're mostly interested in method and url)
// Headers               - line 2 
// Body (optional)       - line 3
// Explanation is here: 
// Methods: (defualt is GET that browser performs)
// GET    - Read Data   - www.store.com/api/orders/    - get all orders
// POST   - Insert Data - www.store.com/api/orders/    - place an order (send data)
// GET    - Read Data   - www.store.com/api/orders/:id - get single order (path params)
// PUT    - Update Data - www.store.com/api/orders/:id - update specific order (params + send data)
// DELETE - Delete Data - www.store.com/api/orders/:id - delete order (path params)
// Headers - Contain information about our request message

// Response message - a proper server which responds to request messages
// General structure of response message
// http-version (mostly 1.1) status-code (signals what is result of the request e.g. 200:OK) status-text --- (first line of response message)
// HTTP/1.1 200 OK - line 1
// Headers         - line 2
// Body (optional) - line 3
// Explanation is here: 
// Status Codes: 200:OK, 100:Request Error, 404:Resource is bnot found, 400: Error, 401: Resource is unauthorized
// Headers - contain info about our response message
// e.g Content-type: text/html; charset:UTF-8
// or  Content-type: application/json; charset:utf-8
// from web application, we mostly get application/json data i.e. key-value pairs e.g. array etc


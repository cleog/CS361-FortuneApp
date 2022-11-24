// See https://create-react-app.dev/docs/proxying-api-requests-in-development/

const { createProxyMiddleware } = require('http-proxy-middleware');



// module.exports = function(app) {
//     app.use(proxy('/fortuneHistory', { target: 'http://localhost:3002/' }))
//     app.use(proxy('/*', { target: 'http://localhost:3000/' }))
//   }




module.exports = function (app) {

    // Victoria's microservice on port 3002
    // See https://github.com/vrpatterson/CS-361
    app.use(
        '/fortuneHistory',
        createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true,
        })
    );

    // My microservice on port 3000
    app.use(
        '/fortune',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );

    app.use(
        '/fortunes',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );

    app.use(
        '/randomFortune',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );


};

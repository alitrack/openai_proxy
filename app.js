const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 9000;


app.use('/', createProxyMiddleware({
  target: "https://www.bing.com",
  changeOrigin: true,
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

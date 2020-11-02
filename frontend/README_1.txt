프록시 
 proxyTable: {
      '/storys': {
        target: 'http://localhost:3000/storys',
        changeOrigin: true,
        pathRewrite: {
            '^/storys': ''
        }
      }

frontend\config\index.js

//"...:8080/movies"요청 시"...:3000/movies"으로
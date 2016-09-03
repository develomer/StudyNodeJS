/* http modülünü yükle */
var http = require('http');

/* Her çağrıda Merhaba Dünya! ifadesini döndüren sunucuyu oluştur */
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Merhaba Dünya!\n");
});

/* 8000 portunu dinle */
server.listen(8000);

/* Dinlediğin portu belirt */
console.log("HTTP sunucusu http://127.0.0.1:8000/ adresinde çalışıyor");

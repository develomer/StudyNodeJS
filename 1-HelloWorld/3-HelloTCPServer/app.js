/* net modülünü yükle */
var net = require('net');

/* Her çağrıda Merhaba Dünya! ifadesini döndüren sunucuyu oluştur */
var server = net.createServer(function (socket) {

  /* Her bağlantıda karşıla ve bağlantıyı kapat */
  console.log("Bağlandığınız adres : " + socket.remoteAddress);
  socket.end("Merhaba Dünya!\n");
});

/* 8000 portunu dinle */
server.listen(8000, "localhost");

/* Dinlediğin portu belirt */
console.log("TCP sunucusu 8000 portunu dinliyor.");

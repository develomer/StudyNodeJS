/* timeout süresi belirle ve bir mesaj göster */
setTimeout(function(){
  console.log("2 saniye geçti.");
}, 2000);

var time = 0;
var leftTime = 60;

/* aralık süresi belirle ve her aralıkta bir mesaj göster */
setInterval(function(){
  time+= 2;
  console.log("2 saniye daha geçti. Toplam " + time + " saniye geçti.");
}, 2000);

/* aralık süresi belirle ve her aralıkta bir mesaj göster.
belirlediğim saniyeden sonra mesaj vermeyi kes */
var timer = setInterval(function(){
  leftTime-= 2;

  console.log("2 saniye daha geçti. Toplam " + time +
   " saniye geçti. Bu mesaj 1 dakika geçtikten sonra duracaktır. Kalan süre : " +
    leftTime + " saniye");

  if(time >= 60)
  {
    /* aralığı sonlandır */
    clearInterval(timer);
  }
}, 2000);

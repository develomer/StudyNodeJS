function callBackFunction(func, n1, n2)
{
  func(n1,n2);
};

/* merhaba dünya yazan fonksiyon */
var helloWorld = function(){
  console.log("Merhaba Dünya!");
};

/* iki sayıyı toplayan fonksiyon */
var add = function(number1, number2){
  console.log(number1 + "+" + number2 + "=" +
  (number1 + number2))
};

/* fonskiyonları çağır */
callBackFunction(helloWorld);
callBackFunction(add, 1, 2);

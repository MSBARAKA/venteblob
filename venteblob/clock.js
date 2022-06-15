
// document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
// var date = new Date();
// var date = date.getDay() + "/"+date.getMonth() + "/"+date.getFullYear()
// + " "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// // var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// // var fullDate = date+' '+hours;

// // var time =date.getDay() + "/"+date.getMonth() + "/"+date.getFullYear()
// // + " "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// // console.log(date); 


function startTime() {
    var today = new Date();
    var d = today.getDay();
    var mth = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    "Local Time : "+ d + "/"+mth+"/"+ y +"   "+ h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
   
  startTime();

  // les deux codes n'affichent pas la date seulement l'heure locale revoir cette partie
  //appliquer corrections d'Alexis pour le css
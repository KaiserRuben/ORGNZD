console.log(navigator.onLine);
if(navigator.onLine){
    var weiterleitung = 'https://192.168.0.4:8000';
    window.setTimeout('window.location = weiterleitung',0);
}else{
  document.write('Bitte gehe online, um die App zu benutzen.');
}

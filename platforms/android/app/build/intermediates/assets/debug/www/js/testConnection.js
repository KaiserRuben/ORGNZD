console.log(navigator.onLine);
if(navigator.onLine){
    var weiterleitung = 'https://orgnzd.lennartvonwerder.de/';
    window.setTimeout('window.location = weiterleitung',0);
}else{
  document.write('Bitte gehe online, um die App zu benutzen.');
}

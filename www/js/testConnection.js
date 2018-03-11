console.log(navigator.onLine);
if(navigator.onLine){
    document.write('Please waite a second to get (to) ORGNZD.');
    var weiterleitung = 'https://orgnzd-new.herokuapp.com/';
    window.setTimeout('window.location = weiterleitung',0);
}else{
  document.write('Bitte gehe online, um die App zu benutzen.');
}

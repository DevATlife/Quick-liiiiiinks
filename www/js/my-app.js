// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  
    
     
/*-------------------------------*/    
document.addEventListener("deviceready", WhiteListAPI, false);
    
function WhiteListAPI(){
    
 $$('#contact-btn').on('touchend', function(){
     window.open('tel:7059887703', '_system');
 });   
    
 $$('#email-btn').on('touchend', function(){
     window.open('mailto:nasser.jeary@gamil.com?subject=Question Regarding the applaication', '_system');
 }); 
    
    
/*----------- Android -----------*/  
    
   $$('#geo-btn').on('touchend', function(){
     window.open('geo:0,0?q=48.42842, -123.36564(LABEL)?z=10', '_system');
 });  
    
    
    $$('#sms-btn').on('touchend', function(){
     window.open('sms:7059887703?body=write your message here', '_system');
 });   
    
    
    
 $$('#app-btn').on('touchend', function(){
     window.open('market://search?q=phonegap', '_system');
 });   
        
/*----------- ios -----------*/     
    $$('#geo-btn2').on('touchend', function(){
     window.open('maps://?q=48.42842, -123.36564?z=10', '_system');
 });   
    
     $$('#sms-btn2').on('touchend', function(){
     window.open('sms:7059887703?body=write your message here', '_system');
 });  
    
    
$$('#app-btn2').on('touchend', function(){
     window.open('itms-app://itunes.apple.com/ca/app/compressor/id424390742?mt=12', '_system');
 });     
      
}   
    
/*-------------------------------*/     
});


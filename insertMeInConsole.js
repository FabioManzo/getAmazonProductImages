var indice = 0;
var immagini = jQuery("#altImages .imageThumbnail img");
var numero_img = immagini.length;
var tempo_setinterval = 800;
var tempo_complessivo_setinterval = tempo_setinterval * (numero_img + 1);
var intervallo = setInterval(function(){ 
    let img = immagini[indice].click();

    indice++;
    if (indice == numero_img) {
        clearInterval(intervallo);
    }
    
}, tempo_setinterval);


setTimeout(function(){
   jQuery("#main-image-container").find("ul").find("li.image.item").find("img").each(function(){
        jQuery("body").prepend( jQuery(this).attr("src") + "<br>" );
    });
}, tempo_complessivo_setinterval);

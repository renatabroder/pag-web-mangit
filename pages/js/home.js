$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:false,
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

searchButton = (() =>{
    let campoVisivel = $('#search-field').css('display') == 'none' ? false : true;
    let valCampo = $('#search-field').val()

    if(!campoVisivel) $('#search-field').css('display', 'inline')
    else if(campoVisivel && ( valCampo == '')) $('#search-field').css('display', 'none')
    else if(valCampo != '') pesquisa();        
});

focusoutSearchButton = (() =>{
    if($('#search-field').val() == "") $('#search-field').css('display', 'none')
})

cliqueCategoria = ((tipo) => {
    $('.c').removeClass('categoria').addClass('categoria-peq');
    $('.l').removeClass('label-categoria').addClass('label-categoria-peq');

    $('.barra').css('display', 'flex');
    $('.container-conteudo').css('min-height', 'calc(100vh - 9rem)');

    $('.recomendados').css('display', 'block');

    $('.corpo').css('display', 'none');
    $('#'+tipo).css('display', 'flex');

})

pesquisa = (() => {
    console.log('pesquisa')
});
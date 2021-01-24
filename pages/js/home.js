$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
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

$(document).on('click', function (e) {
    if ($(e.target).closest(".menu-container").length === 0) {
        $('#menu-usuario').addClass('hide')
        $('.container-menu').css('display', 'none')
    }
});

home = (() => {
    $('.c').removeClass('categoria-peq').addClass('categoria');
    $('.l').removeClass('label-categoria-peq').addClass('label-categoria');

    $('.container-conteudo').css('min-height', 'calc(100vh - 4rem)');
    
    $('.recomendados').css('display', 'none');
    
    $('.barra-footer').css('display', 'none');
    $('.corpo').css('display', 'none');
})

abreMenu = (() => {
    let menuVisivel = $('.container-menu').css('display') == 'none' ? false : true;

    if(!menuVisivel){
        $('#menu-usuario').removeClass('hide')
        $('.container-menu').css('display', 'inline')
    }
    else{
        $('#menu-usuario').addClass('hide')
        $('.container-menu').css('display', 'none')
    } 
})

searchButton = (() =>{
    let campoVisivel = $('#search-field').css('max-width') == '0px' ? false : true;
    let valCampo = $('#search-field').val()

    if(!campoVisivel){
        $('#search-field').removeClass('hide');
        if($('.logo').css('font-size') == '36px') $('.logo-container').css('display', 'none')
    }
    else if(campoVisivel && ( valCampo == '')){
        $('#search-field').addClass('hide')
        if($('.logo').css('font-size') == '36px') $('.logo-container').css('display', 'block')
    }
    else if(valCampo != ''){
        pesquisa();
    } 
});

focusoutSearchButton = (() =>{
    if($('#search-field').val() == "") $('#search-field').addClass('hide')
})

cliqueCategoria = ((tipo) => {
    $('.c').removeClass('categoria').addClass('categoria-peq');
    $('.l').removeClass('label-categoria').addClass('label-categoria-peq');

    $('.barra-footer').css('display', 'flex');
    $('.container-conteudo').css('min-height', 'calc(100vh - 9rem)');

    $('.recomendados').css('display', 'block');

    $('.corpo').css('display', 'none');
    $('#'+tipo).css('display', 'flex');

})

pesquisa = (() => {
    console.log('pesquisa')
});

marcarFavorito = ((botao) =>{
    $(botao.children()[0]).css('display', 'none')
    $(botao.children()[1]).css('display', 'block')
})

desmarcarFavorito = ((botao) =>{
    $(botao.children()[0]).css('display', 'block')
    $(botao.children()[1]).css('display', 'none')
})
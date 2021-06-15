console.log("Ahoj");
$(document).ready(function () {
    let mesta = [];
    let unesco = [];
    let cityColor = $('#gruppe').attr('fill');
    let lastfill = $("svg").attr('fill'); 

    console.log(cityColor);

    fetch('../data/unesco.json')
    .then(response => {
       return response.json();
    })
    .then(json =>{
       unesco = json;
    })
    .catch(function(error){
       console.error('Chyba: \n', error);
    });

    $('#unesco').on('click', function(){
        $('#mapa ellipse').toggle(350);
    }) 

    fetch('../data/mesta.json')
     .then(response => {
        return response.json();
     })
     .then(json =>{
        mesta = json;
     })
     .catch(function(error){
        console.error('Chyba: \n', error);
     });

     $('#mesta').on('click', function(){
        $('#mapa rect').toggle(350);
    }) 

    

    $('#mapa ellipse, #mapa rect').on('click', function () {
        let id = $(this).attr('id');
        $('#mapa ellipse, #mapa rect').css({ 'fill': cityColor });
        $(this).css('fill', 'teal');
        let mesto = mesta.find(item => {return item.id == id});
        console.log(mesto);
        $('#infobox').html(`
        <div class = "row">
            <div class = "col-12">
                <h2 class = "text-center py-1">${mesto.city}</h2>
                <hr>
            </div>
        </div>
        <div class = "row">
            <div class = "col-8 pt-2">
                <p style = "font-size:1.5em;"><strong>Populace: ${mesto.peoples}</strong></p>
                <p class = "text-justify">${mesto.text}</p>
            </div>
            <div class = "col-4">
                <figure class = "text-center">
                    <img src = "../img/${mesto.sign}" class = "m-auto" style = "height:250px">
                    <figcaption class = "pt-1"><strong>Obrázek</strong></figcaption>
                </figure>
            </div>
        </div>
   

        `)
    })

    $("path").on('click', function () {
        if (lastfill == 'rgb(255, 255, 0)') { 
            $(this).css({ 'fill': 'black' }); 
            lastfill = "#7c7c7c"; 
           
        } else {
            $("path").css('fill', $("svg").attr('fill'));
            $(this).css({ 'fill': 'yellow' }); 
            lastfill = "rgb(255, 255, 0)";
            
        }
    });
    $("path").on('mouseover', function () { 
        lastfill = $(this).css('fill');
        if (lastfill == 'rgb(255, 255, 0)') { 
            $(this).css({ 'fill': 'goldenrod' }); 
        } else {
            $(this).css({ 'fill': '#303030' }); 
        }
    });
    $("path").on('mouseout', function () { 
        $(this).css({ 'fill': lastfill });
    });

    $('#mestaS').on('click', function(){
        $('#mapa ellipse, #mapa rect').toggle(350);
    })

    $('path').on
    
})

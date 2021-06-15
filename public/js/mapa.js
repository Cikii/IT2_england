console.log("Ahoj");
$(document).ready(function () {
    let mesta = [];
    let cityColor = $('#gruppe').attr('fill');
    let lastfill = $("svg").attr('fill'); 

    console.log(cityColor);

    fetch('../mapa/data/mesta.json')
     .then(response => {
        return response.json();
     })
     .then(json =>{
        mesta = json;
     })
     .catch(function(error){
        console.error('Chyba: \n', error);
     });

    $('#mapa ellipse, #mapa rect').on('click', function () {
        let id = $(this).attr('id');
        $('#mapa ellipse, #mapa rect').css({ 'fill': cityColor });
        $(this).css('fill', 'teal');
        let mesto = mesta.find(item => {return item.id == id});
        console.log(mesto);
        $('#infoBox').append(`


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

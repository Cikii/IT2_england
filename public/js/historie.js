
$(function () {
   $("h2").on("click", function () {
      $(this).parents(".row").next().toggle(1000);
   });
function eventsBlock(events){
     events.forEach((event) => {
      $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"> <a class="odkaz" href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
        </tr>`);
   });
 $(".event-detail").hide();
   $(".event-name i, .event-name a").on("mouseover", function () {
      $("#udalosti tr").removeClass("bg-secondary text-white");
      $(this).parents("tr").addClass("bg-secondary text-white");
      $(".event-detail").hide();
      $(this).parent().next().show(500);
   });
};

fetch('../data/events.json')
    .then(response => {
       console.log(response);
       return response.json()
    })
    .then(json => {
       console.log(json);
       eventsBlock(json);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });
 
  

function heroesBlock(heroes){
      heroes.forEach((hero) => {
      $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action">${hero.name}</li>`);
   });


   function fillPersonCard(person) {
      let hero = heroes.find(item => {
         return item.name === person
      });

      $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
      $(".card-title").text(hero.name);
      $(".card-text").text(hero.biography);
      $(".card-footer").html(`Odkaz: <a class="odkaz" href="${hero.online}">${hero.online}</a>`);
      $(".gallery").empty();

      for (let i = 0; i < hero.portraits.length; i++) {
         $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="../img/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
      }
   }
   fillPersonCard(heroes[0].name);
   
   $("#postavy li:first").addClass('active');
   


   $("#postavy li").on("click", function () {
      $("#postavy li").removeClass("active");
      $(this).addClass("active");

      let person = $(this).text();

      $("#portret").slideUp(500, function () {

         fillPersonCard(person);
      });

      $("#portret").slideDown(500);
   });

};

fetch('../data/heroes.json')
    .then(response => {
       console.log(response);
       return response.json()
    })
    .then(json => {
       console.log(json);
       heroesBlock(json);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });
});


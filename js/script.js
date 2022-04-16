

$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution:512,
        dropRadius: 15

    });
    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function(bar){
        let percentage= bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        // console.log(percentage);
    })

// Slider of Images

var $wrapper =$('.portfolio-wraper');

// Isotope

$wrapper.isotope({
    filter: '*',
    layoutMode: 'masonry',
    animationOptions :{
        duration: 750,
        easing: 'linear'

    }
});

let links = document.querySelectorAll('.tabs a');

links.forEach(link =>{
    let selector = link.dataset.filter;
    // console.log(selector);
    link.addEventListener('click', function(e){
        e.preventDefault();

        $wrapper.isotope({
            filter: selector,
            layoutMode: 'masonry',
            animationOptions :{
                duration: 750,
                easing: 'linear'
        
            }
        });

        links.forEach(link =>{
            link.classList.remove('active');
        })
        e.target.classList.add('active');

    });
     

})


//   Magnify 
$('.magnify').magnificPopup({
    type: 'image',
    gallery: {
    enabled: true
    },
    zoom: {
        enable:true
    }
});

// slider
$('.slider').slick({

});


});









// counter

// const counters = document.querySelectorAll('.counter');
// console.log(counters);

// function runCounter(){
//      counters.forEach(counter =>{
//          counter.innerText = 0;
//          let target = +counter.dataset.count;
//          let step = target / 100;

//          let countIt = function(){
//              let displayedCount = +counter.innerText;
//              if (displayedCount < target) {
//                  counter.innerText = Math.ceil(displayedCount + step);
//                  setTimeout(countIt , 1);
//                 //  console.log(displayedCount);
             
//              }else {
//                  counter.innerText = target;
//              }
//          }
//              countIt();
//      })
// }
// runCounter();
// });
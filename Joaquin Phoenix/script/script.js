document.addEventListener('DOMContentLoaded', function() {

    const parallax = document.querySelector('.title');
    const layer = document.querySelector('.title_layer');
    
    if(parallax) {
        parallax.addEventListener('mousemove', function(e) {

            let coordX = e.clientX;
            let coordY = e.clientY;
            
            let speed = layer.getAttribute('data-speed');
            
            layer.style.cssText = `transform: translate(${coordX * speed / 500}px, ${coordY * speed / 500}px)`;
        })
    }

    const burgerBtn = document.querySelector('.burgerBtn');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    
    burgerBtn.addEventListener('click', function(e) {
        burgerBtn.classList.toggle('active');
        if(burgerBtn.classList.contains('active')){
            header.classList.add('active');
            // body.style.overflowY = "hidden";
        }else{
            header.classList.remove('active');
            // body.style.overflowY = "auto";
        }
    })
    header.addEventListener('click', function(e){
        if(e.target === header){
            header.classList.remove('active');
            burgerBtn.classList.remove('active');
            // body.style.overflowY = "auto";
        }
    })

})
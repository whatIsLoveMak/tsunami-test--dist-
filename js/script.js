$(document).ready(function(){
    
    $('.startup-slider').slick({
        arrows: false,
        infinite: false,
        centerMode: true,
        initialSlide: 1,
        variableWidth:true,
        centerPadding: '20px',
    })
    
});
let footerButton = document.querySelector('.footer .input-group-text');
let footerinput = document.querySelector('.input-group .form-control');
let placeholder = footerinput.getAttribute('placeholder');
console.log (placeholder)
footerButton.addEventListener('mouseover', function(){
    footerinput.style.backgroundColor = 'white';
    footerinput.classList.add('placeholdercolor');
    
})
footerButton.addEventListener('mouseout', function(){
    footerinput.style.backgroundColor = 'transparent';
    footerinput.classList.remove('placeholdercolor');
    
})
footerinput.addEventListener('mouseover',function(){
    footerinput.style.backgroundColor = 'white';
    footerinput.classList.add('placeholdercolor');
})
footerinput.addEventListener('mouseout',function(){
    footerinput.style.backgroundColor = 'transparent';
    footerinput.classList.remove('placeholdercolor');
})
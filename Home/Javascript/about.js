//When .card-1 is selected .card-2 & .card-3 dissapears
document.querySelector('.card-1').addEventListener('mouseover', function(){
    document.querySelector('.card-2').classList.add('card-hover');
    document.querySelector('.card-3').classList.add('card-hover');
    document.querySelector('.card-1-hover').classList.add('card-1-hover-translate');
});

//When .card-1 is not selected .card-2 & .card-3 are shown
document.querySelector('.card-1').addEventListener('mouseout', function(){
    document.querySelector('.card-2').classList.remove('card-hover');
    document.querySelector('.card-3').classList.remove('card-hover');
    document.querySelector('.card-1-hover').classList.remove('card-1-hover-translate');
});

//When .card-2 is selected .card-1 & .card-3 dissapears
document.querySelector('.card-2').addEventListener('mouseover', function(){
    document.querySelector('.card-1').classList.add('card-hover');
    document.querySelector('.card-3').classList.add('card-hover');
    document.querySelector('.card-2-hover-1').classList.add('card-2-hover-1-translate');
    document.querySelector('.card-2-hover-2').classList.add('card-2-hover-2-translate');
    
});

//When .card-2 is not selected .card-1 & .card-3 are shown
document.querySelector('.card-2').addEventListener('mouseout', function(){
    document.querySelector('.card-1').classList.remove('card-hover');
    document.querySelector('.card-3').classList.remove('card-hover');
    document.querySelector('.card-2-hover-1').classList.remove('card-2-hover-1-translate');
    document.querySelector('.card-2-hover-2').classList.remove('card-2-hover-2-translate');
});


//When .card-3 is selected .card-2 & .card-1 dissapears
document.querySelector('.card-3').addEventListener('mouseover', function(){
    document.querySelector('.card-2').classList.add('card-hover');
    document.querySelector('.card-1').classList.add('card-hover');
    document.querySelector('.card-3-hover').classList.add('card-3-hover-translate');
});

//When .card-3 is not selected .card-2 & .card-1 are shown
document.querySelector('.card-3').addEventListener('mouseout', function(){
    document.querySelector('.card-2').classList.remove('card-hover');
    document.querySelector('.card-1').classList.remove('card-hover');
    document.querySelector('.card-3-hover').classList.remove('card-3-hover-translate');
});




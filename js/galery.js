let imagens= document.querySelectorAll('.small_img-galery');
let modal = document.querySelector('.modal-galery');
let modalImg = document.querySelector('#modal_img-galery');
let btClose = document.querySelector('#bt_close-galery');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active-galery');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active-galery');
});
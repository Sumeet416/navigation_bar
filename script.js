 const hamburger = document.querySelector('.hamburger');
 const ul = document.querySelector('ul');
 const bag = document.querySelector('.bag');
 const search = document.querySelector('.search');
 const logo = document.querySelector('.logo');
 const p = document.querySelector('p');
 const foot = document.querySelector('.footer');

 hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('ham_active');

    let ham_cross = hamburger.firstElementChild;
    if(ul.classList.contains('ham_active')){
        ham_cross.classList.replace('fa-bars','fa-xmark');
    }
    else{
        ham_cross.classList.replace('fa-xmark','fa-bars');
    }

    if(ul.classList.contains('ham_active')){
        bag.classList.add('bag_hide');
    }
    else{
        bag.classList.remove('bag_hide');
    }

    if(ul.classList.contains('ham_active')){
        search.classList.add('search_hide');
    }
    else{
        search.classList.remove('search_hide');
    }

    if(ul.classList.contains('ham_active')){
        logo.classList.add('logo_hide');
    }
    else{
        logo.classList.remove('logo_hide');
    }

    if(ul.classList.contains('ham_active')){
        p.classList.add('p_hide');
    }
    else{
        p.classList.remove('p_hide');
    }

    if(ul.classList.contains('ham_active')){
        foot.classList.add('foot_adjust');
    }else{
        foot.classList.remove('foot_adjust');
    }

 });
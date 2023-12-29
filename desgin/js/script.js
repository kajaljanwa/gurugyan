let profile = document.queryselector('.header .flex .profile');


document.queryselector('#user-btn').onclick = () =>{
   profile.classlist.toggle('active');
   searchform.classlist.remove('active');
}

let searchform = document.queryselector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   searchform.classlist.toggle('active');
   profile.classlist.remove('active');
}

let slidebar = document.queryselector('.slide.bar');

document.querySelector('#search-btn').onclick = () =>{
   slidebar.classlist.toggle('active');
   profile.classlist.remove('active');
}

window.onscroll = () =>{
   profile.classlist.remove('active');
   searchform.classlist.remove('active');
}


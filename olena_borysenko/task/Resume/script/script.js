var menuBtn = document.getElementById('btnMenu');
var sideBar = document.getElementById('sidebar');
var closeBtn = document.getElementById('btnClose');

menuBtn.addEventListener('click', function(){
    if(window.innerWidth  < 1200) {
        console.log("padding", window.innerWidth  );
    }else {
        console.log("LL", window.innerWidth );
    }
    sideBar.style.left = '0';
});

closeBtn.addEventListener('click', function(){
    sideBar.style.left = '-275px';
});



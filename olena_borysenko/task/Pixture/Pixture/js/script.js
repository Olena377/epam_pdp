var menuBtn = document.getElementById('burgerBtn');
var sideBar = document.getElementById('sidebar');
var flag = true;
menuBtn.addEventListener('click', function () {
    if(flag) {
        sideBar.style.left = '0';
        flag = false;
    }else{
        sideBar.style.left = '-300px';
        flag = true;
    }

});
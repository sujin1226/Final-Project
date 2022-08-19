// 사이드바
let Btn = document.querySelector(".Sidebar_btn"); // 사이드바 버튼
let common_sidebar = document.querySelector(".common_sidebar");// 사이드바 섹션
// 스크롤버튼
let TopBtn = document.querySelector(".toTop"); // 상단 스크롤 이동 버튼
// 마이페이지
let User = document.querySelector(".user"); // 헤더 유저정보 버튼
let user_dropdown = document.querySelector(".user_dropdown"); // 헤더 마이페이지 드롭다운


let flag = false; // 토글 스위치 사이드바용
let flag2 = false; // 토글 스위치 유저 드롭다운용

// 사이드바 버튼 이벤트
Btn.addEventListener('click',function(){
    if(flag==false){
        Btn.style.left="200px";
        common_sidebar.style.left="0px";

        transition(Btn);
        transition(common_sidebar);
        flag =!flag;

    }else if(flag==true){
        Btn.style.left="0px";
        common_sidebar.style.left="-200px";

        transition(Btn);
        transition(common_sidebar);
        flag =!flag;
    }
    
})

// 마이페이지 드롭다운
User.addEventListener('click',function(){
    if(flag2==false){
        user_dropdown.style.display="block";
        flag2 =!flag2;

    }else if(flag2==true){
        user_dropdown.style.display="none";
        flag2 =!flag2;
    }
})

// 상단 스크롤 이동 버튼
TopBtn.addEventListener('click',function(){
    window.scrollTo({ top: 0, behavior: "smooth" });  
})


// 트랜지션 함수 * 22.08.18 - 양광모
function transition(let){
    let.style.transition="1s";
}


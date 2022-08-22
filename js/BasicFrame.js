// 사이드바
let Btn = document.querySelector(".Sidebar_btn"); // 사이드바 버튼 클래스
let sideIcon = document.querySelector(".uil-align-justify"); // 사이드바 아이콘 변경
let sideText = document.querySelector(".sidebar_menu").children; // 사이드바 아이콘 변경
let sidebar_menu1 = document.querySelector(".sidebar_menu1").children; // 사이드바 아이콘 변경



let common_sidebar = document.querySelector(".common_sidebar");// 사이드바 섹션
let section = document.querySelector(".main");// 메인섹션
let header_logo = document.querySelector(".logo");// 헤더 로고 박스
let header_nav = document.querySelector(".common_header");// 그 외 네비바

console.log(sideText.length);
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
        header_logo.children[1].style.display="block";
        common_sidebar.style.width="13%";
        common_sidebar.style.opacity="1";
        section.style.width="95%";

        header_logo.style.width="18%";

        
        for(let i=0; i<sideText.length; i++){
            sideText[i].style.display="block";
        }

        sideIcon.className='uil-times';

        transition(header_logo);
        transition(sideIcon);
        transition(Btn);
        transition(common_sidebar);
        flag =!flag;

    }else if(flag==true){
        header_logo.children[1].style.display="none";
        common_sidebar.style.width="0%";
        common_sidebar.style.opacity="1";
        section.style.width="95%";

        header_logo.style.width="5%";

        for(let i=0; i<sideText.length; i++){
            sideText[i].style.display="none";
        }
        
        sideIcon.className='uil-align-justify';
        transition(header_logo);
        transition(sideIcon);
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




// 메뉴 텍스트 마우스 호버기능

sideFun('mouseover','rgb(238,43,42)')
sideFun('mouseout',"var(--main-black-color)")

// ===================함수 모음===================

// 트랜지션 함수 * 22.08.18 - 양광모

function transition(let){
    let.style.transition=".5s";
}


// 사이드바 이벤트 함수
// 22-08-20 HIKARI
function sideFun(event,color){
    for(let i=0; i<sideText.length; i++){
        sideText[i].addEventListener(event,function(){
            sidebar_menu1[i].style.background=color;//아이콘
            sideText[i].style.background=color;//텍스트
            transition(sidebar_menu1[i]);
            transition(sideText[i]);
    })
    }
}
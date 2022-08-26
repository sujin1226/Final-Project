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



/**
 * 마이페이지 클릭시 드롭다운
 * 22.08.22 HIKARI
 * 메인페이지 틀 변경으로 코드 수정이 필요함
 */
User.addEventListener('click',function(){
    if(flag2==false){
        user_dropdown.style.display="block";
        flag2 =!flag2;

    }else if(flag2==true){
        user_dropdown.style.display="none";
        flag2 =!flag2;
    }
})

/**
 * 아이콘 클릭시 페이지 상단으로 이동
 * 22.08.22 HIKARI
 * 메인페이지 틀 변경으로 코드 수정이 필요함
 */
TopBtn.addEventListener('click',function(){
    window.scrollTo({ top: 0, behavior: "smooth" });  
})


// ===================함수 모음===================


// * 22-08-23 HIKARI 트랜지션 함수
/**
 * 효과줄 변수입력 및 시간 설정
 * @example transition(Btn,"1s")
 */
function transition(let,second){
    let.style.transition=second;
}

// * 22-08-23 HIKARI 백그라운드 컬러 함수
/**
 * 효과줄 변수 및 백그라운드컬러 설정
 * @example backColor(Btn,"red")
 */
function backColor(let,color){
    let.style.background=color;
}

// * 22-08-23 HIKARI 컬러 함수
/**
 * 효과줄 변수 및 컬러 설정
 * @example backColor(Btn,"red")
 */
function textColor(let,textColor){
    let.style.color=textColor;
}

// * 22-08-23 HIKARI 디스플레이 함수
/**
 * 효과줄 변수 및 컬러 설정
 * @example display(sideBar,"none or block")
 */
 function display(let,state){
    let.style.display=state;
}


// * 22-08-23 HIKARI 트랜지션 함수
// * 수정 예정
/**
 * ddddddddd
 * @param {*} event  dsas
 * @param {*} color  sdsda
 * @todo 오늘 이거해야함
 */
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

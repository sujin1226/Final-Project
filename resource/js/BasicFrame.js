
// header center 카테고리 호버시 함수
let header_text = document.querySelectorAll(".header_menu>li>a");
textHover(header_text);

// header 마이페이지 클릭시 함수
let myPage = document.querySelector(".user>div"); //마이페이지 동그라미
let myPage_drop = document.querySelector(".user>ul"); //마이페이지 동그라미 드롭다운 요소

// header 알람 클릭시 함수
let myAlarm = document.querySelector(".alarm>div"); //알람 동그라미
let myAlarm_drop = document.querySelector(".alarm>ul"); //알람 동그라미 드롭다운 요소

// 플래그 스위치 모읍
let flagMyPage = false;  //마이페이지 동그라미 스위치
let flagMyAlarm = false;  //알람 동그라미 스위치



// ! ==============구현부========================
dropDown(myPage,myPage_drop,flagMyPage); // 마이페이지 드롭다운 이벤트
dropDown(myAlarm,myAlarm_drop,flagMyAlarm); // 알람 드롭다운 이벤트







// header 마이페이지 내의 li태그 호버시 색깔변경
let myPage_liTag = document.querySelectorAll(".user>ul>li"); //마이페이지 동그라미 드롭다운 요소
textHover(myPage_liTag);


// ! =====================함수존=======================


// * 22-09-02 HIKARI 텍스트호버 함수
/**
 * 해당 함수를 적용하려면 querySelectorAll로 li 요소를 가져와야함
 * 호버시 진행될 이벤트를 (param)안에 넣어주면 알아서 적용됨
 * @example textHover(param)
 */
function textHover(param){
    for(let i=0; i<param.length; i++){
        param[i].addEventListener('mouseover',function(){
            textColor(param[i],"rgba(248,58,37,1)");
            transition(param[i],".5s");
            console.log("ok");
    
            param[i].addEventListener('mouseout',function(){
            textColor(param[i],"rgba(25, 25, 25, 1)");
            transition(param[i],"1s");
            console.log("ok");
            })
        })
    }
}



// * 22-09-02 HIKARI 드롭다운 함수
/**
 * 이벤트 발생시? 어떤 요소가? 어떤 스위치가?
 * @example dropDown(myAlarm,myAlarm_drop,flagMyAlarm);
 */
function dropDown(param,ele,flag){
    param.addEventListener('click',function(){
        if(flag == false){
            //본인 코드 알아서 들감
            display(ele,"block");
            flag =! flag;
        }
        else if(flag == true){
            //본인 코드 알아서 들감
            display(ele,"none");
            flag =! flag;
        }
    })
}



// * 22-08-23 HIKARI 컬러 함수
/**
 * 효과줄 변수 및 컬러 설정
 * @example backColor(Btn,"red")
 */
 function textColor(paramxt,teColor){
    param.style.color=textColor;
}

// * 22-08-23 HIKARI 트랜지션 함수
/**
 * 효과줄 변수입력 및 시간 설정
 * @example transition(Btn,"1s")
 */
 function transition(param,second){
    param.style.transition=second;
    
}

// * 22-08-23 HIKARI 디스플레이 함수
/**
 * 효과줄 변수 및 컬러 설정
 * @example display(sideBar,"none or block")
 */
 function display(param,state){
    param.style.display=state;
}
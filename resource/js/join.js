// ========== 정규표현식 ========== //
// 아이디 : 숫자와 영문(대문자or소문자) 7자~15자이내
const ID_CHECK = /^[A-Za-z0-9]{7,15}$/; 
// 비밀번호 : 숫자와 특수문자 각 1개 이상, 영문은 2개 이상 사용하여 9자~20자이내
const PW_CHECK = /^(?=.*\d{1,20})(?=.*[~`!@#$%\^&*()-+=]{1,20})(?=.*[a-zA-Z]{2,20}).{9,20}$/;
// 이메일 : 처음에 숫자 또는 영문자 한개는 있어야하며 
//          특수 문자나 영문자, 숫자의 조합이 0회 이상 반복 @ 
const EMAIL_CHECK = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
// 이름 유효성 검사
const NAME_CHECK = /^[가-힣]{2,15}$/;

// ========== 회원가입 정보입력란 변수선언 ========== //
let hotID = document.getElementById('hotID');
let hotPW = document.getElementById('hotPW');
let hotPW_Check = document.getElementById('hotPW_Check');
let hotEmail = document.getElementById('hotEmail');
let hotName = document.getElementById('hotName');
let hotNick = document.getElementById('hotNick');

// ========== 조건에 맞지 않을 경우 innerHTML 표시영역 변수선언 ========== //
let hotID_alert = document.getElementById('hotID_alert');
let hotPW_alert = document.getElementById('hotPW_alert');
let hotPWCK_alert = document.getElementById('hotPWCK_alert');
let hotEM_alert = document.getElementById('hotEM_alert');
let hotNM_alert = document.getElementById('hotNM_alert');
let hotNK_alert = document.getElementById('hotNK_alert');

let joinBtn = document.getElementById('join_submit');



function checkNull(){

   if (hotID.value==='') { // 아이디값이 없을 경우
        hotID_alert.innerHTML = '<font color=red>&nbsp 아이디를 입력해주세요.</font>';
        hotID.focus(); // 아이디 입력란 포커스 맞춤
        return false;
    }   
    if (!ID_CHECK.test(hotID.value)) { // 정규표현식 조건과 맞지 않을 경우
        hotID_alert.innerHTML = '<font color=red>&nbsp 영문 및 숫자 조합 7~15자 이내로 입력해주세요.</font>';
        hotID.focus(); // 아이디 입력란 포커스 맞춤
        return false;
    }
    if (hotID.value.length>=1) { 
        hotID_alert.innerHTML = '';
    }   // 아이디값이 한개 이상일 경우 innerHTML 공란. 설정안하면 이전꺼 표시됨

    if (hotPW.value==='') {
        hotPW_alert.innerHTML = '<font color=red>&nbsp 비밀번호를 입력해주세요.</font>';
        hotPW.focus(); // 비밀번호 입력란 포커스 맞춤
        return false;
    }
    if (!PW_CHECK.test(hotPW.value)) {
        hotPW_alert.innerHTML = '<font color=red>&nbsp 영문, 특수문자, 숫자 조합 9~20자 이내로 입력해주세요.</font>';
        hotPW.focus(); // 비밀번호 입력란 포커스 맞춤
        return false;
    }
    if (hotPW.value.length>=1) {
        hotPW_alert.innerHTML = '';
    }
    if (hotID.value==hotPW.value) { // 아이디와 비밀번호가 동일한지 체크
        hotPW_alert.innerHTML = '<font color=red>&nbsp 비밀번호는 아이디와 동일할 수 없습니다.</font>';
        hotPW.focus(); // 비밀번호 입력란 포커스 맞춤
        return false;
    }
    if (hotPW_Check.value!==hotPW.value) { // 입력한 비밀번호 재확인 영역
        hotPWCK_alert.innerHTML = '<font color=red>&nbsp 입력하신 비밀번호와 일치하지 않습니다. 다시 입력해주세요.</font>';
        hotPW_Check.focus(); // 비밀번호 입력란 포커스 맞춤
        return false;
    }
    if (hotPW_Check.value.length>=1) {
        hotPWCK_alert.innerHTML = '';
    }

    if (hotEmail.value==='') {
        hotEM_alert.innerHTML = '<font color=red>&nbsp 이메일을 입력해주세요.</font>';
        hotEmail.focus();
        return false;
    }
    if (!EMAIL_CHECK.test(hotEmail.value)) {
        hotEM_alert.innerHTML = '<font color=red>&nbsp 올바른 이메일 형식이 아닙니다.</font>';
        hotEmail.focus();
        return false;
    }
    if (hotEmail.value.length>=1) {
        hotEM_alert.innerHTML = '';
    }

    if (hotName.value==='') {
        hotNM_alert.innerHTML = '<font color=red>&nbsp 이름을 입력해주세요.</font>';
        hotName.focus();
        return false;
    }
    if (!NAME_CHECK.test(hotName.value)) {
        hotNM_alert.innerHTML = '<font color=red>&nbsp 한글만 입력해주세요.</font>';
        hotName.focus();
        return false;
    }
    if (hotName.value.length>=1) {
        hotNM_alert.innerHTML = '';
    }
    // if (checkNull() == true) {
    //     location.href = "/login.html"; 
    // }
    // 로그인페이지 연결안됨 추후 수정에정
}   
    

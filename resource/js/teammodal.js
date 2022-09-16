
// ========================팀정보 모달========================

const teamname = document.querySelectorAll('.teamtitle');
const modaldiv = document.querySelector('.modal-div');
const teammodaldiv = document.getElementById('teammodal-div');
const xicon = document.getElementById('xicon');
const teambtn = document.querySelectorAll('.join');
const checked = document.querySelector('#checked');

//팀이름 누르면 모달창 키기
for(let i=0; i<teamname.length; i++){
    teamname[i].addEventListener('click', function(){
        modaldiv.style.display = 'flex';
        xicon.style.display = 'block';
    })
}

//팀정보보기 버튼 누르면 모달창 키기
for(let i=0; i<teambtn.length; i++){
    teambtn[i].addEventListener('click', function(){
        modaldiv.style.display = 'flex';
        xicon.style.display = 'block';
    })
}


// 모달창 끄기
xicon.addEventListener('click', function(){
    modaldiv.style.display = 'none';
    xicon.style.display = 'none';
})

//모달창 배경 눌러도 꺼질 수 있도록
modaldiv.addEventListener('click', function(e){    
    if(e.target.className == 'modal-div'){
        modaldiv.style.display = 'none';
        xicon.style.display = 'none';
    }
})


// ========================팀만들기 모달========================

const teammakebtn = document.querySelectorAll('#teammakebtn');
const modaldiv2 = document.querySelector('.modal2-div');
const xicon2 = document.querySelector('#xicon2');


//팀만들기버튼 누르면 모달창 키기
for(let i=0; i<teammakebtn.length; i++){
    teammakebtn[i].addEventListener('click', function(){
        modaldiv2.style.display = 'flex';
        xicon2.style.display = 'block';
    })
}

// 모달창 끄기
xicon2.addEventListener('click', function(){
    modaldiv2.style.display = 'none';
    xicon2.style.display = 'none';
})

//모달창 배경 눌러도 꺼질 수 있도록
modaldiv2.addEventListener('click', function(e){    
    console.log(e.target);
    if(e.target.className == 'modal2-div'){
        modaldiv2.style.display = 'none';
        xicon2.style.display = 'none';
    }
})

const teamjoinbtn = document.querySelector('.teamjoin-btn');
const teamsecssionbtn = document.querySelector('.teamsecession-btn');

teamjoinbtn.addEventListener('click', function(){
    alert('__팀에 가입하시겠습니까?');
})

teamsecssionbtn.addEventListener('click', function(){
    alert('__팀을 탈퇴하시겠습니까?');
})
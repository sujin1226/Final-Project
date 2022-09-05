const teamname = document.querySelectorAll('.teamtitle');
const modaldiv = document.querySelector('.modal-div');
const teammodaldiv = document.getElementById('teammodal-div');
const xicon = document.getElementById('xicon');

//모달창 키기
for(let i=0; i<teamname.length; i++){
    teamname[i].addEventListener('click', function(){
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
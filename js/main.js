window.onload = function() {
    // 상단의 마이페이지 버튼과 리스트를 변수에 저장
    const mypageBt = document.getElementById('mypageBt');
    const mypageList = document.getElementById('mypageList');
    // 마이페이지 버튼에 마우스를 올렸을 때 리스트를 보여줌
    mypageBt.onmouseenter = function() {
        mypageList.style.display = 'block';
    };
    // 마이페이지 버튼에서 마우스를 뗐을 때 리스트를 숨김
    mypageBt.onmouseleave = function() {
        mypageList.style.display = 'none';
    };
};

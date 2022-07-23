'use strict';
// DOM
const instakilogramArea = document.querySelector('.instakilogram-area');
const instakilogramBox = document.querySelector('.instakilogram-box')
const instakilogramLoginBox = document.querySelector('.instakilogram-login-box')
const instakilogramLoginForm = document.querySelector('.instakilogram-login-form');
const instakilogramIdInput = document.querySelector('.instakilogram-id-input');
const instakilogramPasswordInput = document.querySelector('.instakilogram-password-input');
const instakilogramLoginButton = document.querySelector('.instakilogram-login-button');
const loginErrorText = document.querySelector('.login-error-text');
const savedId = document.querySelector('.saved-id');

const instaContents = document.querySelector('.insta-contents')
const hartButton = document.querySelectorAll('.hart-button');
const commentButton = document.querySelector('.comment-button');
const telegramButton = document.querySelector('.telegram-button');
const bookmarkButton = document.querySelector('.bookmark-button');
const detailViewText = document.querySelector('.detail-view-text');
const instaContentsText = document.querySelector('.insta-contents-text');
const likeCount = document.querySelector('.like-count');
const instaCommentArea = document.querySelector('.insta-comment-area');
const instaComment = document.querySelector('.insta-comment')
const instaContentsCommentForm = document.querySelector('.insta-contents__comment-form'); // 댓글입력 form
const instaContentsCommentInput = document.querySelector('.insta-contents__comment-input'); // 댓글입력 input

// setting
const LOGIN_ID = 'kingGodEmperorWebsteak';
const LOGIN_PASSWORD = 'I want to get a job.';


let INSTA_LIKE = 30;
// variables
// functions
function handleInstakilogramArea() {
  toggleDisplay(contentsArea, 'flex')
  toggleDisplay(instakilogramArea, 'flex')
}
function showSavedId() { // 저장된 아이디 비밀번호를 화면에 보여줌
  toggleDisplay(savedId, 'block')
}
function hideSavedId() { // 저장된 아이디 비밀번호를 화면에서 숨김
  toggleDisplay(savedId, 'none')
}
function startFocusOut() { // focusout이 되면 저장된 아이디창 숨김
  return instakilogramIdInput.addEventListener('focusout', hideSavedId);
}
function stopFocusOut() { // FocusOut 이벤트를 중지시켜 아이디 비밀번호 블럭을 클릭할 수 있게 만듦
  instakilogramIdInput.removeEventListener('focusout', hideSavedId);
}
function printIdAndPassword() { // 아이디 비밀번호 칸에 저장된 아이디 비밀번호를 입력한다.
  instakilogramIdInput.value = LOGIN_ID;
  instakilogramPasswordInput.value = LOGIN_PASSWORD;
  toggleDisplay(savedId, 'none') // 저장된 아이디 비밀번호 디스플플레이 숨김
  checkActivatingButton() // 로그인버튼 활성화여부 체크
}
function checkActivatingButton() { // id가 5글자 이상, password가 8글자 이상
  if (instakilogramIdInput.value.length >= 5 && instakilogramPasswordInput.value.length >= 8) {
    activatingButton(); // 로그인버튼 활성화
  } else {
    unActivatingButton() // 로그인버튼 비활성화
  };
}
function activatingButton() {
  instakilogramLoginButton.style.background = 'rgba(0, 149, 246, 1)' // 로그인버튼 색깔을 활성화 색깔로
  return instakilogramLoginForm.addEventListener('submit', checkLoginInfo) // submit 이벤트가 발생하면 로그인정보를 체크한다.
}
function unActivatingButton() {
  instakilogramLoginButton.style.background = 'rgba(0, 149, 246, 0.3)' // 로그인버튼 색깔을 비활성화 색깔로
  hideLoginErrorText() // 로그인 오류 텍스트 숨김
  return instakilogramLoginForm.removeEventListener('submit', checkLoginInfo)
}
function checkLoginInfo(e) {
  e.preventDefault();
  if (instakilogramIdInput.value === LOGIN_ID && instakilogramPasswordInput.value === LOGIN_PASSWORD) { // 아이디와 비밀번호가 일치한다면
    login()
  } else {
    showLoginErrorText() // 로그인 오류 텍스트 출력
  }
}
function showLoginErrorText() { // 로그인 오류 텍스트 출력
  toggleDisplay(loginErrorText, 'block');
}
function hideLoginErrorText() { // 로그인 오류 텍스트 감추기
  toggleDisplay(loginErrorText, 'none');
}
function eventDefault(e) {
  e.preventDefault();
}
function login() {
  toggleDisplay(instakilogramLoginBox, 'none') // 로그인박스 숨기기
  toggleDisplay(instaContents, 'flex') // 인스타 컨텐츠 박스 노출
}

function handleButton(e) { // 좋아요, 댓글, 북마크 버튼 이벤트
  e.target.classList.toggle('fa-regular')
  e.target.classList.toggle('fa-solid')
  checkLikeCount(e) // 좋아요 숫자 컨트롤
}
function checkLikeCount(e) { // 버튼 아이콘에 특정 클레스명이 있으면 좋아요 숫자를 더하거나 빼줌
  if (e.target.classList.contains('comment-icon') || e.target.classList.contains('bookmark-button')) { // 타겟이 댓글에 있는 아이콘이거나 북마크 아이콘이라면 return만 함
    return;
  } else {
    e.target.classList.contains('fa-regular') ? INSTA_LIKE -= 1 : INSTA_LIKE += 1;
    likeCount.innerHTML = `${INSTA_LIKE}`;
  }
}
function onDetailView() {
  toggleDisplay(detailViewText, 'none') // 더보기 텍스트 숨김
  toggleDisplay(instaContentsText, 'block') // display: -webkit-box 상태를 block로 바꿔줌
}
// comment input 의 text값 삭제
function submitInstaComment(e) {
  e.preventDefault()
  if (instaContentsCommentInput.value === '') { // 코멘트 입력창을 빈값으로 submit 하려고 하면 return함
    return;
  } else {
    instaCommentArea.innerHTML += `<div class="insta-comment">
<span class="insta-comment-text"><b>donghyun</b> ${instaContentsCommentInput.value}</span>
<i class="fa-regular fa-heart hart-button comment-icon"></i>
</div>`; // 댓글창에 입력한 text를 html요소로 만들어 댓글영역에 추가해줌
    instaContentsCommentInput.value = ''; // 댓글입력창 text값 삭제
    makeHartButtonTrigger() // 새로 만들어진 댓글에 좋아요버튼 기능 추가
    instaContents.scrollTo({ top: instaContents.scrollHeight, behavior: "smooth" }); // 스크롤을 내려준다
  }
}
function makeHartButtonTrigger() { // 좋아요버튼 기능 추가
  const hartButton = document.querySelectorAll('.hart-button');
  hartButton.forEach(target => { target.addEventListener('click', handleButton) })
}

// event handling
instakilogramBox.addEventListener('click', handleInstakilogramArea) // 인스타킬로그램 버튼 클릭하면 화면에 로그인페이지 나타남
instakilogramLoginForm.addEventListener('keyup', checkActivatingButton) // 로그인 버튼 활성화 여부를 점검함
instakilogramIdInput.addEventListener('focus', showSavedId); // 저장된 아이디 비밀번호를 화면에 보여줌
instakilogramIdInput.addEventListener('focusout', hideSavedId); // 저장된 아이디 비밀번호를 화면에서 숨김
savedId.addEventListener('mouseover', stopFocusOut); // FocusOut 이벤트를 중지시켜 아이디 비밀번호 블럭을 클릭할 수 있게 만듦
savedId.addEventListener('mouseout', startFocusOut); // focusout 이벤트를 활성화한다.
savedId.addEventListener('click', printIdAndPassword); // 아이디 비밀번호 칸에 저장된 아이디 비밀번호를 입력한다.
instakilogramLoginForm.addEventListener('submit', eventDefault); // 비활성화된 로그인버튼 이벤트 중지

hartButton.forEach(target => { target.addEventListener('click', handleButton) }) // 좋아요버튼 반응
bookmarkButton.addEventListener('click', handleButton) // 북마크버튼 반응
commentButton.addEventListener('mouseup', () => { commentButton.style.transform = 'scale(1)'; }); // 코멘트 버튼 mouseup 하면 크기 돌아옴
commentButton.addEventListener('mousedown', () => { commentButton.style.transform = 'scale(0.9)'; }); // 코멘트 버튼 mouse 하면 크기 0.9배
commentButton.addEventListener('mouseout', () => { commentButton.style.transform = 'scale(1)'; }); // 코멘트 버튼 mouseout 하면 크기 돌아옴
detailViewText.addEventListener('click', onDetailView) // 더보기 버튼 클릭 -> 게시글 펼쳐짐
instaContentsCommentForm.addEventListener('submit', submitInstaComment);
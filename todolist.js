//현재 날짜를 가져오기 위한 코드
let today = new Date();
let nowmonth = today.getMonth()+1;
let nowdate = today.getDate();

//현재 날짜를 포함한 h1태그 설정
$('header').html(`<h1>${nowmonth}월 ${nowdate}일 할일`);

//할일 추가버튼 구현
const btn = $('#add_btn');
const add_value = $('#work');
let add_list = '';
btn.on('click', function(){
  add_list = '<li><span class="todolist">' + add_value.val() 
              + '</span><button type="button" class="update" onclick="uptList(this)">수정</button> '
              +'<button type="button" class="delete" onclick="delList(this)">삭제</button></li>';
  $('body section .list ul').append(add_list);
  add_value.val(''); //입력창의 내용 지우기
});

const color = $('#color');
const bgcolor = $('body > div');
color.on('change', function(event){
  bgcolor.css('background-color',color.val());
});

//수정 버튼 동작
function uptList(obj){
  let text = prompt("변경할 내용을 입력하세요.");
  if(text === '') return;
  if(text === null) return; //취소를 누르거나 입력없이 확인누르면 수행하지 않음
  $(obj).prev().html(text);
}

//삭제 버튼 동작
function delList(obj){
  let chk = confirm('삭제하시겠습니까?');
  if(chk) $(obj).closest('li').remove();
  else return;
}

//초기화 버튼 동작
const reset = $('#reset_btn');
reset.on('click', function(){
  let chk = confirm('초기화하시겠습니까?');
  if(chk) $('li').remove();
  else return;
})

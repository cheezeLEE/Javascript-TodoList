Javascript를 이용한 TodoList 만들기
================================
Javascript를 이용해 오늘의 할일을 관리할 수 있는 TodoList 프로그램을 만들었다.

1. 프로젝트 생성이유
    - Javascript와 jQuery를 공부하고, 얼마나 잘 이해하고 있는지 간단한 TodoList를 만들면서 확인함
  
1. 구상
    - 오늘 날짜를 제일 위에 표시
    - 배경색을 변경할 수 있고, 추가와 리셋기능을 구현
    - 추가한 목록을 수정, 삭제할 수 있게 구현
  
1. 기능
    - 오늘 날짜 표시 : Date함수를 이용하여 오늘 날짜를 받아와 가장 위에 표시
    - 배경색 변경 : select박스에서 배경색을 선택하면, 해당 배경색으로 변경될 수 있게함
    - 할일 추가 : 입력창에 내용을 입력 -> 추가시 리스트형태로 입력값이 추가됨
    - 리셋 : 리셋 -> 확인시 모든 할일목록이 삭제됨
    - 할일 수정 : 수정하고자 하는 할일에 마우스를 올리고 수정 -> 내용입력 -> 확인시 수정됨
    - 할일 삭제 : 삭제하고자 하는 할일에 마우스를 올리고 삭제 -> 확인시 삭제됨
    
1. 실행화면

첫화면

<img src="https://postfiles.pstatic.net/MjAyMDEwMjNfMjQ2/MDAxNjAzNDMyNTYwNTcw.eszu4YYPI2MPsrNapH4jDHqTFPJcmJNXxjR9p7l6w98g.TC1nbWgC0lOVps3F2SExf58F_sUgZbuPtD1O8se5SJYg.PNG.zndn121/image.png?type=w773">

배경색 변경 및 할일 추가

<img src="https://postfiles.pstatic.net/MjAyMDEwMjNfMTk4/MDAxNjAzNDMyNTk3NDg0.ig2fjHCEKnBryC_rSa0t8FSMjQPlRdvG7JoIR5ndiKkg.eE3QYWnTd73lBwYsrt-VsROmaZ0DOrnkLbX3MdR-e-gg.PNG.zndn121/image.png?type=w773">

목록 수정, 삭제, 초기화

<img src="https://postfiles.pstatic.net/MjAyMDEwMjNfMjc1/MDAxNjAzNDMyNjYwMTY0.wc2nE03fa_ucYuolB5yXk5gq5sZWDe4XxuBe2nrShq8g.HlfcDz-4gmbbXV1fhboqh82TSnUQZnHhXFGli1szAdsg.PNG.zndn121/image.png?type=w773">
<img src="https://postfiles.pstatic.net/MjAyMDEwMjNfMTgy/MDAxNjAzNDMyNjc4NTI1.XhjSLfp3Fc27R041jtMCJ6tVvJB9K1hEknyeLQINk2Qg.kvkn7jDnHrKC1g9F0tj2nMolyWC3-jEDTZiMyw5XrxMg.PNG.zndn121/image.png?type=w773">
<img src="https://postfiles.pstatic.net/MjAyMDEwMjNfNCAg/MDAxNjAzNDMyNzA0NjIz.49Dd4Vll0JDFgn_267Ugvf3hD2V19gR2dnrkrJ6TuNkg.C1spvadF5UGo4WoQsVAxIPVUCIEByl4hPQUOtx9SqLgg.PNG.zndn121/image.png?type=w773">
<img src="https://postfiles.pstatic.net/MjAyMDEwMjNfMTc3/MDAxNjAzNDMyNzE4MjE0.ooBLEo8XrYKo9wBc8CqJ-3irTswFCKkfBXWvQ8LCqJ0g.SNg-ugdY8Ivnqyh2WBINlQRbNxiCzCRVONybEZD2UQsg.PNG.zndn121/image.png?type=w773">

// 서버에 정보를 요청하는 비동기 함수
// fetch : 자바스크립트에서 지원하는 함수
// ajax : jQuery에서 지원하는 함수
// axios : Vue, React에서 사용하는 패키지

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then((data)=>{
  // json 형식을 javascript의 Object 타입으로 변환 : json()함수가 
  return data.json();
})
.then((x)=>{
  return x.filter((x)=> x.id>=3 );
})
.then((data)=>{
  // HTML 찍어줍니다
  let id = document.querySelector('#id');
  let title = document.querySelector('#title');

  id.innerHTML = data.id;
  title.innerHTML = data.title;
})
.catch((err)=>{
  console.log('요청한 주소가 이상한데?')
})
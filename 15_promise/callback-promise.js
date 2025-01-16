function getUser(userID){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // 1초 지나서 실행 할 내용
      try {
        const idol = {
          id : userID,
          name : '장원영',
        }
        resolve(idol);
      } catch (error) {
        reject(error);
      }
    },1000);
  })
}

function getArticle(articleID){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      try {
        const articles = [
          {
            id : 1,
            title : '장원영 첫 글',
          },
          {
            id : 2,
            title : '장원영 두번째 글',
          }
        ];
        resolve(articles);
      } catch (error) {
        reject(error);
      }
    },1000);
  }) 
}

function getComments(commentID){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      try {
        const comments = [
          {
            id : 1,
            comment : '첫 댓글',
          },
          {
            id : 2,
            comment : '두번째 댓글',
          },
          {
            id : 3,
            comment : '세번째 댓글',
          }
        ];
        resolve(comments)
      } catch (error) {
        reject(error)     
      }
    }, 1000)
  })  
}

getUser(1)
  .then((x)=>{
    console.log(x);
    return getArticle(x.id);
  })
  .then((articles)=>{
    console.log(articles);
    return getComments(articles[0].id)
  })
  .then((comments)=>{
    console.log(comments);
  })
  .catch((err)=>{
    console.log('error')
  })
  .finally(()=>console.log('Finally'));

  async function runPromise(){
     await getUser(2)
      .then((user)=>{
        if(user != null){
          console.log('User : ', user);
        } else {
          console.log('자료가 없어요.')
        }
      })
  }

  runPromise();
 const readPosts = async () =>{
  let postArea = document.querySelector(".posts")
  postArea.innerHTML = 'Carregando...'

  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await response.json()
  console.log(json)

  if(json.length > 0){
    postArea.innerHTML = ''

    for(let i in json){
      let postTran = `<div><h1>${json[i].title}</h1>
      ${json[i].body}<hr/></div>`
      postArea.innerHTML += postTran
    }

  }else {
    postArea.innerHTML = 'Nenhum post para ser exibido'
  }
 }

 readPosts()


let url = 'https://jsonplaceholder.typicode.com'
let query = 'comments?postId=1'
fetch(`${url}/${query}`)
      .then(response => response.json())
      .then(json => console.log(json))
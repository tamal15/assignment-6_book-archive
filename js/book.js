document.getElementById('spinner').style.display='none';
const searchButton = () =>{
    const inputText=document.getElementById('input-text');
    const inputValue=inputText.value;
    document.getElementById('spinner').style.display='block';
    // document.getElementById('book-search').style.display='none';
    const url=`http://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    // console.log(url)
    .then(res => res.json())
    // .then(data =>console.log(data.docs))
    .then(data => bookType(data.docs))
}

// const toggleSearchResult= displays=>{
//   document.getElementById('book-search').style.display=displays;
// }


const bookType = book =>{

    const bookSearch=document.getElementById('book-search');
    bookSearch.textContent='';
    empty.textContent='';
    document.getElementById('book-total').textContent='';
    document.getElementById('spinner').style.display='none';
    // document.getElementById('book-search').style.display='block';
    if(book.length==0){
      const empty=document.getElementById('empty');
      const div=document.createElement('div')
      div.innerHTML=`
      <h1 class="text-center">No result found</h1>
      `;
      empty.appendChild(div)
    }
   else{
    // document.getElementById('book-total').innerText=`Book Total Number : ${book.length}`;
    document.getElementById('book-total');
    const div=document.createElement('div')
    div.innerHTML=`
    <h1>Book Total Number : ${book.length}</h1>
    `;
  
    document.getElementById('book-total').appendChild(div);



    book.forEach(search => {
      // console.log(search)
      const div=document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div class="card h-100">
        <img height="200px" width:"180px" src="https://covers.openlibrary.org/b/id/${search.cover_i }-M.jpg" alt="">
      
      <div class="card-body">
        <h5 class="card-title">Book-Name : ${search.title}</h5>
        <h5>Author-Name : ${search.author_name}</h5>
        <h5>first_publish_year : ${search.first_publish_year}</h5>
        <h5>publisher : ${search.publisher}</h5>
        <h5>_version_ : ${search._version_}</h5>
      </div>
    </div>
   
      `;
      bookSearch.appendChild(div);
      
  })
   }
}


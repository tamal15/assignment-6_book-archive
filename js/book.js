// spinner none
document.getElementById('spinner').style.display='none';
// onclick-button 
const searchButton = () =>{
    const inputText=document.getElementById('input-text');
    const inputValue=inputText.value;
    // clear input field
    inputText.value='';
    // block spinner 
    document.getElementById('spinner').style.display='block';
    // api dynamic 
    const url=`http://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => bookType(data.docs,inputValue))
}




const bookType = (book,inputValue) =>{
    // book-search result 
    const bookSearch=document.getElementById('book-search');
    // hide previous result 
    bookSearch.textContent='';
    // hide text 
    empty.textContent='';
    // hide previous 
    document.getElementById('book-total').textContent='';
    // spinner none 
    document.getElementById('spinner').style.display='none';
    // input data check
    if(book.length===0){
      const empty=document.getElementById('empty');
      const div=document.createElement('div')
      div.innerHTML=`
      <h1 class="text-center">No result found</h1>
      `;
      empty.appendChild(div)
    }
   else{
    //  show total-data-count 
    document.getElementById('book-total');
    const div=document.createElement('div')
    
    div.innerHTML=`
    <h1 class="p-3"><span class="text-success">Total Book</span> <span class="text-primary">${ document.getElementById('book-total').innerText=inputValue}</span> : ${book.length}</span></h1>
    
     `;
  
    document.getElementById('book-total').appendChild(div);



    book.forEach(search => {
      // image check 
      let imageStatus  = search.cover_i;
      let imgUrl;
      if(imageStatus === undefined){
          imgUrl = 'images/book2.png'
      }
      else 
        imgUrl = `https://covers.openlibrary.org/b/id/${search.cover_i }-M.jpg`;


      // publisher check 
      let pub;
      if(search.publisher === undefined)
      {
        pub = "Unknown"
      }
      else{
        pub = search.publisher;
      }

      // search result 
      const bookSearch=document.getElementById('book-search');
      const div=document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div class="card h-100">
        <img height="200px" width:"180px" src=${imgUrl} alt="">
      <div class="card-body">
        <h5 class="card-title">Book-Name : ${search.title}</h5>
        <h5 class="bg-danger p-3">Author-Name : ${search.author_name}</h5>
        <h5>first_publish_year : ${search.first_publish_year}</h5>
        <h5>publisher : ${pub}</h5>
        <h5>_version_ : ${search._version_}</h5>
      </div>
    </div>
   
      `;
      bookSearch.appendChild(div);

  })
   }
}


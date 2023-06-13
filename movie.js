let resultBox=document.getElementById('result-box');

let Movie=localStorage.getItem('Movie');
let data=JSON.parse(Movie);


resultBox.innerHTML=`
<div id="result-items">
        

    
            <h2>Movie-name:${data.Title}</h2>
        <img src=${data.Poster} alt="images" id="image"/><br/><br/>
        <p>Year:${data.Released},Actors: ${data.Actors},Director :${data.Director}</p>
        <p>Movie-summury: ${data.Plot}</p>
        <h5>Genre:${data.Genre}</h5>
        <h5>Language: ${data.Language}</h5>
        <h5>country:${data.Country}</h5>
        
        
        <button id="addFav">Hide details</button>
            
            
        </div> 


`   

const Hide=document.getElementById('addFav');
console.log(Hide);

function hideDetails(){
    resultBox.innerHTML='';
    localStorage.clear();
}

Hide.addEventListener('click',hideDetails);

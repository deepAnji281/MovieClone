let Search=document.getElementById('inp')
let text;
let searchButton= document.getElementById('search');
let resultBox=document.getElementById('result-box');
let favArr=[]
let flag=false;


function serachMovie(e){
    e.preventDefault();
    text=Search.value;
    
    if(text){
        fetch(`https://www.omdbapi.com/?t=${text}&apikey=feca82b`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.Title===undefined)
            {
                return;
            }
            else{
            localStorage.setItem('Movie',JSON.stringify(data));
            resultBox.innerHTML=`
            <div id="result-items">
        

    
            <h2>Movie-name:${data.Title}</h2>
        <img src=${data.Poster} alt="images" id="image"/><br/><br/>
        <p>Year:${data.Released},Actors: ${data.Actors},Director :${data.Director}</p>
        
       <a href="fav.html"><button id="addFav">add To Faviourate</button></a>
        <a href='movie.html'><button id="addFav">view details</button></a>
            
            
        </div>   

               `
            }
            function addToFav(){
                favArr.push(data);
                flag=true;
                if(flag){
    localStorage.setItem("favList",JSON.stringify(favArr));
    }
            
            }
         let addFav=document.getElementById("addFav");
         addFav.addEventListener('click',addToFav);
         
        })
    }
    
   
}

searchButton.addEventListener('click',serachMovie);






let resultBox=document.getElementById('result-box');
let favList=localStorage.getItem("favList")

let favListArr=JSON.parse(favList)
let fav=[favListArr]


    if(favListArr.length>0)
    for(let i=0;i<favListArr.length;i++){
    let data=favListArr[i];
    resultBox.innerHTML+=`

   <div id="result-items">
        

    
            <h2>Movie-name:${data.Title}</h2>
        <img src=${data.Poster} alt="images" id="image"/><br/><br/>
        <p>Year:${data.Released},Actors:${data.Actors} ,Director :${data.Director}</p>
        <h5>Genre:${data.Genre}</h5>
        <h5>country:${data.Country}</h5>
        
        
        
        <button id="removeFav">remove from faviourate</button>
            
            
        </div> 



`

    
    



}

let removeFav=document.querySelectorAll("#removeFav");
for(let i=0;i<removeFav.length;i++){
    
removeFav[i].addEventListener('click',()=>{
    localStorage.clear();
    
    
})
    

}



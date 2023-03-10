function getBlogData(){
 
    let promise = new Promise(function(resolve,reject){
        var apiResult = new Array();
        apiResult = JSON.parse(sessionStorage.getItem("apiResult") || "[]");

        if(apiResult.length !=0){
            resolve(apiResult);
        }
        else{
            reject("No data found!!");
        }
    });

    return promise;
}

function showCard(apiResult){
  
    const main = document.getElementById('main');        
        console.log(apiResult);
          let output = ''
        // loop over the array      
          // set first row
          output += `
          <h1><center>VIEW BLOG</center></h1>
          <div class="container-lg  my-5">
            <div class="row">`     
          apiResult.forEach(item => {  
             output += `  
               
             <div class="col-md-4 col-lg-3 col-sm-6 g-4">  
                 
             <div class="card h-100 shadow mt-2">
             
              <img src=${item.thumbnail} class="card-img-top col-sm flex-row" alt="...">
              <div class="card-body col-sm">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item["description"]}</p>
                <a href="index.html" class="btn btn-primary">Go to Home</a>
              </div>
              </div>
            </div>`
          })
          // close the row
          output += '</div></div>'
        main.innerHTML = output;

}
getBlogData().then(showCard).catch(function(error) { 
    const main = document.getElementById('main');   
    let output = '';
    output += `
    <h1><center>VIEW BLOG</center></h1>

    <div class="container mt-5">
    <h1><center>${error}</center></h1></div>`
    console.log(error);
    main.innerHTML = output;

});


// fetch data

let dataArray =[];
const loadData = (dataLimit) =>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url).then(res => res.json()).
    // then(data =>displayData(data.data,dataLimit))
    then(data =>{
      dataArray=data.data.tools
      // displayData(data.data,dataLimit)
      displayData(dataArray,dataLimit)
    })
    
}

const displayData = (data,dataLimit) =>{

    // console.log(data.tools);
    //  console.log(data);

    // show only 6 data
     if(dataLimit){
      // data.tools=data.tools.slice(0,6);
      data=data.slice(0,6);
     }
    // data.tools=data.tools.slice(0,6);
    const cardContainer =document.getElementById('card-container');
    cardContainer.innerText='';
    // const tool of data.tools
    for( const tool of data){

      // console.log(tool.features);
   
      let test='';
             tool.features.forEach(feature => {
              test += `
              <li>${feature}</li>
              `;
              // ul.innerHTML+=li;

             })
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML=`
      <div class="card h-100">
          <img src="${tool.image}" class="card-img-top mb-2 p-3" alt="...">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
               <ol id="list-features">
                  ${test}
               </ol>

              <hr class="mx-0"> 
              <div class="d-flex justify-content-between">
                 <div>
                 <h5 class="card-title">${tool.name}</h5>
                 
                  <div class="d-flex align-items-center gap-2">
                     <i class="fa-regular fa-calendar-days"></i>
                 
                     <p class="m-0 p-0">${tool.published_in}</p>
                  </div>
                 
                 </div>
                  
                 <div>
                    <i class="fas fa-arrow-right bg-dark-subtle" style="color:rgba(255, 8, 0, 0.733) " onclick="fetchDataDetails('${tool.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                  </div>
           
                
                 </div>
               
            </div>
        </div>
             

        `;
          //  const ul =document.createElement('ul');
          //  console.log(ul);
           
    // console.log(test);

        cardContainer.appendChild(cardDiv);

        // const list= document.getElementById('list-features')
        // console.log(list);
        // list.innerHTML=ul;
        // list.appendChild(ul);

        

    }
     
  //  stop loader
    toggleLoader(false);

    
}

//  loader function

const toggleLoader =isLoading =>{
  const loader= document.getElementById('loader');
  if(isLoading)
  {
      loader.classList.remove('d-none');
      console.log(isLoading);
  }
  else
  {
      loader.classList.add('d-none');
      console.log(isLoading);
  }
  
}

// show all data

document.getElementById('see-more-button').addEventListener('click',function(){
  toggleLoader(true);  //start loader
  // loadData();
  // toggleLoader(false);

  setTimeout(() =>{
    loadData();
  },2000);
})

toggleLoader(true); 
loadData(6);



// show single details data

const fetchDataDetails = id =>{
  let url1 =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
  console.log(url1);

  fetch(url1).then(res => res.json()).then(data =>showDataDetails(data.data))
}

const showDataDetails = data =>{
console.log(data );
const modalContainer =document.getElementById('modal-container');
modalContainer.innerText='';


// for integrations

let test2='';
            //  data.integrations.forEach(feature2 => {
            //   test2 += `
            //   <li>${feature2}</li>
            //   `;
            //   // ul.innerHTML+=li;

            //  })

            if(data.integrations){
              data.integrations.forEach(feature2 => {
                  test2 += `
                  <li>${feature2}</li>
                  `;
                  // ul.innerHTML+=li;
    
                 })
            }
            else{
              test2+=`<p>No data found</p>`;
            }



const modalDiv = document.createElement('div');
modalDiv.classList.add('row');

// for accuracy

console.log(data);


modalDiv.innerHTML =`



   <div class="col-md-6 card h-100 p-2 me-2" style="width: 24rem;">
   <div class="card-body ">
     <h6 class="card-title">${data.description}</h6>
 
        <div class="d-flex justify-content-between mt-4">
          <div class="bg-info border rounded text-center p-2">
            <h6>${data.pricing ? data.pricing[0].price : "free of cost"}</h6>
            <h6>${data.pricing ? data.pricing[0].plan : ""}</h6>
          </div>
          <div class="bg-info border rounded text-center p-2">
            <h6>${data.pricing ? data.pricing[1].price : "free of cost"}</h6>
            <h6>${data.pricing ? data.pricing[1].plan : ""}</h6>
          </div>
          <div class="bg-info border rounded text-center p-2">
            <h6>${data.pricing? data.pricing[2].price : "free of cost"}}</h6>
            <h6>${data.pricing ? data.pricing[2].plan : ""}</h6>
          </div>
          
        </div>
         
          <div class="d-flex justify-content-between mt-4">
             <div>
                <h5>Features</h5>
                <ul id="test-features"> ${features(data.features)}
                </ul>
             </div>
 
             <div>
                <h5>Integrations</h5>
                <ul id="integrations-features"> ${test2}
                </ul>
             </div>
          </div>
 
   </div>
 </div>
   <div class="col-md-6 card h-100">
           <img src="${data.image_link[0] }" class="card-img-top mb-2 p-3" alt="...">
           ${data.accuracy.score && `<button type="button" class=" position-absolute top-0 end-0 bg-danger rounded">${data.accuracy.score}% accuracy</button>`}
             <div class="card-body">
               <h5 class="text-center">${data.input_output_examples ? data.input_output_examples[0].input :"Can you give any example?"}</h5>
               <p class="text-center">${data.input_output_examples ? data.input_output_examples[0].output :"No! Not Yet! Take a break!!!"}</p>
             </div>
   </div>

               


`;

modalContainer.appendChild(modalDiv);



}




// for sorting 

document.getElementById('btn-sort').addEventListener('click',function(){
  // console.log(dataArray);

  dataArray.sort((a,b) =>  new Date(b.published_in) - new Date(a.published_in)); 
  // console.log(dataArray);
  // toggleLoader(true); 
  displayData(dataArray);
  // toggleLoader(false); 
  const seeMoreButton=document.getElementById('see-more-button');
  seeMoreButton.classList.add('d-none');
  
})

// for features
const features = feature =>{
   let features ='';
   for(const key in feature){
    features+=`<li>${feature[key].feature_name}</li>`
   }
   return features;
}
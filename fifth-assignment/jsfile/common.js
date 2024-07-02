
//  first element value
function getFirstElementValue(elementID){
    const firstFieldValue=document.getElementById(elementID);
    const firstFieldValueString=firstFieldValue.value;
    const firstFieldValueNumber=parseInt(firstFieldValueString);
    
    // console.log(firstFieldValueNumber);

    // validation

    if(isNaN(firstFieldValueNumber))
    {
        alert('Enter a valid number')
        return false;
    }
    
    firstFieldValue.value='';
    
    return firstFieldValueNumber;

    
   


}
// second element value

function getSecondElementValue(elementID){
    const secondFieldValue=document.getElementById(elementID);
    const secondFieldValueString=secondFieldValue.value;
    const secondFieldValueNumber=parseInt(secondFieldValueString);
    // console.log(secondFieldValueNumber);


    if(isNaN(firstFieldValueNumber))
    {
        alert('Enter a valid number')
        return false;
    }

    secondFieldValue.value='';
    
    
    return secondFieldValueNumber;

    
   



}


document.getElementById('new-page').addEventListener('click',function(){
    window.location.href='answer.html';
})

// for random background color

function randomcolor() {
    return Math.floor(Math.random() * 255);
}
// for card1
const cardElement1 = document.getElementById('card1');
        cardElement1.addEventListener('mouseover', () => {
            cardElement1.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
                + ',' + randomcolor() + '\)'
        })


// for card2


const cardElement2 = document.getElementById('card2');
cardElement2.addEventListener('mouseover', () => {
    cardElement2.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
        + ',' + randomcolor() + '\)'
})


// for card3


const cardElement3 = document.getElementById('card3');
cardElement3.addEventListener('mouseover', () => {
    cardElement3.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
        + ',' + randomcolor() + '\)'
})

// for card4


const cardElement4 = document.getElementById('card4');
cardElement4.addEventListener('mouseover', () => {
    cardElement4.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
        + ',' + randomcolor() + '\)'
})

// for card5


const cardElement5 = document.getElementById('card5');
cardElement5.addEventListener('mouseover', () => {
    cardElement5.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
        + ',' + randomcolor() + '\)'
})

// for card6


const cardElement6 = document.getElementById('card6');
cardElement6.addEventListener('mouseover', () => {
    cardElement6.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
        + ',' + randomcolor() + '\)'
})



//  for card area


const cardElementArea = document.getElementById('card-area');
cardElementArea.addEventListener('mouseover', () => {
    cardElementArea.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() 
        + ',' + randomcolor() + '\)'
})





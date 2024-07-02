// ------------first problem------------------

// This is mindGame function which takes a positive number ,performs mathematical operation and return the result
  function mindGame(posNumber){
    
    if(typeof posNumber!=='number')
    {
        return 'Please enter a number';
    }

    const result=((posNumber*3 + 10)/2)-5;
    return result;

}

// console.log(mindGame(33));




// ----------------second problem-------------------

//  This function takes a string, count the total no of character and then checks either it is even or odd
 function evenOdd(inString){
    if(typeof inString!=='string')
    {
        return 'Please enter a String';
    }
  const numOfChar=inString.length;
   if(numOfChar%2==1)
   {
    return 'odd';
   }
   else
   {
     return 'even';
   }
}

// console.log(evenOdd('chatgpt'));




// --------------third problem-----------------

// This function takes a number ,calculates the difference b/w the input and 7 .if the difference is less than 7 then return the difference otherwise return the double of the input

 function isLGSeven(number){
    if(typeof number!=='number')
    {
        return 'Please enter a number';
    }
    const difference= number-7;
    if(difference<7)
    {
        return difference;
    }
    else
    {
        return 2*number;
    }
 }
 
//  console.log(isLGSeven(15));




 

//  -----------------fourth Problem---------------------
  
// This function takes an array and return the number of negative numbers 

 function  findingBadData(numbers){
    if(typeof numbers!=='object')
    {
        return 'Please enter an array';
    }
    let count=0;
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]<0)
        {
            count++;
        }
    }
    return count;
}

// const numbers=[-4, -9, -5, -33, -55];
// console.log(findingBadData(numbers));


 


// ------------------- fifth problem------------------------

// This function takes 3 numbers,calculate total no of diamond.if the total is greater than or equal to 2000 then return the difference b/w total & 2000 otherwise return the total

function gemsToDiamond(num1,num2,num3){

    if(typeof num1!=='number' || typeof num2!=='number' || typeof num3!=='number')
    {
        return 'Please enter a number';
    }
    const totalDiamond=num1*21 + num2*32 + num3*43;
    if(totalDiamond>2*1000)
    {
        return totalDiamond-2000;
    }
    else
    {
        return totalDiamond;
    }
}

//  console.log(gemsToDiamond(100, 5, 1));

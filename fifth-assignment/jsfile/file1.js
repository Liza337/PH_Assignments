document.getElementById('btn-triangle').addEventListener('click',function(){
    // get base value
//     const bFieldValue=document.getElementById('b-field');
//     const bFieldValueString=bFieldValue.value;
//     const bFieldValueNumber=parseInt(bFieldValueString);

// //    get height value

//      const hFieldValue=document.getElementById('h-field');
//      const hFieldValueString=hFieldValue.value;
//      const hFieldValueNumber=parseInt(hFieldValueString); 


//     //  get area

    // let area=0.5*bFieldValueNumber*hFieldValueNumber;
    // area=area.toFixed(2);
   
    const firstValue=getFirstElementValue('b-field');
    const secondValue=getFirstElementValue('h-field');

    // validation

    let area= 0.5*firstValue*secondValue;
    area=area.toFixed(2);
    // console.log(area);


    // set area

    const areaText=document.getElementById('area-triangle');
         areaText.innerText=area;
        //  console.log(areaText);



})

// for rectangle 

document.getElementById('btn-rectangle').addEventListener('click',function(){
    
    const firstValue=getFirstElementValue('w-field');
    const secondValue=getFirstElementValue('i-field');

    let area= firstValue*secondValue;
    area=area.toFixed(2);
    // console.log(area);


    // set area

    const areaText=document.getElementById('area-rectangle');
         areaText.innerText=area;
        //  console.log(areaText);



})

// for paralleogram
document.getElementById('btn-paralleogram').addEventListener('click',function(){
    
    const firstValue=getFirstElementValue('bp-field');
    const secondValue=getFirstElementValue('hp-field');

    let area= firstValue*secondValue;
    area=area.toFixed(2);
    // console.log(area);


    // set area

    const areaText=document.getElementById('area-paralleogram');
         areaText.innerText=area;
        //  console.log(areaText);



})

// for rhombus

document.getElementById('btn-rhombus').addEventListener('click',function(){
    
    const firstValue=getFirstElementValue('d1-field');
    const secondValue=getFirstElementValue('d2-field');

    let area= 0.5*firstValue*secondValue;
    area=area.toFixed(2);
    // console.log(area);


    // set area

    const areaText=document.getElementById('area-rhombus');
         areaText.innerText=area;
        //  console.log(areaText);



})

// for pentagon

document.getElementById('btn-pentagon').addEventListener('click',function(){
    
    const firstValue=getFirstElementValue('ppn-field');
    const secondValue=getFirstElementValue('bpn-field');

    let area= 0.5*firstValue*secondValue;
    area=area.toFixed(2);
    // console.log(area);


    // set area

    const areaText=document.getElementById('area-pentagon');
         areaText.innerText=area;
        //  console.log(areaText);



})


// for ellipse

document.getElementById('btn-ellipse').addEventListener('click',function(){
    
    const firstValue=getFirstElementValue('ael-field');
    const secondValue=getFirstElementValue('bel-field');

    let area= Math.PI*firstValue*secondValue;
    area=area.toFixed(2);
    // console.log(area);


    // set area

    const areaText=document.getElementById('area-ellipse');
         areaText.innerText=area;
        //  console.log(areaText);



})
let initial =document.querySelector('#initial');
let quantity = document.querySelector('#quantity');
let current =document.querySelector('#current');
let btn = document.querySelector('button');
let resetBtn= document.querySelector('.reset-btn');
let p =document.querySelector('p');
let sad = document.querySelectorAll('.sad');
let happy = document.querySelectorAll('.happy');
for(let s of sad){s.style.display="none"}
for(let h of happy){h.style.display="none"}
let loss=0;
let lossPer=0;
let profit=0;
let profitPer=0;
btn.addEventListener('click',()=>{
    p.style.color="red";
         if(initial.value<0){p.innerText="🚫Initial Stock Price cant be negative🚫";}
    else if(initial.value===""){p.innerText="🚫Pls give Initial Stock Price🚫";}
    else if (quantity.value<0){p.innerText="🚫Quantity cant be negative🚫";}
    else if(quantity.value===""){p.innerText="🚫Pls give the Quantity of the Stock🚫";}
    else if(quantity.value==0){p.innerText ="🚫Quantity cant be Zero🚫";}
    else if (current.value<0){p.innerText="🚫Current Value cant be negative🚫";}
    else if(current.value===""){p.innerText="🚫Pls give Current Value of the Stock🚫";}
    else{
        let initialValue=Number(initial.value);
        let quantityValue=Number(quantity.value);
        let currentValue =Number(current.value); 
         p.style.color="black";
        if(initialValue>currentValue){
            loss= (initialValue-currentValue)*quantityValue;
            lossPer=(loss/initialValue)*100;
            p.innerText="Ahh Sad!!😥😥You are in Loss"+"\n"+" Your loss is of ₹"+loss+", Your loss percentage is "+lossPer.toString().slice(0,5)+"%\n Feeling sad for you";
            sad[1].style.display="inline";
            if(lossPer>50){sad[0].style.display="inline";}
            else{ sad[0].style.display="none";}
            for(let h of happy){h.style.display="none"}
           }
        else if(currentValue>initialValue){
             profit= (currentValue-initialValue)*quantityValue;
            profitPer=(profit/initialValue)*100;
                p.innerText="Yeeeee!!!🤩🤩You are in Porfit"+"\n"+"Your profit is of ₹"+profit+", Your profit percentage is "+profitPer.toString().slice(0,5)+"%";
                happy[1].style.display="inline";
                if(profitPer>50){happy[0].style.display="inline";}
                else{happy[0].style.display="none";}
                for(let s of sad){s.style.display="none"}
            }
        else if (currentValue=== initialValue){
                p.innerText="No Pain No Gain😐😐";
                for(let s of sad){s.style.display="none"}
                for(let h of happy){h.style.display="none"}
            }
        }
})
resetBtn.addEventListener('click',()=>{
    initial.value="";
    quantity.value="";
    current.value="";
    p.innerText="";
    for(let s of sad){s.style.display="none"}
    for(let h of happy){h.style.display="none"}
})

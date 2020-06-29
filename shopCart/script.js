//GET BUTTONS ARRAY

var btn=document.querySelectorAll('#add-to-cart');

var totals=0 //TOTAL COST IN THE CART  
 var items=0 //TOTAL NO OF ITEMS SELECTED


 //ITERATE IN THE ARRAY TO GET THE AMOUNT ELEMENT WHICH CONTAINS PRICE OF PRODUCT CLICKED 

btn.forEach((btn)=>{

    btn.addEventListener('click',function(e){
    
     items+=1

      if(e.target.parentElement.classList.contains('price')){

            var price=e.target.parentElement.querySelector('.amount').textContent; 
            var img=e.target.parentElement.querySelector('.img').src;
  
    //CHECK FOR IMAGE CLICKED AND INSERT IT ONLY ONCE IN CART

            //ADD TO THE CART TOTAL AMOUNT BOUGHT/SELECTED
            var pos=img.indexOf('img')+3;
            var product=img.slice(pos);

            var cost=price.slice(4).trim();
           
            totals+=parseFloat(cost);
        } 

        var itemList=`<ul>
        <li>
        <img class='cartimage' src='images/img${product}'<li>${cost}</li></ul>
        ` 
        document.querySelector('.totals').textContent=items
        
        document.querySelector('.cart').innerHTML+=itemList
        document.querySelector('.gg').innerHTML=`Total Cost:`+totals
       
    })
})
//SHOW CART WHEN CART ONE HOVERS OVER CART
    mycart.addEventListener('mouseover',function(e){ 
        document.querySelector('.cart').style.display='block';    
    })

//HIDE CART WHEN ONE CLICKS
   var mycart2=document.querySelector('#mycart');
    mycart2.addEventListener('mouseleave',(e)=>{
        document.querySelector('.cart').style.display='none';
    })
    
   document.querySelector()
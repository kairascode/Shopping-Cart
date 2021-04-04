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
  
            //ADD TO THE CART TOTAL AMOUNT BOUGHT/SELECTED
            var pos=img.indexOf('img')+3;
            var product=img.slice(pos);

            var cost=price.slice(4).replace(/,\s?/g,"");
           
            totals+=parseFloat(cost)
        } 

       showCart(product,cost,totals,items)
    })
})

function showCart(product,cost,totals,items){
    var itemList=`<table border=0 class='cartTable'>
        <tr id='item'><td>
        <img class='cartimage' src='images/img${product}'/><td id='amnt'>KShs${cost}<td><i  id='deletes'class='fa fa-cut'/></td>
        </tr>
        ` 
        document.querySelector('.totals').textContent=items
        document.querySelector('.tts').textContent=totals
        document.querySelector('.cart').innerHTML+=itemList

        var dels=document.querySelectorAll('#deletes');
        dels.forEach((dels)=>{
       
            dels.addEventListener('click',(e)=>{
             e.target.parentElement.parentElement.remove()//remove item from shopping cart
                if(items>0){
                    items-=1//reduce no of items by one for every item deleted
                    document.querySelector('.totals').textContent=items //update shopping cart totals 
                    let price=e.target.parentElement.parentElement.querySelector('#amnt').textContent// get price of current item
            
                    let cost=price.slice(4).replace(/,\s?/g,"");//remove commas and KShs from price
                    
                    
                        totals-=parseFloat(cost);//reduce total cost on shopping cart for every item removed
                        
                    document.querySelector('.tts').textContent=totals//update total cost on shopping cart
                }
                else{
                    item=0
                    document.querySelector('.cart').innerHTML=itemList
                     }
                
              
             
              
              
                    
            })
        })
        
}

//SHOW CART WHEN ONE HOVERS OVER CART
    var mycart=document.querySelector('#mycart')
    mycart.addEventListener('mouseover',function(e){ 
        document.querySelector('.cart').style.display='flex';    
    })

//HIDE CART WHEN MOUSE LEAVES
   var mycart2=document.querySelector('#mycart');
    mycart2.addEventListener('mouseleave',(e)=>{
        
        document.querySelector('.cart').style.display='none';
    })
//REMOVE AN ITEM FROM CART
   




   
   

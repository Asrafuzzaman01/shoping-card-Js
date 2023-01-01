 

 function increament(incDec,prc,itm) {

 	var A=document.getElementById(incDec);

 	var price=document.getElementById(prc);

 	var item=document.getElementById(itm);

 	var pr_ammount=document.getElementById('pr_ammount').innerHTML;
 	var charge=document.getElementById('charge').innerHTML;

 	var total_ammount=document.getElementById('total_ammount').innerHTML;




 	
 	if (A.value>=5) {
 		A.value=5;
 		alert ("only five products allow");


 	}

 	else{
 		A.value++;
 	}

 	var result= parseInt(price.innerHTML)+parseInt(item.innerHTML);

 	item.innerHTML=result;

 	//for total product 

 	var total_product= parseInt(price.innerHTML)+parseInt(pr_ammount);
 	
 	document.getElementById('pr_ammount').innerHTML=total_product;

 	// for total ammount + charge

 	var ammount=  total_product+ parseInt(charge);
 	document.getElementById('total_ammount').innerHTML=ammount;





 }

 // for minus button 

    function decreament(incDec,prc,itm){
    	var A=document.getElementById(incDec);
    	var price=document.getElementById(prc);
    	var item =document.getElementById(itm);
    	var pr_ammount=document.getElementById('pr_ammount').innerHTML;
    	var charge=document.getElementById('charge').innerHTML;

 	    var total_ammount=document.getElementById('total_ammount').innerHTML;





    	if (A.value<=0) {
    		A.value=0;
    		alert ("only one  product allow");

    		
    	}
    	else{
    		A.value--;
    		
    	}
    	

    	var result =parseInt(item.innerHTML)-parseInt(price.innerHTML);


 	    item.innerHTML=result;


 	    // for total product 

 	    var total_product=parseInt(pr_ammount)-parseInt(price.innerHTML);


 	   document.getElementById('pr_ammount').innerHTML=total_product;


 	   // for total ammount + charge 
 	   var ammount=total_product+ parseInt(charge);
 	   document.getElementById('total_ammount').innerHTML=ammount;

 	  







    }
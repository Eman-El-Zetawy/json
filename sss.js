var zar=document.getElementById("zar");
var info=document.getElementById("info");
var fname=document.getElementById("n1");
var id=document.getElementById("n2");
var email=document.getElementById("n3");
var p=document.getElementById("p");
zar.addEventListener("click",f);


function f () 
{var w ='' , a=[];

const m =new Headers();
   m.append('Authorization' , 'Bearer xEpYEON0z20mHSOmx-0wVbYGqtNRAOwXAJfj')  ; 
   m.append('Content-Typy','application/json'); 

   if(id.value !==''){
       w='/'+id.value ;
}
   if(p.value !=='' ){
    a.push('page='+p.value) ;
   }
if(fname.value !==''){
    a.push('first_name='+ fname.value);
}
if(email.value !==''){
a.push('email='+email.value) ;
}

  w = w+'?'+a.join('&&');
  console.log(w);

fetch('https://gorest.co.in/public-api/users'+w , {
  method :'GET',
  headers: m ,
// body:JSON.stringify({ +'email='+email.value
//  first_name:"yfghk",
//  last_name:"hgll" ,
//  gender:"female" ,
//  email:"HLJKHJ@example.com"})
}).then(response=>response.json()).then(data=>console.log(data));

}

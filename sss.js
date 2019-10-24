var get=document.getElementById("get");
var post=document.getElementById("post");
var pull=document.getElementById("pul");
var dlt=document.getElementById("delete");
var inf =document.getElementById("info");
var fname=document.getElementById("n1");
var lname=document.getElementById("n4");
var gender=document.getElementById("n5");
var id=document.getElementById("n2");
var email=document.getElementById("n3");
var p=document.getElementById("p");
get.addEventListener("click",f1);
post.addEventListener("click",f2);
pull.addEventListener("click",f3)
 dlt.addEventListener("click",f4);
const my = new Headers();
   my.append('authorization' , 'Bearer xEpYEON0z20mHSOmx-0wVbYGqtNRAOwXAJfj') ; 
   my.append('Content-Type','application/json'); 

function f1 () 
    {  var w ='' , a=[];
      if(id.value !==''){ w='/'+id.value ; }
        if(p.value !=='' ){  a.push('page='+p.value) ; }
      if(fname.value !==''){ a.push('first_name='+ fname.value);}
      if(lname.value !==''){ a.push('last_name='+ lname.value);}
      if(email.value !==''){ a.push('email='+email.value) ; }
      if(gender.value==1){ a.push("gender=male");}
      if(gender.value==2){ a.push("gender=female");}
      if(a.length !==0){ w = w+'?'+a.join('&&'); }
      console.log(a);
        console.log(w);
fetch('https://gorest.co.in/public-api/users'+w , {
  method :'GET',
  headers: my 
}).then(response=>response.json()).then(data=>console.log(data));
}

function f2 (){
  var l ; 
  if(gender.value==1){ l="male";}
      if(gender.value==2){ l="female";}
     console.log(fname.value ,lname.value ,email.value , l)
    fetch('https://gorest.co.in/public-api/users',{
        method:'POST',
        headers: my ,
      body:JSON.stringify({
        first_name:fname.value ,
        last_name:lname.value,
        email:email.value,
          gender:l
    })
      }).then(response=>response.json()).then(data=>console.log(data));
      }
      function f3(){
        var l='';
        if(gender.value==1){ l="male";}
        if(gender.value==2){ l="female";}
        fetch('https://gorest.co.in/public-api/users', {
            method :'PUL',
            headers: my ,
          first_name:fname.value ,
          last_name:lname.value,
          email:email.value,
          gender:l
          }).then(response=>response.json())
          .then(data=>console.log(data));
          
    }
function f4(){
    var d='';
    d ='/'+id.value;
    fetch('https://gorest.co.in/public-api/users'+d, {
        method :'DELETE',
        headers: my 
      }).then(response=>response.json())
      .then(data=>console.log(data));
}

// inf.insertAdjacentHTML('beforeend',data) }
var bookname=document.getElementById('bookname');
var urlname=document.getElementById('url');
var btn=document.getElementById('submit');

if (localStorage.getItem('allbooks')==null){
    var table_container=[];

}
else{
table_container=JSON.parse(localStorage.getItem('allbooks'))
display();
}
btn.onclick = function(){
    var valiname="Name is required";
    var valiurl="URL is required";
    if(bnameValidation() == true&&urlnameValidation()==true){
        submit();
        
    }else if (bnameValidation() != true&&urlnameValidation()!=true){
    document.getElementById("nameError").innerHTML=valiname;
    document.getElementById("urlError").innerHTML=valiurl;
       
    }
    else if (bnameValidation() != true&&urlnameValidation()==true){
        document.getElementById("nameError").innerHTML=valiname;
    }
    else {
        document.getElementById("urlError").innerHTML=valiurl;
    }
    }
   
function submit(){
    bookmaker={
        pname: bookname.value,
        urlName: urlname.value,
    }
table_container.push(bookmaker);
localStorage.setItem('allbooks', JSON.stringify(table_container));
display();
reset();
}
function display (){
    var trs=``;
    for (var i = 0;i<table_container.length;i++){
        trs+=`<tr>
        <td>${table_container[i].pname}</td>
        <td><a class="btn btn-primary" href=" ${table_container[i].urlName} " target="_blank">visit</a></td>
        <td><button class="btn btn-danger btndelete" onclick="ddelete(${i})" >Delete</button></td>  
    </tr>`
    }
    document.getElementById("body").innerHTML=trs;

}
function ddelete(index){
table_container.splice(index,1);
if(table_container.length < 1){
    localStorage.clear()
   }else{
    localStorage.setItem('allooks',JSON.stringify(table_container))
display();
   }
}
function reset(){
    bookname.value =``;
    urlname.value=``;
}

function bnameValidation(){
    var nameRegx=/^[a-zA-Z]{3,8}$/;
    var Bookname=bookname.value;
    var uname=urlname.value;

    if(nameRegx.test(Bookname)==true){
    return true;
    }else{
     return false 
    }

}
function urlnameValidation(){
    var nameRegx=/^[a-zA-Z]{3}/;
    var uname=urlname.value;
    if(nameRegx.test(uname)==true){
    return true;
    }else{
     return false 
    }
}
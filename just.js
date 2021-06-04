function fun()
{
    var a=document.getElementById("1");
    var b=document.getElementById("2");
    var c=document.getElementById("3");
    var d=document.getElementById("4");
    if(a.checked==true)
    {
      alert("you selct 1st") ; 
    }else if(b.checked==true){
        alert("you selct 3rd") ; 

    }else if(c.checked==true){
        alert("you selct 4th") ;   
    }
    else if(d.checked==true){
        alert("you selct 2nd") ; 
    }
    else{alert("select plese")}
}
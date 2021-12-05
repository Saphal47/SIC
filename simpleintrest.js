


function calcSimpleIntrest(){

    let p=document.getElementById("PrincipalAmount").value;
    let r=document.getElementById("rateOfIntrest").value;
    let t=document.getElementById("time").value;

    if(p=="" || r=="" || t=="" ){
        alert("Fill the details");
    }
    else{
    
    var si= p*r*t/100.0;
    console.log(si);
    document.getElementById("result").innerHTML="Simple Intrest: "+ si;
    }
}

function resetCalculator(){
    let classid=document.getElementsByClassName("si");
    for (let i = 0; i < classid.length; i++) {
        classid[i].value="";
      }
    document.getElementById("result").innerHTML="";
        
}












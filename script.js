document.querySelector("#btna").addEventListener("click",addCount); 
document.querySelector("#btnl").addEventListener("click",lowCount);
let count = 0;

function addCount(){
    count++;
    document.getElementById("nmbr").innerHTML = count;
    document.getElementById("nmbr").style.color= changeColor(count);
};

function lowCount(){
    count--;
    document.getElementById("nmbr").innerHTML = count;
    document.getElementById("nmbr").style.color = changeColor(count);
};

function changeColor(count){
    if(count>0){
        document.getElementById("nmbr").classList.remove("gray");
        document.getElementById("nmbr").classList.remove("red");
        document.getElementById("nmbr").classList.add("green");
    }
    else if(count<0){
        document.getElementById("nmbr").classList.remove("gray");
        document.getElementById("nmbr").classList.remove("green");
        document.getElementById("nmbr").classList.add("red");
    }
    else if (count==0){
        document.getElementById("nmbr").classList.add("gray");
    }

};
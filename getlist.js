console.log('hello');
var getList=[];


function addList(){
   let listTo =document.getElementById('work').value;
getList.push(listTo);
displayList();
erasetext();
}
function displayList(){
    var  list="";
     for(var i=0;i<getList.length;i++){    
    list=list+"<li>"+getList[i];
     }
     document.getElementById('worktodo').innerHTML=list
     }
function erasetext(){
   document.getElementById('work').value="";
}

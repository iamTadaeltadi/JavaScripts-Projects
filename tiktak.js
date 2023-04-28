let x_or_otime=true;
let count=0
let rows=[0,0,0]
let colums=[0,0,0]
let rightDiagonal=0
let leftDiagonal=0
let beaten=false
let statuss=document.querySelector(".result")

document.addEventListener("click",function(e){
    if (e.target.id){

    setvalue(e.target.id)
    }
    if (e.target.id=="btnn"){
        reset()
    }
    
})



function setvalue(boxId){
    x=boxId
    box=document.getElementById(boxId);
    if (!box.innerHTML && !beaten){
        if (x_or_otime){
            box.innerHTML="X"
    }
    else{
        box.innerHTML="O"

    }
    checkGameStatus(x)
    

    }
    x_or_otime=!x_or_otime
   

}

function checkGameStatus(box){
    count+=1
    let postion=String(box)
    postion=Number(postion[postion.length -1])
    if (document.getElementById(box).innerHTML=="O"){
        rows[Math.floor(postion/3)]+=1
        colums[Math.floor(postion%3)]+=1
    }
    else{
        rows[Math.floor(postion/3)]-=1
        colums[Math.floor(postion%3)]-=1
    }
    for ( row of rows){
        if (row==3){
            beaten=true
            statuss.innerHTML=`O is WON`
            return
            
        }
        else if( row==-3){
            beaten=true
            statuss.innerHTML=`X is WON`
            return
        }
    }
    for ( colum of colums){
        if (colum==3){
            beaten=true
            statuss.innerHTML=`O is WON`
            return
            
        }
        else if( colum==-3){
            beaten=true
            statuss.innerHTML=`X is WON`
            return
        }
    }
    if ((postion==0 || postion==4 || postion==8) && (document.getElementById(box).innerHTML=="O")){
        rightDiagonal+=1
        if (rightDiagonal==3){
            beaten=true
            statuss.innerHTML=`O is WON`
            return
        }
    }
    if ((postion==0 || postion==4 || postion==8) && (document.getElementById(box).innerHTML=="X")){
        rightDiagonal-=1
        if (rightDiagonal==-3){
            beaten=true
            statuss.innerHTML=`X is WON`
            return
        }
    }
    if ((postion==2 || postion==4 || postion==6) && (document.getElementById(box).innerHTML=="O")){
        leftDiagonal+=1
        if (leftDiagonal==3){
            beaten=true
            statuss.innerHTML=`O is WON`
            return
        }
    }
    if ((postion==2 || postion==4 || postion==6) && (document.getElementById(box).innerHTML=="X")){
        leftDiagonal-=1
        if (leftDiagonal==-3){
            beaten=true
            statuss.innerHTML=`X is WON`
            return
        }
    }
    
    

    

        if (count==9 ){
            statuss.innerHTML=`Draw`
    
        }

    
    }
    
        
        



    
function reset(){
    location.reload(true);
}
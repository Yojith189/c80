var groceries=[];
function buy_gr(){
    var g1= document.getElementById("gr1").value;
    

    groceries.push(g1);

    

    document.getElementById("displaying").innerHTML=groceries.toString();

    







}
function Groceries_click(){
   var i = groceries.join("<br>");
    document.getElementById("qwerty").innerHTML=i.toString();

    
}

function srch_gr(){
    var s = document.getElementById("srch").value;
    var found=0;
    var j;
    for(j=0;j<groceries.length;j++){
        if(s==groceries[j]){
            found= found+1;



        }
    }
    document.getElementById("output_search").innerHTML="There are "+found+" repeated items";
}





















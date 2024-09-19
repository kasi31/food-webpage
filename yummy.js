function showtime(){
    var list=document.getElementsByClassName("list")
    list[0].classList.toggle('display')
}

let index=0
function carousal(){
    var x=document.getElementsByClassName("test");

    for(i=0;i<x.length;i++){
 if(index==x.length){
    index=0
}
         if(i==index){
             console.log('hi',i);
            
            x[i].classList.add('test1');
            x[i].classList.remove('hi');
        }
        else{

            x[i].classList.add('hi');
            x[i].classList.remove('test1');
                }
        console.log(index);
        
        }
        index++;

}
setInterval(carousal,2000)
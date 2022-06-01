$(function()
{
    var loadmv={
        el:$("#loadnum"),
        max:100,
        start:0//增加开始的初始值
    }
    up(loadmv);
    
})
function up(loadmv){
    var item=loadmv.el;
    var num=loadmv.max;
    var start=loadmv.start;
    var random1=getRandomInt(12,18)
    var random2=getRandomInt(6,9)
    var random3=getRandomInt(4,2)

    time2=setInterval(function(){
        
        if(start>=num-random1){
            start=num-random1+1;
            clearInterval(time2);
            item.text(start);
            document.getElementById("mask").style.width=start+"%";  
        }
        else{
            start++;
            item.text(start)
            document.getElementById("mask").style.width=start+"%";
        }           
    },80)
    time3=setInterval(function(){
        
        if(start>=num-random2){
            start=num-random2+1;
            clearInterval(time3);
            item.text(start); 
            document.getElementById("mask").style.width=start+"%"; 
        }
        else{
            start++;
            item.text(start);
            document.getElementById("mask").style.width=start+"%";
        }           
    },200)
    time4=setInterval(function(){
        
        if(start>=num-random3){
            start=num-random3+1;
            clearInterval(time4);
            item.text(start); 
            document.getElementById("mask").style.width=start+"%"; 
        }
        else{
            start++;
            item.text(start);
            document.getElementById("mask").style.width=start+"%";
        }           
    },300)
    time5=setInterval(function(){
        
        if(start>=num-1){
            document.getElementById("loadimg").style.height="2000%";
            start=num;
            clearInterval(time5);
            item.text(start);
            document.getElementById("mask").style.width=start+"%";
            document.getElementById("loaddesk").style.opacity="0%";
            document.getElementById("loaddesk").style.visibility="hidden";
            document.getElementById("wrapper").style.overflow="visible";
            document.getElementById("wrapper").style.height="500vh";
            
        }
        else{
            start++;
            item.text(start);
            
        }           
    },600)    

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }
  
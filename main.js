var mouseevent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline=1;
canvas.addEventListener("mousedown",Mymousedown);
function Mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",Mymousemove);
function Mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(lastpositionofx,lastpositionofy);
        ctx.lineTo(currentx,currentY);
        ctx.stroke();

            
        
    }
    lastpositionofx=currentx;
    lastpositionofy=currentY;

}
canvas.addEventListener("mouseup",Mymouseup);
function Mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",Mymouseleave);
function Mymouseleave(e){
    mouseevent="mouseleave";
}
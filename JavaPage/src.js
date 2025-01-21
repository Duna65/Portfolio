function ChangeColor(r,g,b){
document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
function AddText(id,text){
    const p = document.getElementById(id)
p.innerText = text
}
//selecting box,overlay and btn
var p=document.querySelector(".overlay")
var a=document.querySelector(".box")
var b=document.getElementById("add-pop")

b.addEventListener("click",function(){
    p.style.display="block"
    a.style.display="block"
})

//select cancel btn
var c=document.getElementById("cancel-b")
c.addEventListener("click",function(event){
    event.preventDefault()
    p.style.display="none"
    a.style.display="none"

})

//select container,add-book btn,3 inputs
var container=document.querySelector(".container")
var addb=document.getElementById("add-b")
var bookt=document.getElementById("book-title")
var booka=document.getElementById("author")
var bookd=document.getElementById("description")
addb.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","b-container")
    div.innerHTML=`<h2>${bookt.value}</h2>
        <h5>${booka.value}</h5>
        <p>${bookd.value}</p>
        <button onclick="deleteb(event)">delete</button>`
    container.append(div)
    p.style.display="none"
    a.style.display="none"

})

function deleteb(event){
    event.target.parentElement.remove()
}
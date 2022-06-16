const btns= document.getElementsByClassName("remove");

total()
for (let i = 0; i < btns.length; i++) {
    var btn = btns[i]
    btn.addEventListener('click', removebtn)
    
}


var quants = document.getElementsByClassName('input')
for (let i = 0; i < quants.length; i++) {
      var quant = quants[i]
      quant.addEventListener('change',change)
   }
function change(event){
   var input= event.target

   total()

}


function removebtn(event){
    var btnc = event.target
        btnc.closest('.prod').remove()
        total()
}


function total(){
    var prices =  document.getElementsByClassName('prix')
    var quantities = document.getElementsByClassName('input')
    var sum =0
 for (let i = 0; i < btns.length; i++){
    var price = prices[i].innerHTML.replace('DT','')
    var quantity = quantities[i].value
    sum +=Number(price) * quantity  
 }
 document.getElementById('tot').innerHTML = String(sum) + "DT"
}


const hearts= document.querySelectorAll("i")
for (let i = 0; i < hearts.length; i++) {
   var heart = hearts[i]
   heart.addEventListener('click',function(event){
      var icon = event.target
      icon.classList.toggle('red')
      
   })

}


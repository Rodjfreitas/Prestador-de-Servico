function valorEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')

  fgts.style.opacity = "10%"
  inss.style.opacity = "10%"
  completo.style.opacity = "10%"
  
}

function fgtsEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')

  valorDia.style.opacity = "10%"
  inss.style.opacity = "10%"
  completo.style.opacity = "10%"
}

function inssEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')

  valorDia.style.opacity = "10%"
  fgts.style.opacity = "10%"
  completo.style.opacity = "10%"
}

function completoEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')

  valorDia.style.opacity = "10%"
  fgts.style.opacity = "10%"
  inss.style.opacity = "10%"
}

function exitSelect(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')

  fgts.style.opacity = "100%"
  inss.style.opacity = "100%"
  completo.style.opacity = "100%"
  valorDia.style.opacity = "100%"
  
}

function calcAmount(){
  let amount = document.querySelector('#amount')
  let taxAmount = document.querySelector('.taxAmount')
  let saleAmount = document.querySelector('.saleAmount')
  let taxTotal = document.querySelector('.taxTotal')
  let saleTotal = document.querySelector('.saleTotal')
  let days = document.querySelector('#days')

    if(amount.value.length == 0|| days.value.length == 0){
      alert('[ERRO]: há campos não preenchidos!')
    }else{

    let valor = amount.value
    let dias = days.value
    
    let total = valor * 100 / 92
    let  taxa = total - valor

    taxAmount.innerText = `R$ ${Number(taxa).toFixed(2)}`
    taxAmount.style.color = "red"
    saleAmount.innerText = `R$ ${Number(total).toFixed(2)}` 
    
    taxTotal.innerText = `R$ ${Number(taxa * dias).toFixed(2)}`
    taxTotal.style.color = "red"
    saleTotal.innerText = `R$ ${Number(total * dias).toFixed(2)}`
    }
}

function clearAmount(){
  let amount = document.querySelector('#amount')
  let taxAmount = document.querySelector('.taxAmount')
  let saleAmount = document.querySelector('.saleAmount')
  let taxTotal = document.querySelector('.taxTotal')
  let saleTotal = document.querySelector('.saleTotal')
  let days = document.querySelector('#days')

  amount.value = ""
  days.value = ""
  amount.focus()

  taxAmount.innerText = ""
  saleAmount.innerText = ""
  taxTotal.innerText = ""
  saleTotal.innerText = ""
}
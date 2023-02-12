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

function calcInss(){
  let salario = document.querySelector('#salario')
  let taxInss = document.querySelector('.taxInss')
  let amountInss = document.querySelector('.amountInss')
  let faixas = [1302, 2571.29, 3856.94, 7507.49]
  let faixa1;
  let faixa2;
  let faixa3;
  let faixa4;
  let total;

  if(salario.value.length = 0){
    alert('[ERRO]: Preencha um valor para salário.')
  }else{
    if(salario.value <= faixas[0]){
      taxInss.innerText = "7,5 %"
      taxInss.style.color = "red"
      faixa1 = `${Number(faixas[0] * 0.075)}`
      amountInss.innerText = `R$ ${Number(faixa1).toFixed(2)}`
    }
    else if(salario.value <= faixas[1]){
      taxInss.innerText = "9 %"
      taxInss.style.color = "red"
      faixa1 = `${faixas[0] * 0.075}`
      faixa2 = `${(salario.value - faixas[0])* 0.09}`      
      total = Number(faixa1) + Number(faixa2)
      amountInss.innerText = `R$ ${Number(total).toFixed(2)}`
    }
    else if(salario.value <= faixas[2]){
      taxInss.innerText = "12 %"
      taxInss.style.color = "red"
      faixa1 = `${faixas[0] * 0.075}`
      faixa2 = `${(faixas[1] - faixas[0])* 0.09}`
      faixa3 = `${(salario.value - faixas[1])* 0.12}`
      total = Number(faixa1) + Number(faixa2) + Number(faixa3)
      amountInss.innerText = `R$ ${Number(total).toFixed(2)}`
    }
    else if(salario.value <= faixas[3]){
      taxInss.innerText = "14 %"
      taxInss.style.color = "red"
      faixa1 = `${faixas[0] * 0.075}`
      faixa2 = `${(faixas[1] - faixas[0])* 0.09}`
      faixa3 = `${(faixas[2] - faixas[1])* 0.12}`
      faixa4 = `${(salario.value - faixas[2])* 0.14}`
      total = Number(faixa1) + Number(faixa2) + Number(faixa3) + Number(faixa4)
      amountInss.innerText = `R$ ${Number(total).toFixed(2)}`
    }else{
      taxInss.innerText = " Não se enquadra"
      taxInss.style.color = "red"
      amountInss.innerText = "R$ --"
    }
  }
}


function clearInss(){
  let salario = document.querySelector('#salario')
  let taxInss = document.querySelector('.taxInss')
  let amountInss = document.querySelector('.amountInss')

  salario.value = ""
  taxInss.innerText = ""
  amountInss.innerText = ""
  salario.focus()
}

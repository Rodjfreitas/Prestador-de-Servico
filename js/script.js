function valorEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')
  let information = document.querySelector('.information')
  let informationp = document.querySelector('.informationp')

  fgts.style.opacity = "10%"
  inss.style.opacity = "10%"
  completo.style.opacity = "10%"
  information.style.display = "block"
  information.style.border = "0.5px solid black"
  information.style.width = "200px"
  information.style.transition = "width 2s ease"
  informationp.style.display = "block"
  
}

function fgtsEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')
  let information2 = document.querySelector('.information2')
  let information2p = document.querySelector('.information2p')

  valorDia.style.opacity = "10%"
  inss.style.opacity = "10%"
  completo.style.opacity = "10%"
  information2.style.display = "block"
  information2.style.border = "0.5px solid black"
  information2.style.width = "200px"
  information2.style.transition = "width 2s ease"
  information2p.style.display = "block"
}

function inssEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')
  let information3 = document.querySelector('.information3')
  let information3p = document.querySelector('.information3p')

  valorDia.style.opacity = "10%"
  fgts.style.opacity = "10%"
  completo.style.opacity = "10%"
  information3.style.display = "block"
  information3.style.border = "0.5px solid black"
  information3.style.width = "200px"
  information3.style.transition = "width 2s ease"
  information3p.style.display = "block"
}

function completoEnter(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')
  let information4 = document.querySelector('.information4')
  let information4p = document.querySelector('.information4p')

  valorDia.style.opacity = "10%"
  fgts.style.opacity = "10%"
  inss.style.opacity = "10%"

  information4.style.display = "block"
  information4.style.border = "0.5px solid black"
  information4.style.width = "200px"
  information4.style.transition = "width 2s ease"
  information4p.style.display = "block"
}

function exitSelect(){
  let valorDia = document.querySelector('#valorDia')
  let fgts = document.querySelector('#fgts')
  let inss = document.querySelector('#inss')
  let completo = document.querySelector('#completo')
  let information = document.querySelector('.information')  
  let informationp = document.querySelector('.informationp')
  let information2 = document.querySelector('.information2')
  let information2p = document.querySelector('.information2p')
  let information3 = document.querySelector('.information3')
  let information3p = document.querySelector('.information3p')
  let information4 = document.querySelector('.information4')
  let information4p = document.querySelector('.information4p')

  fgts.style.opacity = "100%"
  inss.style.opacity = "100%"
  completo.style.opacity = "100%"
  valorDia.style.opacity = "100%"  

  
  information.style.width = "0px"
  information.style.transition = "width 3s ease" 
  information.style.border = "none" 
  informationp.style.display = "none"
  information2.style.width = "0px"
  information2.style.transition = "width 3s ease" 
  information2.style.border = "none"  
  information2p.style.display = "none"
  information3.style.width = "0px"
  information3.style.transition = "width 3s ease" 
  information3.style.border = "none"  
  information3p.style.display = "none"
  information4.style.width = "0px"
  information4.style.transition = "width 3s ease"
  information4.style.border = "none"   
  information4p.style.display = "none"
  
}

function calcFopag(){
  //calculo do inss
   
    
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

function caclFgts(){
  let fgts = document.querySelector('#salario-fgts')
  let valor = document.querySelector('.amountFgts')

  if(fgts.value.length = 0){
    alert('[ERRO]: Necessário informar o valor do salário.')
  }else{
    valor.innerText = (` R$ ${Number(fgts.value * 0.08).toFixed(2)}`)
  }
}

function clearFgts(){
  let fgts = document.querySelector('#salario-fgts')
  let valor = document.querySelector('.amountFgts')

  fgts.value = ""
  fgts.focus()
  valor.innerText = ""
}



function valorShow(){
  let principal = document.querySelector('#principal')
  let formulario = document.querySelector('#formulario')
  let valor = document.querySelector('#calc-rs-dia')

  principal.style.display = "none"
  formulario.style.display = 'block'
  valor.style.display = 'block'

}

function fgtsShow(){
  let principal = document.querySelector('#principal')
  let formulario = document.querySelector('#formulario')
  let fgts = document.querySelector('#calc-fgts')

  principal.style.display = "none"
  formulario.style.display = 'block'
  fgts.style.display = 'block'
}

function inssShow(){
  let principal = document.querySelector('#principal')
  let formulario = document.querySelector('#formulario')
  let inss = document.querySelector('#calc-inss')

  principal.style.display = "none"
  formulario.style.display = 'block'
  inss.style.display = 'block'
  
}

function fopagShow(){
  let principal = document.querySelector('#principal')
  let formulario = document.querySelector('#formulario')
  let fopag = document.querySelector('#calc-fopag')

  principal.style.display = "none"
  formulario.style.display = 'block'
  fopag.style.display = 'block'
}


function backShow(){
  let principal = document.querySelector('#principal')
  let formulario = document.querySelector('#formulario')
  let valor = document.querySelector('#calc-rs-dia')
  let fgts = document.querySelector('#calc-fgts')
  let inss = document.querySelector('#calc-inss')
  let fopag = document.querySelector('#calc-fopag')

  principal.style.display = "grid"
  formulario.style.display = 'none'
  
  valor.style.display = 'none'
  fgts.style.display = 'none'
  inss.style.display = 'none'
  fopag.style.display = 'none'

}
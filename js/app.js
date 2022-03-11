let pergunta1 ={
    pergunta : "Qual é o nome do pai de José?",
    opc1: "Davi",
    opc2: "Jacó",
    opc3: "Noé",
    opc4: "Abrão",
    certo:"Jacó"
}


let pergunta2 ={
    pergunta : "Qual desse não foi discípolo de Jesus?",
    opc1: "Paulo",
    opc2: "Saulo",
    opc3: "Pedro",
    opc4: "Jonas",
    certo:"Jonas"
}

let pergunta3 ={
    pergunta : "Quanto tempo durou o dilúvio?",
    opc1: "2 meses",
    opc2: "1 ano e 1 dia",
    opc3: "30 dias e 30 noites",
    opc4: "40 dias e 40 noites",
    certo: "40 dias e 40 noites"
}

let pergunta4 ={
    pergunta : "Quem entrou na terra prometida?",
    opc1: "Todo o povo que saiu do Egito",
    opc2: "Moisés, Jesué e Calebe",
    opc3: "O povo do Egito",
    opc4: "Os filhos do povo que saiu do egito",
    certo: "Os filhos do povo que saiu do egito"
}



let listaPergunta = [pergunta1, pergunta2, pergunta3, pergunta4]

let ponteiro = 0

let resCerta = 0
let resErrada = 0
let quantPergunta = listaPergunta.length


let perg = document.getElementById("pergunta")
let resp1 = document.getElementById("res1")
let resp2 = document.getElementById("res2")
let resp3 = document.getElementById("res3")
let resp4 = document.getElementById("res4")

document.getElementById("bt2").style.display="none"
document.getElementById("bt").style.display="none"
document.getElementById("texto").style.display="none"

document.querySelectorAll(".resposta").forEach(function(item, inice){
    item.style.display="none"
})



//Função de troca das perguntas e respostas

function perguntas(){ 

    let quantAtual = ponteiro+1
    document.getElementById("titulo").style.display="none"
    document.getElementById("bt2").style.display = "none"
    document.getElementById("texto").style.display="block"
    document.getElementById("bt").style.display="none"
    document.getElementById("bt3").style.display="none"
    document.getElementById("texto").innerHTML=quantAtual+"/"+quantPergunta+" | Bom de bibilia: Teste seus conecimentos |"
    document.querySelectorAll(".resposta").forEach(function(item, inice){
        item.style.display="block"
    
    })
    
    //Final do jogo, mensagem de parabens
    
    if(ponteiro == listaPergunta.length){
        document.getElementById("titulo").style.display="none"
        document.getElementById("texto").style.display="none"
        document.querySelectorAll(".resposta").forEach(function(item, inice){
            item.style.display="none"
        })
        perg.style.textAlign = "center"
        perg.style.marginTop="10px"
        perg.style.color = "#111"
        perg.innerHTML ="Parabéns! Você terminou o desafio. "+" Resultado: "+resCerta+"/"+listaPergunta.length
        document.getElementById("bt").style.display = "none"
        document.getElementById("bt2").style.display="block"

            
        } 

    else {  
  

    perg.innerHTML
     = listaPergunta[ponteiro].pergunta
    resp1.value = listaPergunta[ponteiro].opc1
    resp2.value = listaPergunta[ponteiro].opc2
    resp3.value= listaPergunta[ponteiro].opc3
    resp4.value = listaPergunta[ponteiro].opc4
   

    let res1 = document.getElementById("res1")
    res1.value = listaPergunta[ponteiro].opc1
    let res2 = document.getElementById("res2")
    res2.value = listaPergunta[ponteiro].opc2
    let res3 = document.getElementById("res3")
    res3.value = listaPergunta[ponteiro].opc3
    let res4 = document.getElementById("res4")
    res4.value = listaPergunta[ponteiro].opc4


}


}


function comecar(){

    perguntas()
}


function recomecar(){
    ponteiro = 0
    perguntas()
}


function errado(){

    document.getElementById("respostas").style.display = "none"
    perg.style.display = "none"
    document.getElementById("bt").style.display = "none"
    document.getElementById("bt2").style.display = "block"
}

function enviar(resposta){

    if(resposta ==  listaPergunta[ponteiro].certo){
        alert("Certo!!")
        resCerta = resCerta+1
        ponteiro = ponteiro+1
        setTimeout(perguntas,1000)
        
        
                    
    }else{
        alert("Resposta errada! Resposta certa: "+listaPergunta[ponteiro].certo)
        resErrada = resErrada+1
        ponteiro = ponteiro+1
        setTimeout(perguntas,1000)
                
            }

        }

    
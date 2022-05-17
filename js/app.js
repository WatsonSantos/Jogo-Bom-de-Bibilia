let pergunta1 = {
    pergunta : "Qual é o nome do pai de José?",
    opc1: "A) Davi",
    opc2: "B) Jacó",
    opc3: "C) Noé",
    opc4: "D) Abrão",
    certo:"B) Jacó"
}

let pergunta2 ={
    pergunta : "Qual desse não foi discípolo de Jesus?",
    opc1: "A) Paulo",
    opc2: "B) Saulo",
    opc3: "C) Pedro",
    opc4: "D) Jonas",
    certo: "D) Jonas"
}

let pergunta3 ={
    pergunta : "Quanto tempo durou o dilúvio?",
    opc1: "A) 2 meses",
    opc2: "B) 1 ano e 1 dia",
    opc3: "C) 30 dias e 30 noites",
    opc4: "D) 40 dias e 40 noites",
    certo: "D) 40 dias e 40 noites"
}

let pergunta4 ={
    pergunta : "Quem entrou na terra prometida?",
    opc1: "A) Todo o povo que saiu do Egito",
    opc2: "B) Moisés, Jesué e Calebe",
    opc3: "C) O povo do Egito",
    opc4: "D) Os filhos do povo que saiu do egito",
    certo: "D) Os filhos do povo que saiu do egito"
}

let pergunta5 ={
    pergunta : "Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?",
    opc1: "A) Enos, viveu 905 anos",
    opc2: "B) Noé, viveu 990 anos",
    opc3: "C) Matusalém, viveu 969 anos",
    opc4: "D) Rainha Ester, viveu 859 anos",
    certo: "C) Matusalém, viveu 969 anos"
}


let pergunta6 ={
    pergunta : "Qual desses não teve o seu nome mudado na Bíblia?",
    opc1: "A) Davi",
    opc2: "B) Abraão",
    opc3: "C) Jacó",
    opc4: "D) Sara",
    certo: "A) Davi"
}

let pergunta7 ={
    pergunta : "Quando bebê, como Moisés foi salvo do decreto infanticida do Faraó?",
    opc1: "A) Foi levado às pressas para fora do Egito",
    opc2: "B) Foi escondido dentro de uma caverna",
    opc3: "C) Foi colocado num cesto e lançado no rio",
    opc4: "D) Foi levado ao templo para servir a Deus",
    certo: "C) Foi colocado num cesto e lançado no rio"
}


let pergunta8 ={
    pergunta : "Em quais livros da Bíblia é narrada a história do nascimento de Jesus?",
    opc1: "A) Gênesis e Salmos",
    opc2: "B) Mateus e Marcos",
    opc3: "C) Hebreus e Apocalipse",
    opc4: "D) Mateus e Lucas",
    certo: "D) Mateus e Lucas"
}

let pergunta9 ={
    pergunta : "Quantos casais humanos entraram na arca de Noé?",
    opc1: "A) 4 casais",
    opc2: "B) 1 casal",
    opc3: "C) 6 casais",
    opc4: "D) 3 casais",
    certo: "A) 4 casais"
}

let pergunta10 ={
    pergunta : "Judas traiu a Jesus por qual valor?",
    opc1: "A) 100 moedas de ouro",
    opc2: "B) 30 moedas de prata",
    opc3: "C) 50 moedas de prata",
    opc4: "D) 30 moedas de ouro",
    certo: "B) 30 moedas de prata"
}

let pergunta11 ={
    pergunta : "Quem eram os dois irmãos de Moisés?",
    opc1: "A) Esaú e Jacó",
    opc2: "B) Miriã e Arão",
    opc3: "C) Josué e Calebe",
    opc4: "D) Priscila e Áquila",
    certo: "B) Miriã e Arão"
}


let pergunta12 ={
    pergunta : "Bíblia é composta por quantos livros?",
    opc1: "A) 88 livros",
    opc2: "B) 37 livros",
    opc3: "C) 66 livros",
    opc4: "D) 100 livros",
    certo: "C) 66 livros"
}


let pergunta13 ={
    pergunta : "Bíblia é dividida em:",
    opc1: "A) 3 partes: Pentateuco, livros históricos e Evangelhos",
    opc2: "B) 2 partes: Antigo Testamento e Novo Testamento",
    opc3: "C) 3 partes: Velho Testamento, Salmos e Novo Testamento",
    opc4: "D) 2 partes: Livros da Lei e Apocalipse",
    certo: "B) 2 partes: Antigo Testamento e Novo Testamento"
}



let pergunta14 ={
    pergunta : "Qual é o menor versículo da Bíblia?",
    opc1: "A) João 11:35",
    opc2: "B) Ester 8:9",
    opc3: "C) Êxodo 20:13",
    opc4: "D) Jó 3:2",
    certo: "D) Jó 3:2"
}


let pergunta15 ={
    pergunta : "Segundo Jesus, quais são os mandamentos mais importantes da Bíblia?",
    opc1: "A) Não matar e guardar o sábado.",
    opc2: "B) Amar a Deus sobre todas as coisas e amar ao próximo como a si mesmo.",
    opc3: "C) Obedecer a Deus cumprindo os 10 mandamentos e batizar",
    opc4: "D) Buscar o Reino de Deus e fazer justiça",
    certo: "B) Amar a Deus sobre todas as coisas e amar ao próximo como a si mesmo."
}




let listaPergunta = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7,
    pergunta8,pergunta9, pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15
]


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
    document.getElementById("resultado").removeAttribute("class")
    document.querySelectorAll(".resposta").forEach(function(item, inice){
        item.classList.remove('active') //removendo a classe active do butão
    
    })
    document.querySelectorAll(".resposta").forEach(function(item, inice){
        item.disabled = false
    })
    let quantAtual = ponteiro+1
    document.getElementById("titulo").style.display="none"
    document.getElementById("bt2").style.display = "none"
    document.getElementById("texto").style.display="block"
    document.getElementById("bt").style.display="none"
    document.getElementById("bt3").style.display="none"
    document.getElementById("texto").innerHTML=quantAtual+"/"+quantPergunta+" | Bom de bibilia 1.5 |"
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
    document.getElementById("bt3").innerHTML="Abrindo...."
    setTimeout(perguntas, 2000)
}


function recomecar(){
    ponteiro = 0
    document.getElementById("bt2").innerHTML="Abrindo...."
    setTimeout(perguntas, 2000)
}


function errado(){

    document.getElementById("respostas").style.display = "none"
    perg.style.display = "none"
    document.getElementById("bt").style.display = "none"
    document.getElementById("bt2").style.display = "block"
}

function enviar(resposta){

    if(resposta ==  listaPergunta[ponteiro].certo){
        document.getElementById("resultado").innerHTML="A sua resposta está correcta!"
        document.getElementById("resultado").setAttribute("class","alert alert-success display move")
        resCerta = resCerta+1
        ponteiro = ponteiro+1
        document.querySelectorAll(".resposta").forEach(function(item, inice){
            item.disabled = true
        })
        setTimeout(perguntas,5000)
                      
    }else{
        document.getElementById("resultado").innerHTML="A sua resposta está errada! Resposta certa: "+listaPergunta[ponteiro].certo
        document.getElementById("resultado").setAttribute("class","alert alert-danger display move")
        resErrada = resErrada+1
        ponteiro = ponteiro+1
        document.querySelectorAll(".resposta").forEach(function(item, inice){
            item.disabled = true
        })
        setTimeout(perguntas, 5000)
                
            }

        }

    

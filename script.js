const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const numero3 = document.getElementById("numero3")
const numero4 = document.getElementById("numero4")
const numero5 = document.getElementById("numero5")
const numero6 = document.getElementById("numero6")
const numero7 = document.getElementById("numero7")
const numero8 = document.getElementById("numero8")
const numero9 = document.getElementById("numero9")
const numero0 = document.getElementById("numero0")
const sumar = document.getElementById("sumar")
const restar = document.getElementById("restar")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")
const resultado = document.getElementById("resultado")
const igual = document.getElementById("igual")
const limpiar = document.getElementById("limpiar")
let expresion = ""

numero1.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(1)
})

numero2.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(2)
})

numero3.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(3)
})

numero4.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(4)
})

numero5.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(5)
})

numero6.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(6)
})

numero7.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(7)
})

numero8.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(8)
})

numero9.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(9)
})

numero0.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum(0)
})

sumar.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum("+")
})

restar.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum("-")
})

multiplicar.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum("*")
})

dividir.addEventListener("click",(e)=>{
    e.preventDefault()
    anadirNum("/")
})

igual.addEventListener("click",(e)=>{
    e.preventDefault()
    const total = eval(expresion)
    resultado.innerHTML = `<p>${total}</p>`
    expresion = ""
})

limpiar.addEventListener("click",(e)=>{
    e.preventDefault()
    expresion = ""
    resultado.innerHTML = "<p></p>"
})

function anadirNum(numero) {
    expresion+=numero
resultado.innerHTML = `<p>${expresion}</p>`
}
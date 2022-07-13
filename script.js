let funcionario = {

constanteComissãoX:[0.05],
constanteComissãoY:[0.03],
constanteComissãoXY:[0.08],
salarioFixo:[1200],
salarioTotal: [],
valorX: [],
valorY: [],


}

//Calculando com 5%

function calculateX(constanteComissãoX, salarioFixo){
    let resultado = []
    if(funcionario.salarioFixo > 0){
        resultado = funcionario.salarioFixo * funcionario.constanteComissãoX
        funcionario.valorX.push(resultado)
        console.log(funcionario.valorX)
        
    }
}

calculateX()

//Calculando com 3%

function calculateY(constanteComissãoY, salarioFixo){
    let resultadoY = []
    if(funcionario.salarioFixo > 0){
        resultadoY = funcionario.salarioFixo * funcionario.constanteComissãoY
        funcionario.valorY.push(resultadoY)
        console.log(funcionario.valorY)
        
    }
}

calculateY()

//Calculando Salario Total

function calculateSalary(constanteComissãoXY, salarioFixo){
    let resultadoXY = []
    let resultadoTotal = []
    if(funcionario.salarioFixo > 0){
        resultadoXY = funcionario.salarioFixo * funcionario.constanteComissãoXY
         resultadoTotal = parseInt(funcionario.salarioFixo) + parseInt(resultadoXY)
         
    }

    funcionario.salarioTotal.push(resultadoTotal)
         console.log(resultadoTotal)
}

calculateSalary()


//Calculando cashmachine

let caixa = {

notas:[200,100,50,20,10,5,2],


}

function cashMachine(saqueDesejado,salarioFixo,constanteComissãoXY){
    let saldoDisponivel = funcionario.salarioTotal
    let controle = 0
    let semiArr = []
    let temp = 0
            for(let i = 0; i < caixa.notas.length; i++){
            controle = parseInt(saldoDisponivel/caixa.notas[i]) 
            semiArr.push(controle)
            
                    
                }
                 

            }
               

cashMachine()



let stock = {

    estoqueAtual: [12], 
    minimaEstoque: [1], 
    máximaEstoque:[2],
    


}



function calculateStock(estoqueAtual,minimaEstoque,máximaEstoque){
    let quantidadeMedia = []

    quantidadeMedia = ((stock.máximaEstoque + stock.minimaEstoque)/2)
        
        if(stock.estoqueAtual >= quantidadeMedia){
            console.log("Nao Efetuar a Compra")
        } else{

            console.log("Efetue a Compra")
        }
    
}

calculateStock()


let pessoa = {

idadeAno:[],
idadeMeses:[],
idadeDias:[],
idadeSemanas:[],

}

function findYear(){
    let anox = 0
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
        anox = anoAtual - 1982
        
        pessoa.idadeAno.push(anox)


    console.log(pessoa.idadeAno)

}

findYear()
    

function findM(idadeMeses){
    let mesesx = 0
        mesesx = parseInt(pessoa.idadeAno * 12)
        pessoa.idadeMeses.push(mesesx)
            console.log(pessoa.idadeMeses)

}

findM()

function findDays(idadeDias){
    let diasx = 0
    diasx = parseInt(pessoa.idadeAno * 365)
    pessoa.idadeDias.push(diasx)
        console.log(pessoa.idadeDias)
}

findDays()

function findW(idadeSemanas){
    let semanasx = 0
    semanasx = parseInt(pessoa.idadeAno * 52)
    pessoa.idadeSemanas.push(semanasx)
        console.log(pessoa.idadeSemanas)
}

findW()

console.log("Idade em anos: " + pessoa.idadeAno + " idade em meses: " + pessoa.idadeMeses + " idade em dias: " + pessoa.idadeDias + " idade em semanas: " + pessoa.idadeSemanas)


let matriz = {


    matrizQuadrada3x3: [ [1, 2, 3] , 
                        [4, 5, 6] , 
                        [7, 8, 9] ]


}

function getDiagonal(matrizQuadrada3x3) {
 ;
  let result = 1
  let arr = []
  for(let i = 0; i < matriz.matrizQuadrada3x3.length; i++) {
     result = result * matriz.matrizQuadrada3x3[i][i];
     arr.push(result)
     console.log(arr)
  }
  return result;
}

console.log(getDiagonal(matriz.matrizQuadrada3x3))
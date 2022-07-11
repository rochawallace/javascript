const alunos = [

{ nome: 'João',
  nota: 5,
  turma: '1B',  
},
{ nome: 'Sofia',
  nota: 9,
  turma: '1B',  
},
{ nome: 'Paulo',
  nota: 6,
  turma: '1B',  
},
{ nome: 'Miguel',
  nota: 3,
  turma: '1B',  
},

];

function alunosAprovados(arrwrptw, media) {
    let aprovados = [];

    for ( let i = 0; i < arrwrptw.length; i++){

       const  {nota, nome} = arrwrptw[i];

        if (nota >= media ){

            aprovados.push(nome);
        }

    }

return aprovados;
}

console.log(alunosAprovados(alunos, 5));
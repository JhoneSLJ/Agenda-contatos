const formu = document.getElementById('formulario');
let linhas = '';
const contatos = [];
const numeros = [];



formu.addEventListener('submit', function(e){
    e.preventDefault();
    adicionalinha();
})

function adicionalinha(){
    const contat = document.getElementById('contato');
    const numer = document.getElementById('numero');

    
    if(numeros.includes(numer.value)){
        alert('Esse contato já existe!')
    }
    else{

        contatos.push(contat.value)
        numeros.push(numer.value)


        let linha = '<tr>;'
        linha += `<td>${contat.value}</td>`
        linha += `<td>${numer.value}</td>`
        linha += '</tr>'

        linhas += linha;

        const corpotabela = document.querySelector('tbody');
        corpotabela.innerHTML = linhas;

        numer.value = ''
        contat.value = ''
    }
}
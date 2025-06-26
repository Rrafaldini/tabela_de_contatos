const form = document.getElementById('formulario-de-cadastro');
let linhas = '';

form.addEventListener('submit', function(e) {
e.preventDefault();
adicionaLinha()
atualizaTotalContatos
});

function adicionaLinha () {
const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone-contato');
const inputEmail = document.getElementById('email-contato');
if (inputNome.value === '' || inputEmail.value === '' || inputTelefone.value === ''){
alert('Dados já cadastrados ou incompletos!');
return;
}
let tabelaCorpo = document.getElementById('tabela-corpo');
let linhas = tabelaCorpo.getElementsByTagName('tr');
for (let i = 0; i < linhas.length; i++) {
let tds = linhas[i].getElementsByTagName('td');
if ( 
tds [0].textContent === inputNome.value ||
tds [1].textContent === inputTelefone.value ||
tds [2].textContent === inputEmail.value
)

{
alert('Dados já cadastrados!');
return;
}
}

let novaLinha = `
<tr>
<td>${inputNome.value}</td>
<td>${inputTelefone.value}</td>
<td>${inputEmail.value}</td>
</tr>`;

tabelaCorpo.innerHTML += novaLinha;
atualizaTotalContatos();

inputNome.value = '' ;
inputEmail.value = '';
inputTelefone.value = '';   

}

function atualizaTotalContatos() {
const tabelaCorpo = document.getElementById('tabela-corpo');
const total = tabelaCorpo.getElementsByTagName('tr').length;
document.getElementById('total-contatos').textContent = `Total de contatos: ${total}`;
}


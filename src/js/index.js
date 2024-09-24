const inputs = document.querySelectorAll('.input')
const submit = document.getElementById('submit')

inputs.forEach(function(item){
  submit.addEventListener('click',function(){
    const errorMessage = item.nextElementSibling; // Seleciona a mensagem de erro correspondente... Ele acessa o irmão
                                                  // do item atual(irmão, mesmo nível de hierarquia do DOM)

        if (item.value.trim() === '') {
            item.classList.add('input-vazio');
            errorMessage.style.display = 'block'; // Exibe a mensagem de erro
        } else {
            item.classList.remove('input-vazio');
            errorMessage.style.display = 'none'; // Esconde a mensagem de erro
            item.classList.add('input-preenchido');
        }
})
})

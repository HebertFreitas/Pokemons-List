window.onload = function () { 


    const btn = document.querySelector('.btn');
    const input = document.querySelector('#item');   
    const list = document.querySelector('.list');
    

    btn.addEventListener('click', function () { 

 
            const entrada = input.value;


            input.value = '';
            

            const listItem = document.createElement('li');
            const btnExcluir = document.createElement('button');
            const span = document.createElement('span');
            

            listItem.appendChild(span);
            listItem.appendChild(btnExcluir); 
            

            span.textContent = entrada;
            btnExcluir.textContent = 'Excluir';
            

            list.appendChild(listItem);
            

            btnExcluir.addEventListener('click', function (){
                list.removeChild(listItem);
            })
            

            input.focus();
    })   
}
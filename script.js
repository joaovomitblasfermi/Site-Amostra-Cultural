document.addEventListener('DOMContentLoaded', function() {
    const linkSobre = document.getElementById('link-sobre-a-amostra');
    const linkProgramacao = document.getElementById('link-programacao');
    const linkCriador = document.querySelector('.link-criador');
    const linkContato = document.querySelector('a[href="#Contato"]');
    const linkExposicoes = document.querySelector('a[href="#exposicoes"]');
    const divExposicoes = document.getElementById('exposicoes');    
    const titulo = document.getElementById('titulo');
    const texto = document.getElementById('texto');
    const cronograma = document.getElementById('cronograma');
    const cronograma2 = document.getElementById('cronograma2');
    const infoCriador = document.getElementById('info-criador');
    const contatoDiv = document.getElementById('contato');
    const exposicoesDiv = document.getElementById('exposicoes'); 

    
    cronograma.style.display = 'none';
    cronograma2.style.display = 'none';
    infoCriador.style.display = 'none'; 
    contatoDiv.style.display = 'none';
    exposicoesDiv.style.display = 'none'; 
    divExposicoes.style.display = 'none';
    
   
    linkSobre.onclick = function(event) {
        event.preventDefault(); 
        
        titulo.innerHTML = 'O que é a Amostra Cultural';
        texto.innerHTML = 'A amostra cultural realizada pelos alunos com o tema "Pernambuco" foi uma celebração da diversidade cultural e artística desse estado rico em história e tradições. A iniciativa permitiu que os estudantes se organizassem em diferentes grupos, cada um com uma missão criativa, para apresentar aspectos variados da cultura pernambucana. As atividades incluíram pintura, fotografia, poesia e rimas, peça teatral, gastronomia, curta-metragem ou documentário, além de apresentações musicais.Cada grupo contribuiu com uma visão única sobre Pernambuco, explorando suas paisagens, sua arte e a expressão cultural de seu povo.';
        
        titulo.style.display = 'block'; 
        texto.style.display = 'block'; 
        cronograma.style.display = 'none'; 
        cronograma2.style.display = 'none'; 
        infoCriador.style.display = 'none'; 
        contatoDiv.style.display = 'none';
        exposicoesDiv.style.display = 'block'; 
    };

    linkExposicoes.onclick = function(event) {
        event.preventDefault(); 
    
        titulo.innerHTML = 'Exposições';
        texto.innerHTML = ''; 
    
        
        titulo.style.display = 'none';
        texto.style.display = 'none';
        cronograma.style.display = 'none'; 
        cronograma2.style.display = 'none'; 
        infoCriador.style.display = 'none'; 
        contatoDiv.style.display = 'none'; 
        divExposicoes.style.display = 'block'; 
    };


    linkCriador.onclick = function(event) {
        event.preventDefault(); 

        titulo.style.display = 'none';
        texto.style.display = 'none';
        cronograma.style.display = 'none';
        cronograma2.style.display = 'none';
        infoCriador.style.display = 'block';
        contatoDiv.style.display = 'none'; 
        exposicoesDiv.style.display = 'none';
    };

    linkProgramacao.onclick = function(event) {
        event.preventDefault(); 

        titulo.innerHTML = 'Programação';
        
        
        cronograma.style.display = 'block'; 
        cronograma2.style.display = 'block'; 
        infoCriador.style.display = 'none'; 
        contatoDiv.style.display = 'none';
        divExposicoes.style.display = 'none'; 
    };

    
    linkContato.onclick = function(event) {
        event.preventDefault(); 

        titulo.style.display = 'none';
        texto.style.display = 'none';
        cronograma.style.display = 'none'; 
        cronograma2.style.display = 'none'; 
        infoCriador.style.display = 'none'; 
        contatoDiv.style.display = 'block'; 
        exposicoesDiv.style.display = 'none';
    };
});


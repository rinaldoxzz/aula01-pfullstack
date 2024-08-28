import React from 'react'; //Import da biblioteca React
import ReactDOM from 'react-dom/client'; //Import da biblioteca ReactDOM
import Ola from './components/ola'; //Import da função Ola que está dentro do componente ola.js

const root = ReactDOM.createRoot(document.getElementById('root'));  //Constante root recebe comando ReactDOM com o elemento ID 'root' que está no arquivo html

/*root.render(      //Comando para renderizar a pagina com o conteudo dentro.
    <div>
        Ola Mundo!
    </div>
);*/

/*root.render(      //Renderizou uma função de um componente
    <Ola />
);*/

root.render(       //Forma de renderizar um componente mais de uma vez na msm
    <div>
        <Ola/>
        <Ola/>
    </div>
);
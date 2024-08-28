import React from "react";

const Ola = () => {   //Criou uma função chamada Ola que retorna uma div.

    const nome = "Rinaldo";
    const getNome = () => {
        return "Função: Rinaldo"
    } //Arrow Function que retorna uma string

    /*return <div>
        Olá, este é o primeiro componente.
    </div>  //Return com texto.*/

    /*return <div>
        Olá {nome}, este é o primeiro componente.
    </div>   //Para utilizar funções em JSX, coloque-as dentro de chaves*/

    return <div>
        Olá {getNome()}, este é o primeiro componente.
    </div>  //É possivel utilizar funções dentro das chaves também
}

export default Ola;  //Exportou a função.


//Importa o hook useState da biblioteca React
//Ele permite armazenar valores e atualizar a tela automaticamente
import { useState } from "react"; 

//Cria o componente principal da aplicação
function App() {

  //Responsável por armazenar a cidade digitada
  const [cidade, setCidade] = useState(" ");

  //Responsável por armazenar a temperatura digitada
  const [temperatura, setTemperatura] = useState(" ");

  //Responsável por armazenar o clima digitado
  const [clima, setClima] = useState(" ");

  //Responsável por armazenar a umidade digitada
  const [umidade, setUmidade] = useState(" ");

  //Função executada quando o usuário clicar no botão consultar
  function consultarClima () {

    //Verifica se a cidade digitada é São Paulo
    if (
      cidade.toLocaleLowerCase() === "são paulo" ||
      cidade.toLocaleLowerCase() === "são paulo" 
    ) {
      //Atualiza a temperatura
      setTemperatura("24°");

      //Atualiza a condição climática
      setClima("Ensolarado");

      //Atualiza a umidade
      setUmidade("60%");
    }

    else if (cidade.toLocaleLowerCase() === "curitiba") {

      setTemperatura("17°");

      setClima("Chuvoso");

      setUmidade("85%");
    }

        else if (cidade.toLocaleLowerCase() === "Orlando") {

      setTemperatura("31°");

      setClima("Chuvoso");

      setUmidade("80%");
    }

        else if (cidade.toLocaleLowerCase() === "Flórida") {

      setTemperatura("32°");

      setClima("Tempestade");

      setUmidade("76%");
    }

    //Executa caso a cidade não esteja cadastrada
    else {

      setTemperatura("--");

      setClima("Cidade não cadastrada");

      setUmidade("--");

    }

  }
}
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

  //Retorna a interface visual do sistema
  return(

    //Container principal da aplicação
    <div
    style={{
      padding: "20px",
      fontFamily: "Arial"
    }}
    >
      {/* Título principal*/}
      <h1>Sistema de Previsão do Tempo</h1>

      {/* Campo para digitação */}
      <input

      //Tipo do campo
      type="text"

      //Texto exibido dentro da caixa
      placeholder="Digite uma cidade"

      //Valor vinculado ao estado cidade
      value={cidade}

      //Atualiza o estado qaundo o usuário digita
      onChange={(e) =>setCidade(e.target.value)}
      />

      {/* Botão de consulta */}
      <button

      //Executa a função consultarClima
      onClick={consultarClima}

      //Define a margem à esquerda
      style={{
        marginLeft: "10px"
      }}
>

  {/* Texto exibido no botão */}
  Consultar

</button>

{/* Linha horizontal para separar seções */}
<hr />

{/* Exibe a cidade informada */}
<h2>Cidade: {cidade}</h2>

{/* Exibe a temperatura */}
<h2>Cidade: {temperatura}</h2>

{/* Exibe a condição climática */}
<h2>Cidade: {clima}</h2>

{/* Exibe a umidade */}
<h2>Cidade: {umidade}</h2>

    </div>
  );

}

//Exporta o componente App para ser utilizado no React
export default App;
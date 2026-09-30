//Importa o arquivo de estilo CSS
import "./App.css";

//Importa o hook useState da biblioteca React
//Ele permite armazenar valores e atualizar a tela automaticamente
import { useState } from "react"; 

//Cria o componente principal da aplicação
function App() {

  //Responsável por armazenar a cidade digitada
  const [cidade, setCidade] = useState("");

  //Responsável por armazenar a temperatura digitada
  const [temperatura, setTemperatura] = useState(" ");

  //Responsável por armazenar o clima digitado
  const [clima, setClima] = useState(" ");

  //Responsável por armazenar a umidade digitada
  const [umidade, setUmidade] = useState(" ");

  //Função executada quando o usuário clicar no botão consultar
  async function consultarClima() {

    //Verifica se o campo está vazio
    if (cidade === "") {
      alert("Digite uma cidade!");
      return;
    }

    try {

      //Faz a requisição para a API
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bf0b2ce8356b57ec51f83c33c434161b&units=metric&lang=pt_br`
      );

      //Converte a resposta para JSON
      const dados = await resposta.json();

      //Verifica se a cidade foi encontrada
      if (dados.cod !== 200) {
        alert("Cidade não encontrada");
        return;
      }

      //Atualiza a temperatura
      setTemperatura(dados.main.temp + "°C");

      //Atualiza a condição climática
      setClima(dados.weather[0].description);

      //Atualiza a umidade
      setUmidade(dados.main.humidity + "%");

      //Conteúdo aula 29/09. Enviando dados do React para uma API própria utilizando o método Post

      //Faz a requisição para a API de historico criada por você
      await fetch ("http://localhost:3000/historico", {

        //Define o método HTPP utilizado
        method: "POST",

        //Informa que os dados enviados estarão em formato JSON
        headers: {
         "Content-Type": "application/json"
        },

        //Converte o objeto JavaScript para JSON
        body: JSON.stringify({

          //Envia o nome da cidade consultada
          cidade: cidade,

          //Envia a temperatura retornada pela API OpenWeathrMap
          temperatura: dados.main.temp + "°C",

          //Envia a descrição do clima
          //O índice [0] acessa o primeiro elemento de array "weather"
          //Um array é uma lista de valores armazenados em sequência e acessados por posição
          clima: dados.weather[0].description,

          //Envia a umidade do ar
          umidade: dados.main.humidity + "%"
        })  
      }); //Fim da primeira aula

      } catch (erro) {

        console.log(erro);

        alert("Erro ao consultar a API.");
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

      {/* Esporos do Mundo Invertido */}
      <div className="upside-down-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* NOVO: Relâmpagos */}
        <div className="upside-down-lightning" aria-hidden="true">
          <span className="lightning lightning-red lightning-1" />
          <span className="lightning lightning-blue lightning-2" />
          <span className="lightning lightning-red lightning-3" />
          <span className="lightning lightning-blue lightning-4" />
        </div>

<div>
      {/* Título principal*/}
      <h1>⛈️ Sistema de Previsão do Tempo</h1>
</div>

      {/* Campo para digitação */}
      <input

      //Tipo do campo
      type="text"

      //Texto exibido dentro da caixa
      placeholder="Digite uma cidade"

      //Valor vinculado ao estado cidade
      value={cidade}

      //Atualiza o estado quando o usuário digita
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
<h2>🏙️ Cidade: {cidade}</h2>

{/* Exibe a temperatura */}
<h2>🌡️ Temperatura: {temperatura}</h2>

{/* Exibe a condição climática */}
<h2>⛅ Clima: {clima}</h2>

{/* Exibe a umidade */}
<h2>💧 Umidade: {umidade}</h2>

    </div>
  );

}

//Exporta o componente App para ser utilizado no React
export default App;
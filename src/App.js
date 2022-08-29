/*
    Notação do professor:

    Importações em .js e .jsx podem ter a omição da extensão. 

    Obs.: Você não foi penalizado por esse trecho de código,
    entra apenas como observação mesmo.
*/
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./components/views/Home/Home.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {

        /*
          Notação do professor:
  
          Imagino que adicionou Hello World para testar aplicação
          ou seguindo algum template, como não faz parte da aplicação
          pode remover. 
  
          Obs.: Você não foi penalizado por esse trecho de código,
          entra apenas como observação mesmo.
        */
      }
      <h1>hello world</h1>
    </>
  );
}

export default App;

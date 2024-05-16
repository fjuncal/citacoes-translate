import { useState } from "react";
import citacoes from "./data";
import Citacao from "./components/Citacao";

function App() {
  const [indice, setIndice] = useState(0);
  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length);
  };

  return (
    <>
      <div className="container">
        <Citacao
          texto={citacoes[indice].texto}
          autor={citacoes[indice].autor}
        />
        <button className="btn btn-success mt-2" onClick={proximaCitacao}>
          Próxima citação
        </button>
      </div>
    </>
  );
}

export default App;

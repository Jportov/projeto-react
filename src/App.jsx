import { useEffect, useState } from "react";
import Perfil from "./components/Perfil";

import ResposList from "./components/ReposList";

function App() {
  
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState(''); 

  return (<>
  <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}     />

  {nomeUsuario.length > 4 && (
    <>
      <Perfil nomeUsuario={nomeUsuario} />
      <ResposList nomeUsuario={nomeUsuario} />

    </>

  )} 

  
  </>)}

export default App

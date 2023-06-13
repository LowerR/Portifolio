import { useState } from 'react'

function Home() {
    return (

      <div>
          Home
          <Contador/>
      </div>
    )
}

function Contador() {
    let [contador,setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);

    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicione</button>
        </div>
    )
}

export default Home
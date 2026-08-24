import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Perfil from './components/Perfil'
import TarjetaPelicula from './components/TarjetaPelicula'

function App() {
  const [count, setCount] = useState(0)
  const arregloElementos = [
    {
      name: "Baggio",
      cc:"1lt",
      id: 1
    },
    {
      name: "Cepita",
      cc: "500",
      id: 2
    }
  ]

//1)  
  return (
    <> 
      <Perfil nombre="Santiago Tolaba" rol="Desarrollador" lenguajes={["JavaScript, ", "React y ", "CSS"]} />
      <TarjetaPelicula id="1" titulo="Interstellar" año="2014" vista="false" />

      {arregloElementos.map((item, index) => (
        <div key ={item.idea}>
          <p>Nombre Jugo: {item.name}</p>
        </div>
      ))}

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App

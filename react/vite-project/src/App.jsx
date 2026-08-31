import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'
import TarjetaPelicula from './components/TarjetaPelicula'
import Contador from './components/Contador'
import Acordeon from './components/Acordeon'
import Buscador from './components/Buscador'

function App() {
  const [count, setCount] = useState(0)

  const peliculas = [
    {
      id: 1,
      titulo: "Interstellar",
      año: 2014,
      vista: false
    },
    {
      id: 2,
      titulo: "The Dark Knight",
      año: 2008,
      vista: true
    },
    {
      id: 3,
      titulo: "Inception",
      año: 2010,
      vista: false
    },
    {
      id: 4,
      titulo: "Oppenheimer",
      año: 2023,
      vista: true
    }
  ]
  return (
    <>

      <Perfil
        nombre="Santiago Tolaba"
        rol="Desarrollador"
        lenguajes={["JavaScript", "React", "CSS"]}
      />

      {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          id={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
      ))}

      <Contador count={count} />

      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>

      <button onClick={() => setCount(Math.max(0, count - 1))}>
        Restar
      </button>

      <button onClick={() => setCount(count == 0)}>
        Reiniciar
      </button>

      <Acordeon
        titulo="¿Qué es React?"
        contenido="React es una biblioteca de JavaScript."
      />

      <Buscador/>

    </>
  )
}

export default App

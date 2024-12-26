import { useState, useEffect } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    console.log("efecto")

    const handleMove = (event) => {

      const { clientX, clientY } = event

      setPosition({ x: clientX, y: clientY })

      console.log("handleMove", { clientX, clientY })

    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // cleanup, se ejecuta cada vez que el componente se desmonta 
    // o cuando cambian las dependencias antes de ejecutar el efecto de nuevo
    return () => {
      console.log("cleanup")
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])  //se activa cuando cambia esta dependencia

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}>

      </div>

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}
function App() {
  const [montado, setMontado] = useState(true);


  return (
    <main>
      {montado && <FollowMouse />}
      <button onClick={() => setMontado(!montado)}>
        {montado ? 'Follow Montado' : 'Follow Desmontado'}
      </button>
    </main>
  )
}

export default App

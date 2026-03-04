import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0});

    useEffect(() => {
        
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove );
        
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }
    }, []);
    


  return (
    <div className="animate-fade-in" style={{ padding: '12px', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '8px', marginTop: '10px' }}>
        <h4 style={{ margin: 0, fontSize: '14px' }}>Usuario ya existe</h4>
        <p className="text-sm" style={{ margin: '4px 0 0' }}>Coords: { JSON.stringify( coords ) }</p>
    </div>
  )
}

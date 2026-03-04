import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (pRef.current) {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }
  }, [quote])
  


  return (
    <div className="animate-fade-in">
      <blockquote 
        style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-end',
            borderLeft: '4px solid var(--color-primary)',
            padding: '10px 20px',
            background: 'var(--color-background)',
            borderRadius: '0 8px 8px 0',
            marginBottom: '20px'
        }}
      >
          <p ref={ pRef } className="mb-1" style={{ fontSize: '18px', fontStyle: 'italic', margin: 0 }}>{ quote }</p>
          <footer className="text-muted" style={{ fontSize: '14px', marginTop: '10px' }}> — { author } </footer>
      </blockquote>

      <div style={{ background: 'var(--color-surface)', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
        <code className="text-sm">Box size: { JSON.stringify(boxSize) }</code>
      </div>
    </div>
  )
}

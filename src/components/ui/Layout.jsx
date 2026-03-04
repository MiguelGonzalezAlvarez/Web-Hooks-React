import { Link, useLocation } from 'react-router-dom';
import { Card, CardBody } from './Card';
import './Layout.css';

const DEMOS = [
  {
    path: '/01-useState',
    label: '01 - useState',
    title: 'Contadores',
    description: 'Estado local con useState',
  },
  {
    path: '/02-useEffect',
    label: '02 - useEffect',
    title: 'Efectos Secundarios',
    description: 'Efectos y limpieza',
  },
  {
    path: '/03-examples',
    label: '03 - Examples',
    title: 'Ejemplos',
    description: 'Custom hooks de ejemplo',
  },
  {
    path: '/04-useRef',
    label: '04 - useRef',
    title: ' Referencias',
    description: 'Referencias mutables',
  },
  {
    path: '/05-useLayoutEffect',
    label: '05 - useLayoutEffect',
    title: 'Layout Effect',
    description: 'Efectos sincronizados',
  },
  {
    path: '/06-memos',
    label: '06 - Memos',
    title: 'Memorización',
    description: 'useMemo y useCallback',
  },
  {
    path: '/07-tarea-memo',
    label: '07 - Tarea Memo',
    title: 'Memo Components',
    description: 'React.memo',
  },
];

export const Layout = ({ children, showDemos = false }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            Hooks App
          </Link>
          <nav className="nav">
            {DEMOS.map((demo) => (
              <Link
                key={demo.path}
                to={demo.path}
                className={`nav-link ${location.pathname === demo.path ? 'active' : ''}`}
              >
                {demo.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        {showDemos ? (
          <div className="demos-grid">
            {DEMOS.map((demo) => (
              <Link key={demo.path} to={demo.path} className="demo-card">
                <Card elevated>
                  <CardBody>
                    <span className="demo-card-title">{demo.title}</span>
                    <p className="demo-card-description">{demo.description}</p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

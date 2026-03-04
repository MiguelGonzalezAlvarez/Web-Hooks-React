# Hooks App - React Demos

Este proyecto es una colección de demos que ilustran el uso de diversos React Hooks, desde los más básicos hasta patrones avanzados de memorización.

## 🚀 Características

- **Sistema de Diseño**: Componentes UI reutilizables (Button, Card, Input, Layout)
- **Tokens CSS Centralizados**: Colores, espaciado, tipografía y sombras
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Accesibilidad**: ARIA labels, enfoque visible, contraste adecuado
- **Testing**: Pruebas unitarias con Vitest y React Testing Library
- **CI/CD**: GitHub Actions para lint, test y build

## 📂 Estructura del Proyecto

```
src/
├── 01-useState/          # Ejemplos de useState
├── 02-useEffect/         # Ejemplos de useEffect
├── 03-examples/          # Custom hooks de ejemplo
├── 04-useRef/            # useRef para referencias
├── 05-useLayoutEffect/    # useLayoutEffect
├── 06-memos/             # useMemo y useCallback
├── 07-tarea-memo/        # React.memo
├── components/ui/       # Componentes de UI
│   ├── Button.jsx       # Botón con variantes
│   ├── Card.jsx         # Tarjeta con header/body/footer
│   ├── Input.jsx        # Input accesible
│   └── Layout.jsx       # Layout con navegación
├── hooks/               # Custom hooks
│   ├── useCounter.js    # Hook de contador
│   ├── useFetch.js     # Hook para fetching
│   └── useForm.js      # Hook para formularios
├── styles/
│   └── tokens.css       # Tokens CSS
├── __tests__/           # Pruebas unitarias
└── index.css           # Estilos globales y animaciones
```

## 🛠️ Tecnologías

- **React 18**
- **Vite** - Build tool
- **React Router Dom** - Navegación
- **Vitest** - Testing
- **React Testing Library** - Pruebas de componentes
- **ESLint** - Linting
- **Prettier** - Formateo

## 🏃‍♂️ Cómo empezar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

### Testing

```bash
npm run test        # Modo watch
npm run test:run    # Una ejecución
```

### Linting

```bash
npm run lint       # Ver errores
npm run format     # Auto-formatear
```

### Build

```bash
npm run build      # Build de producción
npm run preview    # Preview del build
```

## 🎨 Sistema de Diseño

### Tokens CSS

Los tokens están definidos en `src/styles/tokens.css`:

- **Colores**: primary, secondary, success, warning, danger, etc.
- **Espaciado**: spacing-1 a spacing-12
- **Tipografía**: font-size-xs a font-size-3xl
- **Sombras**: shadow-sm, shadow-md, shadow-lg

### Componentes

#### Button

```jsx
import { Button } from './components/ui/Button';

// Variantes: primary, secondary, outline, ghost, danger, success
// Tamaños: sm, md, lg
<Button variant="primary" size="md">
  Click me
</Button>;
```

#### Card

```jsx
import { Card, CardHeader, CardBody, CardFooter } from './components/ui/Card';

<Card elevated>
  <CardHeader title="Título" description="Descripción" />
  <CardBody>Contenido</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

#### Input

```jsx
import { Input } from './components/ui/Input';

// Tamaños: sm, md, lg
// Estados: error
<Input placeholder="Escribe aquí" error={false} size="md" />;
```

## 🎬 Animaciones

Clases de animación disponibles:

- `animate-fade-in` - Fade in básico
- `animate-fade-in-up` - Fade in con slide up
- `animate-fade-in-down` - Fade in con slide down
- `animate-scale-in` - Scale in
- `animate-slide-in-right` - Slide from right
- `animate-pulse` - Pulso infinito
- `animate-spin` - Rotación infinita

Utilidades de stagger:

- `stagger-1` a `stagger-7` - Delay incremental

## 🔧 Convenciones

### Commits

Formato: `tipo(descripción)`

- `feat`: Nueva característica
- `fix`: Bug fix
- `docs`: Documentación
- `style`: Estilos
- `test`: Tests
- `refactor`: Refactorización

### Estructura de Componentes

```jsx
// Nombre: MiComponente.jsx
export const MiComponente = ({ prop1, prop2 }) => {
  return <div>{/* Contenido */}</div>;
};
```

## 📝 License

MIT

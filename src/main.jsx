import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/ui/Layout';

import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout as LayoutEffect } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';

import './index.css';

const HomePage = () => (
  <Layout showDemos />
);

const DemoWrapper = ({ children, title }) => (
  <Layout>
    <div className="animate-fade-in-up">
      <h2 className="demo-section-title">{title}</h2>
      {children}
    </div>
  </Layout>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/01-useState" element={
          <DemoWrapper title="useState - Contadores">
            <CounterApp />
            <CounterWithCustomHook />
          </DemoWrapper>
        } />
        <Route path="/02-useEffect" element={
          <DemoWrapper title="useEffect - Efectos Secundarios">
            <SimpleForm />
            <FormWithCustomHook />
          </DemoWrapper>
        } />
        <Route path="/03-examples" element={
          <DemoWrapper title="Ejemplos con Custom Hooks">
            <MultipleCustomHooks />
          </DemoWrapper>
        } />
        <Route path="/04-useRef" element={
          <DemoWrapper title="useRef - Referencias">
            <FocusScreen />
          </DemoWrapper>
        } />
        <Route path="/05-useLayoutEffect" element={
          <DemoWrapper title="useLayoutEffect">
            <LayoutEffect />
          </DemoWrapper>
        } />
        <Route path="/06-memos" element={
          <DemoWrapper title="Memorización">
            <Memorize />
            <MemoHook />
            <CallbackHook />
          </DemoWrapper>
        } />
        <Route path="/07-tarea-memo" element={
          <DemoWrapper title="React.memo - Tarea">
            <Padre />
          </DemoWrapper>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

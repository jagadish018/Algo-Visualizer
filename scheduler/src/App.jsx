import { useState } from 'react';
import Headers from './components/Headers';
import InputForm from './components/InputForm';

export default function App() {
  return (
    <div className="bg-[url('/images/01.jpg')]  h-screen w-full">
      <Headers />
      <InputForm />
    </div>
  );
}

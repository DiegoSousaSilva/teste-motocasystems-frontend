'use client'
import React, { useState } from 'react';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMoto = { code, model, color, price, status };

    // Requisição POST para adicionar uma nova moto
    await fetch('http://localhost:3001/motos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMoto)
    });

    router.push('/'); // Redireciona de volta para a página inicial após o registro
  };

  return (
    <main className="pb-20">
      <Header />
      <div className="flex justify-between items-center border-b border-titleColor pb-5">
        <h1 className="text-titleColor font-semibold text-2xl">Registro de Motos</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-titleColor font-semibold text-2xl pt-16 pb-8">
          Preencha as informações abaixo para registrar uma Moto 🏍️
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input id="codigo" label="Código" value={code} onChange={setCode} placeholder="#" />
          <Input id="modelo" label="Modelo da moto" value={model} onChange={setModel} />
          <Input id="cor" label='Cor' value={color} onChange={(value) => setColor(value.toUpperCase())} />
          <Input id="valor" label='Valor' value={price} onChange={setPrice} />

          {/* Seleção do status da moto */}
          <div className="flex relative my-4">
            <label
              htmlFor="status"
              className="absolute top-0 left-3 bg-background px-1 text-titleColor -translate-y-2"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="px-4 py-2 border border-titleColor bg-background text-white rounded-md outline-none pl-8 w-full"
            >
              <option value=""></option>
              <option value="Em estoque">Em estoque</option>
              <option value="Sem estoque">Sem estoque</option>
              <option value="Em trânsito">Em trânsito</option>
            </select>
          </div>

          {/* Botão de registro */}
          <button type="submit" className="flex text-white bg-[#3BADFB] hover:bg-[#3BADFB]/80 font-medium rounded-md items-center justify-center py-2.5 my-3">
            <Image src="/icons/plus.png" alt='search' width="14" height="14" />
            <span className="ml-2">Registrar</span>
          </button>
        </form>
      </div>
    </main>
  );
};

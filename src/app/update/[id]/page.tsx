'use client'
import React, { useState, useEffect } from 'react';
import { Moto } from '@/types';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Image from 'next/image';

interface Props {
  params: { id: string }
}

export default function Update ({ params }: Props) {
  const [moto, setMoto] = useState<Moto | null>(null); // Estado para armazenar os dados da moto
  const router = useRouter();
  const id = params.id; // ID da moto a ser atualizada

  // Efeito para carregar os dados da moto ao carregar a página
  useEffect(() => {
    if (id) {
      fetchMoto(id);
    }
  }, [id]);

  // Função para buscar os dados da moto pelo ID
  const fetchMoto = async (id: string) => {
    const response = await fetch(`http://localhost:3001/motos/${id}`);
    const data = await response.json();
    setMoto(data);
  };

  // Função para lidar com o envio do formulário de atualização
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (moto) {
      // Requisição PUT para atualizar os dados da moto
      await fetch(`http://localhost:3001/motos/${moto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(moto)
      });
      router.push('/'); // Redireciona de volta para a página inicial após a atualização
    }
  };

  // Se os dados da moto não foram carregados ainda, exibe uma mensagem de carregamento
  if (!moto) return <div className="text-titleColor font-semibold text-2xl py-3">Carregando...</div>;

  return (
    <main className="pb-20">
      <Header />
      <div className="flex justify-between items-center border-b border-titleColor pb-5">
        <h1 className="text-titleColor font-semibold text-2xl">Editar</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-titleColor font-semibold text-2xl pt-16 pb-8">
          Edite as informações que preferir! 📝
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input id="codigo" label="Código" value={moto.code} onChange={(newValue) => setMoto({ ...moto, code: newValue })} placeholder="#" />
          <Input id="modelo" label="Modelo da moto" value={moto.model} onChange={(newValue) => setMoto({ ...moto, model: newValue })} />
          <Input id="cor" label='Cor' value={moto.color} onChange={(newValue) => setMoto({ ...moto, color: newValue })} />
          <Input id="valor" label='Valor' value={moto.price} onChange={(newValue) => setMoto({ ...moto, price: newValue })} />

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
              value={moto.status}
              onChange={(e) => setMoto({ ...moto, status: e.target.value })}
              required
              className="px-4 py-2 border border-titleColor bg-background text-white rounded-md outline-none pl-8 w-full"
            >
              <option value=""></option>
              <option value="Em estoque">Em estoque</option>
              <option value="Sem estoque">Sem estoque</option>
              <option value="Em trânsito">Em trânsito</option>
            </select>
          </div>

          {/* Botão de atualização */}
          <button type="submit" className="flex text-white font-semibold bg-[#3BADFB] hover:bg-[#3BADFB]/80 font-medium rounded-md items-center justify-center py-2.5 my-3">
            <Image src="/icons/arrow.png" alt='search' width="14" height="14" />
            <span className="ml-2">Atualizar</span>
          </button>
        </form>
      </div>
    </main>
  );
};


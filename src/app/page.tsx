"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moto } from '@/types';
import Header from '@/components/Header';
import Image from 'next/image';
import CardItem from '@/components/CardItem';

export default function Home() {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMotos();
  }, []);

  // Função para buscar todas as motos da API
  const fetchMotos = async () => {
    try {
      const response = await fetch('http://localhost:3001/motos');
      const data = await response.json();
      setMotos(data);
    } catch (error) {
      console.error('Failed to fetch motos:', error);
    }
  };

  // Função para atualizar o estado 'search' conforme o usuário digita no campo de busca
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Função para deletar uma moto pelo ID
  const deleteMoto = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/motos/${id}`, {
        method: 'DELETE'
      });
      fetchMotos(); // Atualiza a lista de motos após a exclusão
    } catch (error) {
      console.error('Failed to delete moto:', error);
    }
  };

  // Filtra as motos com base no valor de 'search'
  const filteredMotos = motos.filter(
    (moto) =>
      moto.model.toLowerCase().includes(search.toLowerCase()) ||
      moto.color.toLowerCase().includes(search.toLowerCase()) ||
      moto.code.includes(search.toLowerCase())
  );

  return (
    <main>
      <Header />
      <div className="flex justify-between items-center border-b border-titleColor pb-10 mb-10">
        <h1 className="text-titleColor font-semibold text-2xl">Tabela de Motos</h1>
        <div className="flex items-center space-x-4">

          {/* Campo de busca */}
          <div className="relative flex items-center">
            <Image src="/icons/search.png" alt='search' width="14" height="14" className="absolute left-3"/>
            <input
              type="text"
              placeholder="Buscar por código, nome e cor"
              value={search}
              onChange={handleSearch}
              className="ps-10 px-3 py-2 border border-titleColor rounded-md bg-transparent focus:border-white text-titleColor"
            />
          </div>

          {/* Botão para registrar nova moto */}
          <Link href="/register">
            <button className="flex items-center px-4 py-2 bg-[#3BADFB] text-white rounded-md hover:bg-blue-600 font-semibold hover:text-titleColor">
              <Image src="/icons/plus.png" alt='search' width="14" height="14" />
              <span className="ml-2">Novo Registro</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Lista de motos filtradas */}
      <ul>
        {filteredMotos.map((moto) => (
          <li key={moto.id}>
            {/* Componente para exibir detalhes da moto */}
            <CardItem moto={moto} deleteMoto={deleteMoto} />
          </li>
        ))}
      </ul>
    </main>
  );
};

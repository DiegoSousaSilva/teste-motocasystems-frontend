"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Moto } from '@/types';
import Image from 'next/image';
import { formatPrice } from './FormatPrice'; // Importação de uma função para formatar preço

interface CardItemProps {
  moto: Moto; // Interface que define a estrutura dos dados da moto
  deleteMoto: (id: string, callback: () => void) => void; // Função para deletar uma moto
}

const CardItem: React.FC<CardItemProps> = ({ moto, deleteMoto }) => {
  const [isDeleting, setIsDeleting] = useState(false); 

  // Função para lidar com a exclusão da moto
  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteMoto(moto.id, () => setIsDeleting(false));
    }, 2000); // Simulação de exclusão com delay de 2 segundos
  };

  // Função para retornar classes de estilo com base no status da moto
  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Em estoque':
        return 'text-[#56CA00] bg-[#354546]';
      case 'Sem estoque':
        return 'text-[#FF4C51] bg-[#55304C]';
      case 'Em trânsito':
        return 'text-[#FFB400] bg-[#544146]';
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#312D4B] p-4 rounded-md flex items-center my-2">
      <div className="pr-20">
        <span className="text-[#8C57FF] font-medium"> #{moto.code}</span>
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-white font-semibold">
          {moto.model}   
          {/* Span com classes dinâmicas com base no status da moto */}
          <span className={`rounded-xl px-2 mx-2 font-medium ${getStatusClasses(moto.status)}`}>
            {moto.status}
          </span>
        </span>
        <span className="text-white">Valor: {formatPrice(Number(moto.price))} </span> {/* Exibição do preço formatado */}
        <span className="text-white">Cor: {moto.color.toUpperCase()} </span> {/* Exibição da cor em uppercase */}
      </div>
      <div className="flex justify-end space-x-3 mr-10">
        {/* Botão de exclusão da moto */}
        <button onClick={handleDelete} className="flex items-center space-x-1 text-white">
          {/* Condicional para exibir ícone de loading durante a exclusão */}
          {isDeleting ? (
            <div 
              className="animate-spin inline-block size-5 border-2 border-current border-t-transparent text-[#FF4C51]  rounded-full" 
              role="status" 
              aria-label="loading">
                <span className="sr-only">Carregando...</span>
              </div>
          ) : (
            <Image src="/icons/delete.png" alt="Delete" width="20" height="20" />
          )}
        </button>
        {/* Botão para editar a moto */}
        <Link href={`/update/${moto.id}`}>
          <button className="flex items-center space-x-1 text-white">
            <Image src="/icons/eyes.png" alt="Edit" width="21" height="18" /> 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;

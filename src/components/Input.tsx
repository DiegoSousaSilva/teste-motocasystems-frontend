import React, { ChangeEvent } from 'react';

interface InputProps {
  id: string; // ID do input
  label: string; // Texto do label
  value: string; // Valor do input
  onChange: (value: string) => void; // Função de callback para mudança do valor
  placeholder?: string; // Texto do placeholder opcional
}

const Input: React.FC<InputProps> = ({ id, label, value, onChange, placeholder = '' }) => {
  // Função para lidar com a mudança de valor no input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative my-4">
      <label
        htmlFor={id}
        className="absolute top-0 left-3 bg-background px-1 text-titleColor -translate-y-2"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="px-4 py-2.5 border border-titleColor bg-transparent text-white rounded-md outline-none pl-8"
      />
    </div>
  );
};

export default Input;

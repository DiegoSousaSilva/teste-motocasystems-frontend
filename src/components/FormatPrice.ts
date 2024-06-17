/**
 * Formata um número para exibição como preço em formato de moeda brasileira (BRL).
 * @param price O preço a ser formatado.
 * @returns Uma string formatada como preço em BRL.
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

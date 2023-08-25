export function convertToMonetary(value: number): string {
  // return only string
  return value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')
}

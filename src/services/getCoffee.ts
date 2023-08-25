import { coffees } from './listCoffees'

export function getCoffee(id: number) {
  return coffees.find((coffee) => coffee.id === id)
}

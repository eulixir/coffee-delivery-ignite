import AmericanExpresso from '../assets/coffees/american-expresso.png'
import Arabica from '../assets/coffees/arabica.png'
import Cappuccino from '../assets/coffees/cappuccino.png'
import CoffeWithMilk from '../assets/coffees/coffee-with-milk.png'
import CreamExpresso from '../assets/coffees/cream-expresso.png'
import Cuban from '../assets/coffees/cuban.png'
import IcedExpresso from '../assets/coffees/iced-expresso.png'
import Hawaiian from '../assets/coffees/hawaiian.png'
import HotChocolate from '../assets/coffees/hot-chocolate.png'
import Irish from '../assets/coffees/irish.png'
import Latte from '../assets/coffees/latte.png'
import Macchiato from '../assets/coffees/macchiato.png'
import Mocaccino from '../assets/coffees/mocaccino.png'
import TraditionalExpresso from '../assets/coffees/traditional-expresso.png'

export interface CoffeeProps {
  id: number
  name: string
  image: string
  price: string
  description: string
  tags: string[]
}

export const coffees: CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: TraditionalExpresso,
    price: '9,90',
    description: 'O tradicional café feito com água quente e grãos moidos',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    image: AmericanExpresso,
    price: '9,90',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    image: CreamExpresso,
    price: '9,90',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    image: IcedExpresso,
    price: '9,90',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    image: CoffeWithMilk,
    price: '9,90',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    image: Latte,
    price: '9,90',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    name: 'Cappuccino',
    image: Cappuccino,
    price: '9,90',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    image: Macchiato,
    price: '9,90',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    image: Mocaccino,
    price: '9,90',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    image: HotChocolate,
    price: '9,90',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    image: Cuban,
    price: '9,90',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoolico', 'gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    image: Hawaiian,
    price: '9,90',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
  },

  {
    id: 13,
    name: 'Arábica',
    image: Arabica,
    price: '9,90',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    image: Irish,
    price: '9,90',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoolico'],
  },
]

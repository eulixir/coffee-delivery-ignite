import * as S from './styles'
import { coffees } from '../../services/listCoffees'
import { CoffeeItem } from '../CoffeeItem'

export function CoffeeList() {
  return (
    <S.CoffesList>
      {coffees.map((coffee) => {
        return <CoffeeItem key={coffee.id} {...coffee} />
      })}
    </S.CoffesList>
  )
}

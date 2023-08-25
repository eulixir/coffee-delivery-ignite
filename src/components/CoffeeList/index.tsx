import * as S from './styles'
import { coffees } from '../../services/listCoffees'
import { CoffeeItem } from '../CoffeeItem'

export function CoffeeList() {
  return (
    <S.CoffesList>
      {coffees.map((coffee) => {
        return (
          <div>
            <CoffeeItem
              id={coffee.id}
              description={coffee.description}
              image={coffee.image}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags}
            />
          </div>
        )
      })}
    </S.CoffesList>
  )
}

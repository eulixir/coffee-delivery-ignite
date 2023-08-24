import * as S from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { coffees } from '../../services/listCoffees'
export function CoffeeList() {
  return (
    <S.CoffesList>
      {coffees.map((coffee) => {
        return (
          <div>
            <S.CoffeItem>
              <div>
                <img src={coffee.image} />
                <S.CoffeeTag>
                  {coffee.tags.map((tag) => {
                    return <span>{tag}</span>
                  })}
                </S.CoffeeTag>
                <S.CoffeeName>{coffee.name}</S.CoffeeName>
                <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>
                <S.BuyContainer>
                  <p>
                    R$ <span>{coffee.price}</span>
                  </p>
                </S.BuyContainer>
              </div>
              <div />
            </S.CoffeItem>
          </div>
        )
      })}
    </S.CoffesList>
  )
}

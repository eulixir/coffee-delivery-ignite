import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { convertToMonetary } from '../../services/convertToMonetary'
import { CoffeeProps } from '../../services/listCoffees'
import { Counter } from '../Counter'
import * as S from './styles'

export function CoffeeItem(coffee: CoffeeProps) {
  const { image, tags, description, price, name, id } = coffee

  const { cartItems } = useContext(ShoppingCartContext)

  const coffeeQuantity = cartItems.find((item) => item.id === id)?.quantity

  return (
    <S.CoffeeItem>
      <div>
        <img src={image} />
        <S.CoffeeTag>
          {tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </S.CoffeeTag>
        <S.CoffeeName>{name}</S.CoffeeName>
        <S.CoffeeDescription>{description}</S.CoffeeDescription>
        <S.BuyContainer>
          <p>
            R$ <span>{convertToMonetary(price)}</span>
          </p>
          <div>
            <span>
              <Counter id={id} quantity={coffeeQuantity} />
            </span>
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </S.BuyContainer>
      </div>
      <div />
    </S.CoffeeItem>
  )
}

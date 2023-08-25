import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CoffeeProps } from '../../services/listCoffees'
import * as S from './styles'

export function CoffeeItem(coffee: CoffeeProps) {
  const { image, tags, description, price, name, id } = coffee

  const { addCoffeeToShoppingCart, removeCoffeeFromShoppingCart, cartItems } =
    useContext(ShoppingCartContext)

  const coffeeQuantity = cartItems.find((item) => item.id === id)?.quantity

  function countAdd() {
    addCoffeeToShoppingCart(id)
  }

  function countRemove() {
    removeCoffeeFromShoppingCart(id)
  }

  return (
    <S.CoffeeItem>
      <div>
        <img src={image} />
        <S.CoffeeTag>
          {tags.map((tag) => {
            return <span>{tag}</span>
          })}
        </S.CoffeeTag>
        <S.CoffeeName>{name}</S.CoffeeName>
        <S.CoffeeDescription>{description}</S.CoffeeDescription>
        <S.BuyContainer>
          <p>
            R$ <span>{price}</span>
          </p>
          <div>
            <span>
              <button>
                <Minus size={14} weight="bold" onClick={countRemove} />
              </button>
              <p>{coffeeQuantity || 0}</p>
              <button>
                <Plus size={14} weight="bold" onClick={countAdd} />
              </button>
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

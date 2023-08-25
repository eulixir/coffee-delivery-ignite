import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeProps } from '../../services/listCoffees'
import * as S from './styles'

export function CoffeeItem(coffee: CoffeeProps) {
  const { image, tags, description, price, name } = coffee

  const [count, setCount] = useState(0)

  function countAdd() {
    setCount(count + 1)
  }

  function countRemove() {
    if (count === 0) return

    setCount(count - 1)
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
              <p>{count}</p>
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

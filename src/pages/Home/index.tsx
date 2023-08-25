import * as S from './styles'
import CoffeCup from '../../assets/coffee-cup.png'
import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { CoffeeList } from '../../components/CoffeeList'

export function Home() {
  return (
    <S.Container>
      <S.Banner>
        <main>
          <S.BannertText>
            <h3>Encontre o café perfeito para qualquer hora do dia</h3>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </S.BannertText>

          <S.ProsText>
            <span>
              <div>
                <ShoppingCart size={20} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <div>
                <Package size={20} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </span>

            <span>
              <div>
                <Clock size={20} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <div>
                <Coffee size={20} weight="fill" />
              </div>
              <p> O Café chega fresquinho até você</p>
            </span>
          </S.ProsText>
        </main>

        <img src={CoffeCup} />
      </S.Banner>

      <S.CoffesContainer>
        <h3>Nossos Cafés</h3>
        <CoffeeList />
      </S.CoffesContainer>
    </S.Container>
  )
}

import bannerimg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerimg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span> por R$ 190,00
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar esse jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

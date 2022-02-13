import React from "react";
import './index.css'

import Bistro from './../Assets/imagens/bistro.jpg'
import Local from './../Assets/imagens/mapa.png'

const Home = () => {
  return (
    <main>
      <div className="header">
        <h1> Bem vindo ao Bistro </h1>
        <p> Lorem ipsum dolor sit amet. A corporis officia et veniam voluptatem sed corrupti numquam sit itaque expedita est similique distinctio. Ad suscipit doloremque et aliquid explicabo qui iure expedita qui distinctio sunt At eius repudiandae non inventore error. At repellendus voluptatem est accusamus doloribus et autem laboriosam qui dicta dignissimos ad deserunt sequi et culpa beatae et rerum sequi.</p>
        <br/>
        <p> Ex deserunt soluta 33 magnam officia qui dolores esse. Eum ratione iusto et esse libero sit deleniti suscipit ut quae saepe eum dolore voluptas ea nihil aperiam et possimus quia. Ea porro enim et perspiciatis reiciendis et Quis officiis et sint sequi eos libero dolores qui autem distinctio et laboriosam accusantium? Sed sapiente quidem ab aliquam quia aut quia Quis aut fugiat quia non dicta eaque quo omnis sequi rem omnis aliquid!</p>
      </div>
      <div className="conteudo">
        <img src={Bistro} id="bebida"/>
        <h2 id="titulo">Rem reiciendis quia sed doloremque quam et explicabo accusamus ut cumque inventore et molestiae expedita 33 consequatur dignissimos! Qui autem voluptatem vel nihil voluptatem quo labore eaque non dolorum veniam. Sit eaque reiciendis aut eaque enim sit reprehenderit cupiditate in laudantium dolores cum fugiat beatae rem commodi odio ut repellendus molestias. Sit dolore eius et quos officiis sed distinctio illum non harum explicabo et distinctio internos.

          Quo quia voluptate vel ipsam fugit aut perspiciatis vitae est tempora velit. Sit numquam sint ad quidem totam sed culpa corrupti a dicta vitae et voluptatibus facere. Eum quas laborum quo ipsa sunt non earum nulla.
            </h2>
      </div>
      <div className="local">
      <div className="gridItem">
          <h1>Endereço:</h1>
          <h2>
            Av. Paulista, 1347 - São Paulo<br/> 
            Telefones: (11)99987-0000 (11)
            3265-2034
          </h2>
        </div>
        <div className="gridItem">
          <img src={Local}></img>
        </div>
      </div>
    </main>
  );
};
export default Home;

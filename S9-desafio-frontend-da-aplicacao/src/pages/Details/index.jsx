import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container, SubtitleContainer, TitleContainer, Tags } from "./styles";

import { Rate } from "../../components/Rate";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Link } from "../../components/Link";

export function Details() {
  return (
    <>
      <Header />
      <Container>
        <Link to={"/"} icon={FiArrowLeft}>
          Voltar
        </Link>

        <main>
          <TitleContainer>
            <h1>O Senhor dos Anéis</h1>
            <Rate userRate={3} starSize={20} />
          </TitleContainer>

          <SubtitleContainer>
            <div>
              <img
                src="https://github.com/wilsontestoni.png"
                alt="Imagem do usuário"
              />
              <p>Por Wilson Testoni</p>
            </div>
            <div>
              <FiClock />
              <p>23/05/22 às 08:00</p>
            </div>
          </SubtitleContainer>

          <Tags>
            <Tag title="Fantasia" />
            <Tag title="Ação" />
          </Tags>

          <p>
            ChatGPT O Senhor dos Anéis é uma trilogia épica de fantasia dirigida
            por Peter Jackson, baseada nos livros de J.R.R. Tolkien. A história
            se passa em um mundo chamado Terra-média, onde uma jóia poderosa, o
            Um Anel, cai nas mãos de um hobbit chamado Frodo Baggins. Ele é
            encarregado de destruir o Anel no Monte da Perdição para evitar que
            caia nas mãos do maligno Senhor do Escuro, Sauron, que busca dominar
            o mundo. Frodo é acompanhado por amigos leais: Samwise Gamgee, Merry
            e Pippin, além de outros personagens como Aragorn, Legolas o elfo e
            Gimli o anão. Juntos, eles enfrentam uma jornada perigosa através de
            terras hostis e batalhas épicas contra criaturas malignas e
            exércitos de Sauron. le é encarregado de destruir o Anel no Monte da
            Perdição le é encarregado de destruir o Anel no Monte da Perdição
            para evitar que caia nas mãos do maligno Senhor do Escuro, Sauron,
            que busca dominar o mundo. Frodo é acompanhado por amigos leais:
            Samwise Gamgee, Merry e Pippin, além de outros personagens como
            Aragorn, Legolas o elfo e Gimli o anão. Juntos, eles enfrentam uma
            jornada perigosa através de terras hostis e batalhas épicas contra
            criaturas malignas e exércitos de Sauron. le é encarregado de
            destruir o Anel no Monte da Perdição criaturas malignas e exércitos
            de Sauron. le é encarregado de destruir o Anel no Monte da Perdição
            le é encarregado de destruir o Anel no Monte da Perdição para evitar
            que caia nas mãos do maligno Senhor do Escuro, Sauron, que busca
            dominar o mundo. Frodo é acompanhado por amigos leais: Samwise
            Gamgee, Merry e Pippin, além de outros personagens como Aragorn,
            Legolas o elfo e Gimli o anão. Juntos, eles enfrentam uma jornada
            perigosa através de terras hostis e batalhas épicas contra criaturas
            malignas e exércitos de Sauron. le é encarregado de destruir o Anel
            no Monte da Perdição
          </p>
        </main>
      </Container>
    </>
  );
}

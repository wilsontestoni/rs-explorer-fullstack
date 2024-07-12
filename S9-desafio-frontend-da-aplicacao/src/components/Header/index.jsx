import { Container, Logo, Profile, Divisor, LinkWithoutStyle } from "./styles";

import { Input } from "../../components/Input";

export function Header() {
  return (
    <>
      <Container>
        <Logo to={"/"}>RocketMovies</Logo>

        <Input type="text" placeholder="Pesquisar pelo titulo" />

        <Profile>
          <div>
            <LinkWithoutStyle to={"/profile"}>
              <strong>Wilson Testoni</strong>
            </LinkWithoutStyle>
            <button>Sair</button>
          </div>
          <LinkWithoutStyle to={"/profile"}>
            <img
              src="https://github.com/wilsontestoni.png"
              alt="Imagem do usuário"
            />
          </LinkWithoutStyle>
        </Profile>
      </Container>

      <Divisor />
    </>
  );
}

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background, Anchor } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input icon={FiUser} type="text" placeholder="Nome" />
        <Input icon={FiMail} type="text" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha" />

        <Button>Cadastrar</Button>

        <Anchor to={"/"} icon={FiArrowLeft}>
          Voltar para o login
        </Anchor>
      </Form>

      <Background />
    </Container>
  );
}

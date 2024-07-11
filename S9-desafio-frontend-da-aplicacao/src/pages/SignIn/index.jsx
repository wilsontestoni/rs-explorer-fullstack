import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background, Anchor } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input icon={FiMail} type="text" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha" />

        <Button>Entrar</Button>

        <Anchor to={"/register"}>Criar conta</Anchor>
      </Form>

      <Background />
    </Container>
  );
}

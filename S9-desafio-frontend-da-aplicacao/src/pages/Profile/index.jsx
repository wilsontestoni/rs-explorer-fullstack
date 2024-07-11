import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to={"/"} icon={FiArrowLeft}>
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/wilsontestoni.png"
            alt="Foto do usuário"
          />

          <label htmlFor="file">
            <FiCamera />
          </label>
          <input type="file" id="file" />
        </Avatar>

        <Input readOnly icon={FiUser} type="text" value="Wilson Testoni" />
        <Input readOnly icon={FiMail} type="text" value="wilsontestonisp2@hotmail.com" />
        <Input icon={FiLock} type="password" placeholder="Senha Atual" />
        <Input icon={FiLock} type="password" placeholder="Nova Senha" />

        <Button disabled>Salvar</Button>
      </Form>
    </Container>
  );
}

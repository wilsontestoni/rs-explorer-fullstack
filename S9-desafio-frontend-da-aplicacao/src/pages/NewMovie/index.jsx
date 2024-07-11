import { FiArrowLeft } from "react-icons/fi";
import { Container, Form, DeleteButton } from "./styles";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Link } from "../../components/Link";

export function NewMovie() {
  return (
    <>
      <Header />
      <Container>
        <Link to={"/"} icon={FiArrowLeft}>
          Voltar
        </Link>

        <Form>
          <h1>Novo Filme</h1>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>
          <div>
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo marcador" />
          </div>

          <div>
            <DeleteButton>Excluir Alterações</DeleteButton>
            <Button>Salvar Alterações</Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

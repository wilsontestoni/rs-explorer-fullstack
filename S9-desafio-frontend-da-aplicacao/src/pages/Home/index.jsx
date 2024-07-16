import { FiPlus } from "react-icons/fi";
import { Container, Main, Movies, ButtonNewMovie } from "./styles";

import { MovieCard } from "../../components/MovieCard";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <div>
            <h1>Meus filmes</h1>
            <ButtonNewMovie to={"/new"}>
              <FiPlus size={28} />
              Adicionar Filme
            </ButtonNewMovie>
          </div>

          <Movies>
          <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
            <MovieCard
              data={{
                title: "O Senhor dos Anéis",
                rate: 3,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem asperiores non praesentium, odio id saepe possimus magnam voluptatibus facere tenetur perferendis, provident minima voluptatum, itaque adipisci sapiente veritatis nisi.",
                tags: [
                  { id: "1", name: "Fantasia" },
                  { id: "2", name: "Ação" },
                ],
              }}
            />
          </Movies>
        </Main>
      </Container>
    </>
  );
}

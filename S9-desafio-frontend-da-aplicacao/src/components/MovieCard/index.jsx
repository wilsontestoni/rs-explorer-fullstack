import { Container } from "./styles";

import { Rate } from "../Rate";
import { Tag } from "../Tag";

export function MovieCard({ data }) {
  return (
    <Container>
      <h2>{data.title}</h2>
      <Rate userRate={data.rate} starSize={12} />
      <p>{data.description}</p>

      {data.tags && (
        <ul>
          {data.tags.map((tag) => {
            return <Tag title={tag.name} key={tag.id} />;
          })}
        </ul>
      )}
    </Container>
  );
}

import { Container } from "./styles";

export function Link({ icon: Icon, children, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
}

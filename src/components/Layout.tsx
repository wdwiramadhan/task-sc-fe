import { Header } from "./Header";
import { Container } from "./Container";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main className="py-8 md:py-12">{children}</main>
      </Container>
    </>
  );
};

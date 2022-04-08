import { Link } from "react-router-dom";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className=" bg-white py-4 shadow-[0px_1px_4px_rgba(0,0,0,0.16)] sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg font-semibold text-gray-800">
            Books App
          </Link>
          <Link to="/favorite" className="text-gray-800 text-sm">
            Favorite
          </Link>
        </div>
      </Container>
    </header>
  );
};

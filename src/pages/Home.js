import { StyledLayout } from "../components/Layout/Layout.styled";
import Header from "../components/Header/Header";
import List from "../components/List/List";

const Home = () => {
  /**
   * the Home page component imports a styled-component StyledLayout
   * which becomes the wrapper of the Header and List page components
   */
  return (
    <StyledLayout>
      <Header />
      <List />
    </StyledLayout>
  );
};

export default Home;

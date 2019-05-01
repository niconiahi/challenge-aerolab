import { useContext } from "react";
import styled from "@emotion/styled";
import TopBar from "./components/TopBar";

// State
import UserContext from "../state/user/context";

const MainLayout = ({ children }) => {
  const userContext = useContext(UserContext);
  return (
    <Container>
      <TopBar userData={userContext.userState.data} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template: 10vh / repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  grid-gap: 3vh;
  padding: 1vh;
  background-color: #FFEC5C;
`;

export default MainLayout;

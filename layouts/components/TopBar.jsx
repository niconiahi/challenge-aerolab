import styled from "@emotion/styled";
import Link from "next/link";

// Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";

const TopBar = ({ userData }) => {
  return (
    <Container>
        <Link href="/">
          <a>
            <HomeIcon />
          </a>
        </Link>
      
      <RightContainer>
        <span>{userData && `Points:  ${userData.points}`}</span>
        <Link href="/user">
          <a>
            <FaceIcon />
          </a>
        </Link>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #002c54;
  padding: 3vh;

  a,
  p {
    color: #ffec5c;
  }

  span {
    margin-right: 3vh;
    color: #ffec5c;
    font-size: 1.4em;
    border-bottom: 1px dashed #d70026;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default TopBar;

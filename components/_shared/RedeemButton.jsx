import { useContext } from "react";
import styled from "@emotion/styled";
import api from "../../api";

// State
import UserContext from "../../state/user/context";

const RedeemButton = ({ product }) => {
  const userContext = useContext(UserContext);
  const userData = userContext.userState.data;

  const redeemProduct = async productId => {
    await api.user.redeemProduct(productId);
    const userDataRes = await api.user.getData();

    userContext.updateUserData(userDataRes.data);
  };

  return (
    <>
      <Button
        product={product}
        userData={userData}
        onClick={
          userData.points > product.cost
            ? () => redeemProduct(product._id)
            : false
        }
      >
        {userData.points > product.cost ? (
          "REDEEM"
        ) : (
          <strong>{`- ${Math.abs(userData.points - product.cost)}`}</strong>
        )}
      </Button>
    </>
  );
};

const Button = styled.div`
  display: flex;
  align-items: center;
  color: ${({ userData, product }) =>
    userData.points > product.cost ? "#ffec5c" : "#d70026"};
  justify-content: center;
  height: 8vh;
  width: 25vh;
  background-color: ${({ userData, product }) =>
    userData.points > product.cost ? "#d70026" : "#002c54"};
  cursor: ${({ userData, product }) =>
    userData.points > product.cost ? "pointer" : "auto"};
  border-radius: 0.5vh;
  margin: 2vh;
`;

export default RedeemButton;

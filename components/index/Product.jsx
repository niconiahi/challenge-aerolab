import styled from "@emotion/styled";
import Link from "next/link";

// Components
import RedeemButton from "../_shared/RedeemButton";

const Product = ({ product, userData }) => {
  const productNameForUrl = name => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Container>
      {product && userData && (
        <>
          <h2>{product.name}</h2>
          <Link
            href={{
              pathname: "/detail",
              query: { id: product._id }
            }}
            as={`/detail/${productNameForUrl(product.name)}`}
          >
            <img src={product.img.url} />
          </Link>
          <h3>{product.category}</h3>
          <span>{product.cost}</span>
          <RedeemButton product={product} userData={userData} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #d70026;

  h2 {
    color: #002c54;
  }

  h3,
  span {
    background-color: #002c54;
    color: #ffec5c;
    padding: 0.5vh;
    border-radius: 0.5vh;
    align-self: flex-end;
    margin-right: 1vh;
  }

  img {
    border: 1px dashed #d70026;
    cursor: pointer;
  }
`;

export default Product;

// _id, category, cost, name, img.url

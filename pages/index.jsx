import { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import * as R from "ramda";
// API
import api from "../api";

// Components
import MainLayout from "../layouts/MainLayout";
import Product from "../components/index/Product";

// State
import ProductContext from "../state/product/context";
import UserContext from "../state/user/context";

const IndexPage = ({ products, userData }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortedPrice, setSortedPrice] = useState(true);
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    productContext.updateProductList(products);
    userContext.updateUserData(userData);
  }, []);

  const filterOptions = () => {
    return productContext.productState.products.reduce((acc, product) => {
      if (acc.indexOf(product.category) === -1) {
        acc.push(product.category);
      }
      return acc;
    }, []);
  };

  return (
    <>
      <MainLayout>
        <FiltersContainer>
          <h5>Filtrar por: </h5>
          <h5>Categorias </h5>
          <select onChange={e => setSelectedFilter(e.target.value)}>
            <option value="">All</option>
            {filterOptions().map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <h5>Precio </h5>
          <Button onClick={() => setSortedPrice(!sortedPrice)}>
            {sortedPrice ? "Ascendending" : "Descending"}
          </Button>
        </FiltersContainer>
        {productContext.productState.products &&
          R.pipe(
            R.filter(product => product.category.includes(selectedFilter)),
            R.ifElse(() => sortedPrice, R.sort(R.ascend(R.prop("cost"))), R.sort(R.descend(R.prop("cost")))),
            R.map(product => (
              <Product
                key={product._id}
                product={product}
                userData={userContext.userState.data}
              />
            ))
          )(productContext.productState.products)}
      </MainLayout>
    </>
  );
};

const FiltersContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #002c54;
  padding: 1vh;

  select {
    background-color: #d70026;
    box-sizing: border-box;
    margin: 0;
    color: #ffec5c;
    border: none;
    padding: 0.5vh;
    width: 15vh;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5vh;
  }

  h5 {
    color: #ffec5c;
    margin: 0 1vh;
    padding: none;
  }
`;

const Button = styled.button`
  background-color: #d70026;
  box-sizing: border-box;
  margin: 0;
  color: #ffec5c;
  border: none;
  padding: 0.5vh;
  width: 15vh;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5vh;
`;

IndexPage.getInitialProps = async () => {
  let products = [];
  let userData = {};
  try {
    const userDataRes = await api.user.getData();
    userData = userDataRes.data;

    const productsRes = await api.product.getAllProducts();
    products = productsRes.data;
  } catch (err) {
    console.error(err);
  }
  return { products, userData };
};

export default IndexPage;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function ProductDetails() {
  const data_glasses = require("../db.json");
  const history = useHistory();

  const handleBack = () => {
    history.replace("/");
  };

  const { name } = useParams();
  const Image = data_glasses.glasses.map((url) => (
    <Link
      to={`/categoryPage/${url.category}/${url.name}/${url.id}`}
      style={{ textDecoration: "none" }}
    >
      <img src={url.url} />
    </Link>
  ));

  return (
    <Container>
      <Header>
        <Back onClick={handleBack}> &#8592; BACK </Back>
      </Header>
      <Heading>{name}</Heading>
      {data_glasses.glasses
        .filter((i) => i.name === name)
        .map((url) => (
          <Img>
            <img src={url.url} alt="error" />
          </Img>
        ))}
      {data_glasses.glasses
        .filter((i) => i.name === name)
        .map((price) => (
          <h3>Price: ${price.price}</h3>
        ))}
      {data_glasses.glasses
        .filter((i) => i.name === name)
        .map((category) => (
          <h3>Category: {category.category}</h3>
        ))}
      <Content>{Image}</Content>
    </Container>
  );
}
const Container = styled.div``;
const Back = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 140px;
    height: 110px;
  }
`;

export default ProductDetails;

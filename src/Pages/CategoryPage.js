import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function CategoryPage() {
  const data_glasses = require("../db.json");
  const { category } = useParams();

  const history = useHistory();

  const handleBack = () => {
    history.replace("/");
  };
  const nameItem = data_glasses.glasses
    .filter((i) => i.category == category)
    .map((name) => (
      <Link
        to={`/categoryPage/${category}/${name.name}/:id`}
        style={{ textDecoration: "none" }}
      >
        <li>
          {name.name} - Price ${name.price}
        </li>
      </Link>
    ));

  return (
    <>
      <Header>
        <Back onClick={handleBack}> &#8592; BACK </Back>
      </Header>
      <Heading>{category}</Heading>

      <ol>{nameItem}</ol>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Back = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 50px;
`;
const Heading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;

export default CategoryPage;

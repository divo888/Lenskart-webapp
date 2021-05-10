import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link, useParams } from "react-router-dom";

function HomePage() {
  const data_glasses = require("../db.json");
  console.log(data_glasses);
  const data = data_glasses.glasses.map((doc) => doc.category);
  console.log(data);
  let Categories = [...new Set(data)];
  console.log(Categories);

  const types = Categories.map((type) => (
    <Link to={`/categoryPage/${type}`} style={{ textDecoration: "none" }}>
      <li>{type}</li>
    </Link>
  ));

  return (
    <Container>
      <Header>Categories</Header>
      <Content>
        <ol>{types}</ol>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 1.5rem;
`;

const Content = styled.div``;

export default HomePage;

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const BeerCardWrapper = styled("section")`
  padding: 1em;
  border: 1px solid #eee;
`;

const BeerCardHeading = styled("header")`
  margin-bottom: 1em;

  h2 {
    margin-bottom: 0.25em;
    
  & > a {
    text-decoration: none;
  }
`;

const Image = styled("img")`
  max-width: 100%;
  max-height: 240px;
  margin-bottom: 2em;
`;

const beerLink = id => `/beer/${id}`;

const BeerCard = ({ id, name, image, abv }) => (
  <BeerCardWrapper>
    <BeerCardHeading>
      <h2>
        <Link to={beerLink(id)}>{name}</Link>
      </h2>
      <p>ABV: {abv}%</p>
    </BeerCardHeading>
    <Link to={beerLink(id)}>
      <Image src={image} alt={`Bottle of ${name}`} />
    </Link>
    <div>
      <Link to={beerLink(id)}>More details</Link>
    </div>
  </BeerCardWrapper>
);

BeerCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  abv: PropTypes.number
};

export default BeerCard;

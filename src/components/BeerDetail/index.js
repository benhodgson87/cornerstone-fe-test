import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const BeerName = styled("h1")`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const BeerDetailContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled("div")`
  display: flex;
  justify-content: center;

  img {
    max-height: 320px;
  }
`;

const AbvNote = styled("p")`
  font-size: 2em;
`;

const Tagline = styled("p")`
  font-size: 1.5em;
  font-style: italic;
`;

const Description = styled("p")`
  font-size: 1em;
`;

const BeerDetail = ({ id, name, image, abv, tagline, description }) => (
  <Fragment>
    <BeerName>{name}</BeerName>
    <BeerDetailContainer>
      <ImageWrapper>
        <img src={image} alt={`Bottle of ${name}`} />
      </ImageWrapper>
      <div>
        {abv && <AbvNote>{abv}%</AbvNote>}
        {tagline && <Tagline>{tagline}</Tagline>}
        {description && <Description>{description}</Description>}
      </div>
    </BeerDetailContainer>
  </Fragment>
);

BeerDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  abv: PropTypes.number,
  tagline: PropTypes.string,
  description: PropTypes.string
};

export default BeerDetail;

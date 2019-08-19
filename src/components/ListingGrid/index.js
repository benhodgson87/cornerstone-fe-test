import React from "react";
import styled from "@emotion/styled";
import deepSort from "deep-sort";
import { BeerCard } from "../";

const GridWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2em;
  grid-column-gap: 2em;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ListingGrid = ({ items, sortBy, sortOrder }) => (
  <GridWrapper>
    {items &&
      deepSort(items, sortBy, sortOrder).map(item => (
        <BeerCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image_url}
          abv={item.abv}
        />
      ))}
  </GridWrapper>
);

export default ListingGrid;

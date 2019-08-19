import React from "react";
import styled from "@emotion/styled";

const ListingHeaderWrapper = styled("header")`
  display: block;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    display: flex;
  }
`;

const ListingHeaderLeft = styled("div")`
  flex: 1;
`;

const ListingHeaderRight = styled("div")`
  justify-content: right;
`;

const ListingHeader = ({ leftContent, rightContent }) => (
  <ListingHeaderWrapper>
    <ListingHeaderLeft>{leftContent}</ListingHeaderLeft>
    <ListingHeaderRight>{rightContent}</ListingHeaderRight>
  </ListingHeaderWrapper>
);

export default ListingHeader;

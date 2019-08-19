import React, { useEffect, useContext } from "react";
import ky from "ky";
import {
  CellarContext,
  getCellarStart,
  getCellarSuccess,
  setCellarSort
} from "../../store"; // generally prefer to alias paths to avoid this
import {
  PageHeading,
  ListingHeader,
  ListingGrid,
  MessageBar
} from "../../components";

/*
 * Would ideally move all these constants out to somewhere nice and reusable
 * or possibly create simple action creators for each option
 */
const SORT_OPTIONS = {
  ABV_ASC: {
    by: "abv",
    order: "ASC"
  },
  ABV_DESC: {
    by: "abv",
    order: "DESC"
  },
  NAME_ASC: {
    by: "name",
    order: "ASC"
  },
  NAME_DESC: {
    by: "name",
    order: "DESC"
  }
};

const Listing = () => {
  const { state, dispatch } = useContext(CellarContext);

  useEffect(() => {
    async function fetchBeerListing() {
      dispatch(getCellarStart());

      const response = await ky.get("https://api.punkapi.com/v2/beers").json();

      dispatch(getCellarSuccess(response));
    }

    fetchBeerListing();
  }, [dispatch]);

  const { contents, sort, error, submitting } = state;

  return (
    <section>
      <ListingHeader
        leftContent={<PageHeading>Punk Beers</PageHeading>}
        rightContent={
          <select
            onChange={e =>
              dispatch(setCellarSort(SORT_OPTIONS[e.target.value]))
            }
          >
            <option value={"NAME_ASC"}>Name (A - Z)</option>
            <option value={"NAME_DESC"}>Name (Z - A)</option>
            <option value={"ABV_ASC"}>ABV (Lowest)</option>
            <option value={"ABV_DESC"}>ABV (Highest)</option>
          </select>
        }
      />
      {submitting && (
        <MessageBar type="info">
          Brewing your beer listings...{" "}
          <span role="img" aria-label="cheers beer glasses emoji">
            🍻
          </span>
        </MessageBar>
      )}
      {!submitting && error && (
        <MessageBar type="negative">
          Error retrieving beers{" "}
          <span role="img" aria-label="teary sadface emoji">
            😢
          </span>
        </MessageBar>
      )}
      {!submitting && contents.length > 0 && (
        <ListingGrid
          items={contents}
          sortBy={sort.by || "name"}
          sortOrder={sort.order || "ASC"}
        />
      )}
    </section>
  );
};

export default Listing;

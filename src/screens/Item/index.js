import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ky from "ky";
import { CellarContext, getCellarStart, getCellarSuccess } from "../../store"; // prefer to alias paths to avoid this
import { BeerDetail, MessageBar } from "../../components";

const Listing = ({ match }) => {
  const { state, dispatch } = useContext(CellarContext);

  const { contents, error, submitting } = state;

  /**
   * Given more time I'd refactor this to only make the call if the beer
   * does not exist in the store state
   */

  useEffect(() => {
    async function fetchBeer(id) {
      dispatch(getCellarStart());

      const response = await ky
        .get(`https://api.punkapi.com/v2/beers/${id}/`)
        .json();

      dispatch(getCellarSuccess(response));
    }

    fetchBeer(match.params.id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currentItem =
    contents.length > 0 &&
    contents.find(item => item.id === parseFloat(match.params.id));

  return (
    <section>
      <Link to={"/"}>&lsaquo; back</Link>
      {submitting && (
        <MessageBar type="info">
          Getting beer with id <em>{match.params.id}</em>{" "}
          <span role="img" aria-label="beer glass emoji" />
        </MessageBar>
      )}
      {!submitting && error && (
        <MessageBar type="negative">
          Error retrieving beer <em>{match.params.id}</em>{" "}
          <span role="img" aria-label="teary sadface emoji">
            😢
          </span>
        </MessageBar>
      )}
      {!submitting && currentItem && (
        <BeerDetail
          id={currentItem.id}
          name={currentItem.name}
          image={currentItem.image_url}
          abv={currentItem.abv}
          tagline={currentItem.tagline}
          description={currentItem.description}
        />
      )}
    </section>
  );
};

export default Listing;

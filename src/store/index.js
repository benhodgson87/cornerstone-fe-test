import React, { useReducer } from "react";

/**
 * This is the cellar where we store all our beers
 * It's very similar to using Redux, but the the new
 * core React useReducer functionality, and context
 *
 * For the purposes of this exercise I've chucked everything
 * into a single file with a single reducer, but on a larger
 * app I'd probably consider splitting this out a bit more
 */

/* Actions */
export const GET_CELLAR_START = "@CELLAR/GET_CELLAR_START";
export const GET_CELLAR_SUCCESS = "@CELLAR/GET_CELLAR_SUCCESS";
export const GET_CELLAR_FAIL = "@CELLAR/GET_CELLAR_FAIL";
export const SET_CELLAR_SORT = "@CELLAR/SET_CELLAR_SORT";

/* Action Creators */
export const getCellarStart = () => ({
  type: GET_CELLAR_START
});

export const getCellarSuccess = payload => ({
  type: GET_CELLAR_SUCCESS,
  payload
});

export const getCellarFail = () => ({
  type: GET_CELLAR_START
});

export const setCellarSort = payload => ({
  type: SET_CELLAR_SORT,
  payload
});

/* State */
const initialState = {
  submitting: false,
  success: false,
  error: false,
  contents: [],
  sort: {
    by: "name",
    order: "ASC"
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CELLAR_START: {
      return {
        ...state,
        submitting: true
      };
    }

    case GET_CELLAR_SUCCESS: {
      return {
        ...state,
        submitting: false,
        success: true,
        contents: action.payload.map(item => ({
          id: item.id,
          name: item.name,
          image_url: item.image_url,
          abv: item.abv,
          tagline: item.tagline,
          description: item.description
        }))
      };
    }

    case GET_CELLAR_FAIL: {
      return {
        ...state
      };
    }

    case SET_CELLAR_SORT: {
      return {
        ...state,
        sort: {
          ...state.sort,
          ...action.payload
        }
      };
    }

    default:
      return state;
  }
};

const CellarContext = React.createContext(initialState);

const CellarProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CellarContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CellarContext.Provider>
  );
};

export { CellarContext, CellarProvider };

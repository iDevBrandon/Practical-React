import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useBusinessSearch from "../hooks/yelp-api/useBusinessSearch";
import NavBar from "../NavBar/NavBar";
import SearchResultsSummary from "../NavBar/SearchResultsSummary/SearchResultsSummary";
import SubNav from "../NavBar/SubNav/SubNav";
import SearchResults from "./SearchResults/SearchResults";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(term, locationParam);

  if (!term || !locationParam) {
    history.push("/");
  }

  function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
    );

    performSearch({ term, location });
  }

  return (
    <div>
      <NavBar term={term} location={locationParam} search={search} />
      <SubNav />
      <SearchResultsSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
};

export default Search;

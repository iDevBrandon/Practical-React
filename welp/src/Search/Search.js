import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";
import { useLocation } from "react-router";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";
import { useHistory } from "react-router-dom";

const Search = () => {
  let location = useLocation();
  let history = useHistory();

  const params = new URLSearchParams(location.search);
  const term = params.get("find_opin");
  const locationParam = params.get("find_loc");
  const [businesses, amountResults, searchParams, setSearchParams] =
    useBusinessSearch(term, locationParam);

  if (!term || !locationParam) {
    history.push("/");
  }

  function search(term, location) {
    // url update
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    history.push(
      `/search?find_opin=${encodedTerm}&find_loc=${encodedLocation}`
    );
    setSearchParams({ term, location });
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

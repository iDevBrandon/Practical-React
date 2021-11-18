import { useState, useEffect } from "react";
import * as api from "./api";

export function useBusinessSearch(term, location) {
  // business array from api
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  // fetch businesses from api - useEffect hook
  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      try {
        const rawData = await api.get("/businesses/search", searchParams);
        const response = await rawData.json();
        setBusinesses(response.businesses);
        setAmountResults(response.total);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchParams]);
  // return some data that compoents can see
  return [businesses, amountResults, searchParams, setSearchParams];
}

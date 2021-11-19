# Welp

## 01 - Project setup

nothing special

## 02 - start building Yelp's top navigation bar

filling in top nav component

## 03 | finish Yelp's top navigation bar

working on nav bar

## 04 | building out the landing page's search area

adding logo on the main page

## 05 | building out Yelp's search bar

working on search bar components

## 06 | polishing the landing pages' search bar

added search bar to the main page

## 07 | adding search suggestions inside the landing page

Add suggestions into landing page

## 08 | finish layout of landing page

Complete the landing page design

## 09 | create search results component & add react-router

i still use react-router-dom v5 as i'm still not that familiar with v6.

## 10 | create Yelp's navigation bar

simple design of nav bar

## 11 | finish Yelp's navigation bar

we use a props to pass "small" props so we decide which one should be medium size or not applied.

## 12 | starting to build Yelp's sub-navigation bar

render sub-nav icons dynamically

## 13 | improve Yelp's sub-navigation bar

Simple border line with props

## 14 | finalize Yelp's sub-navigation bar

match the width siz

## 15 | create search results summary component

start buidling the summary section

## 16 | finish search results summary component

Finish the summary section option part

## 17 | start displaying search results

start building each result component (design)

## 18 | improving search result items

positioning the result item

## 19 | add ratings and tags to search results

Display the star ratings (design)

## 20 | finish static search results list

CSS work

## 21 | submitting forms in the landing page

use useState for term and location to get the user's input and console.log it

## 22 | wiring up landing page and search results list

Proper start!!!
applied useHistory to push the url.

## 23 | pre-fill search bar in search result list

useLocation in Search component
pass props to Search component

## 24 | exploring Yelp Fusion API with Postman

use bearer token to get the data

## 25 | adding networking logic by using the fetch API

working on authentication for FE

## 26 | create custom hook to fetch data from Yelp API

working on async/await for fetching.
A bit complicated but this is an example of custom hook(useBusinessSearch)

* Option 1: *
I made lambda function that hits the Yelp API endpoint. So you do not need an API key anymore. Simply send a request to
<https://yelp-backend.netlify.app/.netlify/functions/search?location=berlin&term=burgers>

The location and the term are the values you pull from the form

## 27 | fetch data from Yelp Fusion API using react hooks

set the url "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";
click the button <https://cors-anywhere.herokuapp.com/corsdemo>
so, now i can see 200 response ok

## 28 | display data from Yelp API in search results

render dynamic data from Yelp API with rating & reviewCount

## 29 | display tags and contact details of businesses

business details

## 30 | allow user to perform multiple searches

in search page, make the search bar works after getting "search" props
SearchParams contains {term: 'burger', location: 'london'}

## #31 | polishing the application and adding a spinner

url update & adding a spinner

## What i found as an extra

combine the included stackoverflow explanation with the given url property received in the fetch request for the redirect to the yelp page and use the coordinates property to do the same for a google maps api call

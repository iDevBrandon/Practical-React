import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <div className="home__section">
        <Card
          title="Toronto"
          description="Sunset helicopter tour over downtown Toronto. Another beautiful day in a beautiful city. If you ever get a chance to see a city by air go for it, you wont regret it!"
          src="https://images.unsplash.com/photo-1519832979-6fa011b87667?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80"
        />
        <Card
          title="Aditya Chinchure"
          description="VanCity is ranked among the best cities to live in. It’s obvious, who doesn’t like mountains, beaches and a beautiful skyline?"
          src="https://images.unsplash.com/photo-1519181258491-889c2b001485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        />
        <Card
          title="Stuart Weir"
          description="I had just come home from a long day at work, and needed some time to just take in the beauty of this city. I struggled to find parking, worrying I would lose the last of the light for the evening."
          src="https://images.unsplash.com/photo-1519832979-6fa011b87667?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80"
        />
      </div>
      <div className="home__section">
        <Card
          title="frankfurt"
          description="I had just come home from a long day at work, and needed some time to just take in the beauty of this city. I struggled to find parking, worrying I would lose the last of the light for the evening."
          src="https://images.unsplash.com/photo-1542344807-157f76301e8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80"
          price="$350/night"
        />
        <Card
          title="Patrick Mueller"
          description="I had just come home from a long day at work, and needed some time to just take in the beauty of this city. I struggled to find parking, worrying I would lose the last of the light for the evening."
          src="https://images.unsplash.com/photo-1603978111532-3fd4fe27ccf0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80"
          price="$190/night"
        />
        <Card
          title="Christian Salow"
          description="I had just come home from a long day at work, and needed some time to just take in the beauty of this city. I struggled to find parking, worrying I would lose the last of the light for the evening."
          src="https://images.unsplash.com/photo-1513496335913-a9aab0fc1318?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
          price="$690/night"
        />
      </div>
    </div>
  );
}

export default Home;

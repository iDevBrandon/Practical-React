import React from "react";
import { Button, JobContainer } from "./Job.styles";

const Job = (props) => {
  return (
    <JobContainer>
      <h2>{props.title}</h2>
      <small>{props.name}</small>
      <h3>{props.date}</h3>
      <article>
        <p>
          Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
          leggings offal cold-pressed brunch neutra. Hammock photo booth
          live-edge disrupt.
        </p>
        <p>
          Post-ironic selvage chambray sartorial freegan meditation. Chambray
          chartreuse kombucha meditation, man bun four dollar toast street art
          cloud bread live-edge heirloom.
        </p>
        <p>
          Butcher drinking vinegar franzen authentic messenger bag copper mug
          food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas
          single-origin coffee franzen cloud bread tilde vegan flexitarian.
        </p>
      </article>
      <Button>More info</Button>
    </JobContainer>
  );
};

export default Job;

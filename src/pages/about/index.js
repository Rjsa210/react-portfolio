import React from 'react';
import headshot from './assets/headshot.jpg';


function About() {
  return (
    <div>
      <div className="container blurred-box">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1>About Me</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <figure className="figure bioImage">
              <img src={headshot} className="figure-img img-fluid rounded" alt="Me in Mammoth Lakes" />
              <figcaption className="figure-caption">Me in Mammoth Lakes</figcaption>
            </figure>
            <section>
              <p>Hello! My name is Reid Johnson. I was born in Brownesville Texas and spent much of my childhood on my
                grandparents farm outside of Harlingen, my family later moved to San Antonio
                where I spent my formative years. Always one to travel I have lived in Montana, Washington, Arizona,
                Colorado, and of course Texas. I currently live in
                Mammoth Lakes California, a small ski town about a five hour drive north of Los Angeles.
              </p>
              <p>I spent much of my life cooking professionally as an Executive Chef, and have experience in all manner of
                restaurants. However, recently I decided it was time for
                a change and an end to 80 hour work weeks. So I entered the world of web-development.
              </p>
              <p>In my spare time I am an avid skier, fisherman, and of course cook; though these days I get to cook for
                myself, my friends and my family.
              </p>
            </section>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;

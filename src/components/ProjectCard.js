import React, { Component } from 'react'


function ProjectCard(props) {
  return (

    <div className="col-sm-6 col-md-6 col-lg-6">
      <figure className="figure project-image" >
        <a href={props.url}><img src={'./src/assets' + props.image}
          className="figure-img img-fluid rounded portfolio-img" alt={props.title}/></a>
        <figcaption className="figure-caption">{props.title}: {props.description}</figcaption>
      </figure>
    </div>

  )
}


export default ProjectCard;
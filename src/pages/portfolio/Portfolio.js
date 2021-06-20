import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'
import ProjectCard from '../../components/ProjectCard'



  function Portfolio(props) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h1>Portfolio</h1>
              <hr />
            </div>
          </div>
          <div className="row text-center">
            {props.projects.map(project => (
              <ProjectCard title={project.title} url={project.url} description={project.description} image={project.image} />
            ))}
          

            
          </div>
        </div>
      </div>

    )
  }

  export default Portfolio


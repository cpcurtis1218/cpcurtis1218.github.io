import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Projects extends Component {
  render () {
    return (
      <div className="projects">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/LKqK3Qe.jpg"
              alt="Expense Tracker"
            />
            <Carousel.Caption className="p-0 mb-0 carousel-caption">
              <h3>Expense Tracker</h3>
              <p>This is my capstone project. Users can track personal expenses</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/TuWXIsQ.png"
              alt="Nile E-Commerce"
            />

            <Carousel.Caption className="p-0 mb-0 carousel-caption">
              <h3>Nile</h3>
              <p>Nile is an E-Commerce site that was built as a group project.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/pDBBlik.png"
              alt="Wanderlust"
            />

            <Carousel.Caption className="p-0 mb-0 carousel-caption">
              <h3>Wanderlust</h3>
              <p>Wanderlust was built to help users keep track of travel destinations.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/oPXYp6z.png"
              alt="Tic-Tac-Snow"
            />

            <Carousel.Caption className="p-0 mb-0 carousel-caption">
              <h3>Tic-Tac-Snow</h3>
              <p>Tic-Tac-Snow was my first project. It is a tic-tac-toe game.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Projects

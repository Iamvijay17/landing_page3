import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carsole.css";
import CarouselFirstimg from './asset/Carsoleimg/Firstimg.jpg';
import CarouselSecendimg from './asset/Carsoleimg/Secendimg.jpg';
import CarouselThriedimg from './asset/Carsoleimg/Thriedimg.jpg';
import CarouselFourthimg from './asset/Carsoleimg/Fourthimg.jpg';
import CarouselFifthimg from './asset/Carsoleimg/Fifthimg.jpg';

const Carsole = () => {
  return (
    <div>
      <Carousel fade className="carousle">
      <Carousel.Item >
        <img src={CarouselFirstimg} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselSecendimg} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselThriedimg} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselFourthimg} text="Fourth slide" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselFifthimg} text="Fifthimg slide" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carsole;

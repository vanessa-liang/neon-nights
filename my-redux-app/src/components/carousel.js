
import React, { Component , useState } from 'react';
import Carousel from 'react-bootstrap-carousel';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// export default class SimpleSlider extends Component {
  function Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>AVATAR</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
// const CarouselComponent = (props) => {

  

  

  
//     // const [index, setIndex] = useState(0);
  
//     // const handleSelect = (selectedIndex, e) => {
//     //   setIndex(selectedIndex);
//     // };
  
//     return (
//       <>
//       {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
//       <Carousel>
//       {props.movies.map((movie) => (
//         <div key={movie.id}>

//             <Link key={movie.id} to={`/Single/${movie.id}`}>
//             <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={`https://www.themoviedb.org/t/p/original/${movie.backdrop_path}`}
//             alt="First slide"
//           />
  
//         </Carousel.Item>
//             </Link>
          
//         </div>
//       ))}

//         {/* <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={`${imageFolderPath}megan.jpeg`}
//             alt="Second slide"
//           />
  
         
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={`${imageFolderPath}avatar.jpeg`}
//             alt="Third slide"
//           />
//         </Carousel.Item> */}
//       </Carousel>
//       </>
//     );
//   }

//   export default CarouselComponent;

  












































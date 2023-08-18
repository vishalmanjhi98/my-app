// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;


import React from "react";
import HoverCarousel from "hover-carousel";



const MyImageCarousel = () => {
  const images = [
    "https://img.freepik.com/free-psd/medical-healthcare-poster-template_23-2148940481.jpg?w=1060&t=st=1692311543~exp=1692312143~hmac=bc12eb7079bb312375a85f1b31f6138e42033f474abf6276d4b5d4713a79b160",
    "https://img.freepik.com/free-psd/world-health-day-banner-template_23-2149292490.jpg?size=626&ext=jpg&ga=GA1.2.225029185.1692311540&semt=ais",
    "https://img.freepik.com/free-psd/world-health-day-horizontal-banner-template_23-2148881215.jpg?size=626&ext=jpg&ga=GA1.2.225029185.1692311540&semt=ais",
    // Add more image URLs here
    "https://img.freepik.com/premium-psd/healthcare-medical-social-media-web-banner-facebook-cover-photo-design-template_220443-350.jpg?size=626&ext=jpg&ga=GA1.2.225029185.1692311540&semt=ais",
    "https://img.freepik.com/free-psd/world-health-day-banner-template_23-2148887538.jpg?size=626&ext=jpg&ga=GA1.2.225029185.1692311540&semt=ais",
  ];

  return (
    <div>
        <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
 
    <p style={{ margin: "0 10px" }}><h1>𝐓𝐫𝐢𝐩𝐥𝐞 𝐓𝐨𝐩 𝐏𝐚𝐭𝐭𝐞𝐫𝐧</h1></p>
 
    <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
</div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;
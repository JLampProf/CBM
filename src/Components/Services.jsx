import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="services">
      <h1>Services</h1>
      <Slider className="services-carousel-container" {...settings}>
        <div className="services-carousel-container-item">
          <div className="services-carousel-container-item-image">
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_ai-generated-circuit-board-background_36185769.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Material</h1>
            <p>FR4</p>
            <p>Flex</p>
            <p>Aluminium</p>
            <p>Rogers</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_a-close-up-of-a-circuit-boards_46358745.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Board Layers</h1>
            <p>Single Sided</p>
            <p>Double Sided With THP</p>
            <p>Double Sided without THP</p>
            <p>Multi-layers up to 32 layers</p>
            <p>High Precision Boards</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_green-electronic-board_57781117.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Board Thicknesses</h1>
            <p>0.4mm</p>
            <p>0.8mm</p>
            <p>1.0mm</p>
            <p>1.2mm</p>
            <p>1.6mm</p>
            <p>2.0mm</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_ai-generated-circuit-board-background_36185967.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Masks</h1>
            <p>Green</p>
            <p>Red</p>
            <p>Blue</p>
            <p>Black</p>
            <p>White</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_computer-circuit-board-electronic-technology-background_10719035.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Finishes</h1>
            <p>HALS (with lead)</p>
            <p>HALS (lead free)</p>
            <p>Gold</p>
            <p>Silver</p>
            <p>Tin</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_close-up-of-a-circuit-board-with-many-electronic-components_49083110.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Stencils</h1>
            <p>Small Proto</p>
            <p>Framed Stencils</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Services;

{
  /* <div className="services-carousel-container">
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_ai-generated-circuit-board-background_36185769.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Material</h1>
            <h1>{number}</h1>
            <p>FR4</p>
            <p>Flex</p>
            <p>Aluminium</p>
            <p>Rogers</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_a-close-up-of-a-circuit-boards_46358745.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Board Layers</h1>
            <p>Single Sided</p>
            <p>Double Sided With THP</p>
            <p>Double Sided without THP</p>
            <p>Multi-layers up to 32 layers</p>
            <p>High Precision Boards</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_green-electronic-board_57781117.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Board Thicknesses</h1>
            <p>0.4mm</p>
            <p>0.8mm</p>
            <p>1.0mm</p>
            <p>1.2mm</p>
            <p>1.6mm</p>
            <p>2.0mm</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_ai-generated-circuit-board-background_36185967.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Masks</h1>
            <p>Green</p>
            <p>Red</p>
            <p>Blue</p>
            <p>Black</p>
            <p>White</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_computer-circuit-board-electronic-technology-background_10719035.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Finishes</h1>
            <p>HALS (with lead)</p>
            <p>HALS (lead free)</p>
            <p>Gold</p>
            <p>Silver</p>
            <p>Tin</p>
          </div>
        </div>
        <div className="services-carousel-container-item">
          <div>
            <img
              className="services-carousel-container-item-img"
              src="./vecteezy_close-up-of-a-circuit-board-with-many-electronic-components_49083110.jpg"
              alt="circuit board"
            />
          </div>
          <div className="services-carousel-container-item-info">
            <h1>Stencils</h1>
            <p>Small Proto</p>
            <p>Framed Stencils</p>
          </div>
        </div>
      </div> */
}

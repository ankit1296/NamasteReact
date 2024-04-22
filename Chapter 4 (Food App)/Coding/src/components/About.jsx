const About = () => {
  return (
    <div className="about-wrapper">
      <div className=" no-gutters align-items-center bg-warning">
        <div className=" w-100 col-sm-12 col-md-12 col-lg-12">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/fLz2fgU_x1Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
      <div className="row no-gutters align-items-center bg-warning">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="p-5 img_with_text">
            <img src="https://careers.swiggy.com/assets/img/inverted-commas.png" />
            <h3>
              Our mission is to elevate the quality of life for the urban
              consumer with unparalleled convenience. Convenience is what makes
              us tick. It's what makes us get out of bed and say, "Let's do
              this."
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

function Carousel() {
  return (
    <div className="Carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="https://resources.workable.com/wp-content/uploads/2019/12/how_to_hire_in_construction.png" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
            <h5>This is Caption Header</h5>
            <p>This is Caption paragraph</p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="https://resources.workable.com/wp-content/uploads/2019/12/how_to_hire_in_construction.png" alt="Second slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="https://resources.workable.com/wp-content/uploads/2019/12/how_to_hire_in_construction.png" alt="Third slide"/>
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
        </div>
    </div>
  );
}

export default Carousel;

// import "../styles/footer.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="bg-dark text-light pt-5 pb-4" id="footer-info">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Company Name
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo laudantium voluptate fuga laboriosam ratione iste eveniet?
                Voluptatibus eum dolore molestias porro? Ab incidunt eum fuga,
                pariatur obcaecati esse quasi.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Services
              </h5>
              <p>
                <a href="app.js" className="text-white">
                  Vendors
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Dates
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Fruits
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Vegetables
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Staples
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Useful Links
              </h5>
              <p>
                <a href="App.js" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Catering
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="App.js" className="text-white">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 row-align-items-center">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Contacts
              </h5>
              <p>
                <i className="fas fa-home mr-3"></i> 123 Palm Ave. San Diego,
                California, 93944
              </p>
              <p>
                <i className="fas fa-envelope mr-3 "></i>{" "}
                HeavyIndustriesWargaming@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +1 3168548988
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +92 058 874 25
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="col-md-1 col-lg-1"></div>
          <div className="row-align-items-center">
            <div className="col-md-7 col-lg-8">
              <br></br>
              <br></br>

              <p>
                Copyright
                <i className="fas fa-copyright"></i> 2021 All Right Reserved by:
                <a href="App.js" className="text-info">
                  <strong>KyleStudio.tech</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="App.js" className="btn-floating btn-sm text-white">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="App.js" className="btn-floating btn-sm text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="App.js" className="btn-floating btn-sm text-white">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="App.js" className="btn-floating btn-sm text-white">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="App.js" className="btn-floating btn-sm text-white">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

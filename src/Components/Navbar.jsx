import React from 'react'
const Navbar = () => {
  return (
    <>
        <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        
         <img src="assets/img/logo.png" alt="" /> 
        <h1>Biocryptic<span>.</span></h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="dropdown"><a href="#"><span>Work FLow</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Work Flow</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      </div>
      </header>
      <section id="hero" class="hero">

    <div class="info d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h2 data-aos="fade-down">Welcome to <span>Biocryptic</span></h2>
            <p data-aos="fade-up">We are the one stop solution for Medicine and Bio Equipment Storage System Allied with Blockchain Technology. With the Next Generation Marketplace you as a customer are able to sell and buy medicine directly and the transaction is done through METAMASK crypto walet which adds to the data safety and authencity of the medicines on the supplychain</p>
            <div>
            <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started" href="#seller">Medicine Seller</a>
            <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started" href="#buyer">Medicine Buyer</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

      <div class="carousel-item active" style={{backgroundImage:" url(https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?cs=srgb&dl=pexels-julie-viken-593451.jpg&fm=jpg)"}}></div>
      <div class="carousel-item" style={{backgroundImage:" url(https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?cs=srgb&dl=pexels-pixabay-208512.jpg&fm=jpg)"}}></div>
      <div class="carousel-item" style={{backgroundImage:" url(https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?cs=srgb&dl=pexels-anna-shvets-3683074.jpg&fm=jpg)"}}></div>
      <div class="carousel-item" style={{backgroundImage:" url(https://images.pexels.com/photos/3936358/pexels-photo-3936358.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-3936358.jpg&fm=jpg)"}}></div>
      <div class="carousel-item" style={{backgroundImage:" url(https://images.pexels.com/photos/1138746/pexels-photo-1138746.jpeg?cs=srgb&dl=pexels-antonella-traversaro-1138746.jpg&fm=jpg)"}}></div>

      <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>

  </section>
    </>
  )
}

export default Navbar
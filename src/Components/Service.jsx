import React from 'react'

const Service = () => {
  return (
    <>
        <section id="alt-services" class="alt-services">
      <div class="container" data-aos="fade-up">

        <div class="row justify-content-around gy-4">
          <div class="col-lg-6 img-bg" style={{backgroundImage:"url(https://images.pexels.com/photos/8830662/pexels-photo-8830662.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-8830662.jpg&fm=jpg)"}} data-aos="zoom-in" data-aos-delay="100"></div>
          <div class="col-lg-5 d-flex flex-column justify-content-center">
            <h3>How does the Next Gen Biocryptic Marketplace Works?</h3>
            <p>The marketplace is based on the Web3.0 hence the data stored is on the Etherium blockchain. The Hospital indiviual network database has the list of medicines and the patient data stored on the Etherium blockchain. A platform is being provided for several hospitals to merge their resources together effectively.</p>
            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i class="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4><a href="" class="stretched-link">BUYERS MARKET</a></h4>
                <p>Verfied buyers and hospitals are able to purchase the listed medicine from the marketplace.</p>
              </div>
            </div>

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i class="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4><a href="" class="stretched-link">SELLERS MARKET</a></h4>
                <p>Verfied sellers and hospitals are able to list the medicines on the marketplace.</p>
              </div>
            </div>

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i class="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><a href="" class="stretched-link">MEDICINE STORAGE SYSTEM</a></h4>
                <p>A medicine storage system fully customized with Rfid technology for maintaining database of the hospitals or sellers stock.</p>
              </div>
            </div>

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><a href="" class="stretched-link">HOSPITAL DATABASE</a></h4>
                <p>A realtime database hospital network connected with the medicine storage system.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Service
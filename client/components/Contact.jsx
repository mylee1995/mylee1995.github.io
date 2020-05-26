import React from 'react';

function Contact() {
  return (
    <section id='contact' class='contact'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title'>
          <h2>Contact</h2>
        </div>

        <div class=''>
          <div class=''>
            <div class='info'>
              <div class='address'>
                <i class='icofont-google-map'></i>
                <h4>Location:</h4>
                <p>2016 Commonwealth Ave, Chestnut Hill, MA 02467</p>
              </div>

              <div class='email'>
                <i class='icofont-envelope'></i>
                <h4>Email:</h4>
                <p>mylee1995@gmail.com</p>
              </div>

              <div class='phone'>
                <i class='icofont-phone'></i>
                <h4>Call:</h4>
                <p>(551) 259 7779</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

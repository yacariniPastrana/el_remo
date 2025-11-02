import React from 'react';

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">El Remo</div>
            <div className="nav-links">
              <a href="#about">Nosotros</a>
              <a href="#menu">Menú</a>
              <a href="#contact">Contacto</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>El Sabor Fresco del Mar</h1>
            <p>La mejor cevichería de la ciudad.</p>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2>Sobre Nosotros</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              En "El Remo", nos dedicamos a traer los sabores más frescos del océano directamente a tu plato. 
              Nuestra pasión por el ceviche se refleja en cada uno de nuestros platillos, preparados con 
              ingredientes de la más alta calidad y recetas que han pasado de generación en generación.
            </p>
          </div>
        </section>

        <section id="menu">
          <div className="container">
            <h2>Nuestro Menú</h2>
            <div className="menu-grid">
              <div className="menu-item">
                <h3>Ceviche Clásico</h3>
                <p>Pescado fresco marinado en jugo de limón, con cilantro, cebolla roja y un toque de ají. Acompañado de camote y choclo.</p>
                <p><strong>$15</strong></p>
              </div>
              <div className="menu-item">
                <h3>Ceviche Mixto</h3>
                <p>Una explosión de mariscos con pescado, pulpo, calamar y camarones, todo en nuestra leche de tigre especial.</p>
                <p><strong>$18</strong></p>
              </div>
              <div className="menu-item">
                <h3>Tiradito a la Crema de Ají Amarillo</h3>
                <p>Finas láminas de pescado bañadas en una suave y sabrosa crema de ají amarillo.</p>
                <p><strong>$16</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contacto y Ubicación</h2>
            <div className="contact-info">
              <p><strong>Dirección:</strong> Av. El Sol 123, Miraflores, Lima - Perú</p>
              <p><strong>Teléfono:</strong> +51 987 654 321</p>
              <p><strong>Horario:</strong> Lunes a Domingo de 11:00 am a 6:00 pm</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 El Remo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
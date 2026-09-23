import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: '/winner.png', alt: 'Winner', overlay: 'Respected Sir IPS officer Mr. Keshav Chaudhry awarding winner team of summer tournament' },
    { src: '/gallery2.jpg', alt: 'Gallery 2' },
    { src: '/gallery3.jpg', alt: 'Gallery 3' },
    { src: '/gallery4.jpg', alt: 'Gallery 4' },
    { src: '/gallery5.jpg', alt: 'Gallery 5' },
    { src: '/gallery6.jpg', alt: 'Winter Bash League match' },
    { src: '/gallery7.jpg', alt: 'Winter Bash League players' },
    { src: '/gallery8.jpg', alt: 'Winter Bash League cricket ground' },
    { src: '/gallery9.jpg', alt: 'Winter Bash League celebration', fallback: true },
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-heading">
        <h2>Gallery</h2>
        <a href="#gallery" className="view-all">View All &rarr;</a>
      </div>

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              onError={(e) => {
                if (img.fallback) e.target.style.display = 'none';
              }}
            />
            {img.overlay && (
              <div className="gallery-overlay">{img.overlay}</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Teams() {
  const teams = [
    { name: 'Nightmare', img: '/nightmare.png' },
    { name: 'Phoenix', img: '/phoenix.png' },
    { name: 'GZB GIANTS', img: '/gg.png' },
    { name: 'Fire Falcons', img: '/firefalcons.png' },
    { name: 'Revengers', img: '/revengers.png' },
    { name: 'VNN warriors', img: '/vnn.png' },
    { name: 'Death Warriors', img: '/firefalcons.png' },
    { name: 'WSK', img: '/wsk.png' },
    { name: 'INVADERS', img: '/invaders.png' },
    { name: 'Dominators', img: '/dominators.png' },
  ];

  return (
    <section id="teams" className="section teams-section">
      <div className="section-heading">
        <h2>WBL Teams</h2>
        <a href="#teams" className="view-all">View All &rarr;</a>
      </div>

      <div className="team-grid">
        {teams.map((team, idx) => (
          <motion.div 
            key={idx}
            className="team-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -5, borderColor: 'var(--lime)' }}
          >
            <img src={team.img} alt={team.name} />
            <h3>{team.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

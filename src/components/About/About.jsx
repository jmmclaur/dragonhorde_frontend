import sleepingDragon from "../../assets/sleeping_dragon.png";

function About({}) {
  return (
    <div>
      <section className="about">
        <h2 className="about__title">About the Dragon Horde</h2>
        <p className="about__subtitle">Lore for eager adventurers</p>
        <ul className="about__cards">
          <li className="card">
            <p className="card__text">
              The Dragon Horde was created in hopes of helping daring and
              courageous adventurers keep a running log of dragons they
              encounter in the wild. The website also offers real-time potential
              weather sightings and possible spells to protect oneself during an
              altercation.
            </p>
          </li>
          <img
            src={sleepingDragon}
            alt="dragon horde logo big"
            className="about__dragon"
          />
        </ul>
      </section>
    </div>
  );
}

export default About;

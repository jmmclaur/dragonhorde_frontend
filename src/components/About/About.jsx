import dragon1 from "../../assets/dragon1.jpeg";

function About({}) {
  return (
    <section className="about" id="about">
      <h1 className="about__title">About the Dragon Horde</h1>
      <p className="about__subtitle">Lore for eager adventurers...</p>
      <div className="about__cards">
        <div className="about__dragon">
          <img src={dragon1} alt="dragon horde logo big" className="dragon1" />
        </div>
        <div className="card__text">
          <p>
            The Dragon Horde was founded in 1042 A.D., in the year of the
            Crestfallen Wars. Owners, Kaliah and Mariza, well respected mages,
            sought to help veteran and newbie adventurers keep an ongoing log of
            their dragon sightings in the wild, as these magnificent beasts are
            few and far between. Users can mark the species and what weather the
            creatures might be spotted in. The site will also reflect current
            weather, and show suggestions of possible sightings during that
            time.{" "}
          </p>
          <p>
            In the future, this site will offer real-time spell suggestions to
            ward off impending attacks from an altercation, as well as a point
            system to earn crowns for merchandise in the Treasure Trove.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

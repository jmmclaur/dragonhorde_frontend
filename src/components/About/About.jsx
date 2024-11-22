import sleepingDragon from "../../assets/sleeping_dragon.png";
import treasuremap from "../../assets/treasuremap.png";

function About({}) {
  return (
    <div>
      <section className="about" id="about">
        <h2 className="about__title">About the Dragon Horde</h2>
        <p className="about__subtitle">Lore for eager adventurers...</p>
        <div className="about__cards">
          <div className="about__dragon">
            <img src={treasuremap} alt="dragon horde logo big" id="map" />
          </div>
          <div className="card__text">
            <p>
              The Dragon Horde was founded in 1042 A.D., in the year of the
              Crestfallen Wars. Owners, Kaliah and Mariza, well respected mages,
              sought to help veteran and newbie adventurers keep an ongoing log
              of their dragon sightings in the wild, as these magnificent beasts
              are few and far between. Users can mark the species and what
              weather the creatures might be spotted in.{" "}
            </p>
            <p>
              In the future, this site will offer real-time spell suggestions to
              ward off impending attacks from an altercation, as well as a point
              system to earn crowns for merchandise in the Treasure Trove.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

import "./Parallax.css";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landscape() {
  return (
    <div className="landscape-container" id="landscape-container">
      <Parallax
        className="bg"
        pages={10}
        style={{
          height: "1200px",
          width: "90%",
          margin: "5%",
          position: "relative",
          marginBottom: "-1500px",
        }}
      >
        <ParallaxLayer
          offset={0}
          className="layer1"
          style={{
            backgroundColor: "#708090",
            height: "1100px",
          }}
        >
          <img
            src="https://i.pinimg.com/originals/88/56/e5/8856e5f2a83209a359a983a25f471117.png"
            alt="black dragon"
            className="card_image"
          />
          <p className="dragon_name">~ Black Dragons ~</p>
          <p className="description">
            These crafty dragons live at the edges of civilization in acid pits.
            They are known to breathe air and water, beware of acid breath and
            enemy remains in their lairs.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          className="layer1"
          style={{
            backgroundColor: "#904845",
            height: "1100px",
          }}
        >
          <p className="dragon_name">~ Red Dragons ~</p>
          <p className="description">
            These volcanic dragons live in high mountains to be closer to the
            sun. They are known to scour nearby villages for servants, beware of
            magma rivers and geysers.
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.sZv1ZHWJP-jMjCo9oQV9OgHaFm?w=265&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="red dragon"
            className="card_image"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          className="layer1"
          style={{
            backgroundColor: "#228B22",
            height: "1100px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.Kna-NU7buePxbTOtecTZVQHaJW?w=155&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="green dragon"
            className="card_image"
          />
          <p className="dragon_name">~ Green Dragons ~</p>
          <p className="description">
            These are the most treacherous dragons, known for interfering with
            political affairs. They live amongst the forest cliffs, beware of
            poisoned water supply.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          className="layer1"
          style={{
            backgroundColor: "#3E7D90",
            height: "1100px",
          }}
        >
          <p className="dragon_name">~ Blue Dragons ~</p>
          <p className="description">
            These dragons are drawn to deities of old, often living in stormy
            mountains. They have the ability swallow lightning, beware darkening
            clouds and roaring thunder.
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.JsN9VXP4spAim_NIzwGvagHaE6?w=292&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="blue dragon"
            className="card_image"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          className="layer1"
          style={{
            backgroundColor: "#F0F8FF",
            height: "1100px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.WsdxO1vCsOTsyq5Ntqug1gHaFc?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="white dragon"
            className="card_image"
          />
          <p className="dragon_name">~ White Dragons ~</p>
          <p className="description">
            These isolated dragons live deep in subterranean caves, preferring
            to sleep in frozen lakes. They are known to breathe air and water,
            beware of acid breath and enemy remains in their lairs.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          className="layer1"
          style={{
            backgroundColor: "#D4AF37",
            height: "1100px",
          }}
        >
          <p className="dragon_name">~ Gold Dragons ~</p>
          <p className="description">
            These charismatic dragons are known to collect rare and valuable
            items. They are also known to be clairvoyant, so beware of them
            predicting attacks.
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.-uaZck606ZaxOLWscftuvgHaJl?w=137&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="gold dragon"
            className="card_image"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          className="layer1"
          style={{
            backgroundColor: "#CD7F32",
            height: "1100px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.ibLIn28_ql5i0GoGCRtIXQHaKS?w=158&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="bronze dragon"
            className="card_image"
          />
          <p className="dragon_name">~ Bronze Dragons ~</p>
          <p className="description">
            These coastal dragons enjoy exploring shipwrecks and finding
            difficult to reach treasure. Beware of an altering environment, as
            they are known for using illusions.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          className="layer1"
          style={{
            backgroundColor: "#99602A",
            height: "1100px",
          }}
        >
          <p className="dragon_name">~ Copper Dragons ~</p>
          <p className="description">
            These dragons prefer dry climates and making nests within mountains
            to store valuable items. They enjoy entertaining travelers and
            giving them puzzels to their treasure.
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.0ObfrmntMTeIqbHXM0uHpAHaKT?w=136&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="copper dragon"
            className="card_image"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          className="layer1"
          style={{
            backgroundColor: "#B5A642",
            height: "1100px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.pxrC1zZkNj4NEKezIuDZ4AAAAA?w=236&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="brass dragon"
            className="card_image"
          />
          <p className="dragon_name">~ Brass Dragons ~</p>
          <p className="description">
            These desert dragons prefer building nests in canyons or ruins. They
            are known to create strong wind, beware the environment warping to
            hide their location.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          className="layer1"
          style={{
            backgroundColor: "#C0C0C0",
            height: "1100px",
          }}
        >
          <p className="dragon_name">~ Silver Dragons ~</p>
          <p className="description">
            These ancient dragons prefer living along mountaintops covered in
            clouds. They enjoy exploring abandoned towers, beware frigid wind
            and fog.
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.aYXk2MICiY85U1bR4Ehx2QDWEs?w=139&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="silver dragon"
            className="card_image"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landscape;

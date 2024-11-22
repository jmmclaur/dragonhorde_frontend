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
          backgroundColor: "#388E8E",
          width: "1260px",
          height: "1500px",
          padding: "0",
        }}
      >
        <ParallaxLayer
          offset={0}
          className="layer1"
          style={{
            backgroundColor: "#708090",
            height: "500px",
          }}
        >
          <img
            src="https://i.pinimg.com/originals/88/56/e5/8856e5f2a83209a359a983a25f471117.png"
            alt="black dragon"
            className="image-1"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
          <p
            className="black"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Black Dragons ~
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          className="layer2"
          style={{
            backgroundColor: "#904845",
            height: "500px",
          }}
        >
          <p
            className="red"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Red Dragons ~
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.sZv1ZHWJP-jMjCo9oQV9OgHaFm?w=265&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="red dragon"
            className="image-2"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          className="layer3"
          style={{
            backgroundColor: "#3B903B",
            height: "500px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.Kna-NU7buePxbTOtecTZVQHaJW?w=155&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="green dragon"
            className="image-3"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
          <p
            className="green"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Green Dragons ~
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          className="layer4"
          style={{
            backgroundColor: "#3E7D90",
            height: "500px",
          }}
        >
          <p
            className="blue"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Blue Dragons ~
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.JsN9VXP4spAim_NIzwGvagHaE6?w=292&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="blue dragon"
            className="image-4"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          className="layer5"
          style={{
            backgroundColor: "#F0F8FF",
            height: "500px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.WsdxO1vCsOTsyq5Ntqug1gHaFc?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="white dragon"
            className="image-5"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
          <p
            className="white"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ White Dragons ~
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          className="layer6"
          style={{
            backgroundColor: "#D4AF37",
            height: "500px",
          }}
        >
          <p
            className="gold"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Gold Dragons ~
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.-uaZck606ZaxOLWscftuvgHaJl?w=137&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="gold dragon"
            className="image-6"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          className="layer7"
          style={{
            backgroundColor: "#CD7F32",
            height: "500px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.ibLIn28_ql5i0GoGCRtIXQHaKS?w=158&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="bronze dragon"
            className="image-7"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
          <p
            className="bronze"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Bronze Dragons ~
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          className="layer8"
          style={{
            backgroundColor: "#99602A",
            height: "500px",
          }}
        >
          <p
            className="copper"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Copper Dragons ~
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.0ObfrmntMTeIqbHXM0uHpAHaKT?w=136&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="copper dragon"
            className="image-8"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          className="layer9"
          style={{
            backgroundColor: "#B5A642",
            height: "500px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.pxrC1zZkNj4NEKezIuDZ4AAAAA?w=236&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="brass dragon"
            className="image-9"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
          <p
            className="brass"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Brass Dragons ~
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          className="layer10"
          style={{
            backgroundColor: "#C0C0C0",
            height: "500px",
          }}
        >
          <p
            className="silver"
            style={{
              height: "1200px",
              margin: "200px 20px 0 20px",
            }}
          >
            ~ Silver Dragons ~
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.aYXk2MICiY85U1bR4Ehx2QDWEs?w=139&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="silver dragon"
            className="image-10"
            style={{
              width: "300px",
              height: "300px",
              margin: "100px 20px 0 20px",
            }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landscape;

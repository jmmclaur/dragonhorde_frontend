// import css

// function

// export default Footer;

import "./Footer.css";

/*
function Footer({}) {
  return <div>Footer</div>;
} */

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer__copyright">Created By Jessica McLaurin</p>
        <p className="footer__year">2024</p>
      </div>
    </footer>
  );
}

export default Footer;

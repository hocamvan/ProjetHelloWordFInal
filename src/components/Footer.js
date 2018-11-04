import React from 'react';
import '../css/Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="foot">
          <div className="text">
            <p>Copyright © 2018 HelloWorld // Contact</p>
            <p>
              &nbsp;
                API used:
              &nbsp;
              <a href="https://restcountries.eu">
                Rest countries
              </a>
              &nbsp;
              -
              &nbsp;
              <a href="https://developers.google.com/custom-search/">
                Google Custom Search
              </a>
              &nbsp;
              -
              &nbsp;
              <a href="https://developers.google.com/youtube/iframe_api_reference?hl=fr">
                Youtube Player API
              </a>
              &nbsp;
              -
              &nbsp;
              <a href="https://opentdb.com">
                Open Trivia DB
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

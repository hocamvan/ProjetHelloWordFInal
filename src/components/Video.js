/* global fetch:false */

import React, { Component } from 'react';
import YouTube from 'react-youtube';
import '../css/Header.css';
import { Grid } from '@material-ui/core';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      myVideo: undefined,
      findCountryName: props.countryName,
    };
  }

  componentDidMount() {
    const { findCountryName } = this.state;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC_kX9In6aA3pSlkHV7kkT10iuSx86EiGs&maxResults=1&q=travel${findCountryName}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            myVideo: result.items[0],
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  render() {
    const opts = {
      height: 'auto',
      width: 'auto',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { error, isLoaded, myVideo } = this.state;
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    }
    if (!isLoaded) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <YouTube
            videoId={myVideo.id.videoId}
            opts={opts}
            onReady={this.onReady}
          />
        </Grid>
      </div>
    );
  }
}

export default Video;

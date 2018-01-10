import React, {Component} from 'react';
import './MissionScreen.css';
import gpsPointIcon from '../images/gps_point.svg';
import timeIcon from '../images/time.svg';
import PropTypes from 'prop-types';

class MissionScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mission-info">
        <div className="mission-info-container">
          <div className="mission-info-icon">
            <img src={gpsPointIcon} alt="GPS Point Icon"/>
          </div>
          <div className="mission-info-text">
            <p>Current State:</p>
            <h3>{this.props.vehicleStatus}</h3>
          </div>
        </div>
        <div className="mission-info-container">
          <div className="mission-info-icon">
            <img src={timeIcon} alt="Time Icon"/>
          </div>
          <div className="mission-info-text">
            <p>Estimated time to pickup location:</p>
            <h3>3 minutes</h3>
          </div>
        </div>
      </div>
    );
  }


}

MissionScreen.propTypes = {
  vehicleStatus: PropTypes.string
};


export default MissionScreen;

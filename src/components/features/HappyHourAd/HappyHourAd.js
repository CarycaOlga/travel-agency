import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(){
    super();
      
    setInterval(() => {
      return this.forceUpdate();
    }, 1000);
  }
  static propTypes = {
    titleText: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
      
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
      
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  render() {
    const {titleText = 'sth sth', promoDescription = 'super offer!'} = this.props;
    const takeTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{titleText}</h3>
        <div className={styles.promoDescription}>{takeTime > 82800 ? promoDescription : formatTime(takeTime)}</div>
      </div>
    );
  }
}

export default HappyHourAd;
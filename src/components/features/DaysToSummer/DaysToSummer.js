import React from 'react';
//import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  /*getCountdownDate(){
    const currentDate = new Date();
    const summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
      
    if(currentDate.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentDate.getUTCDate()+1);
    }
      
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  render() {
    const {titleText = 'Happy Hour starts in', promoDescription = 'Super Offer!'} = this.props;
    const takeTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{titleText}</h3>
        <div className={styles.promoDescription}>{takeTime > 82800 ? promoDescription : formatTime(takeTime)}</div>
      </div>
    );
  }*/
}

export default DaysToSummer;
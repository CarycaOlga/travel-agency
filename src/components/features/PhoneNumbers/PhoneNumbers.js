import React from 'react';
import styles from './PhoneNumbers.scss';

class PhoneNumbers extends React.Component {
  constructor() {
    super();
      
    setInterval(() => {
      return this.forceUpdate();
    }, 1000);
  }
  getTime() {
    const thisTime = new Date();
    const phoneTime = thisTime.getUTCHours();
    
    if (phoneTime >= 8 && phoneTime < 12) {
      return 'Amanda, 678.243.8455';
    } else if (phoneTime >= 12 && phoneTime < 16) {
      return 'Tobias, 278.443.6443';
    } else if (phoneTime >= 16 && phoneTime < 22){
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }
  render() {
    const phoneData = this.getTime();
    return (
      <h4 className= {styles.phoneData}>{phoneData}</h4>
    );
  }
}

export default PhoneNumbers;
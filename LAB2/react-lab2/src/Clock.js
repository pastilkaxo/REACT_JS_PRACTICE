import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.getCurrentTime(this.props.timezone) };
  }

  getCurrentTime = (timezone) => {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const time = new Date(utc + (3600000 * timezone));
    
    return time;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.getCurrentTime(this.props.timezone)
    });
  }

  render() {
    const { format } = this.props;
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();
    const isAM = hours < 12;

    let formattedHours;
    if (format === '12') {
      formattedHours = hours % 12 || 12;
    } else {
      formattedHours = hours.toString().padStart(2, '0');
    }

    return (
      <div>
        <span>{formattedHours}</span>:
        <span>{minutes.toString().padStart(2, '0')}</span>:
        <span>{seconds.toString().padStart(2, '0')}</span>
        {format === '12' && <span>{isAM ? ' AM' : ' PM'}</span>}
      </div>
    );
  }
}


import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {fadeInUp} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import '../App.css';

const FadeIn = styled.div`animation: 0.2s ${keyframes `${fadeInUp}`}`;

class TimerSettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleComponent = this.toggleComponent.bind(this);
    this.apply = this.apply.bind(this);
    this.workTimeMinutesChangeHandler = this.workTimeMinutesChangeHandler.bind(this);
    this.workTimeSecondsChangeHandler = this.workTimeSecondsChangeHandler.bind(this);
    this.restTimeMinutesChangeHandler = this.restTimeMinutesChangeHandler.bind(this);
    this.restTimeSecondsChangeHandler = this.restTimeSecondsChangeHandler.bind(this);
    this.longRestTimeMinutesChangeHandler = this.longRestTimeMinutesChangeHandler.bind(this);
    this.longRestTimeSecondsChangeHandler = this.longRestTimeSecondsChangeHandler.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
    this.setRecommendedValues = this.setRecommendedValues.bind(this);
    console.log('Parsing is:');
    this.state = {
      copmonentIsShown: false,
      workTime: {
        minutes: '',
        seconds: ''
      },
      restTime: {
        minutes: '',
        seconds: ''
      },
      longRestTime: {
        minutes: '',
        seconds: ''
      },
      showAlert: false,
      timerSettingsMessage: 'Timer settings'
    }

  }

  setRecommendedValues() {
    this.setState({
      workTime: {
        minutes: '25',
        seconds: '0'
      },
      restTime: {
        minutes: '5',
        seconds: '0'
      },
      longRestTime: {
        minutes: '15',
        seconds: '0'
      }
    });
  }

  showAlert() {
    this.setState({showAlert: true});
  }

  hideAlert() {
    this.setState({showAlert: false});
  }

  toggleComponent() {
    this.hideAlert();
    console.log(this.state.copmonentIsShown);
    this.setState({copmonentIsShown: !this.state.copmonentIsShown});
    if (this.state.copmonentIsShown) {
      this.setState({timerSettingsMessage: 'Timer settings'});
    } else {
      this.setState({timerSettingsMessage: 'Hide'});
    }
  }

  workTimeMinutesChangeHandler(e) {
    this.setState({workTime: {
      minutes: e.target.value,
      seconds: this.state.workTime.seconds
    }});
  }

  workTimeSecondsChangeHandler(e) {
    this.setState({
      workTime: {
        minutes: this.state.workTime.minutes,
        seconds: e.target.value
      }
    });
  }

  restTimeMinutesChangeHandler(e) {
    this.setState({
      restTime: {
        minutes: e.target.value,
        seconds: this.state.restTime.seconds
      }
    });
  }

  restTimeSecondsChangeHandler(e) {
    this.setState({
      restTime: {
        minutes: this.state.restTime.minutes,
        seconds: e.target.value
      }
    });
  }

  longRestTimeMinutesChangeHandler(e) {
    this.setState({
      longRestTime: {
        minutes: e.target.value,
        seconds: this.state.longRestTime.seconds
      }
    });
  }

  longRestTimeSecondsChangeHandler(e) {
    this.setState({
      longRestTime: {
        minutes: this.state.longRestTime.minutes,
        seconds: e.target.value
      }
    });
  }

  formRender() {
    return (
      <FadeIn>
        <div>
          <FadeIn><Alert show={this.state.showAlert} variant="success">
          Changes have been applied successfully!
        </Alert></FadeIn>
          <p>Recommended parameters: </p>
          <p>Work Time 25:0</p>
          <p>Rest Time 5:0</p>
          <p>Long Rest Time 15:0</p>
          <Form.Group>
          <Form.Label >Work time</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Minutes" type="number" min="0" value={this.state.workTime.minutes} onChange={this.workTimeMinutesChangeHandler}/>
          <Form.Control size="sm" type="text" placeholder="Seconds" type="number" min="0" max="59" value={this.state.workTime.seconds} onChange={this.workTimeSecondsChangeHandler}/>
          <Form.Label className="settingsLabelStyle">Rest time</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Minutes" type="number" min="0" value={this.state.restTime.minutes} onChange={this.restTimeMinutesChangeHandler}/>
          <Form.Control size="sm" type="text" placeholder="Seconds" type="number" min="0" max="59" value={this.state.restTime.seconds} onChange={this.restTimeSecondsChangeHandler}/>
          <Form.Label className="settingsLabelStyle">Long Rest time</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Minutes" type="number" min="0" value={this.state.longRestTime.minutes} onChange={this.longRestTimeMinutesChangeHandler}/>
          <Form.Control size="sm" type="text" placeholder="Seconds" type="number" min="0" max="59" value={this.state.longRestTime.seconds} onChange={this.longRestTimeSecondsChangeHandler}/>
        </Form.Group>
        <Button variant="success" onClick={this.apply}>
        Apply
      </Button>
      <Button variant="secondary" onClick={this.setRecommendedValues}>
        Set recommended values
      </Button>
      </div>
      </FadeIn>
    );
  }

  apply() {
    this.showAlert();
    var workTime = this.state.workTime;
    var restTime = this.state.restTime;
    var longRestTime = this.state.longRestTime;
    var timeSettings = [workTime, restTime, longRestTime];
    for (var timeSetting of timeSettings) {
      if (timeSetting.minutes === '') {
        timeSetting.minutes = 0;
      }
      if (timeSetting.seconds === '') {
        timeSetting.seconds = 0;
      }
      timeSetting.minutes = Number(timeSetting.minutes);
      timeSetting.seconds = Number(timeSetting.seconds);
    }
    this.props.workTimeSetter(workTime.minutes, workTime.seconds);
    this.props.restTimeSetter(restTime.minutes, restTime.seconds);
    this.props.longRestTimeSetter(longRestTime.minutes, longRestTime.seconds);
  }

  render() {
    let innerJSX;
    if (this.state.copmonentIsShown) {
      innerJSX = this.formRender();
    }
    return (
      <div>
        <div className="accordion" onClick={this.toggleComponent}>{this.state.timerSettingsMessage}</div>
          {innerJSX}
      </div>
    );
  }
}

export default TimerSettingsComponent;

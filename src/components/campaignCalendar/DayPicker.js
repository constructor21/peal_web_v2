import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './DayPicker.css';

import { Box, Text } from 'gestalt';
import styled from "styled-components";

import { connect } from 'react-redux'

const Block = styled.div`
    display: inline-block;
    vertical-align: center;
`;


class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
      dates: [],
    }
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      dates: [],
    };
  }

  handleDayClick(day) {

    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);

    //console.log("this is the day:")
    //console.log(day);
    //console.log("this is the day as a string")
    const stringDay = JSON.stringify(day);
    //console.log(stringDay.substring(1,11));
    this.state.dates.push(stringDay.substring(1,11));
    console.log(this.state.dates);

    if(this.state.dates.length == 2) {
      // console.log("you can call the confirm click button now");
      console.log("save to redux store");
      this.props.add(this.state.dates[0]);
      this.props.add(this.state.dates[1]);
    }

  }

  handleResetClick() {
    console.log("remove from redux store");
    this.props.remove();
    this.setState(this.getInitialState());
  }

  handleConfirmClick= (e) => {
    e.preventDefault();
    // const fromDateToSave = this.state.from != undefined ? this.state.from : " ";
    // console.log(fromDateToSave);
    // const toDateToSave = this.state.to != undefined ? this.state.to : " ";
    // console.log(toDateToSave);

    console.log(this.state.dates); // (2) ["2019-05-29", "2019-05-31"]
    console.log("save to redux store");
    this.props.add(this.state.dates[0]);
    this.props.add(this.state.dates[1]);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };


    return (

      <div>
        <div className="RangeExample">
          <p>
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
                  ${to.toLocaleDateString()}`}{' '}
            {from &&
              to && (
                <button className="link" onClick={this.handleResetClick}>
                  Reset
                </button>
              )}
          </p>


          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />

          </div>

          {
          /*
          <button className="link" id="confirmBtnSpacing" onClick={this.handleConfirmClick}>
            Confirm
          </button>
          */
          }

        </div>

    );
  }
}

// the word to the left of the semi-colon can be called whatever you want
// state is referencing the redux store, the dot notation is used to access a specific key from the object being returned

function mapStateToProps(state, ownProps) {
  return {
    day: state.day,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (value) => {
      dispatch({ type: 'ADD', payload: value })
    },
    remove: () => {
      dispatch({ type: 'REMOVE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);

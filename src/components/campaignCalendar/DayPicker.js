import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './DayPicker.css';

import { Box, Text } from 'gestalt';
import styled from "styled-components";

const Block = styled.div`
    display: inline-block;
    vertical-align: center;
`;

// TODO: add in edge cases for each month length (i.e. February being 28 days)
  // currently charging $98 for every 30 days
  // if less than 30 days then do number of days x $3.25

class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  // set this to be in the global redux store after running a function to parse this data
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    // console.log(range.from);
    const fromDateToSave = range.from != undefined ? range.from : " ";
    console.log(fromDateToSave);

    // you can convert to strings if needed
      // const start = JSON.stringify(fromDateToSave);
      // console.log(start.substring(0,11));

    // console.log(typeof fromDateToSave); ... an object not a string you can substring
    // console.log(range.to);
    const toDateToSave = range.to != undefined ? range.to : " ";
    console.log(toDateToSave);
  }

  handleResetClick() {
    console.log("remove from redux store");
    this.setState(this.getInitialState());
  }

  handleConfirmClick= (e) => {
    e.preventDefault();
    console.log("save to redux store");
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

          <button className="link" id="confirmBtnSpacing" onClick={this.handleConfirmClick}>
            Confirm
          </button>

        </div>

    );
  }
}

export default Example;

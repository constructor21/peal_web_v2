import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

import NewRunTimePage from "../campaignRunTime/CampaignRunTime";
import './CampaignBudget.css';

import { Box, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';


const Block = styled.div`
    display: inline-block;
    vertical-align: center;
`;


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    root: {
        flexGrow: 1,
    },
});

class RunBetweenDates extends Component {

    constructor(props) {
      super(props);

      this.state = {
        budget: 0,
        dailyLimit: 0,
      }

    this.testMethod = this.testMethod.bind(this);
    this.calculateBudget = this.calculateBudget.bind(this);

    }

    handleChange = dailyLimit => event => {
        this.setState({ [dailyLimit]: event.target.value });
    };


  testMethod(start, end) {

    var dateFirst = new Date(start);
    var dateSecond = new Date(end);

    // time difference
    var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());

    // days difference
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // console.log(typeof diffDays); // number
    // console.log(diffDays);
    return diffDays;

  }

  calculateBudget() {

    console.log("calculate the budget");
    // pass the start date and end date data here and call the date calculation method in here
    var datesFromChild = this.refs.childDates.captureStartAndEndDate();
    var stringDates = datesFromChild[0];

    var startDate = stringDates[0];
    var endDate = stringDates[3];

    // console.log(this.state.dailyLimit);
    // console.log(typeof this.state.dailyLimit);

    console.log("....pointNum");
    var pointNum = Number(this.state.dailyLimit);
    console.log(typeof pointNum);
    console.log(pointNum);
    console.log("*******");

    // this.testMethod("04/25/2017", "04/28/2017");  this works!

    // sanitze input

    /* this worked!
    var s = "04-25-2017";
    console.log(s);
    var resS = s.replace(/-/g, "/");
    console.log(resS);
    */

    var s = startDate.replace(/-/g, "/");
    var e = endDate.replace(/-/g, "/");
    var total = pointNum * this.testMethod(s,e);

    console.log("...")
    var xyz = this.testMethod(s,e)
    console.log("...xyz")
    console.log(xyz);
    console.log(typeof xyz); // Number
    console.log(pointNum * xyz); // undefined
    console.log(typeof total); // Number

    this.setState({budget: total});

  }


    render() {
        const { classes } = this.props;
        return (
          
            <Box alignItems="center" >
                <Box paddingY={2}>
                    <NewRunTimePage ref="childDates" />
                </Box>
            <Box>


                  <div className="container">
                    <form className="white">
                      <div className="input-field">
                        <input placeholder="Example: 200.00" id='title' onChange={this.handleChange('dailyLimit')} />
                      </div>
                    </form>
                  </div>

                  <div className="budgetSpacing">
                    <button onClick={this.calculateBudget}> Confirm </button>
                  </div>

            </Box>

                <Box>
                    <Block>
                        <Text> Total Expense: </Text >
                    </Block>
                    <Block>
                        <Text> ${this.state.budget} </Text>
                    </Block>
                </Box>

            </Box >
        );
    }
}

export default RunBetweenDates

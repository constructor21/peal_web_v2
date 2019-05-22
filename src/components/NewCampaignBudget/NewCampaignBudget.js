import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

import NewRunTimePage from "../NewCampaignRunTime/NewCampaignRunTime";
import TextField from './TextField';
import Checkbox from '@material-ui/core/Checkbox';

import { Box, Label, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import './NewCampaignBudget.css';

import MaterialTextField from '@material-ui/core/TextField';

const ComponentTitle = styled.div`
    text-size: 20px;
    max-width: 600px;
    color: rgba(0, 0, 0, 1);
    margin-top: 2px;
    margin-left: 20px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid rgba(0, 0, 0, 1);
`;

const TextComponent = styled.div`
    text-size: 20px;
    max-width: 600px;
    color: rgba(0, 0, 0, 1);
    margin-top: 2px;
    margin-left: 20px;
`;

const Block = styled.div`
    display: inline-block;
    vertical-align: center;
`;

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

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

class RunContinously extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dailyExpenditureInput: 0,
          dailyExpenditureResult: 0,
        };
        this.showDailySpend = this.showDailySpend.bind(this);
    }

    handleChange = dailyExpenditureInput => event => {
        this.setState({ [dailyExpenditureInput]: event.target.value });
    };

    showDailySpend() {
        var total = this.state.dailyExpenditureInput
        this.setState({dailyExpenditureResult: total});
    }

    render() {
        return (

          <div>

          <Box alignItems="center" >

                  <div className="left">
                      <Text> Total Budget: </Text >
                  </div>

                  <Block>
                    <form className="tempContainer" noValidate autoComplete="off">
                        <MaterialTextField
                            id="standard-name"
                            label="Example: 200.00"
                            placeholder="varies depending on diplay location"
                            onChange={this.handleChange('dailyExpenditureInput')}
                            margin="normal"
                            style = {{width: 300}}
                        />
                    </form>
                  </Block>

          </Box>

          <div className="budgetSpacing">
            <button className="stripeButton" onClick={this.showDailySpend}> Confirm </button>
          </div>

              <Box alignItems="end">

                  <Block>
                      <Text> Estimated Daily Expenditure: </Text >
                  </Block>

                  <Block>
                      <TextComponent> ${this.state.dailyExpenditureResult} </TextComponent>
                  </Block>

              </Box>

            </div>

        );
    }
}

class TotalBudget extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <Box alignItems="center" direction="row" display="flex">
                <Box paddingX={2} flex="grow">
                    <Block>
                        <Text>{text}</Text>
                    </Block>
                </Box>
                <TextField Title="Total" />
            </Box>
        );
    }
}

export class RunBetweenDates extends React.Component {

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

  // MaterialTextField likely has some custom css that is blocking another element to be on its same line
    render() {
        const { classes } = this.props;
        return (
            <Box alignItems="center" >
                <Box paddingY={2}>
                    <NewRunTimePage ref="childDates" />
                </Box>
            <Box>

                    <div className="left">
                      <Text> Daily Limit: </Text >
                    </div>


                      <form className="tempContainer" noValidate autoComplete="off">
                          <MaterialTextField
                              id="standard-name"
                              placeholder="Example: 200.00"
                              onChange={this.handleChange('dailyLimit')}
                              margin="normal"
                          />
                      </form>




                    <div className="budgetSpacing">
                      <button className="stripeButton" onClick={this.calculateBudget}> Confirm </button>
                    </div>

                </Box>
                <Box alignItems="end">
                    <Block>
                        <Text> Total Budget: </Text >
                    </Block>
                    <Block>
                        <TextComponent> ${this.state.budget} </TextComponent>
                    </Block>
                </Box>
            </Box >
        );
    }
}


class NewBudgetPage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <ComponentTitle className="uploadContentSpacing"> BUDGET </ComponentTitle>

                <Tabs value={value} onChange={this.handleChange} centered>
                    <Tab label="Run Until Budget Ends" />
                    <Tab label="Run Between Dates" />
                </Tabs>
                {value === 0 &&

                    <RunContinously />
                }
                {value === 1 &&

                    <RunBetweenDates />
                }
            </div>
        );
    }
}

NewBudgetPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewBudgetPage);

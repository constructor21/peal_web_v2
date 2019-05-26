/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import 'react-dates/initialize';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps } from 'airbnb-prop-types';
import moment from 'moment';
import omit from 'lodash/omit';

import styled from "styled-components";

import { Box, Container } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import ScrollableOrientationShape from 'react-dates/src/shapes/ScrollableOrientationShape';

import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';

import RunBetweenDates from '../campaignBudget/CampaignBudget';

const Block = styled.div`
    display: inline-block;
    vertical-align: top;
`;

const Label = styled.div`
    color: rgba(0, 0, 0, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 1);
`;

const Date = styled.div`
    color: rgba(0, 0, 0, 1);
`;

const Date1 = styled.div`
    float:left; //        <------- Here
    margin-right:50px; // <------- Here
    filter:alpha(opacity=40);
    background:linear-gradient(to bottom, #007EFF, #09f);
    font-size:12px;
    color:#fff;
    text-align:center;
`;

const propTypes = forbidExtraProps({
    // example props for the demo
    autoFocusEndDate: PropTypes.bool,
    initialStartDate: momentPropTypes.momentObj,
    initialEndDate: momentPropTypes.momentObj,
    startDateOffset: PropTypes.func,
    endDateOffset: PropTypes.func,
    showInputs: PropTypes.bool,
    minDate: momentPropTypes.momentObj,
    maxDate: momentPropTypes.momentObj,

    keepOpenOnDateSelect: PropTypes.bool,
    minimumNights: PropTypes.number,
    isOutsideRange: PropTypes.func,
    isDayBlocked: PropTypes.func,
    isDayHighlighted: PropTypes.func,

    // DayPicker props
    enableOutsideDays: PropTypes.bool,
    numberOfMonths: PropTypes.number,
    orientation: ScrollableOrientationShape,
    verticalHeight: PropTypes.number,
    withPortal: PropTypes.bool,
    initialVisibleMonth: PropTypes.func,
    renderCalendarInfo: PropTypes.func,
    renderMonthElement: PropTypes.func,
    renderMonthText: PropTypes.func,

    navPrev: PropTypes.node,
    navNext: PropTypes.node,

    onPrevMonthClick: PropTypes.func,
    onNextMonthClick: PropTypes.func,
    onOutsideClick: PropTypes.func,
    renderCalendarDay: PropTypes.func,
    renderDayContents: PropTypes.func,

    // i18n
    monthFormat: PropTypes.string,

    isRTL: PropTypes.bool,
});

const defaultProps = {
    // example props for the demo
    autoFocusEndDate: false,
    initialStartDate: null,
    initialEndDate: null,
    startDateOffset: undefined,
    endDateOffset: undefined,
    showInputs: false,
    minDate: null,
    maxDate: null,

    // day presentation and interaction related props
    renderCalendarDay: undefined,
    renderDayContents: null,
    minimumNights: 1,
    isDayBlocked: () => false,
    isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
    isDayHighlighted: () => false,
    enableOutsideDays: false,

    // calendar presentation and interaction related props
    orientation: HORIZONTAL_ORIENTATION,
    verticalHeight: undefined,
    withPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 2,
    onOutsideClick() { },
    keepOpenOnDateSelect: false,
    renderCalendarInfo: null,
    isRTL: false,
    renderMonthText: null,
    renderMonthElement: null,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() { },
    onNextMonthClick() { },

    monthFormat: 'MMMM YYYY',
};

class NewRunTimePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
            startDate: props.initialStartDate,
            endDate: props.initialEndDate,
            dates: [

            ],
        };

        this.captureStartAndEndDate = this.captureStartAndEndDate.bind(this);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);

    }

    captureStartAndEndDate() {
        //const childStartDateString = this.state.startDate != null ? this.state.startDate && this.state.startDate.format('MM-DD-YYYY') : " ";
        //const childEndDateString = this.state.endDate != null ? this.state.endDate && this.state.endDate.format('MM-DD-YYYY') : " ";
        //var dates = [childStartDateString, childEndDateString];
        // return dates;
        //console.log(dates);

        if(this.state.dates.length > 2) {
          console.log("good to go");
          var passDatesToParents = [this.state.dates];
          return passDatesToParents;
        } else {
          console.log("not yet");
        }
    }

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
        console.log("dates change");

        const startDateStringToPassToParent = startDate != null ? startDate && startDate.format('MM-DD-YYYY') : " ";
        console.log(startDateStringToPassToParent);
        this.state.dates.push(startDateStringToPassToParent);
        const endDateStringToPassToParent = endDate != null ? endDate && endDate.format('MM-DD-YYYY') : " ";
        console.log(endDateStringToPassToParent);
        this.state.dates.push(endDateStringToPassToParent);

        this.captureStartAndEndDate()

    }

    onFocusChange(focusedInput) {
        this.setState({
            // Force the focusedInput to always be truthy so that dates are always selectable
            focusedInput: !focusedInput ? START_DATE : focusedInput,
        });
        console.log("focus change");

        // this.captureStartAndEndDate()
    }


    render() {
        const { showInputs } = this.props;
        const { focusedInput, startDate, endDate } = this.state;

        const props = omit(this.props, [
            'autoFocus',
            'autoFocusEndDate',
            'initialStartDate',
            'initialEndDate',
            'showInputs',
        ]);

        const startDateString = startDate != null ? startDate && startDate.format('MM-DD-YYYY') : " ";
        // console.log(startDateString); // example: 04-16-2019
        // console.log(typeof startDateString); // string
        const endDateString = endDate != null ? endDate && endDate.format('MM-DD-YYYY') : " ";
        // console.log(endDateString);  // example: 04-26-2019
        // console.log(typeof endDateString) // string

        return (

            <Box align="center"  >


                    <DayPickerRangeController
                        {...props}
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusChange}
                        focusedInput={focusedInput}
                        startDate={startDate}
                        endDate={endDate}
                        numberOfMonths={1}
                    />

                    <Block style={{ marginTop: 60, marginRight: 30 }}>
                        <Label> Start Date </Label>
                        <Date> {startDateString} </Date>
                    </Block>

                    <Block style={{ marginTop: 60 }}>
                        <Label> End Date </Label>
                        <Date> {endDateString} </Date>
                    </Block>



            </Box>

        );
    }
}

NewRunTimePage.propTypes = propTypes;
NewRunTimePage.defaultProps = defaultProps;

export default NewRunTimePage;

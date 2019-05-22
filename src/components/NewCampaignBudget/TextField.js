import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MaterialTextField from '@material-ui/core/TextField';

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
});


class TextField extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
        name: ''
    };

    this.captureDailyBudget = this.captureDailyBudget.bind(this);

  }


    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    captureDailyBudget() {
      console.log(this.state.name);
      console.log(typeof this.state.name);
      var pointNum = parseFloat(this.state.name);
      return pointNum;
    }

    render() {
        const { classes, Title } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <MaterialTextField
                    id="standard-name"
                    label={Title}
                    placeholder="Example: 200.00"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </form>
        );
    }
}

TextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextField);

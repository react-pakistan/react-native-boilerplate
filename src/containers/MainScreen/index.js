// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Containers Here ##########
import SignIn from '../SignIn';
import AppDrawer from '../../config/router';

// ########## Import Components Here ##########
import * as actions from './actions';

class MainScreen extends Component {
  render() {
    const { showApp, showAppAction } = this.props;
    return (
      <Fragment>
        {showApp ? <AppDrawer /> : <SignIn showAppAction={showAppAction} />}
      </Fragment>
    );
  }
}

MainScreen.propTypes = {
  showApp: bool.isRequired,
  showAppAction: func,
};

const mapStateToProps = ({ showAppReducer }) => ({
  showApp: showAppReducer.showApp,
});

function mapDispatchToProps(dispatch) {
  return {
    showAppAction: () => dispatch(actions.showAppAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);

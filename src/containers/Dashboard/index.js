/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { string, func, oneOfType, any } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import { TextInput, Button, Headline, Title } from "react-native-paper";

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import styles from "./styles";
import * as actions from "./actions";
import { STYLE_CONSTANTS } from "../../config/styles";
import * as selectors from "./selectors";

class Dashboard extends Component {
  state = {
    textInput: ""
  };

  onPressHandler = () => {
    const { textInput } = this.state;
    const { dashboardAttempt } = this.props;
    dashboardAttempt(textInput);
  };

  render() {
    const { textInput } = this.state;
    const { name, bio, company, location, avatarUrl } = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text style={styles.heading}>Dashboard</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              mode="outlined"
              label="Enter GitHub handle"
              autoCapitalize="none"
              value={textInput}
              style={styles.input}
              onChangeText={val => this.setState({ textInput: val })}
            />
            <Button
              icon="add-a-photo"
              mode="contained"
              color={STYLE_CONSTANTS.COLORS.SECONDARY}
              onPress={this.onPressHandler}
            >
              Fetch Repos
            </Button>
            {name && (
              <View style={styles.userDataContainer}>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.userAvatar}
                    source={{ uri: avatarUrl }}
                  />
                </View>
                <View style={styles.userContainer}>
                  <Headline style={styles.userData}>{name}</Headline>
                  <Title style={styles.userData}>{bio}</Title>
                  <Title style={styles.userData}>{company}</Title>
                  <Title style={styles.userData}>{location}</Title>
                </View>
              </View>
            )}
          </View>
        </View>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  name: oneOfType([
    string.isRequired,
    any,
  ]),
  bio: oneOfType([
    string.isRequired,
    any,
  ]),
  company: oneOfType([
    string.isRequired,
    any,
  ]),
  location: oneOfType([
    string.isRequired,
    any,
  ]),
  avatarUrl: oneOfType([
    string.isRequired,
    any,
  ]),
  dashboardAttempt: func.isRequired
};

const mapStateToProps = state => {
  if (state.dashboardReducer.data) {
    return {
      name: selectors.getUserName(state),
      bio: selectors.getUserBio(state),
      company: selectors.getUserCompany(state),
      location: selectors.getUserLocation(state),
      avatarUrl: selectors.getUserAvatarUrl(state),
    }
  } else {
    return {
      name: null,
      bio: null,
      company: null,
      location: null,
      avatarUrl: null,
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dashboardAttempt: username =>
      dispatch(actions.dashboardAttemptAction(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

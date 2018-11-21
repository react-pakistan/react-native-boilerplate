/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { object, func } from "prop-types";
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
    const { name, bio, company, location } = this.props;
    console.log('name', name)
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
                    source={{ uri: userdata.avatarUrl }}
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
  // userdata: object,
  dashboardAttempt: func.isRequired
};

const mapStateToProps = store => ({
  name: selectors.getUserName(store),
  bio: selectors.getUserBio(store),
  company: selectors.getUserCompany(store),
  location: selectors.getUserLocation(store),
});

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

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
import AppCard from '../../components/AppCard';
import AppTitle from '../../components/AppTitle';
import AppParagraph from '../../components/AppParagraph';
import AppButton from '../../components/AppButton';
import * as actions from "./actions";
import { STYLE_CONSTANTS } from "../../config/styles";

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
    const { userdata } = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text style={styles.heading}>Dashboard</Text>
            <AppCard>
            <AppCard.Content>
              <AppTitle>Card Title</AppTitle>
              <AppParagraph>Card Description</AppParagraph>
            </AppCard.Content>
            <AppCard.Cover source={{ uri: 'https://picsum.photos/700' }}>
              <AppCard.Actions>
                <AppButton>Ok</AppButton>
                <AppButton>Cancel</AppButton>
              </AppCard.Actions>
            </AppCard.Cover>
          </AppCard>
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
            {
              userdata && (
                <View style={styles.userDataContainer}>
                  <View style={styles.avatarContainer}>
                    <Image style={styles.userAvatar} source={{ uri: userdata.avatarUrl }} />
                  </View>
                  <View style={styles.userContainer}>
                    <Headline style={styles.userData}>{userdata.name}</Headline>
                    <Title style={styles.userData}>{userdata.bio}</Title>
                    <Title style={styles.userData}>{userdata.company}</Title>
                    <Title style={styles.userData}>{userdata.location}</Title>
                  </View>
                </View>
              )
            }
          </View>
        </View>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  userdata: object,
  dashboardAttempt: func.isRequired,
}

const mapStateToProps = ({ dashboardReducer }) => ({
  userdata: dashboardReducer.data,
});

const mapDispatchToProps = dispatch => {
  return {
    dashboardAttempt: username => dispatch(actions.dashboardAttemptAction(username))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

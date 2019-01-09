/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Image, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import { FlexContainerView, ContainerView, H1Text } from "./styles";
import AppCard from "../../components/AppCard";
import AppTitle from "../../components/AppTitle";
import AppHeadline from "../../components/AppHeadline";
import AppParagraph from "../../components/AppParagraph";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import AppImage from "../../components/AppImage";
import * as actions from "./actions";

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
        <ScrollView>
            <H1Text>Dashboard</H1Text>
            <AppCard>
              <AppCard.Content>
                <AppTitle>Card Title</AppTitle>
                <AppParagraph>Card Description</AppParagraph>
              </AppCard.Content>
              <AppCard.Cover source={{ uri: "https://picsum.photos/700" }} />
              <AppCard.Actions>
                <AppButton>Ok</AppButton>
                <AppButton>Cancel</AppButton>
              </AppCard.Actions>
            </AppCard>
          <ContainerView>
            <AppTextInput
              mode="outlined"
              label="Enter GitHub handle"
              autoCapitalize="none"
              value={textInput}
              onChangeText={val => this.setState({ textInput: val })}
            />
            <AppButton
              icon="add-a-photo"
              mode="contained"
              onPress={this.onPressHandler}
            >
              Fetch Repos
            </AppButton>
            {userdata && (
              <FlexContainerView>
                <ContainerView>
                  <AppImage
                    source={{ uri: userdata.avatarUrl }}
                  />
                </ContainerView>
                <ContainerView>
                  <AppHeadline>{userdata.name}</AppHeadline>
                  <AppTitle>{userdata.bio}</AppTitle>
                  <AppTitle>{userdata.company}</AppTitle>
                  <AppTitle>{userdata.location}</AppTitle>
                </ContainerView>
              </FlexContainerView>
            )}
          </ContainerView>
        </ScrollView>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  userdata: object,
  dashboardAttempt: func.isRequired
};

const mapStateToProps = ({ dashboardReducer }) => ({
  userdata: dashboardReducer.data
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

/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { string, func } from "prop-types";
import { connect } from "react-redux";
import { ScrollView } from "react-native";

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
import styles from "./styles";
import * as actions from "./actions";
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
        <ScrollView>
          <H1Text>Dashboard</H1Text>
          <AppCard>
            <AppCard.Content>
              <AppTitle>Card Title</AppTitle>
              <AppParagraph>Card Description</AppParagraph>
              <AppCard.Cover source={{ uri: "https://picsum.photos/700" }} />
              <AppCard.Actions>
                <AppButton>Ok</AppButton>
                <AppButton>Cancel</AppButton>
              </AppCard.Actions>
            </AppCard.Content>
          </AppCard>
          <ContainerView>
            <AppTextInput
              mode="outlined"
              label="Enter GitHub handle"
              autoCapitalize="none"
              value={textInput}
              onChangeText={val => this.setState({ textInput: val })}
            />
            <AppvButton
              icon="add-a-photo"
              mode="contained"
              onPress={this.onPressHandler}
            >
              Fetch Repos
            </AppvButton>
            {name && (
              <FlexContainerView>
                <ContainerView>
                  <AppImage source={{ uri: avatarUrl }} />
                </ContainerView>
                <ContainerView>
                  <AppHeadline>{name}</AppHeadline>
                  <AppTitle>{bio}</AppTitle>
                  <AppTitle>{company}</AppTitle>
                  <AppTitle>{location}</AppTitle>
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
  name: string.isRequired,
  bio: string.isRequired,
  company: string.isRequired,
  location: string.isRequired,
  avatarUrl: string.isRequired,
  dashboardAttempt: func.isRequired
};

const mapStateToProps = state => {
  if (state.dashboardReducer.data) {
    return {
      name: selectors.getUserName(state),
      bio: selectors.getUserBio(state),
      company: selectors.getUserCompany(state),
      location: selectors.getUserLocation(state),
      avatarUrl: selectors.getUserAvatarUrl(state)
    };
  } else {
    return {
      name: null,
      bio: null,
      company: null,
      location: null,
      avatarUrl: null
    };
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

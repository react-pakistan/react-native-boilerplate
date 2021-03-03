export const loginScreenText : ILoginScreenText = {
  oAuthHeading: 'Continue with Facebook or Google',
  facebookButton: 'Continue with Facebook',
  googleButton: 'Continue with Google',
  signinHeading: 'Enter Credentials to begin',
};

export interface ILoginScreenText {
  [key : string] : string;
}

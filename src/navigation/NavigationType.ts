export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  Auth: {screen: keyof AuthStackParamList};
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

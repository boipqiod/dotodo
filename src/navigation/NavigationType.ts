export type RootStackParamList = {
    Splash: undefined;
    Main: undefined;
    UserNavi: {screen: keyof UserStackParamList};
    Scan: undefined;
    PassportScan: undefined;
};

export type UserStackParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    ResetPassword: undefined;
};

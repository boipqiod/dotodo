import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  innerContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#111',
  },
  textInput: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  LoginButton: {
    width: '100%',
    backgroundColor: '#80ceff',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  LoginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

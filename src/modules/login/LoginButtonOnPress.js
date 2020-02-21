import LoginWithEmail from './LoginRequest';

async function LoginButtonOnPress(
  email,
  pairNr,
  loginButtonPressed,
  setError,
  navigation
) {
  loginButtonPressed(true);

  const { status, message } = await LoginWithEmail(email, pairNr);
  if (status === 200) {
    loginButtonPressed(false);
    navigation.navigate('EmailAuth');
  } else {
    loginButtonPressed(false);
    setError({ isError: true, message });
  }
}

export default LoginButtonOnPress;

export const errorOutputTransformFunction = (error: string) => {
  console.log(error);
  let errorMsg = 'An unknown error occurred';

  switch (error) {
    case 'Firebase: Error (auth/user-not-found).':
      errorMsg = 'User nof found!';
      break;

    case 'Firebase: Error (auth/email-already-in-use).':
      errorMsg = 'Email already used!';
      break;

    case 'Firebase: Error (auth/wrong-password).':
      errorMsg = 'Wrong password!';
      break;

    case 'auth/wrong-password':
      errorMsg = 'Wrong password!';
      break;
  }

  return errorMsg;
};

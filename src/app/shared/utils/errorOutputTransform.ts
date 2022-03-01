export const errorOutputTransformFunction = (error: string) => {
  let errorMsg = 'An unknown error occurred';

  switch (error) {
    case 'auth/user-not-found':
      errorMsg = 'User nof found!';
      break;

    case 'auth/email-already-in-use':
      errorMsg = 'Email already used!';
      break;

    case 'auth/wrong-password':
      errorMsg = 'Wrong password!';
      break;
  }

  return errorMsg;
};

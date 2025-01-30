// Improved error handling in Firebase Authentication

function handleAuthError(error) {
  switch (error.code) {
    case 'auth/user-not-found':
      console.error('User not found. Please check your credentials.');
      // Display a user-friendly message to the user
      break;
    case 'auth/wrong-password':
      console.error('Wrong password. Please try again.');
      // Display a user-friendly message to the user
      break;
    case 'auth/invalid-email':
      console.error('Invalid email address.');
      // Display a user-friendly message to the user
      break;
    default:
      console.error('An unexpected error occurred during authentication:', error);
      // Display a generic error message to the user, log error to a service, etc.
  }
}

// Example usage:
firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(handleAuthError); 

function handleLogin(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);

      switch (errorCode) {
        case 'auth/wrong-password':
          // Wrong password
          alert('Incorrect password. Please try again.');
          break;
        case 'auth/user-not-found':
          // User not found
          alert('User not found. Please check your email address.');
          break;
        case 'auth/too-many-requests':
          // Too many requests
          alert('Too many login attempts. Please try again later.');
          break;
        case 'auth/network-request-failed':
          // Network error
          alert('Network error. Please check your internet connection.');
          break;
        // ... handle other uncommon errors
        default:
          // Handle other errors
          console.error('An unexpected error occurred:', error);
          alert('An unexpected error occurred. Please contact support.');
      }
    });
}
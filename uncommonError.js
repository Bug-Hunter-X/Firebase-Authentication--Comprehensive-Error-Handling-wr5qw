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
      if (errorCode === 'auth/wrong-password') {
        // Wrong password
      } else if (errorCode === 'auth/user-not-found') {
        // User not found
      } else {
        // Handle other errors
      }
    });
}
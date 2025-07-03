function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => {
      window.location.href = role === 'guard' ? 'guard.html' : 'admin.html';
    })
    .catch(e => alert(e.message));
}

function register() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => alert("Registered! Now login."))
    .catch(e => alert(e.message));
}

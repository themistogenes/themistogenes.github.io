console.log('Chat script working...');

(function () {
  // Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtwaHMBcuBsCO-8YPZz3eQcIXgIytAd4s",
    authDomain: "chatproj-3b820.firebaseapp.com",
    projectId: "chatproj-3b820",
    storageBucket: "chatproj-3b820.appspot.com",
    messagingSenderId: "692114294304",
    appId: "1:692114294304:web:ccd49e6837a3530240de45"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // handle on firebase db
  const db = firebase.database();

  // get elements
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');
  const message = document.getElementById('message');
  const write = document.getElementById('write');
  // const read = document.getElementById('read');
  const status = document.getElementById('status');
  const userNameDisplay = document.getElementById('name-display'); // element that can show the current user's email
  const chat = document.getElementById('chat-box');
  let currentUserEmail = ''; // variable to store the current user's email

  // write
  write.addEventListener('click', (e) => {
    const messages = db.ref('messages');

    // simple id - ok for example, do not use in production
    const id = new Date().getTime();

    // Add the value of currentUserEmail when writing to the database under the field name of "sender"
    messages
      .child(id)
      .set({ message: message.value, sender: currentUserEmail })
      .then(function () {
        console.log('Wrote to DB!');
      });
  });

  // read
  // read.addEventListener('click', (e) => {
  //   handleRead();
  // });

  // Use this provided messagesRef to listen for updates and update the chat div on any update, not just when the 'Update Chat' button is clicked
  const messagesRef = db.ref('messages');
  messagesRef.on('value', (snapshot) => {
    handleRead();
  });

  function handleRead() {
    status.innerHTML = '';
    chat.innerHTML = '';
    const messages = db.ref('messages');

    messages.once('value').then(function (dataSnapshot) {
      var data = dataSnapshot.val();
      if (data) {
        var keys = Object.keys(data);

        keys.forEach(function (key) {
          console.log(data[key]);
          chat.innerHTML +=
            (data[key]['sender'] || '') +
            '   :   ' +
            data[key].message +
            '<br><br>';
        });
      }
    });
  }

  // set the userNameDisplay.innerHTML to the passed in userEmail and update the currentUserEmail variable to that same value
  function updateCurrentUser(userEmail) {
    userNameDisplay.innerHTML = userEmail;
    currentUserEmail = userEmail;
  }

  // login
  login.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Login Response: ', resp);
      logout.style.display = 'inline';
      email.style.display = 'none';
      password.style.display = 'none';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener('click', (e) => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Signup + Login Response: ', resp);
      logout.style.display = 'inline';
      email.style.display = 'none';
      password.style.display = 'none';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));
  });

  // logout
  logout.addEventListener('click', (e) => {
    firebase
      .auth()
      .signOut()
      .then((resp) => {
        console.log('Logout Response: ', resp);
        logout.style.display = 'none';
        email.style.display = 'inline';
        email.value = '';
        password.style.display = 'inline';
        password.value = '';
        login.style.display = 'inline';
        signup.style.display = 'inline';
        write.style.display = 'none';
        updateCurrentUser('');
      })
      .catch((e) => console.warn(e.message));
  });
})();
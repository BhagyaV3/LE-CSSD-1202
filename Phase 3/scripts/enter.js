document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nameInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('submitJ').click();
    }
  });

  document.getElementById('emailInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      try {
        document.getElementById('loginButton').click();
      } catch (e) { /**/ }
      try {
        document.getElementById('submitJ').click();
      } catch (e) { /**/ }
      try {
        document.getElementById('sendEmailButton').click();
      } catch (e) { /**/ }
    }
  });

  document.getElementById('passwordInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      try {
        document.getElementById('loginButton').click();
      } catch (e) { /**/ }
      try {
        document.getElementById('submitJ').click();
      } catch (e) { /**/ }
    }
  });

  document.getElementById('fName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('sendEmailButton').click();
    }
  });

  document.getElementById('lName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('sendEmailButton').click();
    }
  });

  document.getElementById('phoneInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('sendEmailButton').click();
    }
  });
});

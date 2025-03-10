const showPassBox = document.getElementById('showPassBox');
        const passwordInput = document.getElementById('passwordInput');

        showPassBox.addEventListener('change', function() {
            if (showPassBox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
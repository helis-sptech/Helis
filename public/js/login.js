var inputSenha = document.getElementById('ipt_password');
var toggleSenha = document.getElementById('toggle-senha');

toggleSenha.addEventListener('click', function () {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
    toggleSenha.classList.remove('fa-slash');
    toggleSenha.classList.add('fa-eye');
  } else {
    inputSenha.type = 'password';
    toggleSenha.classList.remove('fa-eye');
    toggleSenha.classList.add('fa-eye-slash');
  }
});
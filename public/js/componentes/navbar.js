navbar.innerHTML =`

    <div class="esquerda">
      <div class="logo"><img src="assets/icon/logo.svg" alt=""></div>
      <div class="links">
        <a href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
      </div>
    </div>
    <div class="entradas">
      <a href="" class="login">Login</a>
      <a href="" class="registro">Cadastre-se</a>
    </div>
  
`
if(window.scrollY ==100){
    alert(5)
}
window.addEventListener('scroll', () => {
    if(window.scrollY >=100){
        navbar.style.backgroundColor = "#fff"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.08)"
        
    }else{
        navbar.style.backgroundColor = "transparent"
        navbar.style.boxShadow = "none"
      

    }
});
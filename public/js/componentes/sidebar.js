sidebar.innerHTML = `
 <a class="logo" href="dashboard.html"><img src="assets/icon/logo.svg" alt=""></a>
            <div class="links">
                <a href="dashboard.html" id="linkDash" class="link">
                    <i class="fa-solid fa-house"></i> Dasboard
                </a>
                <a href="fretes.html" id="linkFrete" class="link">
                    <i class="fa-solid fa-box"></i> Fretes
                </a>
                <a href="veiculos.html" id="linkVeiculo" class="link">
                    <i class="fa-solid fa-truck"></i> Veículos
                </a>
                <a href="motoristas.html"  id="linkMoto"class="link">
                    <i class="fa-solid fa-user"></i> Motoristas
                </a>
                <a href="financas.html" id="linkFinancas" class="link">
                    <i class="fa-solid fa-wallet"></i> Finanças
                </a>
            </div>
`;

userNav.innerHTML = `  <a href="" class="userButton"><img src="https://st.depositphotos.com/1779253/5140/v/450/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt=""></a>
                    <a href="" class="buttonSair">Sair</a>`;

                    const paginaAtual = window.location.pathname.split('/').pop();

// Todos os links
const links = sidebar.querySelectorAll('.link');

links.forEach(link => {
    const paginaLink = link.getAttribute('href');

    if (paginaAtual === paginaLink) {
        link.classList.add('ativo');
    }
});
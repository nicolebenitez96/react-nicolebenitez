const Nav = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container text-center">
                    <a class="navbar-brand" href="#">
                        <img src="multimedia/Antologia-logo.png" alt="logo"/>
                    </a>
                    <div class="navbar-lista">
                        <button class="lista-mobile-btn">
                            <i class="fa-solid fa-ellipsis fa-2xl" style="color: #000000;"></i>
                        </button>
                        <div class="lista-mobile">
                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/sobre-antologia.html">Sobre Antología</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="pages/tienda.html">Tienda</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="pages/blog.html">Blog</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="pages/contacto.html">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a class="navbar-icon" href="pages/cuenta.html">
                        <i class="fa-regular fa-circle-user fa-2xl" style="color: #000000;"></i>
                    </a>
                </div>
            </nav>
        </header>
    );
};

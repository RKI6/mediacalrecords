function NavBar()
{
    return(
    <div>
        <nav className="navbar navbar-expand-lg bg-light shadow">
            <ul className="navbar nav">
                <li className="nav-item">
                    <link to='/'>Home</link>
                    <a href="login.html" className="nav-link">login</a>
                </li>
                <li className="nav-item">
                    
                    <a href="login.html" className="nav-link">register</a>
                </li>
            </ul>
        </nav>
    </div>
);
}
export default NavBar;
let Header = ({children}) => {
    if(!children)
    children = [<h1>Cat reactor</h1>];

    return (<header className="text-center border-bottom pt-2">
        {children}
    </header>)
}

export default Header;
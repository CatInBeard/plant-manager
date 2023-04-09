let Header = ({children}) => {
    if(!children)
    children = [<h1>Plant manager</h1>];

    return (<header className="text-center border-bottom pt-2">
        {children}
    </header>)
}

export default Header;
import React from 'react'

const Sidebar = () =>{
    return(
        <aside>
            <header>
                <h4>
                    <span>Dev</span>challenges.io
                </h4>
            </header>

            <section>
                <a href="#">Colors</a>
                <a href="#">Typograph</a>
                <a href="#">Spaces</a>
                <a href="#">Buttons</a>
                <a href="#" className="selected">Inputs</a>
                <a href="#">Grid</a>
            </section>

        </aside>
    )
}

export default Sidebar;
import React from 'react'
import './Layout.css'
import MainNavigation from './MainNavigation'

function Layout(props) {
    return (
        <div cll>
           <MainNavigation /> 
           <main>
            {props.children}
           </main>
        </div>
    )
}

export default Layout

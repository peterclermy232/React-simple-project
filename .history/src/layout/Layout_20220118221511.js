import React from 'react'
import './Layout.css'
import MainNavigation from './MainNavigation'

function Layout(props) {
    return (
        <div cla>
           <MainNavigation /> 
           <main>
            {props.children}
           </main>
        </div>
    )
}

export default Layout

import React from 'react'
import './Layout.css'
import MainNavigation from './MainNavigation'

function Layout(props) {
    return (
        <div>
           <MainNavigation /> 
           <main>
            {props.chil}
           </main>
        </div>
    )
}

export default Layout

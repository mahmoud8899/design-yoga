import React, { useState } from 'react';
import { Log } from './Log';
import { TheListNavBar } from './ListNavBar';
import { NavBardata } from '../../components/data/index'


interface TypeProps {
    tilte?: string
}


export const NavBar = (props: TypeProps) => {
    const { tilte } = props





    const [css, setCss] = useState<{
        menubar: string,
        hidden: string

    }>({
        menubar: 'menu-btn',
        hidden: 'hidden'
    })

    const Change = () => {
        if (css.menubar === 'menu-btn') {
            setCss({
                ...css,
                menubar: 'menu-btn open',
                hidden: 'hidden open'
            })
        } else {
            setCss({
                ...css,
                menubar: 'menu-btn',
                hidden: 'hidden'
            })
        }
    }

    return (


        <nav className='width flex justify-content align-items '>


            <div className='box flex align-items padding'>
                <Log />
               

                <div onClick={Change} className='icons___' >
                    <div className={css.menubar}  >
                        <div className='menu-btn__burger' />
                    </div>
                </div>

            </div>

            <div className='box padding'>


                <div className={css.hidden}>
                    <TheListNavBar />
                </div>
            </div>





        </nav>

    )

}
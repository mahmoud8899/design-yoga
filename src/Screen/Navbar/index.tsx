import React, { useState } from 'react';
import { Log } from './Log';
import { TheListNavBar } from './ListNavBar';

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


        <nav className='flex  align-items flexwrap'>


            <div className='__Card flex align-items padding'>

                <div className='flex align-items flex-column'>
      
                    <h2 className='font-test titlename colorscreenx FirstEL'>Yoga Ep</h2>
                </div>




                <div onClick={Change} className='icons___' >
                    <div className={css.menubar}  >
                        <div className='menu-btn__burger' />
                    </div>
                </div>

            </div>

            <div className='padding '>
               
               <div className={css.hidden}>
               <TheListNavBar />
               </div>

                   
           

            </div>





        </nav>

    )

}
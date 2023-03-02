import { NavBardata } from '../../components/data/index'
import React from 'react'

interface ClassType {
    AddStyle?: string
}



export const TheListNavBar = (props: ClassType) => {
    const { AddStyle } = props




    return (
        <ul className={AddStyle ? AddStyle : 'flex align-items justify-content Ex'}>
            {NavBardata.Listnavbar.map((item, index) => (
                <a href={item.link} key={index} className=''>
                    <li className='colorscreenx name font-family font-family-title cursor white extra text-transform'>
                        {item.name}
                    </li>
                </a>
            ))}

        </ul>
    )
}
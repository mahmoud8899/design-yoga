
import React from "react"
import { TheButtom } from "../../Components/Buttom"
import { UrlImage } from "../../Utlis/UrlImages"
import { Slider } from "./Slider"

const About = {

    title: 'Pregnant',
    title2: 'Women Program',
    des: `
    Duis aute irure dolor in reprenenderit in voluntate ve
    esse cillum dolore eu fugiat nulla pariatur. Exceptel
    sint occaecat cupidatat.
    `,
    button: 'join us now',
    image: UrlImage.SecandScreen
}


export const TheAbout = () =>{


    return (
        <div className="flex justify-content align-items flexwrap backgroundanther padding">

        <div className="box padding">
            <h2 className="font-test titlename colorscreenx">{About.title}</h2>
            <h2 className="font-test titlename colorscreenx">{About.title2}</h2>
            <div className="mar">
                <p className="des font-family-des colorscreenx">{About.des}</p>
            </div>


            <div className='mar'>
                <TheButtom
                    Title={About.button}
                    Classname='
            cursor
    buttom
     backgroundscreen
      border-radiusscreen 
      des
       font-family-des
       colorscreenx
         outline'
                />
            </div>
        </div>
        <div className="box padding flex">
            <img src={About.image} className='imageYoga' />
        </div>
    </div>
    )
}
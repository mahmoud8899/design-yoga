
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
    image: UrlImage.OneScreen
}


export const TheAbout = () => {


    return (
        <div className="flex justify-content align-items flexwrap  padding addImage">

            <div className="box padding mar">
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

            <div className="box mar flex flex-end padding">

                <div className="border-radiusscreen">
                    <img src={About.image} width='100%' height='auto' />
                </div>

            </div>


        </div>
    )
}
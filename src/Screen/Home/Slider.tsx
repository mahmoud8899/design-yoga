import React from "react"
import { TheButtom } from "../../Components/Buttom"
import { UrlImage } from "../../Utlis/UrlImages"
let Data = {

    title: 'Balance Your',
    title2: 'Body and Mind',
    des: `Duis aute ture
    in reorenendenun voluolate ve
    esse cillum dolore eu fugiat nulla pariatur. Excepteui sint occaecat cupidatat`,
    buttom: 'join us now',
    image: UrlImage.OneScreen
}


export const Slider = () =>{



    return (
        <div className="flex justify-content align-items flexwrap padding">



        <div className="box ">

           <div className="backgroundscreen border-radiusscreen">
           <img src={Data.image} width='90%' height='auto' className="margin-auto" />
           </div>

        </div>


        <div className="box flex flex-column ">



            <h2 className="font-test titlename colorscreenx">{Data.title}</h2>
            <h2 className="font-test titlename colorscreenx">{Data.title2}</h2>
            <div className="mar">
                <p className="des font-family-des colorscreenx">{Data.des}</p>
            </div>


            <div className='mar'>
                <TheButtom
                    Title={Data.buttom}
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
    </div>
    )
}
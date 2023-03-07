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


export const FirstScreen = () =>{




    return (
        <div className="position"  id="home">

        <div className="">
            <img src={UrlImage.Back} width='100%' height='auto' className="SizeXpxp" />
        </div>

        <div className="fix FlexSize">

            <img src={UrlImage.Phone} width='60%' height='auto' />


            <div className="flex flex-column flixContainer">



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
whitebackground
border-radiusscreen 
des
font-family-des
colorscreenx
outline'
                    />
                </div>

            </div>
        </div>


    </div>
    )
}
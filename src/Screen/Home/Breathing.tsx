import React from "react"
import { TheButtom } from "../../Components/Buttom"
import { UrlImage } from "../../Utlis/UrlImages"


let IBreathing = {
    title: 'Yoga Breathing',
    title2: 'or Pranayama',
    des: `duis aute dotor in repehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint accaecat cupidatat`,
    image: UrlImage.Yoga5,
    button: 'learn more'

}

export const TheBreathing = () => {




    return (
        <div className="flex align-items justify-content flexwrap padding">

            <div className="box flex flex-column Order __margin__top_bootom">
                <h2 className="font-test titlename colorscreenx">{IBreathing.title}</h2>
                <h2 className="font-test titlename colorscreenx">{IBreathing.title2}</h2>
                <div className="mar">
                    <p className="des font-family-des text-transform colorscreenx ">
                        {IBreathing.des}
                    </p>
                </div>

                <div className='mar'>
                    <TheButtom
                        Title={IBreathing.button}
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

            <div className="box __margin__top_bootom">
                <img
                    src={IBreathing.image}
                    width='100%'
                    height='auto'
                    className="border-radiusscreen"
                />
            </div>

        </div>

    )
}
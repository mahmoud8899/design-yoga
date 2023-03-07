import React from "react"
import ReactPlayer from "react-player"


let thetraining = {
    title: 'Yoga Training',
    title2: 'Video Showreel',
    des: `Dus aute rure dolor in reprenenderit in voluntate vell
    esse cillum dolore eu fugiat nulla pariatur. Excepteui`,
    video: 'https://www.youtube.com/watch?v=_Mx24iENIEY'

}
export const Training = () => {




    return (
        <div className="flex justify-content align-items flexwrap padding" id="training">

            <div className="box mar flex">
            <ReactPlayer
                    url="https://www.youtube.com/watch?v=_Mx24iENIEY"
                />
            </div>

            <div className="box mar flex flex-column ">



                <h2 className="font-test titlename colorscreenx">{thetraining.title}</h2>
                <h2 className="font-test titlename colorscreenx">{thetraining.title2}</h2>
                <div className="mar">
                    <p className="des font-family-des colorscreenx">{thetraining.des}</p>
                </div>




            </div>

        </div>
    )
}

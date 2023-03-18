import React, { Fragment } from "react"
import { TheButtom } from "../../Components/Buttom"
import { UrlImage } from "../../Utlis/UrlImages"
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
let Data = {

    title: 'Balance Your',
    title2: 'Body and Mind',
    des: `Duis aute ture
    in reorenendenun voluolate ve
    esse cillum dolore eu fugiat nulla pariatur. Excepteui sint occaecat cupidatat`,
    buttom: 'join us now',
    image: UrlImage.OneScreen
}


export const FirstScreen = () => {




    return (

        <Fragment>
            <div className="flex  justify-content align-items flexwrap padding">



                <div className="box flex flex-column flixContainer Order">


                    <h2 className="firsttitle FONT-FAMILY-NEW allcolor">YOGA CLASS</h2>

                    <div className="mar">
                        <p className="des font-family-des colorscreenx ext-align">{Data.des}</p>
                    </div>


                    <div className="mar">
                        <TheButtom
                            Title={Data.buttom}
                            Classname="cursor buttom backgroundscreen border-radiusscreen  des font-family-des whitecolor outline"

                        />
                    </div>



                </div>

                <div className="change__ flex align-items addnewsity ">
                    <img
                        src={UrlImage.Phone}
                        width='300px'
                        height='300px'
                    />

                </div>

                
         

            </div>


            <div className="mar flex align-items __CHANGE padding">

                <div className="flex ">
                    <FiFacebook className="icons_x" />
                    <FiInstagram className="icons_x mar__" />
                    <FiLinkedin className="icons_x mar__" />
                    <FiTwitter className="icons_x mar__" />
                </div>

                <div className="margin-l mar">
                    <p className="des des font-family-des colorscreenx ext-align">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel tacilIsIs
                    </p>
                </div>
            </div>

        </Fragment>

    )
}



// <h2 className="font-test titlename colorscreenx">{Data.title}</h2>
// <h2 className="font-test titlename colorscreenx">{Data.title2}</h2>
{/* <div className="mar">
    <p className="des font-family-des colorscreenx">{Data.des}</p>
</div> */}


// <div className='mar'>
//     <TheButtom
//         Title={Data.buttom}
//         Classname='
// cursor
// buttom
// whitebackground
// border-radiusscreen 
// des
// font-family-des
// colorscreenx
// outline'
//     />
// </div>
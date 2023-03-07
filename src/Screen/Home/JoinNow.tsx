import React from 'react'
import { TheButtom } from '../../Components/Buttom'
import { UrlImage } from '../../Utlis/UrlImages'

const Join = {

    title: 'Join Now and',
    title2: 'Get 50% Off',
    image: UrlImage.Yoga6,
    des: `Duis aute irure dolor in reprehenderit in voluptate veli
    cillum dolore eu tustat nulla pariatur. Fxcenteur
    sint occaecat cupidatat`,
    button: 'join now'

}

export const JoinNow = () => {


    return (
        <div className="flex justify-content align-items flexwrap padding ">

            <div className="box mar flex flex-end" >

              <img src={Join.image} 
                width='100%' 
                height='auto'
                className='ImageSize'
                
                />
            
            </div>

            <div className="box flex flex-column  mar">



                <h2 className="font-test titlename colorscreenx">{Join.title}</h2>
                <h2 className="font-test titlename colorscreenx">{Join.title2}</h2>
                <div className="mar">
                    <p className="des font-family-des colorscreenx">{Join.des}</p>
                </div>


                <div className='mar'>
                    <TheButtom
                        Title={Join.button}
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
import React from "react"
import { UrlImage } from "../../Utlis/UrlImages"


let Program = [
    {

        _id: 1,
        title: 'Program 1',
        des: 'sint accaecat cupidatat non',
        image: UrlImage.Yoga1
    },
    {

        _id: 2,
        title: 'Program 2',
        des: 'sint accaecat cupidatat non',
        image: UrlImage.Yoga2
    },
    {

        _id: 2,
        title: 'Program 3',
        des: 'sint accaecat cupidatat non',
        image: UrlImage.Yoga4
    }
]


export const TheProgram = () =>{



    return (

        <div className="flex content align-items flexwrap  padding">
        {Program?.map((item, index) => (
            <div className="__Card flex flex-column align-items content padding" key={index}>

                <img src={item.image} width='100px' height='100px' />
                <h2 className="name font-family-title text-transform" >{item.title}</h2>
                <div className="">
                    <p className="des font-family-des text-transform colorscreenx">{item.des}</p>
                </div>


            </div>
        ))}


    </div>
    )
}
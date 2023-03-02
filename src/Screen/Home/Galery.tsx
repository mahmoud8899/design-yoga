import React from "react"
import { UrlImage } from "../../Utlis/UrlImages"


let TheGalery = {
    title: 'Galery',
    des: `fusce ut placerat orci nulla pellentes fusce ut  orci nulla pellentes`,

    data: [
        {
            _id: 1,
            name: 'Facilis Gravida',
            image: UrlImage.Yoga7,
            des: `Alacus vostihulum sod Amor nur gravida guis blandit turn`

        },
        {
            _id: 2,
            name: 'Facilis Gravida',
            image: UrlImage.Yoga8,
            des: `Alacus vostihulum sod Amor nur gravida guis blandit turn`

        },
        {
            _id: 3,
            name: 'Facilis Gravida',
            image: UrlImage.Yoga9,
            des: `Alacus vostihulum sod Amor nur gravida guis blandit turn`

        },
    ]
}

export const Galery = () => {



    return (
        <div className="flex content align-items flexwrap padding">

            <div className="box flex content align-items flex-column">
                <h2 className="font-test titlename colorscreenx">{TheGalery.title}</h2>
                <div className="mar">
                    <p className="des font-family-des colorscreenx ext-align"> {TheGalery.des} </p>
                </div>

            </div>


            <div className="width flex justify-content align-items flexwrap">

                {TheGalery.data.map((item, index) => (
                    <div key={index} className="__Card flex content align-items flex-column backgroundscreen mar border-radiusscreen overflow">
                        <img src={item.image} width='100%' height='200px' />
                        <div className="padding">
                            <h2 className="name font-test colorscreenx ext-align">{item.name}</h2>
                            <div className="">
                                <p className="des font-family-des colorscreenx ext-align"> {item.des} </p>
                            </div>
                        </div>

                    </div>
                ))}






            </div>

        </div>
    )
}
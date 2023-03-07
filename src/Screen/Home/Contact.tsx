import React from "react"
import { TheButtom } from "../../Components/Buttom"
import { TheInput } from "../../Components/Input"
import { UrlImage } from '../../Utlis/UrlImages'

let TheContact = {
    title: 'Get in Touch',
    des: 'Neaue laorept suspendisse Interdum consectetur liber id taurious nislfincidunt. Dictum ',
    name: 'your name',
    gender: 'gender',
    message: 'message',
    button: 'send message',

}

export const Contact = () => {



    return (
        <div className="flex align-items flex-column flexwrap content padding addImage " id="contact">
            <div className="__Card mar">
                <h1 className="font-test titlename colorscreenx ext-align">{TheContact.title}</h1>
                <div className="mar">
                    <p className="des font-family-des colorscreenx ext-align">
                        {TheContact.des}
                    </p>
                </div>
            </div>

            <div className="__Card flex align-items flex-column flexwrap content mar" >
                <TheInput
                    className="input border-radiusscreen  mar width padding__left backgroundeee"
                    type='text'
                    placeholder={TheContact.name}

                />

                <TheInput
                    className="input border-radiusscreen  mar width padding__left backgroundeee"
                    type='text'
                    placeholder={TheContact.gender}

                />


                <textarea placeholder={TheContact.message} className='outline border-radiusscreen  mar width height padding__left backgroundeee' ></textarea>

                <TheButtom
                    Title={TheContact.button}
                    Classname=' cursor buttom backgroundeee border-radiusscreen  des font-family-des colorscreenx outline'
                />
            </div>
        </div>
    )
} 
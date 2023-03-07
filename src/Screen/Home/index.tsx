import React from "react"
import { UrlImage } from "../../Utlis/UrlImages"
import { TheAbout } from "./Abbout"
import { TheBreathing } from "./Breathing"
import { Contact } from "./Contact"
import { FirstScreen } from "./FirstScreen"
import { Galery } from "./Galery"
import { JoinNow } from "./JoinNow"
import { TheProgram } from "./Program"
import { Slider } from "./Slider"
import { Training } from "./Training"


export default function HomeScreen() {




    return (
        <div>



           

           
           <FirstScreen   />

            <Slider />


            <div className="Link backgroundscreen margin-top "   />
          



            <TheProgram />
            <div className="margin-top" />
            <div className="Link backgroundscreen margin-top "   />
            <TheBreathing />
            <div className="Link backgroundscreen margin-top "   />
            <JoinNow />
            <div className="Link backgroundscreen margin-top "   />
            <Galery />
            <div className="Link backgroundscreen margin-top "   />
            <Training />
            <div className="Link backgroundscreen margin-top "   />
            <Contact />

        </div>

    )
}
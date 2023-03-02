import React from "react"
import { UrlImage } from "../../Utlis/UrlImages"
import { TheAbout } from "./Abbout"
import { TheBreathing } from "./Breathing"
import { Galery } from "./Galery"
import { JoinNow } from "./JoinNow"
import { TheProgram } from "./Program"
import { Slider } from "./Slider"



export default function HomeScreen() {




    return (
        <div>

  
        
            <Slider />

            <TheAbout />


            <TheProgram />
            <div className="margin-top"  />
            <TheBreathing />
            <JoinNow />
            <Galery   />


        </div>

    )
}
import React from "react";
import { Log } from '../Navbar/Log'
import { TheListNavBar } from '../Navbar/ListNavBar'
import { TheInput } from "../../Components/Input";
import { TheButtom } from "../../Components/Buttom";


export const Footer = () => {



    return (
        <footer >
            <div className="flex  content align-items flexwrap footerbackground padding" >


                <div className="__Card  flex content padding">
                    <Log />
                </div>

                <div className="__Card  padding">
                    <TheListNavBar
                        AddStyle='flex flex-column content ChangeXp'
                    />

                </div>


                <div className="__Card  flex flex-column content align-items flexwrap padding">
                    <h2 className="font-test titlename whitecolor">Subscribe Our </h2>
                    <h2 className="font-test titlename whitecolor">Newsletter</h2>

                    <TheInput
                        className="input border-radiusscreen  mar width padding__left backgroundeee"
                        type='text'
                        placeholder='your email'

                    />
                    <TheButtom
                        Title='subscribe'
                        Classname='cursor buttom whitebackground border-radiusscreen  des font-family-des  outline '
                    />


                </div>

            </div>

        </footer>
    )
}
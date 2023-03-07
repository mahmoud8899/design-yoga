import React from "react"

interface typeProps {
    className: string,
    type: string,
    placeholder: string

}

export const TheInput = (props: typeProps) => {
    const {className,type ,placeholder} = props


    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}

        />
    )
}
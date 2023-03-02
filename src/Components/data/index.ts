import { UrlImage } from "../../Utlis/UrlImages"

type Ultype = {
    _id: number,
    name: string,
    link: string
}
interface datatype {
    title: string,
    icon: string,
    Listnavbar: Ultype[]
}
export let NavBardata: datatype = {
    title: 'fitness',
    icon: UrlImage.LogIcon,

    // home about blog training event shop contact
    Listnavbar: [
        {
            _id: 5,
            name: 'home',
            link: '#home',
        },
        {
            _id: 1,
            name: 'about',
            link: '#about',
        },
        {
            _id: 2,
            name: 'blog',
            link: '#blog',
        },
        {
            _id: 3,
            name: 'training',
            link: '#training',
        },
        {
            _id: 4,
            name: 'event',
            link: '#event',
        },
        {
            _id: 6,
            name: 'contact',
            link: '#contact',
        },

        
       
    ]
}
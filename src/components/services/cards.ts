import { StaticImageData } from "next/image"
import image1 from "../../public/assets/images/card1.jpg"
import image2 from "../../public/assets/images/card2.png"
import image3 from "../../public/assets/images/card3.jpg"

export type cardsInfo = {
    id: string,
    title: string,
    src: StaticImageData,
    description: string,
}

const cards : cardsInfo[] = [
    {
        id: "1",
        title: "fashion store",
        src: image1,
        description: "Shop ladies fashion at Missguided USA. With hundreds of new styles hitting our shelves every week"
    },
    {
        id: "2",
        title: "Home furniture",
        src: image2,
        description: "Provides superior quality furniture and mattresses at a price that customers can easily afford."
    },
    {
        id: "3",
        title: "super gadget store",
        src: image3,
        description: "Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys"
    }
]

export default cards;
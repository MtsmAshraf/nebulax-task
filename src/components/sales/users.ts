import { StaticImageData } from "next/image"
import image1 from "../../public/assets/images/profile-3.jpg"
import image2 from "../../public/assets/images/profile-2.jpg"
import line1 from "../../public/assets/images/line-1.svg"
import line2 from "../../public/assets/images/line-2.svg"
export type usersInfo = {
    id: string,
    profit: string,
    revenue: string,
    src: StaticImageData,
    lineSrc: StaticImageData,
}

const users : usersInfo[] = [
    {
        id: "1",
        profit: "7,654",
        revenue: "232",
        src: image1,
        lineSrc: line1,
    },
    {
        id: "2",
        profit: "9,987",
        revenue: "349",
        src: image2,
        lineSrc: line2,
    }
]

export default users;
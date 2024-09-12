import { StaticImageData } from "next/image"
import image1 from "../../public/assets/images/profile-3.jpg"
import image2 from "../../public/assets/images/profile-2.jpg"

export type usersInfo = {
    id: string,
    profit: string,
    revenue: string,
    src: StaticImageData,
}

const users : usersInfo[] = [
    {
        id: "1",
        profit: "7,654",
        revenue: "232",
        src: image1,
    },
    {
        id: "2",
        profit: "9,987",
        revenue: "349",
        src: image2,
    }
]

export default users;
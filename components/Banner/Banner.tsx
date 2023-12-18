import { Carousel } from "flowbite-react"
import Carousel1 from "@/public/images/banner_1.png"
import Carousel2 from "@/public/images/banner_2.png"
import Image from "next/image"
export function Banner() {
  return (
    <section className="container home__banner flex flex-row items-center mx-auto justify-between">
      <div className="banner__content space-y-2 w-1/3">
        <span className="welcome__text text-2xl">CHÀO MỪNG BẠN ĐẾN VỚI</span>
        <h1 className="company__name">CÔNG TY TNHH <br/> DỊCH VỤ TƯ VẤN <br/> MT GOLD</h1>
        <button className="link__services text-2xl ">KHÁM PHÁ NGAY</button>
      </div>
      <div className="banner__img">
        <Carousel>
          <Image className="w-full h-full" src={Carousel1} alt="banner_1"/>
          <Image className="w-full h-full" src={Carousel2} alt="banner_2"/>
        </Carousel>
      </div>
    </section>
  )
}
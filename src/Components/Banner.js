import React from "react";
import bannerStyles from "./Styles/banner.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import vegImg from "./images/Vegetables.png";
import appleImg from "./images/Apple.png";
import fruitImg from "./images/Fruits.png";
import beansImg from "./images/Beans.png";
export default function Banner() {
  return (
    
    <Carousel autoPlay={true} infiniteLoop={true} interval={2500} showThumbs={false} showStatus={false}>
      <div>
        <img src={vegImg} alt="" />
        <div className={bannerStyles.heading}>Get Potatoes Free </div>
        <div className={bannerStyles.desc}>
          Buy Vegetables and get Potatoes free. Conditions apply
        </div>
        <div className={bannerStyles.cta}>
            Shop Now
        </div>
      </div>
      <div>
        <img src={appleImg} alt="" />
        <div className={bannerStyles.heading}>
          An Apple a day keeps doctor away.
        </div>
        <div className={bannerStyles.desc}>Royal Gala Apples</div>
        <div className={bannerStyles.cta}>
            Shop Now
        </div>
      </div>
      <div>
        <img src={fruitImg} alt="" />
        <div className={bannerStyles.heading}>Bite Into Everyday Wellness</div>
        <div className={bannerStyles.desc}>Start your day with a fruit</div>
        <div className={bannerStyles.cta}>
            Shop Now
        </div>
      </div>
      <div>
        <img src={beansImg} alt="" />
        <div className={bannerStyles.heading}>Rich in Protein</div>
        <div className={bannerStyles.desc}>20% discount on Swiss Beans</div>
        <div className={bannerStyles.cta}>
            Shop Now
        </div>
      </div>
      

    </Carousel>
  );
}

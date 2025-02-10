"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderBtnsProps = {
    containerStyles: string;
    btnStyles: string;
};

const WorkSliderBtns = ({
    containerStyles,
    btnStyles,
}: WorkSliderBtnsProps) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold onClick={() => swiper.slidePrev()} />
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold onClick={() => swiper.slideNext()} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;

import useDevice from "../../hooks/useDevice"
import PromotionsMobile from "./PromotionsMobile"
import PromotionsPC from "./PromotionsPC"
import PromotionsTablet from "./PromotionsTablet"

function Promotions() {
    const { isMobile, isTablet, isPC } = useDevice()
    return (
        <>
            {isPC && <PromotionsPC />}
            {isTablet && <PromotionsTablet />}
            {isMobile && <PromotionsMobile />}

        </>
    )
}

export default Promotions
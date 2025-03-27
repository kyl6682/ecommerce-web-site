import useDevice from "../../hooks/useDevice.jsx"
import PromotionsMobile from "./PromotionsMobile.jsx"
import PromotionsPC from "./PromotionsPC.jsx"
import PromotionsTablet from "./PromotionsTablet.jsx"

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
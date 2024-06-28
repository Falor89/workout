export const pastPrice = (price) => {
    switch (price) {
        case 699: {
            return 999
        } break;
        case 999: {
            return 1690
        } break;
        case 2990: {
            return 5990
        } break;
        case 5990: {
            return 18990
        } break;
        default:
            return null
    }
}

export const pastPriceDiscount = (price) => {
    switch (price) {
        case 599: {
            return 999
        } break;
        case 799: {
            return 1690
        } break;
        case 1690: {
            return 5990
        } break;
        default:
            return null
    }
}
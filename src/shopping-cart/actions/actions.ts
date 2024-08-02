import { getCookie, hasCookie, setCookie } from "cookies-next"



export const getCookieCart = () : { [id: string]: number} => {

    if ( hasCookie('cart') ) {
        const cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' );
        return cookieCart
    } else {
        return {};
    }
}

export const addProductToCart = (id: string) => {

    const cookieCart = getCookieCart();
    cookieCart[id] = cookieCart[id] ? cookieCart[id] + 1 : 1;
    
    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeProductFromCart = (id: string) => {

    const cookieCart = getCookieCart();

    cookieCart[id] = cookieCart[id] ? cookieCart[id] = 0 : 0;

    setCookie('cart', JSON.stringify(cookieCart))   
}

export const removeSingleItemFromCart = (id: string) => {
    const cookieCart = getCookieCart();

    cookieCart[id] = cookieCart[id] ? cookieCart[id] - 1 : 0;

    setCookie('cart', JSON.stringify(cookieCart))
}
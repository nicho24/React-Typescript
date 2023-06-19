import { createContext, useState, ReactNode } from "react";

interface ProductProps {
    name: string;
    price: number;
    image: string;
}
interface CardProviderProps {
    children: ReactNode;
}
// interface CartProps {
//     items: ProductProps[];
//     addToCart: (product: ProductProps) => void;
//   }
interface CardContextType {
    items: ProductProps[];
    addToCart: ({name, price, image}: ProductProps) => void;
}
const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider ({children}: CardProviderProps) {

    const [items, setItems] = useState<ProductProps[]>([]);

    const addToCart = ({name, price, image}: ProductProps) => {
        setItems((prevState) => [...prevState, {name, price, image}]);
    }
    return (
        <CardContext.Provider value={{items, addToCart}}>
            {children}
        </CardContext.Provider> 
        )
}


export default CardContext;

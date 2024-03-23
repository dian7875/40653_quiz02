import React from "react";

export type Product = {
    id: number;
    name: string;
    step: number;
    price: number;
}

type MyContextData = {
    products: Product[];
    step: number;
}

const MyContext = React.createContext<MyContextData>({
    products: [],
    step: 0
});

export default MyContext;

import MyContext, { Product } from "./MyContext";

export interface IThemeProviderProps { 
    children: React.ReactNode;
    products: Product[];
    step: number;
}  

export const MyProvider: React.FC<IThemeProviderProps> = ({ children, products, step }) => {
    
    return (
      <MyContext.Provider value={{ products, step }} >
         {children}
      </MyContext.Provider>
    );
};

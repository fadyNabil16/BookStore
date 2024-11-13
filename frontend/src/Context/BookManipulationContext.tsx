import React, { createContext, useEffect, useState } from "react";

export type BookContextType = {
  AddBook: () => boolean;
};

type props = {
    children: React.ReactNode;
}

const BookManipulationCtx = createContext<BookContextType>({} as BookContextType);

export const BookInfoProvider = ({children}: props) => {
    const [token, setToken]= useState<string|null>(null);
    
    useEffect(() => {
        const _token = localStorage.getItem("token");
    }, [])
    
    
    const AddBook = async (
        ISBN: string,
        Title: string,
        PublicationDate: Date,
        Edition: string,
        AvailableQuantity: string,
        price: string,
        PhotoUri: string
    ) => {
        await AddBookApi(ISBN, Title, PublicationDate, Edition, AvailableQuantity, price, PhotoUri).then()
    }
    
    return (
        <BookManipulationCtx.Provider value={{}}>
            {children}
        </BookManipulationCtx.Provider>
    )
}
import { AddBookApi } from "@/Services/EntityServices";
import React, { createContext, useEffect, useState } from "react";

export type BookContextType = {
  addBook: (
    ISBN: string,
    Title: string,
    PublicationDate: Date,
    Edition: string,
    AvailableQuantity: string,
    price: string,
    PhotoUri: string
  ) => Promise<void>;
};

type props = {
  children: React.ReactNode;
};

const DbContext = createContext<BookContextType>({} as BookContextType);

export const DbProvider = ({ children }: props) => {
  useEffect(() => {}, []);

  const addBook = async (
    ISBN: string,
    Title: string,
    PublicationDate: Date,
    Edition: string,
    AvailableQuantity: string,
    price: string,
    PhotoUri: string
  ) => {
    await AddBookApi(
      ISBN,
      Title,
      PublicationDate,
      Edition,
      AvailableQuantity,
      price,
      PhotoUri
    )
      .then((res) => {
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const value = { addBook };
  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
};
export const useDbManagement = () => React.useContext(DbContext);

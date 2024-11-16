import { handleError } from "@/Helpers/ErrorHandler";
import axios from "axios";

const port = "5248";
const api = `http://localhost:${port}/`;

export const AddBookApi = async (
  ISBN: string,
  Title: string,
  PublicationDate: Date,
  Edition: string,
  AvailableQuantity: string,
  price: string,
  PhotoUri: string
) => {
  try {
    console.log("come to try");

    const data = await axios.post(
      api + "add",
      {
        isbn: ISBN,
        title: Title,
        publicationDate: PublicationDate,
        edition: parseInt(Edition, 10),
        availableQuantity: parseInt(AvailableQuantity, 10),
        price: parseFloat(price),
        photoUri: PhotoUri,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.log("opps fady");
    handleError(error);
  }
};

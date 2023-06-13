import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";
import { writeJSONToFile } from "../../../hooks/utils/conversion-utils";

describe("writeJSONToFile", () => {
  test("gets the city from the record", async () => {
    const mock = {
      id: 11,
      title: "perfume Oil",
      description: "Mega Discount, Impression of A...",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      ],
    };

    await writeJSONToFile(__dirname, "mock.json", mock);

    const mockPath = path.join(__dirname, "mock.json");

    const result = fs.readFileSync(mockPath).toString();

    fs.unlinkSync(mockPath);

    const expected = JSON.stringify(mock, null, 2);
    expect(expected).toBe(result);
  });
});

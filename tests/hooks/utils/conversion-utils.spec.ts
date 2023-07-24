import fs from "fs";
import path from "path";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { writeJSONToFile } from "../../../hooks/utils/conversion-utils";

describe("writeJSONToFile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock("fs");
  });

  test("writes a file in an nonexistent directory", async () => {
    fs.promises.stat = vi.fn().mockImplementation(() => {
      throw new Error("Mocked error");
    });
    fs.promises.mkdir = vi.fn().mockImplementation(() => true);
    fs.promises.writeFile = vi.fn().mockImplementation(() => true);

    const mock = [
      {
        name: "John Doe",
        image: "/images/advocates/downloaded/rec8zXNiryVq3Q6kh.jpg",
        region: "America (North)",
        city: "New York",
        country: ["United States"],
        slackId: "U017XULSMUY",
        slackUsername: "John.Doe",
      },
      {
        name: "Jena Doe",
        image: "/images/advocates/downloaded/recFKAk7KoXr3IMTH.jpg",
        region: "America (North)",
        city: "Durham",
        country: ["United States"],
        slackId: "U01313A0AGP",
        slackUsername: "J.Doe",
      },
    ];

    const fileName = "mock.json";
    const folder = path.join(__dirname, "mock");
    const filePath = path.join(folder, fileName);

    await writeJSONToFile(folder, fileName, mock);

    expect(fs.promises.stat).toBeCalledWith(folder);
    expect(fs.promises.mkdir).toBeCalledWith(folder);
    expect(fs.promises.writeFile).toBeCalledWith(
      filePath,
      JSON.stringify(mock, null, 2)
    );
  });

  test("writes a file in an existent directory", async () => {
    fs.promises.stat = vi.fn().mockImplementation(() => true);
    fs.promises.mkdir = vi.fn().mockImplementation(() => true);
    fs.promises.writeFile = vi.fn().mockImplementation(() => true);

    const mock = [
      {
        name: "Jena Doe",
        image: "/images/advocates/downloaded/rec8zXNiryVq3Q6kh.jpg",
        region: "America (North)",
        city: "New York",
        country: ["United States"],
        slackId: "U017XULSMUY",
        slackUsername: "J.Doe",
      },
      {
        name: "John Doe",
        image: "/images/advocates/downloaded/recFKAk7KoXr3IMTH.jpg",
        region: "America (North)",
        city: "Durham",
        country: ["United States"],
        slackId: "U01313A0AGP",
        slackUsername: "John.Doe",
      },
    ];

    const fileName = "mock.json";
    const folder = path.join(__dirname, "mock");
    const filePath = path.join(folder, fileName);

    await writeJSONToFile(folder, fileName, mock);

    expect(fs.promises.stat).toBeCalledWith(folder);
    expect(fs.promises.mkdir).not.toBeCalled();
    expect(fs.promises.writeFile).toBeCalledWith(
      filePath,
      JSON.stringify(mock, null, 2)
    );
  });
});

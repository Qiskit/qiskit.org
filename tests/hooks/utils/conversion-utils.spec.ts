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
        name: "Abby Mitchell",
        image: "/images/advocates/downloaded/rec8zXNiryVq3Q6kh.jpg",
        region: "America (North)",
        city: "New York",
        country: ["United States"],
        slackId: "U017XULSMUY",
        slackUsername: "Abby Mitchell",
      },
      {
        name: "Abeer Vaishnav",
        image: "/images/advocates/downloaded/recFKAk7KoXr3IMTH.jpg",
        region: "America (North)",
        city: "Durham",
        country: ["United States"],
        slackId: "U01313A0AGP",
        slackUsername: "Abeer",
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

  test("write a file in an unexistent folder", async () => {
    fs.promises.stat = vi.fn().mockImplementation(() => true);
    fs.promises.mkdir = vi.fn().mockImplementation(() => true);
    fs.promises.writeFile = vi.fn().mockImplementation(() => true);

    const mock = [
      {
        name: "Abby Mitchell",
        image: "/images/advocates/downloaded/rec8zXNiryVq3Q6kh.jpg",
        region: "America (North)",
        city: "New York",
        country: ["United States"],
        slackId: "U017XULSMUY",
        slackUsername: "Abby Mitchell",
      },
      {
        name: "Abeer Vaishnav",
        image: "/images/advocates/downloaded/recFKAk7KoXr3IMTH.jpg",
        region: "America (North)",
        city: "Durham",
        country: ["United States"],
        slackId: "U01313A0AGP",
        slackUsername: "Abeer",
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

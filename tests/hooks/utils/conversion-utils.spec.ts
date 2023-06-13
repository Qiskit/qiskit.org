import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";
import { writeJSONToFile } from "../../../hooks/utils/conversion-utils";

describe("writeJSONToFile", () => {
  test("gets the city from the record", async () => {
    const mock = [
      {
        name: "Main",
        description: "The main Qiskit packages maintained by IBM Quantum",
      },
      {
        name: "Extensions",
        description: "IBM Quantum supported Qiskit extensions",
      },
      {
        name: "Community",
        description:
          "Software packages supported by the Qiskit community, not maintained by IBM Quantum",
      },
    ];

    await writeJSONToFile(__dirname, "mock.json", mock);

    const mockPath = path.join(__dirname, "mock.json");

    const result = fs.readFileSync(mockPath).toString();

    fs.unlinkSync(mockPath);

    const expected = JSON.stringify(mock, null, 2);
    expect(expected).toBe(result);
  });
});

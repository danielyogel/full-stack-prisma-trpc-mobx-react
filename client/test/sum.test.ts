import { describe, expect, test } from "@jest/globals";
import { sum } from "../src/utils";

const action = "getPeople";

describe(action, () => {
  test("should return a list of persons", async function () {
    expect(sum(1, 2)).toBe(3);
  });
});

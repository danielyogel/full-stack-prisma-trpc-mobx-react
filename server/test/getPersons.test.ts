import { describe, expect, test } from "@jest/globals";
import { axios } from "./_utils";

const action = "getPeople";

describe(action, () => {
  test("should return a list of persons", async function () {
    const res = await axios.get("getPeople");
    expect(Array.isArray(res)).toBe(true);
  });
});

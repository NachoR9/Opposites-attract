import { describe, it, expect } from "vitest";
import inLove from "../js/opposites.js";

describe("inLove", () => {
  it("should return true if Timmy's petals are odd and Sarah's petals are even", () => {
    expect(inLove(1, 4)).toBe(true);
  });
  it("should return true if Timmy's and Sarah's petals are even", () => {
    expect(inLove(2, 2)).toBe(false);
  });
  it("should return true if Timmy's petals are even and Sarah's petals are odd", () => {
    expect(inLove(0, 1)).toBe(true);
  });
  it("should return false if Timmy's and Sarah's petals are 0", () => {
    expect(inLove(0, 0)).toBe(false);
  });
});

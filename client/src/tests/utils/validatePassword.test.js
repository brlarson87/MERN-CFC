import validatePassword from "../../utils/validatePassword";

describe("PASSWORD VALIDATION", () => {
  it("Should return false for a password without a capital letter but other requirements", () => {
    const result = validatePassword("thispass1!");
    expect(result).toBeFalsy();
  });

  it("Should return false for a password without a special char but other requirements", () => {
    const result = validatePassword("Thispass1");
    expect(result).toBeFalsy();
  });

  it("Should return false for a password without 8 or more chars but other requirements", () => {
    const result = validatePassword("Thiss1!");
    expect(result).toBeFalsy();
  });

  it("Should return false for a password without a number but other requirements", () => {
    const result = validatePassword("Thispass!");
    expect(result).toBeFalsy();
  });

  it("Should return true when all requirements are met", () => {
    const result = validatePassword("Thispass1!");
    expect(result).toBeTruthy();
  });
});

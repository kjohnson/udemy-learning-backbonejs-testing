describe("The function", function() {

    it("should return true.", function() {
        result = isTrue(true);
        expect(result).toBe(true);
    });

    it("should return false.", function() {
        result = isTrue(false);
        expect(result).toBe(false);
    });
});

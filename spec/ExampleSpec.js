describe("The function", function() {
    var result;

    it("should return true.", function() {
        result = isTrue(true);
        expect(result).toBe(true);
    });

    it("should return false.", function() {
        result = isTrue(false);
        expect(result).toBe(false);
    });
});

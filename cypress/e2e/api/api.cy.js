
// About API testing: https://docs.cypress.io/api/commands/request#Method-and-URL
describe("Check https://api.waqi.info/feed/shanghai/?token=demo request", () => {
    it("Get 200 status", () => {
        cy.request({
            method: "GET",
            url: `https://api.waqi.info/feed/shanghai/?token=demo`,
        }).as("getEntries");

        cy.get("@getEntries").should((response) => {
            expect(response.status).to.eq(200);
            // expect(response).to.have.property("headers");
            // expect(response.body).to.have.property("entries")
        });
    });
});
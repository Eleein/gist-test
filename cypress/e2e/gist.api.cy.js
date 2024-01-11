describe("Gist API", () => {
  const token = Cypress.env("token");
  const url = "https://api.github.com/gists";

  it("List gists for anonymous user", () => {
    cy.request({
      url: url,
      method: "GET",
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.not.be.empty;
    });
  });

  it("List gists for authenticated user", () => {
    const authorization = `bearer ${token}`;
    const options = {
      method: "GET",
      url: url,
      headers: {
        authorization,
      },
    };

    cy.request(options).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.not.be.empty;
    });
  });

  it("Creates gist via POST request", () => {
    const authorization = `bearer ${token}`;
    const body = {
      description: "Example of a gist",
      public: false,
      files: {
        "README.md": {
          content: "Creating A gist from the API",
        },
      },
    };
    const options = {
      method: "POST",
      url: url,
      headers: {
        authorization,
      },
      body: body,
    };

    cy.request(options).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.files["README.md"].filename).to.equal("README.md");
    });
  });
});

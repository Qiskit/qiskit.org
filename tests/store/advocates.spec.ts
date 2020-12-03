import advocatesModule from "~/store/modules/advocates";

/**
 * MUTATIONS
 * -----------------------------------------------------------------------------
 */

describe("setAdvocates", () => {
  it("sets the list of advocates", () => {
    const state = {
      advocates: [],
      regionFilters: []
    };
    const advocates = [
      {
        city: "Lima",
        country: "Peru",
        image: "https://example.com/img/1.jpg",
        name: "John Doe",
        region: "South America"
      },
      {
        city: "Munich",
        country: "Germany",
        image: "https://example.com/img/2.jpg",
        name: "Max Mustermann",
        region: "Europe"
      }
    ];

    advocatesModule.mutations.setAdvocates(state, advocates);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Lima",
            "country": "Peru",
            "image": "https://example.com/img/1.jpg",
            "name": "John Doe",
            "region": "South America",
          },
          Object {
            "city": "Munich",
            "country": "Germany",
            "image": "https://example.com/img/2.jpg",
            "name": "Max Mustermann",
            "region": "Europe",
          },
        ],
        "regionFilters": Array [],
      }
    `);
  });
});

describe("setAdvocates", () => {
  it("sets the list of advocates", () => {
    const state = {
      advocates: [],
      regionFilters: []
    };
    const advocate1 = [
      {
        city: "Lima",
        country: "Peru",
        image: "https://example.com/img/1.jpg",
        name: "John Doe",
        region: "South America"
      }
    ];
    const advocate2 = [
      {
        city: "Munich",
        country: "Germany",
        image: "https://example.com/img/2.jpg",
        name: "Max Mustermann",
        region: "Europe"
      }
    ];

    advocatesModule.mutations.setAdvocates(state, advocate1);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Lima",
            "country": "Peru",
            "image": "https://example.com/img/1.jpg",
            "name": "John Doe",
            "region": "South America",
          },
        ],
        "regionFilters": Array [],
      }
    `);

    advocatesModule.mutations.setAdvocates(state, advocate2);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Munich",
            "country": "Germany",
            "image": "https://example.com/img/2.jpg",
            "name": "Max Mustermann",
            "region": "Europe",
          },
        ],
        "regionFilters": Array [],
      }
    `);

    advocatesModule.mutations.setAdvocates(state, [...advocate1, ...advocate2]);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Lima",
            "country": "Peru",
            "image": "https://example.com/img/1.jpg",
            "name": "John Doe",
            "region": "South America",
          },
          Object {
            "city": "Munich",
            "country": "Germany",
            "image": "https://example.com/img/2.jpg",
            "name": "Max Mustermann",
            "region": "Europe",
          },
        ],
        "regionFilters": Array [],
      }
    `);

    advocatesModule.mutations.setAdvocates(state, []);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [],
      }
    `);
  });
});

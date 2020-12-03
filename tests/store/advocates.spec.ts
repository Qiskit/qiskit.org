import advocatesModule from "~/store/modules/advocates";

/**
 * ACTIONS
 * -----------------------------------------------------------------------------
 */

describe('fetchAdvocates', () => {
  it('fetches the list of advocates', async () => {
    const commit = jest.fn()

    const fetchAdvocates = advocatesModule.actions.fetchAdvocates as Function
    await fetchAdvocates({ commit })

    expect(commit).toHaveBeenCalledWith('setAdvocates', expect.arrayContaining([expect.anything()]))
  })
})

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

describe("setRegionFilters", () => {
  it("sets the region filters", () => {
    const state = {
      advocates: [],
      regionFilters: []
    };
    const regionFilter1 = ["South America"];
    const regionFilter2 = ["Europe"];

    advocatesModule.mutations.setRegionFilters(state, regionFilter1);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [
          "South America",
        ],
      }
    `);

    advocatesModule.mutations.setRegionFilters(state, regionFilter2);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [
          "Europe",
        ],
      }
    `);

    advocatesModule.mutations.setRegionFilters(state, [
      ...regionFilter1,
      ...regionFilter2
    ]);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [
          "South America",
          "Europe",
        ],
      }
    `);

    advocatesModule.mutations.setRegionFilters(state, []);

    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [],
      }
    `);
  });
});

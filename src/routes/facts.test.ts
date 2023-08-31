import supertest from "supertest";

import app from "../app";

// import { commonBeforeAll, commonAfterAll } from "./_testCommon";

// beforeAll(commonBeforeAll);
// afterAll(commonAfterAll);

/** GET /facts */

describe("GET /facts", function () {
  test("works", async function () {
    const resp = await supertest(app).get("/facts");
    expect(resp.body).toEqual({ fact: expect.any(String) });
  });

  // test("returns fact if passed existing id", async function () {
  //   const resp = await supertest(app).get("/facts/1");
  //   expect(resp.body).toEqual({ fact: expect.any(String) });
  // });
});

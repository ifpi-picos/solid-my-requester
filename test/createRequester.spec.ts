import supertest from "supertest";
import { app } from "../src/app";

const PATH = "/requesters";

const ITEM = {
    item: {
        nome: "Coxinha",
        descricao: "Desfrute de um mine infarto",
        amount: 35
    },
    priceUnit: 3.5
};

describe("Create Requester", () => {
    test("Should send a data to api", (done) => {
        supertest(app)
            .post(PATH)
            .send(ITEM)
            .expect(function (response) {
                expect(response.statusCode).toEqual(201);
                expect(response.body).toBeFalsy();
            })
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

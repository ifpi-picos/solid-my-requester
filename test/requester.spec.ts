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
    it("Should send a data to api", (done) => {
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

    describe("Should get al requesters", () => {
        it("One requester", (done) => {
            supertest(app)
                .get(PATH)
                .expect(function (response) {
                    expect(response.statusCode).toEqual(200);
                    expect(response.body.data.length).toBe(1);
                })
                .end(function (err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it("Two requester", (done) => {
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

            supertest(app)
                .get(PATH)
                .expect(function (response) {
                    expect(response.statusCode).toEqual(200);
                    expect(response.body.data.length).toBe(2);
                })
                .end(function (err, res) {
                    if (err) return done(err);
                    return done();
                });
        });

        it("Many requester", (done) => {
            for (let index = 0; index <= 30; index++) {
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
            }

            supertest(app)
                .get(PATH)
                .expect(function (response) {
                    expect(response.statusCode).toEqual(200);
                    expect(response.body.data.length).toBe(32);
                })
                .end(function (err, res) {
                    if (err) return done(err);
                    return done();
                });
        });
    });
});

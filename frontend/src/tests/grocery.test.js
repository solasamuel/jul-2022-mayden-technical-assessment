import axios from "axios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { getGroceries } from "../actions/groceryActions";
// import React from 'react';

// import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

const middlewares = [thunk, promiseMiddleware]
const mockStore = configureStore(middlewares)

jest.mock("axios")

describe("Grocery Actions", () => {
    let store;

    beforeEach(() => {
        store = mockStore();
    });

    describe("Get Groceries Creator", () => {
        it("dispatches GET GROCERIES action and returns data on success", async () => {

            // arrange
            const sampleResponse = {
                success: true
            }

            axios.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: sampleResponse
                })
            );

            // act
            await store.dispatch(getGroceries());
            const actions = store.getActions()

            // assert
            // expect.assertions(3);
            expect(actions[0].type).toEqual("CATALOGUE_GROCERIES_REQUEST");
            expect(actions[1].type).toEqual("CATALOGUE_GROCERIES_SUCCESS");
            expect(actions[1].payload.success).toEqual(true);
        });

        it("dispatches CREATE ORDER action and returns an error", async () => {

            // arrange
            axios.get.mockImplementationOnce(() =>
                Promise.reject({
                    response: {
                        data: {
                            "statusCode": 404,
                            "message": "Resource not found"
                        }
                    }
                })
            );

            // act
            await store.dispatch(getGroceries());
            const actions = store.getActions();
            // console.log(actions)

            // assert
            expect.assertions(3);
            expect(actions[0].type).toEqual("CATALOGUE_GROCERIES_REQUEST");
            expect(actions[1].type).toEqual("CATALOGUE_GROCERIES_FAIL");
            expect(actions[1].payload).toEqual("Resource not found");
        });
    });

    //     describe("Load User Action Creator", () => {
    //         it("dispatches LOAD USER action and returns data on success", async () => {

    //             // arrange
    //             const sampleResponse = {
    //                 "success": true,
    //                 "user": {
    //                     "_id": "628f74d53060eaf8f607c450",
    //                     "name": "tester2",
    //                     "email": "tester2@email.com",
    //                     "role": "user",
    //                     "createdAt": "2022-05-26T12:38:45.267Z",
    //                     "__v": 0
    //                 }
    //             }

    //             axios.get.mockImplementationOnce(() =>
    //                 Promise.resolve({
    //                     data: sampleResponse
    //                 })
    //             );


    //             // act
    //             await store.dispatch(loadUser());
    //             const actions = store.getActions()
    //             // console.log(actions)

    //             // assert
    //             expect.assertions(3);
    //             expect(actions[0].type).toEqual("LOAD_USER_REQUEST");
    //             expect(actions[1].type).toEqual("LOAD_USER_SUCCESS");
    //             expect(actions[1].payload.email).toEqual("tester2@email.com");
    //         });

    //         it("dispatches LOAD USER action and returns an error", async () => {

    //             // arrange
    //             axios.get.mockImplementationOnce(() =>
    //                 Promise.reject({
    //                     response: {
    //                         data: {
    //                             "success": false,
    //                             "message": "Login first to access this resource."
    //                         }
    //                     }
    //                 })
    //             );

    //             // act
    //             await store.dispatch(loadUser());
    //             const actions = store.getActions();
    //             // console.log(actions)

    //             // assert
    //             expect.assertions(3);
    //             expect(actions[0].type).toEqual("LOAD_USER_REQUEST");
    //             expect(actions[1].type).toEqual("LOAD_USER_FAIL");
    //             expect(actions[1].payload).toEqual("Login first to access this resource.");
    //         });
    //     });

    //     describe("Login Action Creator", () => {
    //         it("dispatches LOGIN action and returns data on success", async () => {

    //             // arrange
    //             const sampleResponse = {
    //                 "success": true,
    //                 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGU3NTY1ZjgwODI1NTg5ZTQ0OWQxMSIsImlhdCI6MTY1MzU5MzcyNCwiZXhwIjoxNjU0MTk4NTI0fQ.PzAM_saKr7vCEtzr4GsTazq3TafD4QrV9uIDtiLBTgM",
    //                 "user": {
    //                     "_id": "628e7565f80825589e449d11",
    //                     "name": "tester",
    //                     "email": "tester@email.com",
    //                     "password": "$2a$10$JyFzeyi8vh2oBFvZXInyVeReGmDrEnSBGIPhMxbAjzbRXmx88rhom",
    //                     "role": "admin",
    //                     "createdAt": "2022-05-25T18:28:53.607Z",
    //                     "__v": 0
    //                 }
    //             }

    //             axios.post.mockImplementationOnce(() =>
    //                 Promise.resolve({
    //                     data: sampleResponse
    //                 })
    //             );

    //             const userData = {
    //                 "email": "tester@email.com",
    //                 "password": "password"
    //             }

    //             // act
    //             await store.dispatch(login(userData));
    //             const actions = store.getActions()

    //             // assert
    //             expect.assertions(3);
    //             expect(actions[0].type).toEqual("LOGIN_REQUEST");
    //             expect(actions[1].type).toEqual("LOGIN_SUCCESS");
    //             expect(actions[1].payload.email).toEqual(userData.email);
    //         });

    //         it("dispatches LOGIN action and returns an error", async () => {

    //             // arrange
    //             axios.post.mockImplementationOnce(() =>
    //                 Promise.reject({
    //                     response: {
    //                         data: {
    //                             "success": false,
    //                             "message": "Please enter email & password"
    //                         }
    //                     }
    //                 })
    //             );

    //             const userData = {
    //                 "email": "",
    //                 "password": "password"
    //             }

    //             // act
    //             await store.dispatch(login(userData));
    //             const actions = store.getActions();
    //             // console.log(actions)

    //             // assert
    //             expect.assertions(3);
    //             expect(actions[0].type).toEqual("LOGIN_REQUEST");
    //             expect(actions[1].type).toEqual("LOGIN_FAIL");
    //             expect(actions[1].payload).toEqual("Please enter email & password");
    //         });
    //     });

    //     describe("Logout Action Creator", () => {
    //         it("dispatches LOGOUT action and returns data on success", async () => {

    //             // arrange
    //             const sampleResponse = {
    //                 "success": true
    //             }

    //             axios.get.mockImplementationOnce(() =>
    //                 Promise.resolve({
    //                     data: sampleResponse
    //                 })
    //             );

    //             // act
    //             await store.dispatch(logout());
    //             const actions = store.getActions()

    //             // assert
    //             expect(actions[0].type).toEqual("LOGOUT_SUCCESS");
    //         });

    //         it("dispatches LOGOUT action and returns an error", async () => {

    //             // arrange
    //             axios.get.mockImplementationOnce(() =>
    //                 Promise.reject({
    //                     response: {
    //                         data: {
    //                             "success": false,
    //                         }
    //                     }
    //                 })
    //             );

    //             // act
    //             await store.dispatch(logout());
    //             const actions = store.getActions();
    //             // console.log(actions)

    //             // assert
    //             expect(actions[0].type).toEqual("LOGOUT_FAIL");
    //         });
    //     });
    // })

    // describe('User Reducers', () => {


    //     describe('Auth Reducer', () => {


    //         const initialState = {
    //             user: {}
    //         };

    //         it('returns the initial state when an action type is not passed', () => {
    //             // act
    //             const reducer = authReducer(undefined, {});

    //             // assert
    //             expect(reducer).toEqual(initialState);
    //         });

    //         it('handles REGISTER_USER_REQUEST as expected', () => {
    //             // act
    //             const reducer = authReducer(initialState, { type: "REGISTER_USER_REQUEST" });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: true,
    //                 isAuthenticated: false
    //             });
    //         });

    //         it('handles REGISTER_USER_SUCCESS as expected', () => {

    //             // act
    //             const reducer = authReducer(initialState, {
    //                 type: "REGISTER_USER_SUCCESS",
    //                 payload: {
    //                     "name": "tester2",
    //                     "email": "tester2@email.com",
    //                     "password": "$2a$10$iDk/3XCbFZDgKyLc6zGfjeMzoZwcaoX5y0pzZ5S0EmX9NQ3CkaNvW",
    //                     "role": "user",
    //                     "_id": "628f74d53060eaf8f607c450",
    //                     "createdAt": "2022-05-26T12:38:45.267Z",
    //                     "__v": 0
    //                 }
    //             });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: false,
    //                 isAuthenticated: true,
    //                 user: {
    //                     "name": "tester2",
    //                     "email": "tester2@email.com",
    //                     "password": "$2a$10$iDk/3XCbFZDgKyLc6zGfjeMzoZwcaoX5y0pzZ5S0EmX9NQ3CkaNvW",
    //                     "role": "user",
    //                     "_id": "628f74d53060eaf8f607c450",
    //                     "createdAt": "2022-05-26T12:38:45.267Z",
    //                     "__v": 0
    //                 }
    //             });
    //         });

    //         it('handles REGISTER_USER_FAIL as expected', () => {
    //             // act
    //             const reducer = authReducer(initialState, {
    //                 type: "REGISTER_USER_FAIL",
    //                 payload: "Please enter your email"
    //             });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: false,
    //                 isAuthenticated: false,
    //                 user: null,
    //                 error: "Please enter your email"
    //             });
    //         });

    //         it('handles LOGIN_REQUEST as expected', () => {
    //             //
    //             const reducer = authReducer(initialState, { type: "LOGIN_REQUEST" });

    //             expect(reducer).toEqual({
    //                 loading: true,
    //                 isAuthenticated: false
    //             });
    //         });

    //         it('handles LOGIN_FAIL as expected', () => {
    //             // act
    //             const reducer = authReducer(initialState, {
    //                 type: "LOGIN_FAIL",
    //                 payload: "Invalid email or password"
    //             });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: false,
    //                 isAuthenticated: false,
    //                 user: null,
    //                 error: "Invalid email or password"
    //             });
    //         });

    //         it('handles LOGIN_SUCCESS as expected', () => {
    //             // act
    //             const reducer = authReducer(initialState, {
    //                 type: "LOGIN_SUCCESS",
    //                 payload: {
    //                     "name": "tester2",
    //                     "email": "tester2@email.com",
    //                     "password": "$2a$10$iDk/3XCbFZDgKyLc6zGfjeMzoZwcaoX5y0pzZ5S0EmX9NQ3CkaNvW",
    //                     "role": "user",
    //                     "_id": "628f74d53060eaf8f607c450",
    //                     "createdAt": "2022-05-26T12:38:45.267Z",
    //                     "__v": 0
    //                 }
    //             });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: false,
    //                 isAuthenticated: true,
    //                 user: {
    //                     "name": "tester2",
    //                     "email": "tester2@email.com",
    //                     "password": "$2a$10$iDk/3XCbFZDgKyLc6zGfjeMzoZwcaoX5y0pzZ5S0EmX9NQ3CkaNvW",
    //                     "role": "user",
    //                     "_id": "628f74d53060eaf8f607c450",
    //                     "createdAt": "2022-05-26T12:38:45.267Z",
    //                     "__v": 0
    //                 }
    //             });
    //         });

    //         it('handles LOGOUT_FAIL as expected', () => {
    //             // act
    //             const reducer = authReducer(initialState, {
    //                 type: "LOGIN_FAIL",
    //                 payload: "Lost connection"
    //             });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: false,
    //                 error: "Lost connection",
    //                 isAuthenticated: false,
    //                 user: null
    //             });
    //         });

    //         it('handles LOGOUT_SUCCESS as expected', () => {
    //             // act
    //             const reducer = authReducer(initialState, {
    //                 type: "LOGOUT_SUCCESS"
    //             });

    //             // assert
    //             expect(reducer).toEqual({
    //                 loading: false,
    //                 isAuthenticated: false,
    //                 user: null
    //             });
    //         });
    //     });
});
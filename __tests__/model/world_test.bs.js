// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Jest                 = require("bs-jest/src/jest.js");
var $$Array              = require("bs-platform/lib/js/array.js");
var Pervasives           = require("bs-platform/lib/js/pervasives.js");
var World$ReasonReactGof = require("../../src/model/world.bs.js");

function draw(world) {
  return World$ReasonReactGof.fold_left((function (param, param$1) {
                  var y = param$1[0][/* y */1];
                  var prevY = param[1];
                  var tmp;
                  if (prevY) {
                    var match = +(prevY[0] !== y);
                    tmp = match !== 0 ? "\n" : "";
                  } else {
                    tmp = "";
                  }
                  return /* tuple */[
                          param[0] + (tmp + (
                              param$1[1] !== 0 ? "-" : "x"
                            )),
                          /* Some */[y]
                        ];
                }), /* tuple */[
                "",
                /* None */0
              ], world)[0];
}

function strip(s) {
  return s.replace((/ /g), "").trim();
}

function expectWorld(world, expected) {
  var actual = strip(draw(world));
  return Jest.Expect[/* toEqual */12](strip(expected))(Jest.Expect[/* expect */0](actual));
}

describe("World", (function () {
        Jest.test("create 1x1 without seed", (function () {
                return expectWorld(World$ReasonReactGof.create(1, 1, /* array */[]), "\n      -\n    ");
              }));
        Jest.test("create 2x2 without seed", (function () {
                return expectWorld(World$ReasonReactGof.create(2, 2, /* array */[]), "\n      --\n      --\n      ");
              }));
        Jest.test("create 2x3 without seed", (function () {
                return expectWorld(World$ReasonReactGof.create(3, 2, /* array */[]), "\n      ---\n      ---\n      ");
              }));
        Jest.test("create 2x3 with seed", (function () {
                return expectWorld(World$ReasonReactGof.create(3, 2, /* array */[
                                /* record */[
                                  /* x */2,
                                  /* y */0
                                ],
                                /* record */[
                                  /* x */0,
                                  /* y */1
                                ],
                                /* record */[
                                  /* x */1,
                                  /* y */1
                                ]
                              ]), "\n        --x\n        xx-\n      ");
              }));
        describe("step", (function () {
                var expectStepsToEqual = function (steps, expected) {
                  var world = World$ReasonReactGof.create(4, 3, /* array */[
                        /* record */[
                          /* x */2,
                          /* y */0
                        ],
                        /* record */[
                          /* x */0,
                          /* y */1
                        ],
                        /* record */[
                          /* x */1,
                          /* y */1
                        ],
                        /* record */[
                          /* x */2,
                          /* y */2
                        ]
                      ]);
                  $$Array.iter((function () {
                          return World$ReasonReactGof.step(world);
                        }), $$Array.init(steps, (function (x) {
                              return x;
                            })));
                  return Jest.test(Pervasives.string_of_int(steps) + " steps", (function () {
                                return expectWorld(world, expected);
                              }));
                };
                expectStepsToEqual(0, "\n      --x-\n      xx--\n      --x-\n    ");
                expectStepsToEqual(1, "\n      -x--\n      -xx-\n      -x--\n    ");
                expectStepsToEqual(2, "\n      -xx-\n      xxx-\n      -xx-\n    ");
                return expectStepsToEqual(3, "\n      x-x-\n      x--x\n      x-x-\n    ");
              }));
        return /* () */0;
      }));

exports.draw        = draw;
exports.strip       = strip;
exports.expectWorld = expectWorld;
/*  Not a pure module */

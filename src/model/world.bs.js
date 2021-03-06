// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                  = require("bs-platform/lib/js/list.js");
var $$Array               = require("bs-platform/lib/js/array.js");
var Curry                 = require("bs-platform/lib/js/curry.js");
var Matrix$ReasonReactGof = require("./matrix.bs.js");

var Cell = /* module */[];

var WorldMatrix = Matrix$ReasonReactGof.Make(Cell);

function incrementAlive(acc, cur) {
  if (cur && cur[0] === 0) {
    return acc + 1 | 0;
  } else {
    return acc;
  }
}

function applyRules(current, neighbours) {
  if (current !== 0) {
    if (neighbours !== 3) {
      return /* Dead */1;
    } else {
      return /* Alive */0;
    }
  } else if (neighbours === 3 || neighbours === 2) {
    return /* Alive */0;
  } else {
    return /* Dead */1;
  }
}

function fold_left(fn, acc, world) {
  var rows = $$Array.init(world[/* rows */0], (function (x) {
          return x;
        }));
  var cols = $$Array.init(world[/* cols */1], (function (x) {
          return x;
        }));
  return $$Array.fold_left((function (accRow, row) {
                return $$Array.fold_left((function (accCol, col) {
                              var coords = /* record */[
                                /* x */col,
                                /* y */row
                              ];
                              var match = Curry._2(WorldMatrix[/* get */1], coords, world[/* matrix */2]);
                              var state = match && match[0] === 0 ? /* Alive */0 : /* Dead */1;
                              return Curry._2(fn, accCol, /* tuple */[
                                          coords,
                                          state
                                        ]);
                            }), accRow, cols);
              }), acc, rows);
}

function create(cols, rows, seed) {
  var matrix = Curry._1(WorldMatrix[/* create */0], /* () */0);
  $$Array.iter((function (coords) {
          return Curry._3(WorldMatrix[/* set */3], coords, /* Alive */0, matrix);
        }), seed);
  return /* record */[
          /* rows */rows,
          /* cols */cols,
          /* matrix */matrix
        ];
}

function step(world) {
  return List.iter((function (param) {
                return Curry._3(WorldMatrix[/* set */3], param[0], param[1], world[/* matrix */2]);
              }), fold_left((function (acc, param) {
                    var coords = param[0];
                    var neighbours = Curry._2(WorldMatrix[/* neighbours */2], coords, world[/* matrix */2]);
                    var alive = List.fold_left(incrementAlive, 0, neighbours);
                    var newState = applyRules(param[1], alive);
                    return /* :: */[
                            /* tuple */[
                              coords,
                              newState
                            ],
                            acc
                          ];
                  }), /* [] */0, world));
}

function to_list(world) {
  return fold_left((function (acc, current) {
                return /* :: */[
                        current,
                        acc
                      ];
              }), /* [] */0, world);
}

exports.create    = create;
exports.fold_left = fold_left;
exports.step      = step;
exports.to_list   = to_list;
/* WorldMatrix Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List             = require("bs-platform/lib/js/list.js");
var Coords$ReasonGof = require("./coords.bs.js");

function Make() {
  var create = function () {
    return { };
  };
  var get = function (coords, matrix) {
    var match = matrix[Coords$ReasonGof.toString(coords)];
    if (match !== undefined) {
      return match;
    } else {
      return /* None */0;
    }
  };
  var neighbours = function (coords, world) {
    return List.fold_left((function (acc, coords) {
                  return /* :: */[
                          get(coords, world),
                          acc
                        ];
                }), /* [] */0, Coords$ReasonGof.neighbours(coords));
  };
  var set = function (coords, value, world) {
    world[Coords$ReasonGof.toString(coords)] = /* Some */[value];
    return /* () */0;
  };
  var unset = function (coords, world) {
    world[Coords$ReasonGof.toString(coords)] = /* None */0;
    return /* () */0;
  };
  return /* module */[
          /* create */create,
          /* get */get,
          /* neighbours */neighbours,
          /* set */set,
          /* unset */unset
        ];
}

exports.Make = Make;
/* Coords-ReasonGof Not a pure module */

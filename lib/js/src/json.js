// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var RegExp$ReasonParse = require("./regExp.js");
var CombEager$ReasonParse = require("./combEager.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var partial_arg = (/^"[A-Za-z]+"/);

function k(param) {
  return RegExp$ReasonParse.regExp(partial_arg, param);
}

var partial_arg$1 = (/^"[A-Za-z]*"/);

function quotedString(param) {
  return RegExp$ReasonParse.regExp(partial_arg$1, param);
}

function number(s) {
  var fail = RegExp$ReasonParse.regExp((/^\d+/), s);
  if (fail[0] >= 781116926) {
    return fail;
  } else {
    var match = fail[1];
    return /* `Success */[
            94326179,
            /* tuple */[
              /* `Number */[
                -703661335,
                Caml_format.caml_int_of_string(match[0][1])
              ],
              match[1]
            ]
          ];
  }
}

function trim(p) {
  return CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p, RegExp$ReasonParse.maybeWhitespace);
}

var partial_arg$2 = (/^,/);

function p(param) {
  return RegExp$ReasonParse.regExp(partial_arg$2, param);
}

var comma = CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p, RegExp$ReasonParse.maybeWhitespace);

var partial_arg$3 = (/^:/);

function p$1(param) {
  return RegExp$ReasonParse.regExp(partial_arg$3, param);
}

var colon = CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p$1, RegExp$ReasonParse.maybeWhitespace);

var partial_arg$4 = (/^\[/);

function p$2(param) {
  return RegExp$ReasonParse.regExp(partial_arg$4, param);
}

var lBrak = CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p$2, RegExp$ReasonParse.maybeWhitespace);

var partial_arg$5 = (/^\]/);

function p$3(param) {
  return RegExp$ReasonParse.regExp(partial_arg$5, param);
}

var rBrak = CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p$3, RegExp$ReasonParse.maybeWhitespace);

var partial_arg$6 = (/^\{/);

function p$4(param) {
  return RegExp$ReasonParse.regExp(partial_arg$6, param);
}

var lBrace = CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p$4, RegExp$ReasonParse.maybeWhitespace);

var partial_arg$7 = (/^\}/);

function p$5(param) {
  return RegExp$ReasonParse.regExp(partial_arg$7, param);
}

var rBrace = CombEager$ReasonParse.between(RegExp$ReasonParse.maybeWhitespace, p$5, RegExp$ReasonParse.maybeWhitespace);

function primValu(s) {
  return CombEager$ReasonParse.alt(/* :: */[
                number,
                /* :: */[
                  quotedString,
                  /* [] */0
                ]
              ])(s);
}

function valu(s) {
  return CombEager$ReasonParse.alt(/* :: */[
                primValu,
                /* :: */[
                  array,
                  /* :: */[
                    obj,
                    /* [] */0
                  ]
                ]
              ])(s);
}

function array(s) {
  return CombEager$ReasonParse.between(lBrak, (function (param) {
                  return CombEager$ReasonParse.sepBy(comma, valu, param);
                }), rBrak)(s);
}

function obj(s) {
  return CombEager$ReasonParse.between(lBrace, (function (param) {
                  return CombEager$ReasonParse.sepBy(comma, pair, param);
                }), rBrace)(s);
}

function pair(s) {
  return CombEager$ReasonParse.keyVal(colon, k, valu, s);
}

function stringOfValue(value) {
  var variant = value[0];
  if (variant >= 848054398) {
    if (variant >= 892012602) {
      var match = value[1];
      return "(" + (stringOfValue(match[0]) + (", " + (stringOfValue(match[1]) + ")")));
    } else {
      return "[" + ($$Array.of_list(List.map(stringOfValue, value[1])).join(", ") + "]");
    }
  } else if (variant >= -703661335) {
    return Pervasives.string_of_int(value[1]);
  } else {
    return value[1];
  }
}

function stringOfResult(result) {
  if (typeof result === "number") {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "json.re",
            48,
            9
          ]
        ];
  } else {
    var variant = result[0];
    if (variant !== 94326179) {
      if (variant !== 781116926) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "json.re",
                48,
                9
              ]
            ];
      } else {
        return "Fail: " + result[1];
      }
    } else {
      return stringOfValue(result[1][0]);
    }
  }
}

console.log(stringOfResult(array("\n   [[   {\"abc\":456,\"cde\":987},\"abcd\", [[123, 321, \"xyz\", \"\", 1], \"\"]]\n      ,  321 ]   ")));

console.log(stringOfResult(valu("{\"abc\":456,\"cde\":987}")));

var r = /* () */0;

exports.k = k;
exports.quotedString = quotedString;
exports.number = number;
exports.trim = trim;
exports.comma = comma;
exports.colon = colon;
exports.lBrak = lBrak;
exports.rBrak = rBrak;
exports.lBrace = lBrace;
exports.rBrace = rBrace;
exports.primValu = primValu;
exports.valu = valu;
exports.array = array;
exports.obj = obj;
exports.pair = pair;
exports.stringOfValue = stringOfValue;
exports.stringOfResult = stringOfResult;
exports.r = r;
/* partial_arg Not a pure module */

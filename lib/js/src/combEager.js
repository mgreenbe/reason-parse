// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var CombLazy$ReasonParse = require("./combLazy.js");
var LazyList$ReasonParse = require("./lazyList.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function alt(parsers) {
  var partial_arg = LazyList$ReasonParse.toLazy(parsers);
  return (function (param) {
      return CombLazy$ReasonParse.alt(partial_arg, param);
    });
}

function seq(parsers) {
  var partial_arg = LazyList$ReasonParse.toLazy(parsers);
  return (function (param) {
      return CombLazy$ReasonParse.seq(partial_arg, param);
    });
}

function atLeast(n, parsers) {
  var partial_arg = LazyList$ReasonParse.toLazy(parsers);
  return (function (param) {
      return CombLazy$ReasonParse.atLeast(n, partial_arg, param);
    });
}

function keep(indices, parsers) {
  var partial_arg = LazyList$ReasonParse.toLazy(parsers);
  return (function (param) {
      return CombLazy$ReasonParse.keep(indices, partial_arg, param);
    });
}

function keepNth(n, parsers) {
  var partial_arg = LazyList$ReasonParse.toLazy(parsers);
  return (function (param) {
      return CombLazy$ReasonParse.keepNth(n, partial_arg, param);
    });
}

function keepFirst(parsers) {
  return CombLazy$ReasonParse.keepFirst(LazyList$ReasonParse.toLazy(parsers));
}

function keyVal(separator, p, q, s) {
  var partial_arg = LazyList$ReasonParse.toLazy(/* :: */[
        p,
        /* :: */[
          separator,
          /* :: */[
            q,
            /* [] */0
          ]
        ]
      ]);
  var fail = (function (param) {
        return CombLazy$ReasonParse.seq(partial_arg, param);
      })(s);
  var exit = 0;
  if (typeof fail === "number") {
    exit = 1;
  } else {
    var variant = fail[0];
    if (variant !== 94326179) {
      if (variant !== 781116926) {
        exit = 1;
      } else {
        return fail;
      }
    } else {
      var match = fail[1];
      var match$1 = match[0];
      if (typeof match$1 === "number") {
        exit = 1;
      } else if (match$1[0] !== 848054398) {
        exit = 1;
      } else {
        var match$2 = match$1[1];
        if (match$2) {
          var match$3 = match$2[1];
          if (match$3) {
            var match$4 = match$3[1];
            if (match$4) {
              if (match$4[1]) {
                exit = 1;
              } else {
                return /* `Success */[
                        94326179,
                        /* tuple */[
                          /* `Pair */[
                            892012602,
                            /* tuple */[
                              match$2[0],
                              match$4[0]
                            ]
                          ],
                          match[1]
                        ]
                      ];
              }
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    }
  }
  if (exit === 1) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "combEager.re",
            31,
            9
          ]
        ];
  }
  
}

var toLazy = LazyList$ReasonParse.toLazy;

var many = CombLazy$ReasonParse.many;

var keepLast = CombLazy$ReasonParse.keepLast;

var between = CombLazy$ReasonParse.between;

var sepBy = CombLazy$ReasonParse.sepBy;

exports.toLazy = toLazy;
exports.alt = alt;
exports.seq = seq;
exports.atLeast = atLeast;
exports.many = many;
exports.keep = keep;
exports.keepNth = keepNth;
exports.keepFirst = keepFirst;
exports.keepLast = keepLast;
exports.between = between;
exports.sepBy = sepBy;
exports.keyVal = keyVal;
/* CombLazy-ReasonParse Not a pure module */

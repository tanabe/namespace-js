/**
 *  Simple Namespace Library
 *  define a namespace
 *  @author Hideaki Tanabe <http://blog.kaihatsubu.com>
 *
 *  USAGE:
 *  Namespace("com.kaihatsubu.utils");
 *  com.kaihatsubu.utils.arrayUtil = {};
 *  
 *  @param ns namespace string
 *  @return defined namespace
 */
var Namespace = function(ns) {
  var parts = ns.split(".");
  var parent = window[parts[0]] || function() {
    return window[parts[0]] = {};
  }();
  parts = parts.slice(1);
  for (var i = 0, length = parts.length; i < length; i++) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
}

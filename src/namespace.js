/**
 * Simple Namespace Library
 * define a namespace
 * @author Hideaki Tanabe <http://blog.kaihatsubu.com>
 *
 * USAGE:
 * var module = Namespace("com.kaihatsubu.utils");
 * module === com.kaihatsubu.utils; //true
 * com.kaihatsubu.utils.arrayUtil = {
 *   //...
 * };
 */

/**
 * 
 * @param ns namespace string
 * @return defined namespace
 */
var Namespace = function(ns) {
  var parts = ns.split(".");
  var parent = window[parts[0]] || function() {
    window[parts[0]] = {};
    return [parts[0]];
  }();
  parts = parts.slice(1);
  for (var i = 0, length = parts.length; i < length; i++) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};

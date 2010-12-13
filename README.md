#Simple Namespace Library
---
##usage
    //define namespace
    var module = Namespace("com.kaihatsubu.utils");
    console.log(module === com.kaihatsubu.utils);//true

    //define method
    com.kaihatsubu.utils.arrayUtil = {
      shuffle: function() {
        console.log("shuffle!");
      }
    };
    com.kaihatsubu.utils.arrayUtil.shuffle();
    //shuffle!

    //prevent from redefine
    Namespace("com.kaihatsubu.utils");
    com.kaihatsubu.utils.arrayUtil.shuffle();
    //shuffle!
    

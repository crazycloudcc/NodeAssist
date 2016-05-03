/*
 * 全局通用函数集合.
 */

// 加载原型函数扩展.
require("./ccprototype") ;

// 对0 - 9的数字进行格式对齐.
// 0 - 9 的值输出为 0X.
// -9 - 0 的数字输出为 -0X.
var twoDigits = function (arg) {
    if(0 <= arg && arg < 10) return "0" + arg.toString() ;
    if(-10 < arg && arg < 0) return "-0" + (-1 * arg).toString() ;
    return arg.toString() ;
} ;

// MD5函数.
// 输入字符串, 输出32长度的MD5值.
var crypto = require("crypto") ;
var md5 = function (str) {
    var _ret = str ;
    var md5sum = crypto.createHash("md5") ;
    md5sum.update(_ret) ;
    _ret = md5sum.digest("hex") ;
    return _ret ;
} ;

module.exports = {
    "MD5" : md5,
    "TWODIGITS" : twoDigits
} ;




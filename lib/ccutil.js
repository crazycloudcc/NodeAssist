/*
 * 全局通用函数集合.
 */

// 加载原型函数扩展.
require("./ccprototype") ;

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

// // 遍历目录.
// /**
//  * 获取文件夹下面的所有的文件(包括子文件夹)
//  * @param {String} dir
//  * @param {Function} callback
//  * @returns {Array}
//  */
// var fs = require("fs") ;
// var getAllFiles = function (dir, callback) {
//   var filesArr = [];
//   dir = ///$/.test(dir) ? dir : dir + '/';
//   (function dir(dirpath, fn) {
//     var files = fs.readdirSync(dirpath);
//     exports.async(files, function (item, next) {
//       var info = fs.statSync(dirpath + item);
//       if (info.isDirectory()) {
//         dir(dirpath + item + '/', function () {
//           next();
//         });
//       } else {
//         filesArr.push(dirpath + item);
//         callback && callback(dirpath + item);
//         next();
//       }
//     }, function (err) {
//       !err && fn && fn();
//     });
//   })(dir);
//   return filesArr;
// } ;

module.exports = {
    "MD5" : md5,
    // "TWODIGITS" : twoDigits,
    // "GETALLFILES" : getAllFiles
} ;





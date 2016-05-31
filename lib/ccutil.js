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

/* 获取下一个最近的输入参数[星期,时,分,秒]的Date对象.
 * 参数1: day  : [0, 6]
 * 参数2: hour : [0, 23]
 * 参数3: min  : [0, 59]
 * 参数4: sec  : [0, 59]
 */
var GetNextTimeWithWeek = function (day, hour, min, sec) {
    var nowTime = new Date() ;
    if (day < nowTime.getDay()) {
        day += 7 ;
    }
    var dayValue = nowTime.getDate() + day - nowTime.getDay() + 1 ;

    var nextTime = new Date(nowTime) ;
    nextTime.setDate(dayValue) ;
    nextTime.setHours(hour) ;
    nextTime.setMinutes(min) ;
    nextTime.setSeconds(sec) ;

    return (nextTime - nowTime) / 1000 ;
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
    "GetNextTimeWithWeek" : GetNextTimeWithWeek,
    // "TWODIGITS" : twoDigits,
    // "GETALLFILES" : getAllFiles
} ;





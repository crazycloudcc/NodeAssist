
// 对0 - 9的数字进行格式对齐.
// 0 - 9 的值输出为 0X.
// -9 - 0 的数字输出为 -0X.
var twoDigits = function (arg) {
    if(0 <= arg && arg < 10) return "0" + arg.toString() ;
    if(-10 < arg && arg < 0) return "-0" + (-1 * arg).toString() ;
    return arg.toString() ;
} ;

// 添加String的格式化函数.
// 实例1: var str = "abc{x}" ; str = str.format({x : "abc"}) ;
// 实例2: var str = "abc{0}{1}" ; str = str.format("abc", "xyz") ;
String.prototype.format = function (args) {
    var ret = this ;
    if (arguments.length > 0) {
        if (arguments.length === 1 && typeof(args) === "object") {
            for (var key in args) {
                if (args[key] !== undefined) {
                    var reg = new RegExp("({" + key + "})", "g") ;
                    console.log(reg, args[key]) ;
                    ret = ret.replace(reg, args[key]) ;
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; ++i) {
                if (arguments[i] !== undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g") ;
                    ret = ret.replace(reg, arguments[i]) ;
                }
            }
        }
    }
    return ret ;
} ;

// 添加String的格式化函数.
// 实例: var str = "abc{0}{1}" ; str = str.format("abc", 0) ;
String.prototype.replace_with_index = function (arg, index) {
    var ret = this ;
    var reg = new RegExp("({)" + index + "(})", "g") ;
    ret = ret.replace(reg, arg) ;
    return ret ;
} ;

// 输出基于UTC的 "YYYY-MM-DD|HH:MM:SS" 的时间格式字符串.
Date.prototype.UTCString = function () {
    return this.getUTCFullYear()
            + "-" + twoDigits(1 + this.getUTCMonth())
            + "-" + twoDigits(this.getUTCDate())
            + "|" + twoDigits(this.getUTCHours())
            + ":" + twoDigits(this.getUTCMinutes())
            + ":" + twoDigits(this.getUTCSeconds()) ;
} ;

// 输出基于本地时间的 "YYYY-MM-DD|HH:MM:SS" 的时间格式字符串.
Date.prototype.LOCALString = function () {
    return this.getFullYear()
            + "-" + twoDigits(1 + this.getMonth())
            + "-" + twoDigits(this.getDate())
            + "|" + twoDigits(this.getHours())
            + ":" + twoDigits(this.getMinutes())
            + ":" + twoDigits(this.getSeconds()) ;
} ;

// 输出从1970-01-01|00:00:00到当前的毫秒数.
Date.prototype.ParseToSeconds = function () {
    return Date.parse(Date()) / 1000 ;
} ;









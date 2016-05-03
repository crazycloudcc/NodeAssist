
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

// 输出基于UTC的 "YYYY-MM-DD HH:MM:SS" 的时间格式字符串.
Date.prototype.ToUTCTimeString = function() {
    return this.getUTCFullYear()
            + "-" + twoDigits(1 + this.getUTCMonth())
            + "-" + twoDigits(this.getUTCDate())
            + " " + twoDigits(this.getUTCHours())
            + ":" + twoDigits(this.getUTCMinutes())
            + ":" + twoDigits(this.getUTCSeconds()) ;
} ;

// 输出基于本地时间的 "YYYY-MM-DD HH:MM:SS" 的时间格式字符串.
Date.prototype.toLocalTimeString = function() {
    return this.getFullYear()
            + "-" + twoDigits(1 + this.getMonth())
            + "-" + twoDigits(this.getDate())
            + " " + twoDigits(this.getHours())
            + ":" + twoDigits(this.getMinutes())
            + ":" + twoDigits(this.getSeconds()) ;
} ;









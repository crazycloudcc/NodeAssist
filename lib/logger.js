
/* logger level:
 * trace
 * debug
 * info
 * warn
 * error
 * fatal
 */

var config = require("./config") ;
var config_log_server = config.logserver ;

var util = require("util");
var path = require("path");
var fs = require("fs");
// var request = require("request");

var log4js = require("log4js") ;

var logger ;

// 检查log配置中的路径, 补充缺失路径.
var checkPath = function (path, mode) {
    var arr = path.split('/') ;
    mode = mode || '0755' ;

    if (arr[0] === '.') {
        arr.shift() ;
    }

    if (arr[0] === '..') {
        arr.splice(0, 2, arr[0] + '/' + arr[1]) ;
    }

    // 创建文件夹.
    var createdir = function (dirname) {
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, mode) ;
        }
        if (arr.length) {
            createdir(dirname + '/' + arr.shift()) ;
        }
    } ;

    arr.length && createdir(arr.shift()) ;
} ;

// 推送日志到服务器.
var pushToLogServer = function (json, uri_key) {
    if (!config_log_server) {
        return ;
    } ;

    if (typeof json == "object") {
        json = JSON.stringify(json) ;
    } ;

    //发起 post 请求
    request.post({
        "url" : config_log_server.base + config_log_server[uri_key],
        "form" : { "json" : json },
        "json" : true
    }, function (error) {
    }) ;
} ;

var init = function () {
    try {
        var dir = path.dirname(config.filename) ;
        checkPath(dir) ;

        // var d = new Date() ;
        // var time = util.format('-yyyy-MM-dd-%s-%s-%s.log', d.getHours(), d.getMinutes(), d.getSeconds()) ;
        // config.filename = config.filename.replace(".log", "") ;

        // 设置log文件名.
        config.log4js.appenders[1].filename = config.filename + "_" + new Date().toLocalTimeString() + ".log" ;
        // config.log4js.appenders[1].pattern = time ;

        log4js.configure(config.log4js) ;
        logger = log4js.getLogger("normal") ;
        logger.setLevel(config.level) ;
    } catch (e) {
        console.log(__filename, "init error! ", e.message) ;
    }
}() ;

// // 参数必须为__filename.
// var getLogger = function (filename) {
//     if (typeof filename == 'string') {
//         var pwd = path.normalize(process.cwd() + '/../') ;
//         filename = filename.replace(pwd, '') ;
//     }
//     logger = log4js.getLogger(filename) ;
//     logger.setLevel(config.level) ;
//     return logger ;
// } ;


module.exports = {
    "logger" : logger,
    "pushToLogServer" : pushToLogServer
} ;










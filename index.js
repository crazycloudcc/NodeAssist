
exports.MD5 = require("./lib/ccutil").MD5 ;
exports.TWODIGITS = require("./lib/ccutil").TWODIGITS ;

exports.logger = require("./lib/logger").logger ;

// logger.trace("test") ;
// logger.debug("test") ;
// logger.info("test") ;
// logger.warn("test") ;
// logger.error("test") ;
// logger.fatal("test") ;

// console.log(util.MD5("abc")) ;


// var ret = util.GETALLFILES("./", console.log) ;


// // 系统信息.
// var os = require("os") ;

// // CPU信息.
// logger.debug(os.cpus()) ;

// // CPU芯片信息. x64, arm, ia32.
// logger.debug(os.arch()) ;

// // 字节顺序. BE big endian & LE little endian.
// logger.debug(os.endianness()) ;

// // 剩余内存. B, KB, MB, GB.
// logger.debug(os.freemem() / 1024 / 1024 / 1024) ;

// // 当前用户根目录.
// logger.debug(os.homedir()) ;

// // 系统主机名称.
// logger.debug(os.hostname()) ;

// // 仅UNIX系有效, 最近1, 5, 15min时间的CPU负载情况. 对应系统中的/proc/loadavg.
// logger.debug(os.loadavg()) ;

// // 获取网卡信息. 对应系统中的ifconfig & ipconfig命令.
// logger.debug(os.networkInterfaces()) ;

// // 获取当前系统名称. darwin, freebsd, linux, sunos, win32.
// logger.debug(os.platform()) ;

// // 获取系统临时目录.
// logger.debug(os.tmpdir()) ;

// // 当前设备内存大小.
// logger.debug(os.totalmem()) ;

// // 系统类型. Linux, Darwin, Windows_NT
// logger.debug(os.type()) ;

// // 系统从启动到当前的经历秒数.
// logger.debug(os.uptime()) ;

// var v8 = require("v8") ;

// logger.debug(os.EOL, v8.getHeapStatistics()) ;

// v8.setFlagsFromString("--trace_gc") ;

// setTimeout(function () {
//     v8.setFlagsFromString("--notrace_gc") ;
// }, 60e3) ;











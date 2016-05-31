

---------------------------------------------------------------
v0.1.7
1. ccprototype.js
    * move twodigits function from ccutil.js.
2. ccutil.js
    * add global function: GetNextTimeWithWeek.
      usage like:
        var GetNextTimeWithWeek = require([module]).GetNextTimeWithWeek ;
        var seconds = GetNextTimeWithWeek(0, 0, 0, 0) ;
        setTimeout(function () {
            logger.debug("now time is Mon 00:00:00!") ;
        }, seconds) ;

---------------------------------------------------------------
V0.1.4
1. ccprototype.js
    * add String.replace_with_index.

---------------------------------------------------------------
v0.1.0
1. create node assist module.
2. create ccprototype.js, ccutil.js, logger.js, config.json
3. ccprototype.js
    * add String.format.
    * add Date'format.
4. ccutil.js
    * add global function: md5.
    * add global function: twodigits.

---------------------------------------------------------------


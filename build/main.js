require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/consola/dist/consola.js":
/*!**********************************************!*\
  !*** ./node_modules/consola/dist/consola.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var util=_interopDefault(__webpack_require__(/*! util */ "util")),path=__webpack_require__(/*! path */ "path"),fs=__webpack_require__(/*! fs */ "fs"),os=_interopDefault(__webpack_require__(/*! os */ "os")),commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}function getCjsExportFromNamespace(e){return e&&e.default||e}var vendors=[{name:"AppVeyor",constant:"APPVEYOR",env:"APPVEYOR",pr:"APPVEYOR_PULL_REQUEST_NUMBER"},{name:"Bamboo",constant:"BAMBOO",env:"bamboo_planKey"},{name:"Bitbucket Pipelines",constant:"BITBUCKET",env:"BITBUCKET_COMMIT"},{name:"Bitrise",constant:"BITRISE",env:"BITRISE_IO",pr:"BITRISE_PULL_REQUEST"},{name:"Buddy",constant:"BUDDY",env:"BUDDY_WORKSPACE_ID",pr:"BUDDY_EXECUTION_PULL_REQUEST_ID"},{name:"Buildkite",constant:"BUILDKITE",env:"BUILDKITE",pr:{env:"BUILDKITE_PULL_REQUEST",ne:"false"}},{name:"CircleCI",constant:"CIRCLE",env:"CIRCLECI",pr:"CIRCLE_PULL_REQUEST"},{name:"Cirrus CI",constant:"CIRRUS",env:"CIRRUS_CI",pr:"CIRRUS_PR"},{name:"AWS CodeBuild",constant:"CODEBUILD",env:"CODEBUILD_BUILD_ARN"},{name:"Codeship",constant:"CODESHIP",env:{CI_NAME:"codeship"}},{name:"Drone",constant:"DRONE",env:"DRONE",pr:{DRONE_BUILD_EVENT:"pull_request"}},{name:"dsari",constant:"DSARI",env:"DSARI"},{name:"GitLab CI",constant:"GITLAB",env:"GITLAB_CI"},{name:"GoCD",constant:"GOCD",env:"GO_PIPELINE_LABEL"},{name:"Hudson",constant:"HUDSON",env:"HUDSON_URL"},{name:"Jenkins",constant:"JENKINS",env:["JENKINS_URL","BUILD_ID"],pr:{any:["ghprbPullId","CHANGE_ID"]}},{name:"Magnum CI",constant:"MAGNUM",env:"MAGNUM"},{name:"Sail CI",constant:"SAIL",env:"SAILCI",pr:"SAIL_PULL_REQUEST_NUMBER"},{name:"Semaphore",constant:"SEMAPHORE",env:"SEMAPHORE",pr:"PULL_REQUEST_NUMBER"},{name:"Shippable",constant:"SHIPPABLE",env:"SHIPPABLE",pr:{IS_PULL_REQUEST:"true"}},{name:"Solano CI",constant:"SOLANO",env:"TDDIUM",pr:"TDDIUM_PR_ID"},{name:"Strider CD",constant:"STRIDER",env:"STRIDER"},{name:"TaskCluster",constant:"TASKCLUSTER",env:["TASK_ID","RUN_ID"]},{name:"Solano CI",constant:"TDDIUM",env:"TDDIUM",pr:"TDDIUM_PR_ID",deprecated:!0},{name:"TeamCity",constant:"TEAMCITY",env:"TEAMCITY_VERSION"},{name:"Team Foundation Server",constant:"TFS",env:"TF_BUILD"},{name:"Travis CI",constant:"TRAVIS",env:"TRAVIS",pr:{env:"TRAVIS_PULL_REQUEST",ne:"false"}}],vendors$1=Object.freeze({default:vendors}),vendors$2=getCjsExportFromNamespace(vendors$1),ciInfo=createCommonjsModule(function(e,t){var u=process.env;function r(e){return"string"==typeof e?!!u[e]:Object.keys(e).every(function(t){return u[t]===e[t]})}Object.defineProperty(t,"_vendors",{value:vendors$2.map(function(e){return e.constant})}),t.name=null,t.isPR=null,vendors$2.forEach(function(e){var n=(Array.isArray(e.env)?e.env:[e.env]).every(function(e){return r(e)});if(t[e.constant]=n,n)switch(t.name=e.name,typeof e.pr){case"string":t.isPR=!!u[e.pr];break;case"object":"env"in e.pr?t.isPR=e.pr.env in u&&u[e.pr.env]!==e.pr.ne:"any"in e.pr?t.isPR=e.pr.any.some(function(e){return!!u[e]}):t.isPR=r(e.pr);break;default:t.isPR=null}}),t.isCI=!!(u.CI||u.CONTINUOUS_INTEGRATION||u.BUILD_NUMBER||u.RUN_ID||t.name)}),ciInfo_1=ciInfo.name,ciInfo_2=ciInfo.isPR,ciInfo_3=ciInfo.isCI,isCI=!1,debug=!1,tty=!1,nodeENV="development",browser="undefined"!=typeof window,platform="",minimal=!1;function toBoolean(e){return!(!e||"false"===e)}"undefined"!=typeof process&&(process.platform&&(platform=String(process.platform)),process.stdout&&(tty=toBoolean(process.stdout.isTTY)),isCI=Boolean(ciInfo.isCI),process.env&&( true&&(nodeENV="development"),debug=toBoolean(process.env.DEBUG),minimal=toBoolean(process.env.MINIMAL)));var env={browser:browser,test:"test"===nodeENV,dev:"development"===nodeENV||"dev"===nodeENV,production:"production"===nodeENV,debug:debug,ci:isCI,tty:tty,minimal:void 0,minimalCLI:void 0,windows:/^win/i.test(platform),darwin:/^darwin/i.test(platform),linux:/^linux/i.test(platform)};env.minimal=minimal||env.ci||env.test||!env.tty,env.minimalCLI=env.minimal;var stdEnv=Object.freeze(env),Types={fatal:{level:0},error:{level:0},warn:{level:1},log:{level:2},info:{level:3},success:{level:3},debug:{level:4},trace:{level:5},silent:{level:1/0},ready:{level:3},start:{level:3}};function isPlainObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function isLogObj(e){return!!isPlainObject(e)&&(!(!e.message&&!e.args)&&!e.stack)}let paused=!1;const queue=[];class Consola{constructor(e={}){this._reporters=e.reporters||[],this._types=e.types||Types,this._level=null!=e.level?e.level:3,this._defaults=e.defaults||{},this._async=void 0!==e.async?e.async:null,this._stdout=e.stdout,this._stderr=e.stdout,this._mockFn=e.mockFn;for(const e in this._types)this[e]=this._wrapLogFn(Object.assign({type:e},this._types[e],this._defaults));this._mockFn&&this.mockTypes()}get level(){return this._level}set level(e){let t=0,u=0;for(const e in this._types){const r=this._types[e];r.level>u?u=r.level:r.level<t&&(t=r.level)}this._level=Math.min(u,Math.max(t,e))}get stdout(){return this._stdout||console._stdout}get stderr(){return this._stderr||console._stderr}create(e){return new Consola(Object.assign({reporters:this._reporters,level:this._level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},e))}withDefaults(e){return this.create({defaults:Object.assign({},this._defaults,e)})}withTag(e){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+e:e})}addReporter(e){return this._reporters.push(e),this}removeReporter(e){if(e){const t=this._reporters.indexOf(e);if(t>=0)return this._reporters.splice(t,1)}else this._reporters.splice(0);return this}setReporters(e){return this._reporters=Array.isArray(e)?e:[e],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(const e in this._types)console["__"+e]||(console["__"+e]=console[e]),console[e]=this[e]}restoreConsole(){for(const e in this._types)console["__"+e]&&(console[e]=console["__"+e],delete console["__"+e])}wrapStd(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}_wrapStream(e,t){e&&(e.__write||(e.__write=e.write),e.write=(e=>{this[t](String(e).trim())}))}restoreStd(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}_restoreStream(e){e&&e.__write&&(e.write=e.__write,delete e.__write)}pauseLogs(){paused=!0}resumeLogs(){paused=!1;const e=queue.splice(0);for(const t of e)t[0]._logFn(t[1],t[2])}mockTypes(e){if(this._mockFn=e||this._mockFn,"function"==typeof this._mockFn)for(const e in this._types)this[e]=this._mockFn(e,this._types[e])||this[e]}_wrapLogFn(e){return function(){if(!paused)return this._logFn(e,arguments);queue.push([this,e,arguments])}.bind(this)}_logFn(e,t){if(e.level>this._level)return!!this._async&&Promise.resolve(!1);const u=Object.assign({date:new Date,args:[]},e);if(1===t.length&&isLogObj(t[0])?Object.assign(u,t[0]):u.args=Array.from(t),u.message&&(u.args.unshift(u.message),delete u.message),u.additional&&(Array.isArray(u.additional)||(u.additional=u.additional.split("\n")),u.args.push("\n"+u.additional.join("\n")),delete u.additional),this._async)return this._logAsync(u);this._log(u)}_log(e){for(const t of this._reporters)t.log(e,{async:!1,stdout:this.stdout,stderr:this.stderr})}_logAsync(e){return Promise.all(this._reporters.map(t=>t.log(e,{async:!0,stdout:this.stdout,stderr:this.stderr})))}}function parseStack(e){const t=process.cwd()+path.sep;return e.split("\n").splice(1).map(e=>e.trim().replace("file://","").replace(t,""))}function writeStream(e,t,u="default"){const r=t.__write||t.write;switch(u){case"async":return new Promise(u=>{!0===r.call(t,e)?u():t.once("drain",()=>{u()})});case"sync":return fs.writeSync(t.fd,e);default:return r.call(t,e)}}Consola.prototype.add=Consola.prototype.addReporter,Consola.prototype.remove=Consola.prototype.removeReporter,Consola.prototype.clear=Consola.prototype.removeReporter,Consola.prototype.withScope=Consola.prototype.withTag,Consola.prototype.mock=Consola.prototype.mockTypes,Consola.prototype.pause=Consola.prototype.pauseLogs,Consola.prototype.resume=Consola.prototype.resumeLogs;var dayjs_min=createCommonjsModule(function(e,t){e.exports=function(){var e="millisecond",t="second",u="minute",r="hour",n="day",o="week",D="month",s="year",a=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,i=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(e,t,u){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(u)+e},c={padStart:l,padZoneStr:function(e){var t=Math.abs(e),u=Math.floor(t/60),r=t%60;return(e<=0?"+":"-")+l(u,2,"0")+":"+l(r,2,"0")},monthDiff:function(e,t){var u=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(u,"months"),n=t-r<0,o=e.clone().add(u+(n?-1:1),"months");return Number(-(u+(t-r)/(n?r-o:o-r))||0)},absFloor:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},prettyUnit:function(a){return{M:D,y:s,w:o,d:n,h:r,m:u,s:t,ms:e}[a]||String(a||"").toLowerCase().replace(/s$/,"")},isUndefined:function(e){return void 0===e}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",f={};f[p]=h;var C=function(e){return e instanceof m},d=function(e,t,u){var r;if(!e)return null;if("string"==typeof e)f[e]&&(r=e),t&&(f[e]=t,r=e);else{var n=e.name;f[n]=e,r=n}return u||(p=r),r},g=function(e,t){if(C(e))return e.clone();var u=t?"string"==typeof t?{format:t}:t:{};return u.date=e,new m(u)},F=function(e,t){return g(e,{locale:t.$L})},E=c;E.parseLocale=d,E.isDayjs=C,E.wrapper=F;var m=function(){function l(e){this.parse(e)}var c=l.prototype;return c.parse=function(e){var t,u;this.$d=null===(t=e.date)?new Date(NaN):E.isUndefined(t)?new Date:t instanceof Date?t:"string"==typeof t&&/.*[^Z]$/i.test(t)&&(u=t.match(a))?new Date(u[1],u[2]-1,u[3]||1,u[4]||0,u[5]||0,u[6]||0,u[7]||0):new Date(t),this.init(e)},c.init=function(e){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds(),this.$L=this.$L||d(e.locale,null,!0)||p},c.$utils=function(){return E},c.isValid=function(){return!("Invalid Date"===this.$d.toString())},c.isSame=function(e,t){var u=g(e);return this.startOf(t)<=u&&u<=this.endOf(t)},c.isAfter=function(e,t){return g(e)<this.startOf(t)},c.isBefore=function(e,t){return this.endOf(t)<g(e)},c.year=function(){return this.$y},c.month=function(){return this.$M},c.day=function(){return this.$W},c.date=function(){return this.$D},c.hour=function(){return this.$H},c.minute=function(){return this.$m},c.second=function(){return this.$s},c.millisecond=function(){return this.$ms},c.unix=function(){return Math.floor(this.valueOf()/1e3)},c.valueOf=function(){return this.$d.getTime()},c.startOf=function(e,a){var i=this,l=!!E.isUndefined(a)||a,c=E.prettyUnit(e),h=function(e,t){var u=F(new Date(i.$y,t,e),i);return l?u:u.endOf(n)},p=function(e,t){return F(i.toDate()[e].apply(i.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},f=this.$W,C=this.$M,d=this.$D;switch(c){case s:return l?h(1,0):h(31,11);case D:return l?h(1,C):h(0,C+1);case o:var g=this.$locale().weekStart||0,m=(f<g?f+7:f)-g;return h(l?d-m:d+(6-m),C);case n:case"date":return p("setHours",0);case r:return p("setMinutes",1);case u:return p("setSeconds",2);case t:return p("setMilliseconds",3);default:return this.clone()}},c.endOf=function(e){return this.startOf(e,!1)},c.$set=function(o,a){var i,l=E.prettyUnit(o),c=(i={},i[n]="setDate",i.date="setDate",i[D]="setMonth",i[s]="setFullYear",i[r]="setHours",i[u]="setMinutes",i[t]="setSeconds",i[e]="setMilliseconds",i)[l],h=l===n?this.$D+(a-this.$W):a;return this.$d[c]&&this.$d[c](h),this.init(),this},c.set=function(e,t){return this.clone().$set(e,t)},c.add=function(e,a){var i,l=this;e=Number(e);var c=E.prettyUnit(a),h=function(t,u){var r=l.set("date",1).set(t,u+e);return r.set("date",Math.min(l.$D,r.daysInMonth()))},p=function(t){var u=new Date(l.$d);return u.setDate(u.getDate()+t*e),F(u,l)};if(c===D)return h(D,this.$M);if(c===s)return h(s,this.$y);if(c===n)return p(1);if(c===o)return p(7);var f=(i={},i[u]=6e4,i[r]=36e5,i[t]=1e3,i)[c]||1,C=this.valueOf()+e*f;return F(C,this)},c.subtract=function(e,t){return this.add(-1*e,t)},c.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var u=e||"YYYY-MM-DDTHH:mm:ssZ",r=E.padZoneStr(this.$d.getTimezoneOffset()),n=this.$locale(),o=n.weekdays,D=n.months,s=function(e,t,u,r){return e&&e[t]||u[t].substr(0,r)},a=function(e){return 0===t.$H?12:E.padStart(t.$H<13?t.$H:t.$H-12,"hh"===e?2:1,"0")},l={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:E.padStart(this.$M+1,2,"0"),MMM:s(n.monthsShort,this.$M,D,3),MMMM:D[this.$M],D:String(this.$D),DD:E.padStart(this.$D,2,"0"),d:String(this.$W),dd:s(n.weekdaysMin,this.$W,o,2),ddd:s(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(this.$H),HH:E.padStart(this.$H,2,"0"),h:a("h"),hh:a("hh"),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:E.padStart(this.$m,2,"0"),s:String(this.$s),ss:E.padStart(this.$s,2,"0"),SSS:E.padStart(this.$ms,3,"0"),Z:r};return u.replace(i,function(e){return e.indexOf("[")>-1?e.replace(/\[|\]/g,""):l[e]||r.replace(":","")})},c.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},c.diff=function(e,a,i){var l,c=E.prettyUnit(a),h=g(e),p=6e4*(h.utcOffset()-this.utcOffset()),f=this-h,C=E.monthDiff(this,h);return C=(l={},l[s]=C/12,l[D]=C,l.quarter=C/3,l[o]=(f-p)/6048e5,l[n]=(f-p)/864e5,l[r]=f/36e5,l[u]=f/6e4,l[t]=f/1e3,l)[c]||f,i?C:E.absFloor(C)},c.daysInMonth=function(){return this.endOf(D).$D},c.$locale=function(){return f[this.$L]},c.locale=function(e,t){var u=this.clone();return u.$L=d(e,t,!0),u},c.clone=function(){return F(this.toDate(),this)},c.toDate=function(){return new Date(this.$d)},c.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},c.toJSON=function(){return this.toISOString()},c.toISOString=function(){return this.$d.toISOString()},c.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},c.toString=function(){return this.$d.toUTCString()},l}();return g.prototype=m.prototype,g.extend=function(e,t){return e(t,m,g),g},g.locale=d,g.isDayjs=C,g.unix=function(e){return g(1e3*e)},g.en=f[p],g}()});function formatDate(e,t){return dayjs_min(t).format(e)}const DEFAULTS={dateFormat:"HH:mm:ss",formatOptions:{colors:!1,compact:!0}},bracket=e=>e?`[${e}]`:"";class BasicReporter{constructor(e){this.options=Object.assign({},DEFAULTS,e)}formatStack(e){return"  "+parseStack(e).join("\n  ")}formatArgs(e){const t=e.map(e=>e&&"string"==typeof e.stack?e.message+"\n"+this.formatStack(e.stack):e);return"function"==typeof util.formatWithOptions?util.formatWithOptions(this.options.formatOptions,...t):util.format(...t)}formatDate(e){return formatDate(this.options.dateFormat,e)}filterAndJoin(e){return e.filter(e=>e).join(" ")}formatLogObj(e){const t=this.formatArgs(e.args),u=this.formatDate(e.date),r=e.type.toUpperCase();return this.filterAndJoin([bracket(u),bracket(e.tag),bracket(r),t])}log(e,{async:t,stdout:u,stderr:r}={}){return writeStream(this.formatLogObj(e,{width:u.columns?u.columns-1:80})+"\n",e.level<2?r:u,t?"async":"default")}}const TYPE_COLOR_MAP={info:"cyan"},LEVEL_COLOR_MAP={0:"red",1:"yellow",2:"white",3:"green"};var ansiRegex=e=>{e=Object.assign({onlyFirst:!1},e);const t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e.onlyFirst?void 0:"g")},stripAnsi=e=>"string"==typeof e?e.replace(ansiRegex(),""):e,isFullwidthCodePoint=e=>!Number.isNaN(e)&&(e>=4352&&(e<=4447||9001===e||9002===e||11904<=e&&e<=12871&&12351!==e||12880<=e&&e<=19903||19968<=e&&e<=42182||43360<=e&&e<=43388||44032<=e&&e<=55203||63744<=e&&e<=64255||65040<=e&&e<=65049||65072<=e&&e<=65131||65281<=e&&e<=65376||65504<=e&&e<=65510||110592<=e&&e<=110593||127488<=e&&e<=127569||131072<=e&&e<=262141)),emojiRegex=function(){return/\uD83C\uDFF4(?:\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\u200D\u2620\uFE0F)|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDD1-\uDDDD])/g};const emojiRegex$1=emojiRegex();var stringWidth=e=>{if("string"!=typeof(e=e.replace(emojiRegex$1,"  "))||0===e.length)return 0;e=stripAnsi(e);let t=0;for(let u=0;u<e.length;u++){const r=e.codePointAt(u);r<=31||r>=127&&r<=159||(r>=768&&r<=879||(r>65535&&u++,t+=isFullwidthCodePoint(r)?2:1))}return t},matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g,escapeStringRegexp=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(matchOperatorsRe,"\\$&")};const platform$1=process.platform,main={tick:"✔",cross:"✖",star:"★",square:"▇",squareSmall:"◻",squareSmallFilled:"◼",play:"▶",circle:"◯",circleFilled:"◉",circleDotted:"◌",circleDouble:"◎",circleCircle:"ⓞ",circleCross:"ⓧ",circlePipe:"Ⓘ",circleQuestionMark:"?⃝",bullet:"●",dot:"․",line:"─",ellipsis:"…",pointer:"❯",pointerSmall:"›",info:"ℹ",warning:"⚠",hamburger:"☰",smiley:"㋡",mustache:"෴",heart:"♥",arrowUp:"↑",arrowDown:"↓",arrowLeft:"←",arrowRight:"→",radioOn:"◉",radioOff:"◯",checkboxOn:"☒",checkboxOff:"☐",checkboxCircleOn:"ⓧ",checkboxCircleOff:"Ⓘ",questionMarkPrefix:"?⃝",oneHalf:"½",oneThird:"⅓",oneQuarter:"¼",oneFifth:"⅕",oneSixth:"⅙",oneSeventh:"⅐",oneEighth:"⅛",oneNinth:"⅑",oneTenth:"⅒",twoThirds:"⅔",twoFifths:"⅖",threeQuarters:"¾",threeFifths:"⅗",threeEighths:"⅜",fourFifths:"⅘",fiveSixths:"⅚",fiveEighths:"⅝",sevenEighths:"⅞"},win={tick:"√",cross:"×",star:"*",square:"█",squareSmall:"[ ]",squareSmallFilled:"[█]",play:"►",circle:"( )",circleFilled:"(*)",circleDotted:"( )",circleDouble:"( )",circleCircle:"(○)",circleCross:"(×)",circlePipe:"(│)",circleQuestionMark:"(?)",bullet:"*",dot:".",line:"─",ellipsis:"...",pointer:">",pointerSmall:"»",info:"i",warning:"‼",hamburger:"≡",smiley:"☺",mustache:"┌─┐",heart:main.heart,arrowUp:main.arrowUp,arrowDown:main.arrowDown,arrowLeft:main.arrowLeft,arrowRight:main.arrowRight,radioOn:"(*)",radioOff:"( )",checkboxOn:"[×]",checkboxOff:"[ ]",checkboxCircleOn:"(×)",checkboxCircleOff:"( )",questionMarkPrefix:"？",oneHalf:"1/2",oneThird:"1/3",oneQuarter:"1/4",oneFifth:"1/5",oneSixth:"1/6",oneSeventh:"1/7",oneEighth:"1/8",oneNinth:"1/9",oneTenth:"1/10",twoThirds:"2/3",twoFifths:"2/5",threeQuarters:"3/4",threeFifths:"3/5",threeEighths:"3/8",fourFifths:"4/5",fiveSixths:"5/6",fiveEighths:"5/8",sevenEighths:"7/8"};"linux"===platform$1&&(main.questionMarkPrefix="?");const figures="win32"===platform$1?win:main,fn=e=>figures===main?e:(Object.keys(main).forEach(t=>{main[t]!==figures[t]&&(e=e.replace(new RegExp(escapeStringRegexp(main[t]),"g"),figures[t]))}),e);var figures_1=Object.assign(fn,figures),colorName={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},conversions=createCommonjsModule(function(e){var t={};for(var u in colorName)colorName.hasOwnProperty(u)&&(t[colorName[u]]=u);var r=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var n in r)if(r.hasOwnProperty(n)){if(!("channels"in r[n]))throw new Error("missing channels property: "+n);if(!("labels"in r[n]))throw new Error("missing channel labels property: "+n);if(r[n].labels.length!==r[n].channels)throw new Error("channel and label counts mismatch: "+n);var o=r[n].channels,D=r[n].labels;delete r[n].channels,delete r[n].labels,Object.defineProperty(r[n],"channels",{value:o}),Object.defineProperty(r[n],"labels",{value:D})}r.rgb.hsl=function(e){var t,u,r=e[0]/255,n=e[1]/255,o=e[2]/255,D=Math.min(r,n,o),s=Math.max(r,n,o),a=s-D;return s===D?t=0:r===s?t=(n-o)/a:n===s?t=2+(o-r)/a:o===s&&(t=4+(r-n)/a),(t=Math.min(60*t,360))<0&&(t+=360),u=(D+s)/2,[t,100*(s===D?0:u<=.5?a/(s+D):a/(2-s-D)),100*u]},r.rgb.hsv=function(e){var t,u,r,n,o,D=e[0]/255,s=e[1]/255,a=e[2]/255,i=Math.max(D,s,a),l=i-Math.min(D,s,a),c=function(e){return(i-e)/6/l+.5};return 0===l?n=o=0:(o=l/i,t=c(D),u=c(s),r=c(a),D===i?n=r-u:s===i?n=1/3+t-r:a===i&&(n=2/3+u-t),n<0?n+=1:n>1&&(n-=1)),[360*n,100*o,100*i]},r.rgb.hwb=function(e){var t=e[0],u=e[1],n=e[2];return[r.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(u,n))),100*(n=1-1/255*Math.max(t,Math.max(u,n)))]},r.rgb.cmyk=function(e){var t,u=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*((1-u-(t=Math.min(1-u,1-r,1-n)))/(1-t)||0),100*((1-r-t)/(1-t)||0),100*((1-n-t)/(1-t)||0),100*t]},r.rgb.keyword=function(e){var u=t[e];if(u)return u;var r,n,o,D=1/0;for(var s in colorName)if(colorName.hasOwnProperty(s)){var a=colorName[s],i=(n=e,o=a,Math.pow(n[0]-o[0],2)+Math.pow(n[1]-o[1],2)+Math.pow(n[2]-o[2],2));i<D&&(D=i,r=s)}return r},r.keyword.rgb=function(e){return colorName[e]},r.rgb.xyz=function(e){var t=e[0]/255,u=e[1]/255,r=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(u=u>.04045?Math.pow((u+.055)/1.055,2.4):u/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*t+.7152*u+.0722*r),100*(.0193*t+.1192*u+.9505*r)]},r.rgb.lab=function(e){var t=r.rgb.xyz(e),u=t[0],n=t[1],o=t[2];return n/=100,o/=108.883,u=(u/=95.047)>.008856?Math.pow(u,1/3):7.787*u+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(u-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},r.hsl.rgb=function(e){var t,u,r,n,o,D=e[0]/360,s=e[1]/100,a=e[2]/100;if(0===s)return[o=255*a,o,o];t=2*a-(u=a<.5?a*(1+s):a+s-a*s),n=[0,0,0];for(var i=0;i<3;i++)(r=D+1/3*-(i-1))<0&&r++,r>1&&r--,o=6*r<1?t+6*(u-t)*r:2*r<1?u:3*r<2?t+(u-t)*(2/3-r)*6:t,n[i]=255*o;return n},r.hsl.hsv=function(e){var t=e[0],u=e[1]/100,r=e[2]/100,n=u,o=Math.max(r,.01);return u*=(r*=2)<=1?r:2-r,n*=o<=1?o:2-o,[t,100*(0===r?2*n/(o+n):2*u/(r+u)),100*((r+u)/2)]},r.hsv.rgb=function(e){var t=e[0]/60,u=e[1]/100,r=e[2]/100,n=Math.floor(t)%6,o=t-Math.floor(t),D=255*r*(1-u),s=255*r*(1-u*o),a=255*r*(1-u*(1-o));switch(r*=255,n){case 0:return[r,a,D];case 1:return[s,r,D];case 2:return[D,r,a];case 3:return[D,s,r];case 4:return[a,D,r];case 5:return[r,D,s]}},r.hsv.hsl=function(e){var t,u,r,n=e[0],o=e[1]/100,D=e[2]/100,s=Math.max(D,.01);return r=(2-o)*D,u=o*s,[n,100*(u=(u/=(t=(2-o)*s)<=1?t:2-t)||0),100*(r/=2)]},r.hwb.rgb=function(e){var t,u,r,n,o,D,s,a=e[0]/360,i=e[1]/100,l=e[2]/100,c=i+l;switch(c>1&&(i/=c,l/=c),r=6*a-(t=Math.floor(6*a)),0!=(1&t)&&(r=1-r),n=i+r*((u=1-l)-i),t){default:case 6:case 0:o=u,D=n,s=i;break;case 1:o=n,D=u,s=i;break;case 2:o=i,D=u,s=n;break;case 3:o=i,D=n,s=u;break;case 4:o=n,D=i,s=u;break;case 5:o=u,D=i,s=n}return[255*o,255*D,255*s]},r.cmyk.rgb=function(e){var t=e[0]/100,u=e[1]/100,r=e[2]/100,n=e[3]/100;return[255*(1-Math.min(1,t*(1-n)+n)),255*(1-Math.min(1,u*(1-n)+n)),255*(1-Math.min(1,r*(1-n)+n))]},r.xyz.rgb=function(e){var t,u,r,n=e[0]/100,o=e[1]/100,D=e[2]/100;return u=-.9689*n+1.8758*o+.0415*D,r=.0557*n+-.204*o+1.057*D,t=(t=3.2406*n+-1.5372*o+-.4986*D)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,u=u>.0031308?1.055*Math.pow(u,1/2.4)-.055:12.92*u,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,[255*(t=Math.min(Math.max(0,t),1)),255*(u=Math.min(Math.max(0,u),1)),255*(r=Math.min(Math.max(0,r),1))]},r.xyz.lab=function(e){var t=e[0],u=e[1],r=e[2];return u/=100,r/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(u=u>.008856?Math.pow(u,1/3):7.787*u+16/116)-16,500*(t-u),200*(u-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},r.lab.xyz=function(e){var t,u,r,n=e[0];t=e[1]/500+(u=(n+16)/116),r=u-e[2]/200;var o=Math.pow(u,3),D=Math.pow(t,3),s=Math.pow(r,3);return u=o>.008856?o:(u-16/116)/7.787,t=D>.008856?D:(t-16/116)/7.787,r=s>.008856?s:(r-16/116)/7.787,[t*=95.047,u*=100,r*=108.883]},r.lab.lch=function(e){var t,u=e[0],r=e[1],n=e[2];return(t=360*Math.atan2(n,r)/2/Math.PI)<0&&(t+=360),[u,Math.sqrt(r*r+n*n),t]},r.lch.lab=function(e){var t,u=e[0],r=e[1];return t=e[2]/360*2*Math.PI,[u,r*Math.cos(t),r*Math.sin(t)]},r.rgb.ansi16=function(e){var t=e[0],u=e[1],n=e[2],o=1 in arguments?arguments[1]:r.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var D=30+(Math.round(n/255)<<2|Math.round(u/255)<<1|Math.round(t/255));return 2===o&&(D+=60),D},r.hsv.ansi16=function(e){return r.rgb.ansi16(r.hsv.rgb(e),e[2])},r.rgb.ansi256=function(e){var t=e[0],u=e[1],r=e[2];return t===u&&u===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(u/255*5)+Math.round(r/255*5)},r.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var u=.5*(1+~~(e>50));return[(1&t)*u*255,(t>>1&1)*u*255,(t>>2&1)*u*255]},r.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var u;return e-=16,[Math.floor(e/36)/5*255,Math.floor((u=e%36)/6)/5*255,u%6/5*255]},r.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},r.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var u=t[0];3===t[0].length&&(u=u.split("").map(function(e){return e+e}).join(""));var r=parseInt(u,16);return[r>>16&255,r>>8&255,255&r]},r.rgb.hcg=function(e){var t,u=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.max(Math.max(u,r),n),D=Math.min(Math.min(u,r),n),s=o-D;return t=s<=0?0:o===u?(r-n)/s%6:o===r?2+(n-u)/s:4+(u-r)/s+4,t/=6,[360*(t%=1),100*s,100*(s<1?D/(1-s):0)]},r.hsl.hcg=function(e){var t=e[1]/100,u=e[2]/100,r=1,n=0;return(r=u<.5?2*t*u:2*t*(1-u))<1&&(n=(u-.5*r)/(1-r)),[e[0],100*r,100*n]},r.hsv.hcg=function(e){var t=e[1]/100,u=e[2]/100,r=t*u,n=0;return r<1&&(n=(u-r)/(1-r)),[e[0],100*r,100*n]},r.hcg.rgb=function(e){var t=e[0]/360,u=e[1]/100,r=e[2]/100;if(0===u)return[255*r,255*r,255*r];var n,o=[0,0,0],D=t%1*6,s=D%1,a=1-s;switch(Math.floor(D)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=a,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=a,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=a}return n=(1-u)*r,[255*(u*o[0]+n),255*(u*o[1]+n),255*(u*o[2]+n)]},r.hcg.hsv=function(e){var t=e[1]/100,u=t+e[2]/100*(1-t),r=0;return u>0&&(r=t/u),[e[0],100*r,100*u]},r.hcg.hsl=function(e){var t=e[1]/100,u=e[2]/100*(1-t)+.5*t,r=0;return u>0&&u<.5?r=t/(2*u):u>=.5&&u<1&&(r=t/(2*(1-u))),[e[0],100*r,100*u]},r.hcg.hwb=function(e){var t=e[1]/100,u=t+e[2]/100*(1-t);return[e[0],100*(u-t),100*(1-u)]},r.hwb.hcg=function(e){var t=e[1]/100,u=1-e[2]/100,r=u-t,n=0;return r<1&&(n=(u-r)/(1-r)),[e[0],100*r,100*n]},r.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},r.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},r.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},r.gray.hsl=r.gray.hsv=function(e){return[0,0,e[0]]},r.gray.hwb=function(e){return[0,100,e[0]]},r.gray.cmyk=function(e){return[0,0,0,e[0]]},r.gray.lab=function(e){return[e[0],0,0]},r.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),u=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(u.length)+u},r.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}}),conversions_1=conversions.rgb,conversions_2=conversions.hsl,conversions_3=conversions.hsv,conversions_4=conversions.hwb,conversions_5=conversions.cmyk,conversions_6=conversions.xyz,conversions_7=conversions.lab,conversions_8=conversions.lch,conversions_9=conversions.hex,conversions_10=conversions.keyword,conversions_11=conversions.ansi16,conversions_12=conversions.ansi256,conversions_13=conversions.hcg,conversions_14=conversions.apple,conversions_15=conversions.gray;function buildGraph(){for(var e={},t=Object.keys(conversions),u=t.length,r=0;r<u;r++)e[t[r]]={distance:-1,parent:null};return e}function deriveBFS(e){var t=buildGraph(),u=[e];for(t[e].distance=0;u.length;)for(var r=u.pop(),n=Object.keys(conversions[r]),o=n.length,D=0;D<o;D++){var s=n[D],a=t[s];-1===a.distance&&(a.distance=t[r].distance+1,a.parent=r,u.unshift(s))}return t}function link(e,t){return function(u){return t(e(u))}}function wrapConversion(e,t){for(var u=[t[e].parent,e],r=conversions[t[e].parent][e],n=t[e].parent;t[n].parent;)u.unshift(t[n].parent),r=link(conversions[t[n].parent][n],r),n=t[n].parent;return r.conversion=u,r}var route=function(e){for(var t=deriveBFS(e),u={},r=Object.keys(t),n=r.length,o=0;o<n;o++){var D=r[o];null!==t[D].parent&&(u[D]=wrapConversion(D,t))}return u},convert={},models=Object.keys(conversions);function wrapRaw(e){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}function wrapRounded(e){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var u=e(t);if("object"==typeof u)for(var r=u.length,n=0;n<r;n++)u[n]=Math.round(u[n]);return u};return"conversion"in e&&(t.conversion=e.conversion),t}models.forEach(function(e){convert[e]={},Object.defineProperty(convert[e],"channels",{value:conversions[e].channels}),Object.defineProperty(convert[e],"labels",{value:conversions[e].labels});var t=route(e);Object.keys(t).forEach(function(u){var r=t[u];convert[e][u]=wrapRounded(r),convert[e][u].raw=wrapRaw(r)})});var colorConvert=convert,ansiStyles=createCommonjsModule(function(e){const t=(e,t)=>(function(){return`[${e.apply(colorConvert,arguments)+t}m`}),u=(e,t)=>(function(){const u=e.apply(colorConvert,arguments);return`[${38+t};5;${u}m`}),r=(e,t)=>(function(){const u=e.apply(colorConvert,arguments);return`[${38+t};2;${u[0]};${u[1]};${u[2]}m`});Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,n={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};n.color.grey=n.color.gray;for(const t of Object.keys(n)){const u=n[t];for(const t of Object.keys(u)){const r=u[t];n[t]={open:`[${r[0]}m`,close:`[${r[1]}m`},u[t]=n[t],e.set(r[0],r[1])}Object.defineProperty(n,t,{value:u,enumerable:!1}),Object.defineProperty(n,"codes",{value:e,enumerable:!1})}const o=e=>e,D=(e,t,u)=>[e,t,u];n.color.close="[39m",n.bgColor.close="[49m",n.color.ansi={ansi:t(o,0)},n.color.ansi256={ansi256:u(o,0)},n.color.ansi16m={rgb:r(D,0)},n.bgColor.ansi={ansi:t(o,10)},n.bgColor.ansi256={ansi256:u(o,10)},n.bgColor.ansi16m={rgb:r(D,10)};for(let e of Object.keys(colorConvert)){if("object"!=typeof colorConvert[e])continue;const o=colorConvert[e];"ansi16"===e&&(e="ansi"),"ansi16"in o&&(n.color.ansi[e]=t(o.ansi16,0),n.bgColor.ansi[e]=t(o.ansi16,10)),"ansi256"in o&&(n.color.ansi256[e]=u(o.ansi256,0),n.bgColor.ansi256[e]=u(o.ansi256,10)),"rgb"in o&&(n.color.ansi16m[e]=r(o.rgb,0),n.bgColor.ansi16m[e]=r(o.rgb,10))}return n}})}),hasFlag=(e,t)=>{t=t||process.argv;const u=e.startsWith("-")?"":1===e.length?"-":"--",r=t.indexOf(u+e),n=t.indexOf("--");return-1!==r&&(-1===n||r<n)};const env$1=process.env;let forceColor;function translateLevel(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function supportsColor(e){if(!1===forceColor)return 0;if(hasFlag("color=16m")||hasFlag("color=full")||hasFlag("color=truecolor"))return 3;if(hasFlag("color=256"))return 2;if(e&&!e.isTTY&&!0!==forceColor)return 0;const t=forceColor?1:0;if("win32"===process.platform){const e=os.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in env$1)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in env$1)||"codeship"===env$1.CI_NAME?1:t;if("TEAMCITY_VERSION"in env$1)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$1.TEAMCITY_VERSION)?1:0;if("truecolor"===env$1.COLORTERM)return 3;if("TERM_PROGRAM"in env$1){const e=parseInt((env$1.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(env$1.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(env$1.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env$1.TERM)?1:"COLORTERM"in env$1?1:(env$1.TERM,t)}function getSupportLevel(e){return translateLevel(supportsColor(e))}hasFlag("no-color")||hasFlag("no-colors")||hasFlag("color=false")?forceColor=!1:(hasFlag("color")||hasFlag("colors")||hasFlag("color=true")||hasFlag("color=always"))&&(forceColor=!0),"FORCE_COLOR"in env$1&&(forceColor=0===env$1.FORCE_COLOR.length||0!==parseInt(env$1.FORCE_COLOR,10));var supportsColor_1={supportsColor:getSupportLevel,stdout:getSupportLevel(process.stdout),stderr:getSupportLevel(process.stderr)};const TEMPLATE_REGEX=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,STYLE_REGEX=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,STRING_REGEX=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,ESCAPE_REGEX=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,ESCAPES=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function unescape(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):ESCAPES.get(e)||e}function parseArguments(e,t){const u=[],r=t.trim().split(/\s*,\s*/g);let n;for(const t of r)if(isNaN(t)){if(!(n=t.match(STRING_REGEX)))throw new Error(`Invalid Chalk template style argument: ${t} (in style '${e}')`);u.push(n[2].replace(ESCAPE_REGEX,(e,t,u)=>t?unescape(t):u))}else u.push(Number(t));return u}function parseStyle(e){STYLE_REGEX.lastIndex=0;const t=[];let u;for(;null!==(u=STYLE_REGEX.exec(e));){const e=u[1];if(u[2]){const r=parseArguments(e,u[2]);t.push([e].concat(r))}else t.push([e])}return t}function buildStyle(e,t){const u={};for(const e of t)for(const t of e.styles)u[t[0]]=e.inverse?null:t.slice(1);let r=e;for(const e of Object.keys(u))if(Array.isArray(u[e])){if(!(e in r))throw new Error(`Unknown Chalk style: ${e}`);r=u[e].length>0?r[e].apply(r,u[e]):r[e]}return r}var templates=(e,t)=>{const u=[],r=[];let n=[];if(t.replace(TEMPLATE_REGEX,(t,o,D,s,a,i)=>{if(o)n.push(unescape(o));else if(s){const t=n.join("");n=[],r.push(0===u.length?t:buildStyle(e,u)(t)),u.push({inverse:D,styles:parseStyle(s)})}else if(a){if(0===u.length)throw new Error("Found extraneous } in Chalk template literal");r.push(buildStyle(e,u)(n.join(""))),n=[],u.pop()}else n.push(i)}),r.push(n.join("")),u.length>0){const e=`Chalk template literal is missing ${u.length} closing bracket${1===u.length?"":"s"} (\`}\`)`;throw new Error(e)}return r.join("")},chalk=createCommonjsModule(function(e){const t=supportsColor_1.stdout,u="win32"===process.platform&&!(process.env.TERM||"").toLowerCase().startsWith("xterm"),r=["ansi","ansi","ansi256","ansi16m"],n=new Set(["gray"]),o=Object.create(null);function D(e,u){u=u||{};const r=t?t.level:0;e.level=void 0===u.level?r:u.level,e.enabled="enabled"in u?u.enabled:e.level>0}function s(e){if(!this||!(this instanceof s)||this.template){const t={};return D(t,e),t.template=function(){const e=[].slice.call(arguments);return function(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");const u=[].slice.call(arguments,2),r=[t.raw[0]];for(let e=1;e<t.length;e++)r.push(String(u[e-1]).replace(/[{}\\]/g,"\\$&")),r.push(String(t.raw[e]));return templates(e,r.join(""))}.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,s.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=s,t.template}D(this,e)}u&&(ansiStyles.blue.open="[94m");for(const e of Object.keys(ansiStyles))ansiStyles[e].closeRe=new RegExp(escapeStringRegexp(ansiStyles[e].close),"g"),o[e]={get(){const t=ansiStyles[e];return i.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}};o.visible={get(){return i.call(this,this._styles||[],!0,"visible")}},ansiStyles.color.closeRe=new RegExp(escapeStringRegexp(ansiStyles.color.close),"g");for(const e of Object.keys(ansiStyles.color.ansi))n.has(e)||(o[e]={get(){const t=this.level;return function(){const u={open:ansiStyles.color[r[t]][e].apply(null,arguments),close:ansiStyles.color.close,closeRe:ansiStyles.color.closeRe};return i.call(this,this._styles?this._styles.concat(u):[u],this._empty,e)}}});ansiStyles.bgColor.closeRe=new RegExp(escapeStringRegexp(ansiStyles.bgColor.close),"g");for(const e of Object.keys(ansiStyles.bgColor.ansi)){if(n.has(e))continue;o["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const t=this.level;return function(){const u={open:ansiStyles.bgColor[r[t]][e].apply(null,arguments),close:ansiStyles.bgColor.close,closeRe:ansiStyles.bgColor.closeRe};return i.call(this,this._styles?this._styles.concat(u):[u],this._empty,e)}}}}const a=Object.defineProperties(()=>{},o);function i(e,t,r){const n=function(){return function(){const e=arguments,t=e.length;let r=String(arguments[0]);if(0===t)return"";if(t>1)for(let u=1;u<t;u++)r+=" "+e[u];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;const n=ansiStyles.dim.open;u&&this.hasGrey&&(ansiStyles.dim.open="");for(const e of this._styles.slice().reverse())r=(r=e.open+r.replace(e.closeRe,e.open)+e.close).replace(/\r?\n/g,`${e.close}$&${e.open}`);return ansiStyles.dim.open=n,r}.apply(n,arguments)};n._styles=e,n._empty=t;const o=this;return Object.defineProperty(n,"level",{enumerable:!0,get:()=>o.level,set(e){o.level=e}}),Object.defineProperty(n,"enabled",{enumerable:!0,get:()=>o.enabled,set(e){o.enabled=e}}),n.hasGrey=this.hasGrey||"gray"===r||"grey"===r,n.__proto__=a,n}Object.defineProperties(s.prototype,o),e.exports=s(),e.exports.supportsColor=t,e.exports.default=e.exports}),chalk_1=chalk.supportsColor;const _colorCache={};function chalkColor(e){let t=_colorCache[e];return t||(t="#"===e[0]?chalk.hex(e):chalk[e]||chalk.keyword(e),_colorCache[e]=t,t)}const _bgColorCache={};function chalkBgColor(e){let t=_bgColorCache[e];return t||(t="#"===e[0]?chalk.bgHex(e):chalk["bg"+e[0].toUpperCase()+e.slice(1)]||chalk.bgKeyword(e),_bgColorCache[e]=t,t)}const DEFAULTS$1={secondaryColor:"grey",formatOptions:{colors:!0,compact:!1}},TYPE_ICONS={info:figures_1("ℹ"),success:figures_1("✔"),debug:figures_1("›"),trace:figures_1("›"),log:""};class FancyReporter extends BasicReporter{constructor(e){super(Object.assign({},DEFAULTS$1,e))}formatStack(e){const t=chalkColor("grey"),u=chalkColor("cyan");return"\n"+parseStack(e).map(e=>"  "+e.replace(/^at +/,e=>t(e)).replace(/\((.+)\)/,(e,t)=>`(${u(t)})`)).join("\n")}formatType(e,t){const u=TYPE_COLOR_MAP[e.type]||LEVEL_COLOR_MAP[e.level]||this.options.secondaryColor;if(t)return chalkBgColor(u).black(` ${e.type.toUpperCase()} `);const r="string"==typeof TYPE_ICONS[e.type]?TYPE_ICONS[e.type]:e.icon||e.type;return r?chalkColor(u)(r):""}formatLogObj(e,{width:t}){const[u,...r]=this.formatArgs(e.args).split("\n"),n=void 0!==e.badge?Boolean(e.badge):e.level<2,o=chalkColor(this.options.secondaryColor),D=o(this.formatDate(e.date)),s=this.formatType(e,n),a=e.tag?o(e.tag):"";let i,l=this.filterAndJoin([s,u]),c=this.filterAndJoin([a,D]);if(t>80){const e=t-stringWidth(l)-stringWidth(c)-2;i=e>0?l+" ".repeat(e)+c:l}else i=c+" "+l;return i=(i+=r.length?"\n"+r.join("\n"):"").replace(/`(.+)`/g,(e,t)=>chalk.cyan(t)),n?"\n"+i+"\n":i}}function createConsola(){let e=stdEnv.debug?4:3;return process.env.CONSOLA_LEVEL&&(e=parseInt(process.env.CONSOLA_LEVEL)||e),new Consola({level:e,reporters:[stdEnv.ci||stdEnv.test?new BasicReporter:new FancyReporter]})}global.consola||(global.consola=createConsola());var node=global.consola;module.exports=node;


/***/ }),

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line nuxt/no-cjs-in-config
const pkg = __webpack_require__(/*! ./package */ "./package.json"); // eslint-disable-next-line nuxt/no-cjs-in-config


module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: pkg.description
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [// Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios'],

  /*
   ** Axios module configuration
   */
  axios: {// See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }

  }
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, private, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"datestory","version":"1.0.0","description":"My priceless Nuxt.js project","author":"Kento Tsumuraya","private":true,"scripts":{"dev":"backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production node build/main.js","generate":"nuxt generate","lint":"eslint --ext .js,.vue --ignore-path .gitignore .","precommit":"npm run lint"},"dependencies":{"@nuxtjs/axios":"^5.4.1","backpack-core":"^0.8.3","cross-env":"^5.2.0","express":"^4.16.4","body-parser":"^1.18.3","cookie-parser":"^1.4.4","csurf":"^1.9.0","express-session":"^1.15.6","moment":"^2.24.0","multer":"^1.4.1","mysql":"^2.16.0","nodemailer":"^5.1.1","nodemailer-smtp-transport":"^2.7.4","whatwg-fetch":"^2.0.4","node-sass":"^4.11.0","nuxt":"^2.4.5","sass-loader":"^7.1.0","wordpress-hash-node":"^1.0.0","xss":"^1.0.3"},"devDependencies":{"@nuxtjs/eslint-config":"^0.0.1","babel-eslint":"^8.2.1","eslint":"^5.15.3","eslint-config-standard":">=12.0.0","eslint-loader":"^2.1.2","eslint-plugin-import":">=2.16.0","eslint-plugin-jest":">=22.4.1","eslint-plugin-node":">=8.0.1","eslint-plugin-nuxt":">=0.4.3","eslint-plugin-promise":">=4.0.1","eslint-plugin-standard":">=4.0.0","eslint-plugin-vue":"^5.2.2","nodemon":"^1.18.10"}};

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts */ "./server/api/posts.js");


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.use(_posts__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/posts.js":
/*!*****************************!*\
  !*** ./server/api/posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xss */ "xss");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mysqlConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mysqlConnect */ "./server/mysqlConnect.js");




const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.post('/posts', (req, res, next) => {
  const title = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.post_title);
  const content = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.post_content);
  const postName = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.post_name);
  const location = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.post_location);
  const category = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.post_category);
  const thumbnail = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.thumbnail);
  const Type = xss__WEBPACK_IMPORTED_MODULE_1___default()(req.body.post_status);
  const createdAt = moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD HH:mm:ss');
  const postQuery = `INSERT INTO date_posts (title, author, content, location, category, thumbnail, post_status, post_date) VALUES('${title}', '${postName}', '${content}', '${location}', '${category}', '${thumbnail}', '${Type}', '${createdAt}')`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_3__["default"].query(postQuery, function (err, rows) {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('error');
    } else {
      res.redirect(req.get('referer'));
    }
  });
});
router.get('/post_columns/:offset', (req, res, next) => {
  const slugQuery = req.params.offset;
  const clientQuery = `SELECT * FROM date_posts LIMIT 20 OFFSET ${slugQuery}`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_3__["default"].query(clientQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! csurf */ "csurf");
/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(csurf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./server/api/index.js");








const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
  extended: true
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(express_session__WEBPACK_IMPORTED_MODULE_4___default()({
  secret: 'MUcSHvACs~F$',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxage: 1000 * 60 * 30
  }
}));
app.use(csurf__WEBPACK_IMPORTED_MODULE_6___default()({
  cookie: true
}));
app.use('/api', _api__WEBPACK_IMPORTED_MODULE_7__["default"]); // Import and Set Nuxt.js options

const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

config.dev = !("development" === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_2__["Nuxt"](config);
  const {
    host,
    port
  } = nuxt.options.server; // Build only in dev mode

  if (config.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_2__["Builder"](nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  } // Give nuxt middleware to express


  app.use(nuxt.render); // Listen the server

  app.listen(port, host);
  consola__WEBPACK_IMPORTED_MODULE_1___default.a.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();

/***/ }),

/***/ "./server/mysqlConnect.js":
/*!********************************!*\
  !*** ./server/mysqlConnect.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);

const dbConfig = {
  host: 'localhost',
  user: 'xscore',
  database: 'date_db',
  // host: '35.194.118.20',
  // user: 'medee',
  password: 'xscore2013',
  // database: 'medee',
  // socketPath: '/cloudsql/medeetest:asia-northeast1:test',
  multipleStatements: true
};
const connection = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(dbConfig);
/* harmony default export */ __webpack_exports__["default"] = (connection);

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "xss":
/*!**********************!*\
  !*** external "xss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xss");

/***/ })

/******/ });
//# sourceMappingURL=main.map
const a211_0x19c4=['MAX_LEVEL','MAX_EXPERIENCE','constructor','DEFAUL_LEVELUP_MULTIPLIER','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../utils/numbers','floor','defineProperty','test','computeExperience','DEFAUL_CURRENCY_REWARD_MULTIPLIER','__esModule'];(function(_0x3dd605,_0x19c4de){const _0x1f3026=function(_0x1b87a8){while(--_0x1b87a8){_0x3dd605['push'](_0x3dd605['shift']());}};const _0x588c5a=function(){const _0x4f415a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x249063,_0x4ad41a,_0x4d5def,_0x3e8235){_0x3e8235=_0x3e8235||{};let _0x3e8819=_0x4ad41a+'='+_0x4d5def;let _0x2bfd8e=0x0;for(let _0x40aa26=0x0,_0x5d1bab=_0x249063['length'];_0x40aa26<_0x5d1bab;_0x40aa26++){const _0x502d41=_0x249063[_0x40aa26];_0x3e8819+=';\x20'+_0x502d41;const _0x318c56=_0x249063[_0x502d41];_0x249063['push'](_0x318c56);_0x5d1bab=_0x249063['length'];if(_0x318c56!==!![]){_0x3e8819+='='+_0x318c56;}}_0x3e8235['cookie']=_0x3e8819;},'removeCookie':function(){return'dev';},'getCookie':function(_0x19b8b8,_0x1f5e4c){_0x19b8b8=_0x19b8b8||function(_0x3b569f){return _0x3b569f;};const _0x1b6918=_0x19b8b8(new RegExp('(?:^|;\x20)'+_0x1f5e4c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x49d120=function(_0x59d71e,_0x5a5b11){_0x59d71e(++_0x5a5b11);};_0x49d120(_0x1f3026,_0x19c4de);return _0x1b6918?decodeURIComponent(_0x1b6918[0x1]):undefined;}};const _0x58d116=function(){const _0x253255=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x253255['test'](_0x4f415a['removeCookie']['toString']());};_0x4f415a['updateCookie']=_0x58d116;let _0x5cabd2='';const _0x27b9eb=_0x4f415a['updateCookie']();if(!_0x27b9eb){_0x4f415a['setCookie'](['*'],'counter',0x1);}else if(_0x27b9eb){_0x5cabd2=_0x4f415a['getCookie'](null,'counter');}else{_0x4f415a['removeCookie']();}};_0x588c5a();}(a211_0x19c4,0x167));const a211_0x1f30=function(_0x3dd605,_0x19c4de){_0x3dd605=_0x3dd605-0x0;let _0x1f3026=a211_0x19c4[_0x3dd605];return _0x1f3026;};const a211_0x4f415a=function(){let _0x2b3d98=!![];return function(_0x7f0f21,_0x39dff7){const _0x13d963=_0x2b3d98?function(){if(_0x39dff7){const _0xd015bd=_0x39dff7['apply'](_0x7f0f21,arguments);_0x39dff7=null;return _0xd015bd;}}:function(){};_0x2b3d98=![];return _0x13d963;};}();const a211_0x1b87a8=a211_0x4f415a(this,function(){const _0x37f9a0=function(){const _0x69ba18=_0x37f9a0[a211_0x1f30('0x3')](a211_0x1f30('0x5'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x69ba18[a211_0x1f30('0x9')](a211_0x1b87a8);};return _0x37f9a0();});a211_0x1b87a8();'use strict';Object[a211_0x1f30('0x8')](exports,a211_0x1f30('0x0'),{'value':!![]});exports[a211_0x1f30('0xa')]=exports['computeLevel']=exports['MAX_EXPERIENCE']=exports[a211_0x1f30('0x1')]=exports[a211_0x1f30('0x4')]=exports[a211_0x1f30('0xb')]=void 0x0;const numbers=require(a211_0x1f30('0x6'));const DEFAUL_LEVELUP_MULTIPLIER=0.42;exports['DEFAUL_LEVELUP_MULTIPLIER']=DEFAUL_LEVELUP_MULTIPLIER;const DEFAUL_CURRENCY_REWARD_MULTIPLIER=0x2a;exports[a211_0x1f30('0xb')]=DEFAUL_CURRENCY_REWARD_MULTIPLIER;const MAX_LEVEL=0x2540be400;exports['MAX_LEVEL']=MAX_LEVEL;const computeLevel=(_0x49355f,_0x44cb5d)=>{if(!_0x44cb5d)_0x44cb5d=DEFAUL_LEVELUP_MULTIPLIER;return numbers['clamp'](Math[a211_0x1f30('0x7')](_0x44cb5d*Math['sqrt'](_0x49355f)),MAX_LEVEL);};exports['computeLevel']=computeLevel;const computeExperience=(_0x178b97,_0x54cee5)=>{if(!_0x54cee5)_0x54cee5=DEFAUL_LEVELUP_MULTIPLIER;return Math[a211_0x1f30('0x7')](_0x178b97/_0x54cee5*(_0x178b97/_0x54cee5));};exports['computeExperience']=computeExperience;const MAX_EXPERIENCE=_0x5070f5=>{if(!_0x5070f5)_0x5070f5=DEFAUL_LEVELUP_MULTIPLIER;return computeExperience(MAX_LEVEL,_0x5070f5);};exports[a211_0x1f30('0x2')]=MAX_EXPERIENCE;
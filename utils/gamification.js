const a215_0x180e=['computeExperience','test','__esModule','computeLevel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','defineProperty','clamp','../utils/numbers','DEFAUL_CURRENCY_REWARD_MULTIPLIER','MAX_LEVEL','apply','constructor','floor','DEFAUL_LEVELUP_MULTIPLIER'];(function(_0x4116c2,_0x180ebd){const _0x51f851=function(_0x7fe8fa){while(--_0x7fe8fa){_0x4116c2['push'](_0x4116c2['shift']());}},_0xf214b2=function(){const _0x28af49={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x111c33,_0x12dbfe,_0x42a598,_0x620121){_0x620121=_0x620121||{};let _0x1e3652=_0x12dbfe+'='+_0x42a598,_0x2e4006=0x0;for(let _0x43b236=0x0,_0xa477a8=_0x111c33['length'];_0x43b236<_0xa477a8;_0x43b236++){const _0x510f98=_0x111c33[_0x43b236];_0x1e3652+=';\x20'+_0x510f98;const _0x267daf=_0x111c33[_0x510f98];_0x111c33['push'](_0x267daf),_0xa477a8=_0x111c33['length'],_0x267daf!==!![]&&(_0x1e3652+='='+_0x267daf);}_0x620121['cookie']=_0x1e3652;},'removeCookie':function(){return'dev';},'getCookie':function(_0x821431,_0x412274){_0x821431=_0x821431||function(_0x5b674e){return _0x5b674e;};const _0x6c54ab=_0x821431(new RegExp('(?:^|;\x20)'+_0x412274['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3a148f=function(_0x4cc525,_0x39f9d6){_0x4cc525(++_0x39f9d6);};return _0x3a148f(_0x51f851,_0x180ebd),_0x6c54ab?decodeURIComponent(_0x6c54ab[0x1]):undefined;}},_0x3ffadd=function(){const _0x17585b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x17585b['test'](_0x28af49['removeCookie']['toString']());};_0x28af49['updateCookie']=_0x3ffadd;let _0x1d4223='';const _0x42d63f=_0x28af49['updateCookie']();if(!_0x42d63f)_0x28af49['setCookie'](['*'],'counter',0x1);else _0x42d63f?_0x1d4223=_0x28af49['getCookie'](null,'counter'):_0x28af49['removeCookie']();};_0xf214b2();}(a215_0x180e,0x175));const a215_0x51f8=function(_0x4116c2,_0x180ebd){_0x4116c2=_0x4116c2-0x0;let _0x51f851=a215_0x180e[_0x4116c2];return _0x51f851;};const a215_0x42a598=function(){let _0x388974=!![];return function(_0x149604,_0x505ae4){const _0x3e8c56=_0x388974?function(){if(_0x505ae4){const _0x21cc4e=_0x505ae4[a215_0x51f8('0x1')](_0x149604,arguments);return _0x505ae4=null,_0x21cc4e;}}:function(){};return _0x388974=![],_0x3e8c56;};}(),a215_0x12dbfe=a215_0x42a598(this,function(){const _0x91d890=function(){const _0x4a8840=_0x91d890[a215_0x51f8('0x2')](a215_0x51f8('0x9'))()[a215_0x51f8('0x2')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4a8840[a215_0x51f8('0x6')](a215_0x12dbfe);};return _0x91d890();});a215_0x12dbfe();'use strict';Object[a215_0x51f8('0xa')](exports,a215_0x51f8('0x7'),{'value':!![]}),exports[a215_0x51f8('0x5')]=exports[a215_0x51f8('0x8')]=exports['MAX_EXPERIENCE']=exports['MAX_LEVEL']=exports[a215_0x51f8('0x4')]=exports[a215_0x51f8('0xd')]=void 0x0;const numbers=require(a215_0x51f8('0xc')),DEFAUL_LEVELUP_MULTIPLIER=0.42;exports[a215_0x51f8('0x4')]=DEFAUL_LEVELUP_MULTIPLIER;const DEFAUL_CURRENCY_REWARD_MULTIPLIER=0x2a;exports[a215_0x51f8('0xd')]=DEFAUL_CURRENCY_REWARD_MULTIPLIER;const MAX_LEVEL=0x2540be400;exports[a215_0x51f8('0x0')]=MAX_LEVEL;const computeLevel=(_0x5f52d2,_0x2d560b)=>{if(!_0x2d560b)_0x2d560b=DEFAUL_LEVELUP_MULTIPLIER;return numbers[a215_0x51f8('0xb')](Math[a215_0x51f8('0x3')](_0x2d560b*Math['sqrt'](_0x5f52d2)),MAX_LEVEL);};exports[a215_0x51f8('0x8')]=computeLevel;const computeExperience=(_0x16e73e,_0x3f0cd5)=>{if(!_0x3f0cd5)_0x3f0cd5=DEFAUL_LEVELUP_MULTIPLIER;return Math[a215_0x51f8('0x3')](_0x16e73e/_0x3f0cd5*(_0x16e73e/_0x3f0cd5));};exports[a215_0x51f8('0x5')]=computeExperience;const MAX_EXPERIENCE=_0x9fe7c5=>{if(!_0x9fe7c5)_0x9fe7c5=DEFAUL_LEVELUP_MULTIPLIER;return computeExperience(MAX_LEVEL,_0x9fe7c5);};exports['MAX_EXPERIENCE']=MAX_EXPERIENCE;
const a178_0x3417=['Schema','__esModule','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Guild','mongoose','constructor','compile','model'];(function(_0x2fb300,_0x3417eb){const _0x1b9080=function(_0x3aa69d){while(--_0x3aa69d){_0x2fb300['push'](_0x2fb300['shift']());}};const _0x184c14=function(){const _0x6ef287={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4da018,_0x137981,_0x301721,_0x49bdd9){_0x49bdd9=_0x49bdd9||{};let _0x4e063c=_0x137981+'='+_0x301721;let _0x54c99c=0x0;for(let _0xe0a69b=0x0,_0x31519a=_0x4da018['length'];_0xe0a69b<_0x31519a;_0xe0a69b++){const _0x24ecd6=_0x4da018[_0xe0a69b];_0x4e063c+=';\x20'+_0x24ecd6;const _0x584a83=_0x4da018[_0x24ecd6];_0x4da018['push'](_0x584a83);_0x31519a=_0x4da018['length'];if(_0x584a83!==!![]){_0x4e063c+='='+_0x584a83;}}_0x49bdd9['cookie']=_0x4e063c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x599da2,_0x34d7a6){_0x599da2=_0x599da2||function(_0x5f01fe){return _0x5f01fe;};const _0x5076a1=_0x599da2(new RegExp('(?:^|;\x20)'+_0x34d7a6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x49c66e=function(_0x3f4b8e,_0x197a07){_0x3f4b8e(++_0x197a07);};_0x49c66e(_0x1b9080,_0x3417eb);return _0x5076a1?decodeURIComponent(_0x5076a1[0x1]):undefined;}};const _0x5c65b9=function(){const _0x168053=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x168053['test'](_0x6ef287['removeCookie']['toString']());};_0x6ef287['updateCookie']=_0x5c65b9;let _0xec498b='';const _0x1cbbf1=_0x6ef287['updateCookie']();if(!_0x1cbbf1){_0x6ef287['setCookie'](['*'],'counter',0x1);}else if(_0x1cbbf1){_0xec498b=_0x6ef287['getCookie'](null,'counter');}else{_0x6ef287['removeCookie']();}};_0x184c14();}(a178_0x3417,0x12c));const a178_0x1b90=function(_0x2fb300,_0x3417eb){_0x2fb300=_0x2fb300-0x0;let _0x1b9080=a178_0x3417[_0x2fb300];return _0x1b9080;};const a178_0x6ef287=function(){let _0x49c66e=!![];return function(_0x5f01fe,_0x3f4b8e){const _0x197a07=_0x49c66e?function(){if(_0x3f4b8e){const _0x168053=_0x3f4b8e[a178_0x1b90('0x8')](_0x5f01fe,arguments);_0x3f4b8e=null;return _0x168053;}}:function(){};_0x49c66e=![];return _0x197a07;};}();const a178_0x3aa69d=a178_0x6ef287(this,function(){const _0x298fff=function(){const _0xc7105c=_0x298fff[a178_0x1b90('0x3')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a178_0x1b90('0x4')](a178_0x1b90('0x0'));return!_0xc7105c['test'](a178_0x3aa69d);};return _0x298fff();});a178_0x3aa69d();'use strict';Object['defineProperty'](exports,a178_0x1b90('0x7'),{'value':!![]});const mongoose=require(a178_0x1b90('0x2'));const caseSchema=new mongoose[(a178_0x1b90('0x6'))]({'guild':{'type':String,'required':!![],'ref':a178_0x1b90('0x1')},'number':{'type':Number,'required':!![],'default':0x1},'messageId':{'type':String,'required':!![]}});caseSchema['index']({'guild':0x1,'number':0x1},{'unique':!![]});exports['default']=mongoose[a178_0x1b90('0x5')]('Case',caseSchema);
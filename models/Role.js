const a190_0x3b6a=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','__esModule','Schema','apply','Role','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','model'];(function(_0x1a12e6,_0x3b6a80){const _0x297fd6=function(_0x4cb0ce){while(--_0x4cb0ce){_0x1a12e6['push'](_0x1a12e6['shift']());}},_0x4c6241=function(){const _0x6bd87d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4e2aae,_0x3c6531,_0xcedcc3,_0x1eb9d9){_0x1eb9d9=_0x1eb9d9||{};let _0x2d4f49=_0x3c6531+'='+_0xcedcc3,_0x39169b=0x0;for(let _0x134797=0x0,_0x1673a4=_0x4e2aae['length'];_0x134797<_0x1673a4;_0x134797++){const _0x21d5d9=_0x4e2aae[_0x134797];_0x2d4f49+=';\x20'+_0x21d5d9;const _0x5ca5bc=_0x4e2aae[_0x21d5d9];_0x4e2aae['push'](_0x5ca5bc),_0x1673a4=_0x4e2aae['length'],_0x5ca5bc!==!![]&&(_0x2d4f49+='='+_0x5ca5bc);}_0x1eb9d9['cookie']=_0x2d4f49;},'removeCookie':function(){return'dev';},'getCookie':function(_0x590a05,_0x1abba2){_0x590a05=_0x590a05||function(_0x290d11){return _0x290d11;};const _0x48a7a8=_0x590a05(new RegExp('(?:^|;\x20)'+_0x1abba2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x507ced=function(_0x296533,_0x3cae83){_0x296533(++_0x3cae83);};return _0x507ced(_0x297fd6,_0x3b6a80),_0x48a7a8?decodeURIComponent(_0x48a7a8[0x1]):undefined;}},_0x3bf40e=function(){const _0x49094f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x49094f['test'](_0x6bd87d['removeCookie']['toString']());};_0x6bd87d['updateCookie']=_0x3bf40e;let _0x1fd8b2='';const _0x5be503=_0x6bd87d['updateCookie']();if(!_0x5be503)_0x6bd87d['setCookie'](['*'],'counter',0x1);else _0x5be503?_0x1fd8b2=_0x6bd87d['getCookie'](null,'counter'):_0x6bd87d['removeCookie']();};_0x4c6241();}(a190_0x3b6a,0xd1));const a190_0x297f=function(_0x1a12e6,_0x3b6a80){_0x1a12e6=_0x1a12e6-0x0;let _0x297fd6=a190_0x3b6a[_0x1a12e6];return _0x297fd6;};const a190_0xcedcc3=function(){let _0x3ff6cc=!![];return function(_0x4783ea,_0xdbde76){const _0x212253=_0x3ff6cc?function(){if(_0xdbde76){const _0x526657=_0xdbde76[a190_0x297f('0x2')](_0x4783ea,arguments);return _0xdbde76=null,_0x526657;}}:function(){};return _0x3ff6cc=![],_0x212253;};}(),a190_0x3c6531=a190_0xcedcc3(this,function(){const _0x495e82=function(){const _0x5f285b=_0x495e82[a190_0x297f('0x4')](a190_0x297f('0x7'))()[a190_0x297f('0x4')](a190_0x297f('0x5'));return!_0x5f285b['test'](a190_0x3c6531);};return _0x495e82();});a190_0x3c6531();'use strict';Object['defineProperty'](exports,a190_0x297f('0x0'),{'value':!![]});const mongoose=require('mongoose');exports['default']=mongoose[a190_0x297f('0x6')](a190_0x297f('0x3'),new mongoose[(a190_0x297f('0x1'))]({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':'Guild'},'emoji':{'type':String},'selfAssignable':{'type':Boolean},'autoAssignable':{'type':{'forBots':{'type':Boolean},'forUsers':{'type':Boolean}}},'level':{'type':Number},'price':{'type':Number},'blacklisted':{'type':Boolean},'disabledCommands':{'type':[String]}}));
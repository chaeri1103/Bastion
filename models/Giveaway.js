const a180_0x133e=['apply','compile','model','Giveaway','Guild','__esModule','defineProperty','return\x20/\x22\x20+\x20this\x20+\x20\x22/','mongoose','default','test','Schema'];(function(_0x38a649,_0x133e1a){const _0x3c614d=function(_0x545621){while(--_0x545621){_0x38a649['push'](_0x38a649['shift']());}};const _0x442baf=function(){const _0x57e7db={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19f262,_0x10148d,_0x4a5df8,_0x2697af){_0x2697af=_0x2697af||{};let _0x40f8fa=_0x10148d+'='+_0x4a5df8;let _0x131d9b=0x0;for(let _0x42e2de=0x0,_0x1ce772=_0x19f262['length'];_0x42e2de<_0x1ce772;_0x42e2de++){const _0x559e46=_0x19f262[_0x42e2de];_0x40f8fa+=';\x20'+_0x559e46;const _0x2a9581=_0x19f262[_0x559e46];_0x19f262['push'](_0x2a9581);_0x1ce772=_0x19f262['length'];if(_0x2a9581!==!![]){_0x40f8fa+='='+_0x2a9581;}}_0x2697af['cookie']=_0x40f8fa;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1132f0,_0x2fc969){_0x1132f0=_0x1132f0||function(_0x17deb6){return _0x17deb6;};const _0x2481ad=_0x1132f0(new RegExp('(?:^|;\x20)'+_0x2fc969['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xec0f20=function(_0x217306,_0x26639c){_0x217306(++_0x26639c);};_0xec0f20(_0x3c614d,_0x133e1a);return _0x2481ad?decodeURIComponent(_0x2481ad[0x1]):undefined;}};const _0x102224=function(){const _0x350844=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x350844['test'](_0x57e7db['removeCookie']['toString']());};_0x57e7db['updateCookie']=_0x102224;let _0x2d4177='';const _0x4f467a=_0x57e7db['updateCookie']();if(!_0x4f467a){_0x57e7db['setCookie'](['*'],'counter',0x1);}else if(_0x4f467a){_0x2d4177=_0x57e7db['getCookie'](null,'counter');}else{_0x57e7db['removeCookie']();}};_0x442baf();}(a180_0x133e,0x152));const a180_0x3c61=function(_0x38a649,_0x133e1a){_0x38a649=_0x38a649-0x0;let _0x3c614d=a180_0x133e[_0x38a649];return _0x3c614d;};const a180_0x57e7db=function(){let _0xec0f20=!![];return function(_0x17deb6,_0x217306){const _0x26639c=_0xec0f20?function(){if(_0x217306){const _0x350844=_0x217306[a180_0x3c61('0xa')](_0x17deb6,arguments);_0x217306=null;return _0x350844;}}:function(){};_0xec0f20=![];return _0x26639c;};}();const a180_0x545621=a180_0x57e7db(this,function(){const _0x552780=function(){const _0x5943c0=_0x552780['constructor'](a180_0x3c61('0x5'))()[a180_0x3c61('0xb')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5943c0[a180_0x3c61('0x8')](a180_0x545621);};return _0x552780();});a180_0x545621();'use strict';Object[a180_0x3c61('0x4')](exports,a180_0x3c61('0x3'),{'value':!![]});const mongoose=require(a180_0x3c61('0x6'));const giveawaySchema=new mongoose[(a180_0x3c61('0x9'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':'TextChannel'},'guild':{'type':String,'required':!![],'ref':a180_0x3c61('0x2')},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports[a180_0x3c61('0x7')]=mongoose[a180_0x3c61('0x0')](a180_0x3c61('0x1'),giveawaySchema);
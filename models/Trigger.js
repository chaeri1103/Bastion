const a189_0x3895=['Guild','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','apply','Schema','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','compile','mongoose','defineProperty','default','__esModule'];(function(_0x36e5c8,_0x389585){const _0x2ce60c=function(_0x212931){while(--_0x212931){_0x36e5c8['push'](_0x36e5c8['shift']());}};const _0x28e1b0=function(){const _0xaa2734={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1d08b7,_0x35d7a1,_0x195bd7,_0xe6f416){_0xe6f416=_0xe6f416||{};let _0x4356ea=_0x35d7a1+'='+_0x195bd7;let _0x2af354=0x0;for(let _0x359ceb=0x0,_0x3da5a6=_0x1d08b7['length'];_0x359ceb<_0x3da5a6;_0x359ceb++){const _0x4196f2=_0x1d08b7[_0x359ceb];_0x4356ea+=';\x20'+_0x4196f2;const _0x28f090=_0x1d08b7[_0x4196f2];_0x1d08b7['push'](_0x28f090);_0x3da5a6=_0x1d08b7['length'];if(_0x28f090!==!![]){_0x4356ea+='='+_0x28f090;}}_0xe6f416['cookie']=_0x4356ea;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e4c55,_0x4f6ca9){_0x5e4c55=_0x5e4c55||function(_0x4b9608){return _0x4b9608;};const _0x174d49=_0x5e4c55(new RegExp('(?:^|;\x20)'+_0x4f6ca9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4c676a=function(_0x554e73,_0x340288){_0x554e73(++_0x340288);};_0x4c676a(_0x2ce60c,_0x389585);return _0x174d49?decodeURIComponent(_0x174d49[0x1]):undefined;}};const _0x31a15f=function(){const _0x4fb121=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4fb121['test'](_0xaa2734['removeCookie']['toString']());};_0xaa2734['updateCookie']=_0x31a15f;let _0x1759ed='';const _0x18a037=_0xaa2734['updateCookie']();if(!_0x18a037){_0xaa2734['setCookie'](['*'],'counter',0x1);}else if(_0x18a037){_0x1759ed=_0xaa2734['getCookie'](null,'counter');}else{_0xaa2734['removeCookie']();}};_0x28e1b0();}(a189_0x3895,0x14a));const a189_0x2ce6=function(_0x36e5c8,_0x389585){_0x36e5c8=_0x36e5c8-0x0;let _0x2ce60c=a189_0x3895[_0x36e5c8];return _0x2ce60c;};const a189_0xaa2734=function(){let _0x174d49=!![];return function(_0x4c676a,_0x4b9608){const _0x554e73=_0x174d49?function(){if(_0x4b9608){const _0x340288=_0x4b9608[a189_0x2ce6('0x9')](_0x4c676a,arguments);_0x4b9608=null;return _0x340288;}}:function(){};_0x174d49=![];return _0x554e73;};}();const a189_0x212931=a189_0xaa2734(this,function(){const _0x4fb121=function(){const _0x1f6829=_0x4fb121[a189_0x2ce6('0x7')](a189_0x2ce6('0xb'))()[a189_0x2ce6('0x1')](a189_0x2ce6('0x8'));return!_0x1f6829[a189_0x2ce6('0x0')](a189_0x212931);};return _0x4fb121();});a189_0x212931();'use strict';Object[a189_0x2ce6('0x3')](exports,a189_0x2ce6('0x5'),{'value':!![]});const mongoose=require(a189_0x2ce6('0x2'));const triggerSchema=new mongoose[(a189_0x2ce6('0xa'))]({'guild':{'type':String,'required':!![],'ref':a189_0x2ce6('0x6')},'trigger':{'type':String,'required':!![]},'responseMessage':{'type':Object},'responseReaction':{'type':String}});exports[a189_0x2ce6('0x4')]=mongoose['model']('Trigger',triggerSchema);
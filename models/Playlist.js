const a183_0x20bf=['constructor','model','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Playlist','Guild','__esModule','mongoose','default','compile','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','defineProperty'];(function(_0x58195d,_0x20bf9c){const _0x28504b=function(_0x223b50){while(--_0x223b50){_0x58195d['push'](_0x58195d['shift']());}};const _0x565f2f=function(){const _0x336e04={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1d7726,_0x3ed853,_0x176527,_0x528ddc){_0x528ddc=_0x528ddc||{};let _0x37962d=_0x3ed853+'='+_0x176527;let _0x11cff9=0x0;for(let _0x4711d1=0x0,_0x566699=_0x1d7726['length'];_0x4711d1<_0x566699;_0x4711d1++){const _0x249d7b=_0x1d7726[_0x4711d1];_0x37962d+=';\x20'+_0x249d7b;const _0x4e59dd=_0x1d7726[_0x249d7b];_0x1d7726['push'](_0x4e59dd);_0x566699=_0x1d7726['length'];if(_0x4e59dd!==!![]){_0x37962d+='='+_0x4e59dd;}}_0x528ddc['cookie']=_0x37962d;},'removeCookie':function(){return'dev';},'getCookie':function(_0xfef044,_0x266af6){_0xfef044=_0xfef044||function(_0x4fa94e){return _0x4fa94e;};const _0x1dc8a5=_0xfef044(new RegExp('(?:^|;\x20)'+_0x266af6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x321cfa=function(_0x51e055,_0x80f89f){_0x51e055(++_0x80f89f);};_0x321cfa(_0x28504b,_0x20bf9c);return _0x1dc8a5?decodeURIComponent(_0x1dc8a5[0x1]):undefined;}};const _0x193809=function(){const _0x4b0595=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b0595['test'](_0x336e04['removeCookie']['toString']());};_0x336e04['updateCookie']=_0x193809;let _0x51e154='';const _0x45e961=_0x336e04['updateCookie']();if(!_0x45e961){_0x336e04['setCookie'](['*'],'counter',0x1);}else if(_0x45e961){_0x51e154=_0x336e04['getCookie'](null,'counter');}else{_0x336e04['removeCookie']();}};_0x565f2f();}(a183_0x20bf,0x1d6));const a183_0x2850=function(_0x58195d,_0x20bf9c){_0x58195d=_0x58195d-0x0;let _0x28504b=a183_0x20bf[_0x58195d];return _0x28504b;};const a183_0x336e04=function(){let _0x321cfa=!![];return function(_0x4fa94e,_0x51e055){const _0x80f89f=_0x321cfa?function(){if(_0x51e055){const _0x4b0595=_0x51e055['apply'](_0x4fa94e,arguments);_0x51e055=null;return _0x4b0595;}}:function(){};_0x321cfa=![];return _0x80f89f;};}();const a183_0x223b50=a183_0x336e04(this,function(){const _0x18f2ee=function(){const _0x5979f8=_0x18f2ee[a183_0x2850('0x3')](a183_0x2850('0x5'))()[a183_0x2850('0x0')](a183_0x2850('0x1'));return!_0x5979f8['test'](a183_0x223b50);};return _0x18f2ee();});a183_0x223b50();'use strict';Object[a183_0x2850('0x2')](exports,a183_0x2850('0x8'),{'value':!![]});const mongoose=require(a183_0x2850('0x9'));const playlistSchema=new mongoose['Schema']({'guild':{'type':String,'required':!![],'ref':a183_0x2850('0x7')},'creator':{'type':String,'required':!![],'ref':'User'},'songs':{'type':[String]}});exports[a183_0x2850('0xa')]=mongoose[a183_0x2850('0x4')](a183_0x2850('0x6'),playlistSchema);
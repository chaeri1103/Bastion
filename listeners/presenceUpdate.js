const a167_0x49e3=['cache','guild','roles','member','Constants','has','catch','../models/Guild','STREAMING','every','findById','some','Listener','activities','type','LISTENER_MODE','remove','constructor','compile','size','add','return\x20/\x22\x20+\x20this\x20+\x20\x22/','streamerRoleId','exports','apply'];(function(_0x1b163e,_0x49e34e){const _0xf4a700=function(_0x19ad9a){while(--_0x19ad9a){_0x1b163e['push'](_0x1b163e['shift']());}};const _0x48083=function(){const _0x48aa01={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x37ab4,_0x33feb6,_0x5441d8,_0x5508c9){_0x5508c9=_0x5508c9||{};let _0x4fd1f3=_0x33feb6+'='+_0x5441d8;let _0x33e784=0x0;for(let _0x1a4c22=0x0,_0x1dcd88=_0x37ab4['length'];_0x1a4c22<_0x1dcd88;_0x1a4c22++){const _0x5c3d7b=_0x37ab4[_0x1a4c22];_0x4fd1f3+=';\x20'+_0x5c3d7b;const _0x395045=_0x37ab4[_0x5c3d7b];_0x37ab4['push'](_0x395045);_0x1dcd88=_0x37ab4['length'];if(_0x395045!==!![]){_0x4fd1f3+='='+_0x395045;}}_0x5508c9['cookie']=_0x4fd1f3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x388ed9,_0x4a8ece){_0x388ed9=_0x388ed9||function(_0x4a067d){return _0x4a067d;};const _0x4086e5=_0x388ed9(new RegExp('(?:^|;\x20)'+_0x4a8ece['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3d6658=function(_0x3b3b2c,_0x5a83fd){_0x3b3b2c(++_0x5a83fd);};_0x3d6658(_0xf4a700,_0x49e34e);return _0x4086e5?decodeURIComponent(_0x4086e5[0x1]):undefined;}};const _0x45bbeb=function(){const _0x4ab70f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4ab70f['test'](_0x48aa01['removeCookie']['toString']());};_0x48aa01['updateCookie']=_0x45bbeb;let _0x3ccf4a='';const _0x24254c=_0x48aa01['updateCookie']();if(!_0x24254c){_0x48aa01['setCookie'](['*'],'counter',0x1);}else if(_0x24254c){_0x3ccf4a=_0x48aa01['getCookie'](null,'counter');}else{_0x48aa01['removeCookie']();}};_0x48083();}(a167_0x49e3,0xd5));const a167_0xf4a7=function(_0x1b163e,_0x49e34e){_0x1b163e=_0x1b163e-0x0;let _0xf4a700=a167_0x49e3[_0x1b163e];return _0xf4a700;};const a167_0x48aa01=function(){let _0x567c3e=!![];return function(_0x49c476,_0x39a653){const _0x1a230e=_0x567c3e?function(){if(_0x39a653){const _0x3cac88=_0x39a653[a167_0xf4a7('0xb')](_0x49c476,arguments);_0x39a653=null;return _0x3cac88;}}:function(){};_0x567c3e=![];return _0x1a230e;};}();const a167_0x19ad9a=a167_0x48aa01(this,function(){const _0x5895dd=function(){const _0xeaea4e=_0x5895dd[a167_0xf4a7('0x4')](a167_0xf4a7('0x8'))()[a167_0xf4a7('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xeaea4e['test'](a167_0x19ad9a);};return _0x5895dd();});a167_0x19ad9a();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require(a167_0xf4a7('0x13'));module[a167_0xf4a7('0xa')]=class PresenceListener extends tesseract_1[a167_0xf4a7('0x18')]{constructor(){super('presenceUpdate',{'mode':tesseract_1[a167_0xf4a7('0x10')][a167_0xf4a7('0x2')]['ON']});this['exec']=async(_0x266294,_0x49bd7c)=>{if(!_0x49bd7c)return;if(!_0x49bd7c[a167_0xf4a7('0xd')])return;let _0x11d7a4;if((!_0x266294||_0x266294[a167_0xf4a7('0x0')]['every'](_0x1ec48a=>_0x1ec48a[a167_0xf4a7('0x1')]!=='STREAMING'))&&_0x49bd7c['activities'][a167_0xf4a7('0x17')](_0x22029d=>_0x22029d[a167_0xf4a7('0x1')]===a167_0xf4a7('0x14'))){_0x11d7a4=!![];}else if(_0x266294&&_0x266294[a167_0xf4a7('0x0')]['some'](_0x2099f4=>_0x2099f4[a167_0xf4a7('0x1')]==='STREAMING')&&_0x49bd7c[a167_0xf4a7('0x0')][a167_0xf4a7('0x15')](_0x4c2be5=>_0x4c2be5['type']!==a167_0xf4a7('0x14'))){_0x11d7a4=![];}else return;if(_0x49bd7c['member']['partial']){await _0x49bd7c[a167_0xf4a7('0xf')]['fetch']();}if(_0x49bd7c[a167_0xf4a7('0xf')]['roles'][a167_0xf4a7('0xc')][a167_0xf4a7('0x6')]<=0x2)return;const _0x5d2575=await Guild_1['default'][a167_0xf4a7('0x16')](_0x49bd7c[a167_0xf4a7('0xd')]['id']);if(!_0x5d2575['streamerRoleId'])return;if(!_0x49bd7c[a167_0xf4a7('0xd')][a167_0xf4a7('0xe')][a167_0xf4a7('0xc')][a167_0xf4a7('0x11')](_0x5d2575[a167_0xf4a7('0x9')]))return;if(_0x11d7a4){_0x49bd7c['member'][a167_0xf4a7('0xe')][a167_0xf4a7('0x7')](_0x5d2575[a167_0xf4a7('0x9')])[a167_0xf4a7('0x12')](()=>{});}else{_0x49bd7c[a167_0xf4a7('0xf')][a167_0xf4a7('0xe')][a167_0xf4a7('0x3')](_0x5d2575[a167_0xf4a7('0x9')])[a167_0xf4a7('0x12')](()=>{});}};}};
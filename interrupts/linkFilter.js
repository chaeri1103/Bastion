const a144_0x229d=['has','MANAGE_MESSAGES','some','length','safelist','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20/\x20','guild','Interrupt','enabled','exports','roles','../utils/regex','channel','exec','Unauthorized\x20to\x20send\x20links.','URI','deleteLink','tag','MANAGE_CHANNELS','linkFilter','permissionsFor','constructor','createModerationLog','filters','discord.js','toLowerCase','test','catch','author','content','member','whitelist','User','document','cache','deletable','return\x20/\x22\x20+\x20this\x20+\x20\x22/','name'];(function(_0x4971d1,_0x229dad){const _0x1cd268=function(_0x59becd){while(--_0x59becd){_0x4971d1['push'](_0x4971d1['shift']());}},_0x19c2a0=function(){const _0x2d2c13={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x43f610,_0x4a348b,_0x355f2c,_0x2a9f87){_0x2a9f87=_0x2a9f87||{};let _0x15e2be=_0x4a348b+'='+_0x355f2c,_0x295699=0x0;for(let _0xafafb4=0x0,_0x28c29f=_0x43f610['length'];_0xafafb4<_0x28c29f;_0xafafb4++){const _0x294b5d=_0x43f610[_0xafafb4];_0x15e2be+=';\x20'+_0x294b5d;const _0x20dca8=_0x43f610[_0x294b5d];_0x43f610['push'](_0x20dca8),_0x28c29f=_0x43f610['length'],_0x20dca8!==!![]&&(_0x15e2be+='='+_0x20dca8);}_0x2a9f87['cookie']=_0x15e2be;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4ffb0b,_0x898b34){_0x4ffb0b=_0x4ffb0b||function(_0x13a5ca){return _0x13a5ca;};const _0x2f1aee=_0x4ffb0b(new RegExp('(?:^|;\x20)'+_0x898b34['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5da98d=function(_0x539d05,_0x34001e){_0x539d05(++_0x34001e);};return _0x5da98d(_0x1cd268,_0x229dad),_0x2f1aee?decodeURIComponent(_0x2f1aee[0x1]):undefined;}},_0x1ea861=function(){const _0x362cb7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x362cb7['test'](_0x2d2c13['removeCookie']['toString']());};_0x2d2c13['updateCookie']=_0x1ea861;let _0x26ed74='';const _0x5313ae=_0x2d2c13['updateCookie']();if(!_0x5313ae)_0x2d2c13['setCookie'](['*'],'counter',0x1);else _0x5313ae?_0x26ed74=_0x2d2c13['getCookie'](null,'counter'):_0x2d2c13['removeCookie']();};_0x19c2a0();}(a144_0x229d,0x198));const a144_0x1cd2=function(_0x4971d1,_0x229dad){_0x4971d1=_0x4971d1-0x0;let _0x1cd268=a144_0x229d[_0x4971d1];return _0x1cd268;};const a144_0x355f2c=function(){let _0xe10a7c=!![];return function(_0x4c7f14,_0x32e766){const _0x14cbf5=_0xe10a7c?function(){if(_0x32e766){const _0x3d6877=_0x32e766[a144_0x1cd2('0x25')](_0x4c7f14,arguments);return _0x32e766=null,_0x3d6877;}}:function(){};return _0xe10a7c=![],_0x14cbf5;};}(),a144_0x4a348b=a144_0x355f2c(this,function(){const _0x49cfaa=function(){const _0x2d0845=_0x49cfaa[a144_0x1cd2('0xf')](a144_0x1cd2('0x1e'))()[a144_0x1cd2('0xf')](a144_0x1cd2('0x26'));return!_0x2d0845[a144_0x1cd2('0x14')](a144_0x4a348b);};return _0x49cfaa();});a144_0x4a348b();'use strict';const tesseract_1=require('@bastion/tesseract'),discord_js_1=require(a144_0x1cd2('0x12')),regex=require(a144_0x1cd2('0x5'));module[a144_0x1cd2('0x3')]=class LinkFilter extends tesseract_1[a144_0x1cd2('0x1')]{constructor(){super('linkFilter',{'type':0x0}),this[a144_0x1cd2('0xa')]=_0x59acf7=>{if(_0x59acf7[a144_0x1cd2('0x1d')])_0x59acf7['delete']()[a144_0x1cd2('0x15')](()=>{});},this[a144_0x1cd2('0x7')]=async _0x2ac8fb=>{if(!_0x2ac8fb[a144_0x1cd2('0x0')])return;if(!(_0x2ac8fb['channel']instanceof discord_js_1['TextChannel']))return;if(!_0x2ac8fb['content']||!_0x2ac8fb[a144_0x1cd2('0x17')][a144_0x1cd2('0x23')])return![];const _0x53486d=_0x2ac8fb[a144_0x1cd2('0x0')];if(_0x2ac8fb[a144_0x1cd2('0x18')]&&_0x2ac8fb['member'][a144_0x1cd2('0x4')][a144_0x1cd2('0x1c')][a144_0x1cd2('0x22')](_0x1ca49b=>_0x1ca49b[a144_0x1cd2('0x1f')][a144_0x1cd2('0x13')]()===a144_0x1cd2('0x24')))return![];if(_0x2ac8fb[a144_0x1cd2('0x6')]['permissionsFor'](_0x2ac8fb[a144_0x1cd2('0x18')])&&_0x2ac8fb[a144_0x1cd2('0x6')][a144_0x1cd2('0xe')](_0x2ac8fb[a144_0x1cd2('0x18')])['has']([a144_0x1cd2('0xc'),a144_0x1cd2('0x21')]))return![];if(!_0x53486d[a144_0x1cd2('0x1b')]||!_0x53486d[a144_0x1cd2('0x1b')][a144_0x1cd2('0x11')]||!_0x53486d[a144_0x1cd2('0x1b')][a144_0x1cd2('0x11')]['linkFilter']||!_0x53486d[a144_0x1cd2('0x1b')][a144_0x1cd2('0x11')][a144_0x1cd2('0xd')][a144_0x1cd2('0x2')])return![];if(_0x53486d[a144_0x1cd2('0x1b')]['filters'][a144_0x1cd2('0xd')]['whitelist']){if(_0x53486d[a144_0x1cd2('0x1b')]['filters'][a144_0x1cd2('0xd')]['whitelist']['includes'](_0x2ac8fb[a144_0x1cd2('0x6')]['id']))return![];if(_0x53486d['document'][a144_0x1cd2('0x11')]['linkFilter'][a144_0x1cd2('0x19')][a144_0x1cd2('0x22')](_0x18a071=>_0x2ac8fb[a144_0x1cd2('0x18')][a144_0x1cd2('0x4')][a144_0x1cd2('0x1c')][a144_0x1cd2('0x20')](_0x18a071)))return![];}if(regex[a144_0x1cd2('0x9')]['test'](_0x2ac8fb['content']))return _0x2ac8fb[a144_0x1cd2('0x18')]['addInfraction'](a144_0x1cd2('0x8')),this[a144_0x1cd2('0xa')](_0x2ac8fb),_0x53486d[a144_0x1cd2('0x10')]({'event':a144_0x1cd2('0xd'),'fields':[{'name':a144_0x1cd2('0x1a'),'value':_0x2ac8fb[a144_0x1cd2('0x16')][a144_0x1cd2('0xb')]+a144_0x1cd2('0x27')+_0x2ac8fb[a144_0x1cd2('0x16')]['id']},{'name':'Channel','value':_0x2ac8fb[a144_0x1cd2('0x6')][a144_0x1cd2('0x1f')]+'\x20/\x20'+_0x2ac8fb['channel']['id']}]})[a144_0x1cd2('0x15')](()=>{}),!![];return![];};}};
const a79_0x59d8=['BASTION_ERROR_TYPE','locale','guild','rolePosition','tag','user','getString','../../utils/errors','apply','client','unauthorized','join','document','It\x20allows\x20you\x20to\x20kick\x20users\x20from\x20the\x20server.','Constants','return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','KICK_MEMBERS','channel','exec','errors','resolver','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','RED','author','kick','Command','COLORS','ownerID','memberKick','catch','test','send'];(function(_0x1e9d3f,_0x59d869){const _0x59172b=function(_0x592f74){while(--_0x592f74){_0x1e9d3f['push'](_0x1e9d3f['shift']());}},_0x20d052=function(){const _0x45b7b7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x69aa4a,_0x16ebaa,_0x56fb2a,_0x312b8a){_0x312b8a=_0x312b8a||{};let _0x3444b8=_0x16ebaa+'='+_0x56fb2a,_0x4948be=0x0;for(let _0x315742=0x0,_0x4aca7c=_0x69aa4a['length'];_0x315742<_0x4aca7c;_0x315742++){const _0x38bc35=_0x69aa4a[_0x315742];_0x3444b8+=';\x20'+_0x38bc35;const _0x32d0ae=_0x69aa4a[_0x38bc35];_0x69aa4a['push'](_0x32d0ae),_0x4aca7c=_0x69aa4a['length'],_0x32d0ae!==!![]&&(_0x3444b8+='='+_0x32d0ae);}_0x312b8a['cookie']=_0x3444b8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5329ba,_0x1ecf83){_0x5329ba=_0x5329ba||function(_0x514be8){return _0x514be8;};const _0x5ddac0=_0x5329ba(new RegExp('(?:^|;\x20)'+_0x1ecf83['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x26dd54=function(_0x465416,_0x201013){_0x465416(++_0x201013);};return _0x26dd54(_0x59172b,_0x59d869),_0x5ddac0?decodeURIComponent(_0x5ddac0[0x1]):undefined;}},_0x73d5d1=function(){const _0xe09f1e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe09f1e['test'](_0x45b7b7['removeCookie']['toString']());};_0x45b7b7['updateCookie']=_0x73d5d1;let _0x4050d9='';const _0x3b2612=_0x45b7b7['updateCookie']();if(!_0x3b2612)_0x45b7b7['setCookie'](['*'],'counter',0x1);else _0x3b2612?_0x4050d9=_0x45b7b7['getCookie'](null,'counter'):_0x45b7b7['removeCookie']();};_0x20d052();}(a79_0x59d8,0xe4));const a79_0x5917=function(_0x1e9d3f,_0x59d869){_0x1e9d3f=_0x1e9d3f-0x0;let _0x59172b=a79_0x59d8[_0x1e9d3f];return _0x59172b;};const a79_0x56fb2a=function(){let _0x1742c3=!![];return function(_0x318701,_0x215b7f){const _0x8ef4fb=_0x1742c3?function(){if(_0x215b7f){const _0x38295d=_0x215b7f[a79_0x5917('0xb')](_0x318701,arguments);return _0x215b7f=null,_0x38295d;}}:function(){};return _0x1742c3=![],_0x8ef4fb;};}(),a79_0x16ebaa=a79_0x56fb2a(this,function(){const _0x4e6ffe=function(){const _0x5e7858=_0x4e6ffe['constructor'](a79_0x5917('0x12'))()['constructor'](a79_0x5917('0x19'));return!_0x5e7858[a79_0x5917('0x1')](a79_0x16ebaa);};return _0x4e6ffe();});a79_0x16ebaa();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a79_0x5917('0xa'));module['exports']=class Kick extends tesseract_1[a79_0x5917('0x1d')]{constructor(){super('kick',{'description':a79_0x5917('0x10'),'triggers':[],'arguments':{'alias':{'user':'u'},'string':[a79_0x5917('0x8')]},'scope':a79_0x5917('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a79_0x5917('0x14')],'userPermissions':[a79_0x5917('0x14')],'syntax':['kick\x20--user\x20USER_ID\x20--\x20REASON']}),this[a79_0x5917('0x16')]=async(_0x57a697,_0x5c0ce1)=>{const _0x5b32b5=this['client'][a79_0x5917('0x18')]['resolveGuildMember'](_0x57a697[a79_0x5917('0x5')],_0x5c0ce1[a79_0x5917('0x8')]);if(!_0x5b32b5)throw new errors['DiscordError'](errors[a79_0x5917('0x3')]['INVALID_COMMAND_SYNTAX'],this['name']);if(_0x57a697[a79_0x5917('0x1b')]['id']!==_0x57a697[a79_0x5917('0x5')][a79_0x5917('0x1f')]&&!_0x57a697['member']['canManage'](_0x5b32b5))return await _0x57a697[a79_0x5917('0x15')][a79_0x5917('0x2')]({'embed':{'color':tesseract_1[a79_0x5917('0x11')][a79_0x5917('0x1e')][a79_0x5917('0x1a')],'title':this[a79_0x5917('0xc')][a79_0x5917('0x4')][a79_0x5917('0x9')](_0x57a697[a79_0x5917('0x5')][a79_0x5917('0xf')][a79_0x5917('0x13')],a79_0x5917('0x17'),a79_0x5917('0xd')),'description':this[a79_0x5917('0xc')][a79_0x5917('0x4')][a79_0x5917('0x9')](_0x57a697[a79_0x5917('0x5')][a79_0x5917('0xf')][a79_0x5917('0x13')],a79_0x5917('0x17'),a79_0x5917('0x6'),_0x57a697[a79_0x5917('0x1b')][a79_0x5917('0x7')],_0x5b32b5[a79_0x5917('0x8')][a79_0x5917('0x7')])}})['catch'](()=>{});const _0x53a1aa=_0x5c0ce1['_'][a79_0x5917('0xe')]('\x20')||'-';await _0x5b32b5[a79_0x5917('0x1c')](_0x53a1aa),await _0x57a697[a79_0x5917('0x15')][a79_0x5917('0x2')]({'embed':{'color':tesseract_1['Constants'][a79_0x5917('0x1e')]['ORANGE'],'description':this['client'][a79_0x5917('0x4')]['getString'](_0x57a697[a79_0x5917('0x5')]['document'][a79_0x5917('0x13')],'info',a79_0x5917('0x20'),_0x57a697[a79_0x5917('0x1b')][a79_0x5917('0x7')],_0x5b32b5[a79_0x5917('0x8')]['tag']),'fields':[{'name':'Reason','value':_0x53a1aa}],'footer':{'text':_0x5b32b5['id']}}})[a79_0x5917('0x0')](()=>{});};}};
const a78_0x31f0=['has','author','fields','MANAGE_GUILD','fetch','permissions','length','document','moderationLogChannelId','NewsChannel','reason\x20--case\x20NUMBER\x20--\x20REASON','size','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','language','member','It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','findOne','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../models/Case','roles','ownerID','value','get','BASTION_ERROR_TYPE','name','reason','caseNotFound','locale','client','INVALID_COMMAND_SYNTAX','find','join','exports','errors','embeds','messages','discord.js','text','Reason','../../utils/errors','type','apply','cache','@bastion/tesseract','getString','filter','Moderator\x20ID','guild','case','floor'];(function(_0x3f232e,_0x31f07e){const _0x4569c3=function(_0x43d1e4){while(--_0x43d1e4){_0x3f232e['push'](_0x3f232e['shift']());}};const _0x1c7f5e=function(){const _0x8b36a0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1a767e,_0x4acac1,_0x3ae30c,_0x4ffc30){_0x4ffc30=_0x4ffc30||{};let _0x3e175d=_0x4acac1+'='+_0x3ae30c;let _0x147729=0x0;for(let _0x2e73a1=0x0,_0x5a08a8=_0x1a767e['length'];_0x2e73a1<_0x5a08a8;_0x2e73a1++){const _0x391098=_0x1a767e[_0x2e73a1];_0x3e175d+=';\x20'+_0x391098;const _0x44b325=_0x1a767e[_0x391098];_0x1a767e['push'](_0x44b325);_0x5a08a8=_0x1a767e['length'];if(_0x44b325!==!![]){_0x3e175d+='='+_0x44b325;}}_0x4ffc30['cookie']=_0x3e175d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x482479,_0x458543){_0x482479=_0x482479||function(_0x11b75f){return _0x11b75f;};const _0x753dce=_0x482479(new RegExp('(?:^|;\x20)'+_0x458543['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x37ad9c=function(_0x5078b7,_0x52b2e9){_0x5078b7(++_0x52b2e9);};_0x37ad9c(_0x4569c3,_0x31f07e);return _0x753dce?decodeURIComponent(_0x753dce[0x1]):undefined;}};const _0x3df3be=function(){const _0x8db7a1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x8db7a1['test'](_0x8b36a0['removeCookie']['toString']());};_0x8b36a0['updateCookie']=_0x3df3be;let _0x10bd76='';const _0x55adb7=_0x8b36a0['updateCookie']();if(!_0x55adb7){_0x8b36a0['setCookie'](['*'],'counter',0x1);}else if(_0x55adb7){_0x10bd76=_0x8b36a0['getCookie'](null,'counter');}else{_0x8b36a0['removeCookie']();}};_0x1c7f5e();}(a78_0x31f0,0x16d));const a78_0x4569=function(_0x3f232e,_0x31f07e){_0x3f232e=_0x3f232e-0x0;let _0x4569c3=a78_0x31f0[_0x3f232e];return _0x4569c3;};const a78_0x8b36a0=function(){let _0x3d3161=!![];return function(_0x47666e,_0x38eb68){const _0x4aa9a9=_0x3d3161?function(){if(_0x38eb68){const _0x34d6a1=_0x38eb68[a78_0x4569('0x22')](_0x47666e,arguments);_0x38eb68=null;return _0x34d6a1;}}:function(){};_0x3d3161=![];return _0x4aa9a9;};}();const a78_0x43d1e4=a78_0x8b36a0(this,function(){const _0x3bdad8=function(){const _0x5be5a2=_0x3bdad8['constructor'](a78_0x4569('0x4'))()['compile'](a78_0x4569('0xa'));return!_0x5be5a2['test'](a78_0x43d1e4);};return _0x3bdad8();});a78_0x43d1e4();'use strict';const tesseract_1=require(a78_0x4569('0x24'));const discord_js_1=require(a78_0x4569('0x1d'));const Case_1=require(a78_0x4569('0xb'));const numbers=require('../../utils/numbers');const errors=require(a78_0x4569('0x20'));module[a78_0x4569('0x19')]=class ReasonCommand extends tesseract_1['Command']{constructor(){super(a78_0x4569('0x12'),{'description':a78_0x4569('0x8'),'triggers':[],'arguments':{'alias':{'case':'n'},'number':[a78_0x4569('0x29')],'coerce':{'case':_0x107433=>Math[a78_0x4569('0x2a')](numbers['clamp'](_0x107433,0x1,Number['MAX_SAFE_INTEGER']))}},'scope':a78_0x4569('0x28'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a78_0x4569('0x2')]});this[a78_0x4569('0x5')]=async(_0xf7bbae,_0x5643f7)=>{if(_0xf7bbae[a78_0x4569('0x2c')]['id']!==_0xf7bbae['guild'][a78_0x4569('0xd')]||_0xf7bbae[a78_0x4569('0x7')][a78_0x4569('0xc')][a78_0x4569('0x23')][a78_0x4569('0x3')]<0x2)return;if(!_0x5643f7['number']||!_0x5643f7['_'][a78_0x4569('0x31')])throw new errors['DiscordError'](errors[a78_0x4569('0x10')][a78_0x4569('0x16')],this[a78_0x4569('0x11')]);const _0x1720dc=await Case_1['default'][a78_0x4569('0x9')]({'guild':_0xf7bbae[a78_0x4569('0x28')]['id'],'number':_0x5643f7['number']});if(!_0x1720dc)throw new Error(this[a78_0x4569('0x15')][a78_0x4569('0x14')][a78_0x4569('0x25')](_0xf7bbae['guild']['document'][a78_0x4569('0x6')],a78_0x4569('0x1a'),a78_0x4569('0x13')));const _0x265bdf=_0xf7bbae[a78_0x4569('0x28')]['channels'][a78_0x4569('0x23')][a78_0x4569('0x26')](_0x2c61eb=>_0x2c61eb[a78_0x4569('0x21')]===a78_0x4569('0x1e')||_0x2c61eb[a78_0x4569('0x21')]==='news');if(_0xf7bbae[a78_0x4569('0x28')][a78_0x4569('0x32')]['moderationLogChannelId']&&_0x265bdf[a78_0x4569('0x2b')](_0xf7bbae[a78_0x4569('0x28')]['document'][a78_0x4569('0x0')])){const _0x429646=_0x265bdf[a78_0x4569('0xf')](_0xf7bbae['guild'][a78_0x4569('0x32')]['moderationLogChannelId']);if(_0x429646 instanceof discord_js_1[a78_0x4569('0x1')]||_0x429646 instanceof discord_js_1['TextChannel']){const _0x17ff67=await _0x429646[a78_0x4569('0x1c')][a78_0x4569('0x2f')](_0x1720dc['messageId']);const _0x3acab8=_0x17ff67[a78_0x4569('0x1b')][0x0];if(!_0xf7bbae[a78_0x4569('0x7')][a78_0x4569('0x30')][a78_0x4569('0x2b')](a78_0x4569('0x2e'))||_0x3acab8[a78_0x4569('0x2d')][a78_0x4569('0x17')](_0x44ae72=>_0x44ae72[a78_0x4569('0x11')]===a78_0x4569('0x27'))[a78_0x4569('0xe')]!==_0xf7bbae[a78_0x4569('0x2c')]['id'])return;_0x3acab8[a78_0x4569('0x2d')]['find'](_0x37349e=>_0x37349e['name']===a78_0x4569('0x1f'))['value']=_0x5643f7['_'][a78_0x4569('0x18')]('\x20');await _0x17ff67['edit']({'embed':_0x3acab8});}}};}};
const a18_0x3123=['toString','BASTION_ERROR_TYPE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','GREEN','gamblingEnable','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','apply','premiumGamblingMultiplier','info','channel','multiplier','gambling','exec','catch','getString','gambling\x20--multiplier\x201..13','user','DiscordError','MANAGE_GUILD','fetchPremiumTier','COLORS','client','save','../../utils/errors','tag','enabled','errors','PREMIUM_MEMBERSHIP_REQUIRED','document','../../utils/omnic','@bastion/tesseract','compile','guild','Constants','send','gamblingDisable','constructor','locale','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','Command','language','../../utils/constants','Gambling\x20Reward\x20Multiplier'];(function(_0x3fcf8c,_0x312309){const _0x187f57=function(_0x4ca1a8){while(--_0x4ca1a8){_0x3fcf8c['push'](_0x3fcf8c['shift']());}};const _0xa1e7df=function(){const _0x190d5d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2caad6,_0x1f4ec3,_0x241511,_0x556887){_0x556887=_0x556887||{};let _0x39e014=_0x1f4ec3+'='+_0x241511;let _0x2c838=0x0;for(let _0x388e2b=0x0,_0xd5da1e=_0x2caad6['length'];_0x388e2b<_0xd5da1e;_0x388e2b++){const _0x177611=_0x2caad6[_0x388e2b];_0x39e014+=';\x20'+_0x177611;const _0x4fce1e=_0x2caad6[_0x177611];_0x2caad6['push'](_0x4fce1e);_0xd5da1e=_0x2caad6['length'];if(_0x4fce1e!==!![]){_0x39e014+='='+_0x4fce1e;}}_0x556887['cookie']=_0x39e014;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8c3134,_0x2f1e81){_0x8c3134=_0x8c3134||function(_0xd237b9){return _0xd237b9;};const _0x19d4ca=_0x8c3134(new RegExp('(?:^|;\x20)'+_0x2f1e81['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1467f6=function(_0x28937f,_0x360e59){_0x28937f(++_0x360e59);};_0x1467f6(_0x187f57,_0x312309);return _0x19d4ca?decodeURIComponent(_0x19d4ca[0x1]):undefined;}};const _0x1e7d4e=function(){const _0x1cc079=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1cc079['test'](_0x190d5d['removeCookie']['toString']());};_0x190d5d['updateCookie']=_0x1e7d4e;let _0x213e69='';const _0x382bb6=_0x190d5d['updateCookie']();if(!_0x382bb6){_0x190d5d['setCookie'](['*'],'counter',0x1);}else if(_0x382bb6){_0x213e69=_0x190d5d['getCookie'](null,'counter');}else{_0x190d5d['removeCookie']();}};_0xa1e7df();}(a18_0x3123,0x170));const a18_0x187f=function(_0x3fcf8c,_0x312309){_0x3fcf8c=_0x3fcf8c-0x0;let _0x187f57=a18_0x3123[_0x3fcf8c];return _0x187f57;};const a18_0x190d5d=function(){let _0xe86a5f=!![];return function(_0x152288,_0x50694c){const _0x23488f=_0xe86a5f?function(){if(_0x50694c){const _0x30123a=_0x50694c[a18_0x187f('0x22')](_0x152288,arguments);_0x50694c=null;return _0x30123a;}}:function(){};_0xe86a5f=![];return _0x23488f;};}();const a18_0x4ca1a8=a18_0x190d5d(this,function(){const _0x45dfa6=function(){const _0x2adbe3=_0x45dfa6[a18_0x187f('0x14')](a18_0x187f('0x1e'))()[a18_0x187f('0xf')](a18_0x187f('0x16'));return!_0x2adbe3['test'](a18_0x4ca1a8);};return _0x45dfa6();});a18_0x4ca1a8();'use strict';const tesseract_1=require(a18_0x187f('0xe'));const constants=require(a18_0x187f('0x1a'));const errors=require(a18_0x187f('0x7'));const omnic=require(a18_0x187f('0xd'));module[a18_0x187f('0x17')]=class GamblingCommand extends tesseract_1[a18_0x187f('0x18')]{constructor(){super(a18_0x187f('0x27'),{'description':a18_0x187f('0x21'),'triggers':[],'arguments':{'number':[a18_0x187f('0x26')]},'scope':a18_0x187f('0x10'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a18_0x187f('0x2')],'syntax':[a18_0x187f('0x27'),a18_0x187f('0x2b')]});this[a18_0x187f('0x28')]=async(_0x4bb43f,_0x477ec7)=>{if(_0x477ec7[a18_0x187f('0x26')]&&constants['isPublicBastion'](this[a18_0x187f('0x5')][a18_0x187f('0x0')])){const _0x18983b=await omnic[a18_0x187f('0x3')](_0x4bb43f['guild'])[a18_0x187f('0x29')](()=>{});if(!_0x18983b)throw new errors[(a18_0x187f('0x1'))](errors[a18_0x187f('0x1d')][a18_0x187f('0xb')],this[a18_0x187f('0x5')]['locale'][a18_0x187f('0x2a')](_0x4bb43f[a18_0x187f('0x10')][a18_0x187f('0xc')][a18_0x187f('0x19')],a18_0x187f('0xa'),a18_0x187f('0x23')));}const _0x58d5b1=_0x4bb43f[a18_0x187f('0x10')];const _0xbb693a=_0x477ec7[a18_0x187f('0x26')]?!![]:!(_0x58d5b1[a18_0x187f('0xc')][a18_0x187f('0x27')]&&_0x58d5b1[a18_0x187f('0xc')][a18_0x187f('0x27')]['enabled']);_0x58d5b1[a18_0x187f('0xc')]['gambling']={'enabled':_0xbb693a,'multiplier':typeof _0x477ec7[a18_0x187f('0x26')]==='number'?_0x477ec7['multiplier']:_0xbb693a?_0x58d5b1['document'][a18_0x187f('0x27')]&&_0x58d5b1[a18_0x187f('0xc')][a18_0x187f('0x27')]['multiplier']:undefined};await _0x58d5b1[a18_0x187f('0xc')][a18_0x187f('0x6')]();await _0x4bb43f[a18_0x187f('0x25')][a18_0x187f('0x12')]({'embed':{'color':_0x58d5b1[a18_0x187f('0xc')]['gambling'][a18_0x187f('0x9')]?tesseract_1[a18_0x187f('0x11')][a18_0x187f('0x4')][a18_0x187f('0x1f')]:tesseract_1['Constants'][a18_0x187f('0x4')]['RED'],'description':this['client'][a18_0x187f('0x15')]['getString'](_0x4bb43f['guild'][a18_0x187f('0xc')][a18_0x187f('0x19')],a18_0x187f('0x24'),_0x58d5b1[a18_0x187f('0xc')]['gambling'][a18_0x187f('0x9')]?a18_0x187f('0x20'):a18_0x187f('0x13'),_0x4bb43f['author'][a18_0x187f('0x8')]),'fields':_0x58d5b1[a18_0x187f('0xc')]['gambling'][a18_0x187f('0x9')]?[{'name':a18_0x187f('0x1b'),'value':_0x58d5b1[a18_0x187f('0xc')][a18_0x187f('0x27')][a18_0x187f('0x26')]?_0x58d5b1[a18_0x187f('0xc')]['gambling']['multiplier'][a18_0x187f('0x1c')]():0x1[a18_0x187f('0x1c')](),'inline':!![]}]:[]}})[a18_0x187f('0x29')](()=>{});};}};
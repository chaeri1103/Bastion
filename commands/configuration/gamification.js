const a19_0x31d7=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gamification\x20in\x20the\x20server.\x20When\x20enabled,\x20users\x20gain\x20experience\x20and\x20level\x20up\x20in\x20the\x20server\x20by\x20participating\x20in\x20the\x20server,\x20competing\x20against\x20each\x20other\x20to\x20climb\x20the\x20leaderboard.\x20It\x20also\x20allows\x20you\x20to\x20toggle\x20level\x20up\x20messages\x20and\x20set\x20the\x20level\x20up\x20multiplier.','../../utils/constants','guild','send','fetchPremiumTier','boolean','errors','gamification\x20--multiplier\x20NUMBER','test','multiplier','enabled','Level-Up\x20Multiplier','@bastion/tesseract','language','messages','Disabled','apply','Level-Up\x20Messages','document','info','locale','GREEN','Constants','tag','client','toString','../../utils/errors','catch','author','DEFAUL_LEVELUP_MULTIPLIER','number','Command','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','PREMIUM_MEMBERSHIP_REQUIRED','COLORS','premiumGamificationMultiplier','RED','channel','gamification\x20--messages','gamification','gamificationEnable','DiscordError'];(function(_0x3198b5,_0x31d7e0){const _0x285dd9=function(_0x5c1753){while(--_0x5c1753){_0x3198b5['push'](_0x3198b5['shift']());}},_0x2bf6a5=function(){const _0x12bcfa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x539180,_0x3f2a5c,_0xe814ef,_0x1f6b2f){_0x1f6b2f=_0x1f6b2f||{};let _0x3373d7=_0x3f2a5c+'='+_0xe814ef,_0x445c54=0x0;for(let _0x62183f=0x0,_0x4f7229=_0x539180['length'];_0x62183f<_0x4f7229;_0x62183f++){const _0x3c4840=_0x539180[_0x62183f];_0x3373d7+=';\x20'+_0x3c4840;const _0x100917=_0x539180[_0x3c4840];_0x539180['push'](_0x100917),_0x4f7229=_0x539180['length'],_0x100917!==!![]&&(_0x3373d7+='='+_0x100917);}_0x1f6b2f['cookie']=_0x3373d7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3584de,_0x371f58){_0x3584de=_0x3584de||function(_0x58b6af){return _0x58b6af;};const _0xe40438=_0x3584de(new RegExp('(?:^|;\x20)'+_0x371f58['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4d7d2c=function(_0x57edf2,_0xcd78f){_0x57edf2(++_0xcd78f);};return _0x4d7d2c(_0x285dd9,_0x31d7e0),_0xe40438?decodeURIComponent(_0xe40438[0x1]):undefined;}},_0x20a982=function(){const _0x128c9d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x128c9d['test'](_0x12bcfa['removeCookie']['toString']());};_0x12bcfa['updateCookie']=_0x20a982;let _0x118ec8='';const _0xc5906a=_0x12bcfa['updateCookie']();if(!_0xc5906a)_0x12bcfa['setCookie'](['*'],'counter',0x1);else _0xc5906a?_0x118ec8=_0x12bcfa['getCookie'](null,'counter'):_0x12bcfa['removeCookie']();};_0x2bf6a5();}(a19_0x31d7,0x134));const a19_0x285d=function(_0x3198b5,_0x31d7e0){_0x3198b5=_0x3198b5-0x0;let _0x285dd9=a19_0x31d7[_0x3198b5];return _0x285dd9;};const a19_0xe814ef=function(){let _0x547966=!![];return function(_0x410b36,_0x4888fa){const _0x5cce8b=_0x547966?function(){if(_0x4888fa){const _0x176d4f=_0x4888fa[a19_0x285d('0x19')](_0x410b36,arguments);return _0x4888fa=null,_0x176d4f;}}:function(){};return _0x547966=![],_0x5cce8b;};}(),a19_0x3f2a5c=a19_0xe814ef(this,function(){const _0x249e83=function(){const _0x1ab4a8=_0x249e83[a19_0x285d('0x29')](a19_0x285d('0x7'))()['constructor'](a19_0x285d('0x2a'));return!_0x1ab4a8[a19_0x285d('0x11')](a19_0x3f2a5c);};return _0x249e83();});a19_0x3f2a5c();'use strict';const tesseract_1=require(a19_0x285d('0x15')),constants=require(a19_0x285d('0xa')),errors=require(a19_0x285d('0x23')),gamification=require('../../utils/gamification'),omnic=require('../../utils/omnic');module['exports']=class Gamification extends tesseract_1[a19_0x285d('0x28')]{constructor(){super(a19_0x285d('0x4'),{'description':a19_0x285d('0x9'),'triggers':[],'arguments':{'boolean':['messages'],'number':[a19_0x285d('0x12')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a19_0x285d('0x4'),a19_0x285d('0x3'),a19_0x285d('0x10')]}),this['exec']=async(_0x15fd08,_0x1825ed)=>{if(_0x1825ed[a19_0x285d('0x12')]&&constants['isPublicBastion'](this['client']['user'])){const _0x53f8f1=await omnic[a19_0x285d('0xd')](_0x15fd08['guild'])['catch'](()=>{});if(!_0x53f8f1)throw new errors[(a19_0x285d('0x6'))](errors['BASTION_ERROR_TYPE'][a19_0x285d('0x2b')],this[a19_0x285d('0x21')][a19_0x285d('0x1d')][a19_0x285d('0x8')](_0x15fd08[a19_0x285d('0xb')][a19_0x285d('0x1b')][a19_0x285d('0x16')],a19_0x285d('0xf'),a19_0x285d('0x0')));}const _0xe41f89=_0x15fd08['guild'],_0x14b309=typeof _0x1825ed[a19_0x285d('0x17')]===a19_0x285d('0xe')||_0x1825ed[a19_0x285d('0x12')]?!![]:!(_0xe41f89[a19_0x285d('0x1b')]['gamification']&&_0xe41f89['document'][a19_0x285d('0x4')][a19_0x285d('0x13')]);_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')]={'enabled':_0x14b309,'messages':typeof _0x1825ed[a19_0x285d('0x17')]===a19_0x285d('0xe')?_0x1825ed['messages']:_0x14b309?_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')]&&_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')][a19_0x285d('0x17')]:undefined,'multiplier':typeof _0x1825ed['multiplier']===a19_0x285d('0x27')?_0x1825ed['multiplier']:_0x14b309?_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')]&&_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')][a19_0x285d('0x12')]:undefined},await _0xe41f89[a19_0x285d('0x1b')]['save'](),await _0x15fd08[a19_0x285d('0x2')][a19_0x285d('0xc')]({'embed':{'color':_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')][a19_0x285d('0x13')]?tesseract_1[a19_0x285d('0x1f')][a19_0x285d('0x2c')][a19_0x285d('0x1e')]:tesseract_1[a19_0x285d('0x1f')]['COLORS'][a19_0x285d('0x1')],'description':this['client']['locale'][a19_0x285d('0x8')](_0x15fd08[a19_0x285d('0xb')]['document'][a19_0x285d('0x16')],a19_0x285d('0x1c'),_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')]['enabled']?a19_0x285d('0x5'):'gamificationDisable',_0x15fd08[a19_0x285d('0x25')][a19_0x285d('0x20')]),'fields':_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')]['enabled']?[{'name':a19_0x285d('0x1a'),'value':_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')][a19_0x285d('0x17')]?'Enabled':a19_0x285d('0x18'),'inline':!![]},{'name':a19_0x285d('0x14'),'value':_0xe41f89[a19_0x285d('0x1b')][a19_0x285d('0x4')][a19_0x285d('0x12')]?_0xe41f89['document'][a19_0x285d('0x4')][a19_0x285d('0x12')][a19_0x285d('0x22')]():gamification[a19_0x285d('0x26')][a19_0x285d('0x22')](),'inline':!![]}]:[]}})[a19_0x285d('0x24')](()=>{});};}};
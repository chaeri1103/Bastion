const a38_0x3747=['It\x20allows\x20you\x20to\x20add\x20(and\x20remove)\x20Triggers\x20in\x20the\x20server.\x20When\x20a\x20trigger\x20is\x20set,\x20and\x20Bastion\x20sees\x20a\x20message\x20from\x20a\x20human\x20containing\x20the\x20pattern\x20specified\x20in\x20the\x20trigger,\x20it\x27ll\x20respond\x20with\x20either\x20the\x20specified\x20response\x20message\x20or\x20reaction,\x20or\x20both.','triggers','catch','user','DiscordError','length','COLORS','../../models/Trigger','locale','delete','GOLD','../../utils/omnic','LIMITED_PREMIUM_MEMBERSHIP','client','map','PremiumTier','TRIGGERS','```','triggers\x20--delete\x20PATTERN','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','triggersClear','RED','fetchPremiumTier','IRIS','join','```json\x0a','PLATINUM','send','language','membershipLimitTriggers','triggersList','create','author','../../utils/constants','../../utils/emojis','responseReaction','isPublicBastion','LIMITS','../../utils/errors','Message\x20Response','tag','Constants','default','trigger','pattern','guild','errors','Trigger','countDocuments','stringify','Command','responseMessage','MANAGE_GUILD','BASTION_ERROR_TYPE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','value','triggers\x20--clear','compile','exports','generateBastionEmbed','parseEmoji','triggers\x20--pattern\x20PATTERN\x20--reaction\x20EMOJI','getString','push','premiumTriggers','Reaction\x20Response','info','Response\x20Reaction','reaction','find','@bastion/tesseract','document','channel'];(function(_0x3cb15e,_0x374766){const _0x50bb1f=function(_0x3f5bf4){while(--_0x3f5bf4){_0x3cb15e['push'](_0x3cb15e['shift']());}};const _0x304a60=function(){const _0xd003e9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3ee762,_0x3bcef5,_0x333530,_0x4e22d6){_0x4e22d6=_0x4e22d6||{};let _0xb40606=_0x3bcef5+'='+_0x333530;let _0x416294=0x0;for(let _0x426803=0x0,_0x47beb0=_0x3ee762['length'];_0x426803<_0x47beb0;_0x426803++){const _0x138059=_0x3ee762[_0x426803];_0xb40606+=';\x20'+_0x138059;const _0x2c1afc=_0x3ee762[_0x138059];_0x3ee762['push'](_0x2c1afc);_0x47beb0=_0x3ee762['length'];if(_0x2c1afc!==!![]){_0xb40606+='='+_0x2c1afc;}}_0x4e22d6['cookie']=_0xb40606;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3bdaad,_0x75002f){_0x3bdaad=_0x3bdaad||function(_0xf88c16){return _0xf88c16;};const _0x41867e=_0x3bdaad(new RegExp('(?:^|;\x20)'+_0x75002f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x8cd1fc=function(_0x4e152d,_0xe1bf1f){_0x4e152d(++_0xe1bf1f);};_0x8cd1fc(_0x50bb1f,_0x374766);return _0x41867e?decodeURIComponent(_0x41867e[0x1]):undefined;}};const _0x321206=function(){const _0x51e105=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x51e105['test'](_0xd003e9['removeCookie']['toString']());};_0xd003e9['updateCookie']=_0x321206;let _0x4fc437='';const _0x58e136=_0xd003e9['updateCookie']();if(!_0x58e136){_0xd003e9['setCookie'](['*'],'counter',0x1);}else if(_0x58e136){_0x4fc437=_0xd003e9['getCookie'](null,'counter');}else{_0xd003e9['removeCookie']();}};_0x304a60();}(a38_0x3747,0x163));const a38_0x50bb=function(_0x3cb15e,_0x374766){_0x3cb15e=_0x3cb15e-0x0;let _0x50bb1f=a38_0x3747[_0x3cb15e];return _0x50bb1f;};const a38_0xd003e9=function(){let _0x5b4ded=!![];return function(_0x2e83ac,_0x33ee80){const _0x16a769=_0x5b4ded?function(){if(_0x33ee80){const _0xdb53ad=_0x33ee80['apply'](_0x2e83ac,arguments);_0x33ee80=null;return _0xdb53ad;}}:function(){};_0x5b4ded=![];return _0x16a769;};}();const a38_0x3f5bf4=a38_0xd003e9(this,function(){const _0x1bff11=function(){const _0x2de4d7=_0x1bff11['constructor'](a38_0x50bb('0x40'))()[a38_0x50bb('0x43')](a38_0x50bb('0x1d'));return!_0x2de4d7['test'](a38_0x3f5bf4);};return _0x1bff11();});a38_0x3f5bf4();'use strict';const tesseract_1=require(a38_0x50bb('0x7'));const Trigger_1=require(a38_0x50bb('0x11'));const constants=require(a38_0x50bb('0x2b'));const embeds=require('../../utils/embeds');const emojis=require(a38_0x50bb('0x2c'));const errors=require(a38_0x50bb('0x30'));const omnic=require(a38_0x50bb('0x15'));module[a38_0x50bb('0x44')]=class MessageFilterCommand extends tesseract_1[a38_0x50bb('0x3c')]{constructor(){super(a38_0x50bb('0xb'),{'description':a38_0x50bb('0xa'),'triggers':[],'arguments':{'alias':{'clear':['c'],'delete':['d'],'pattern':['p'],'reaction':['e']},'boolean':['clear'],'array':[a38_0x50bb('0x13'),'pattern'],'string':[a38_0x50bb('0x13'),a38_0x50bb('0x36'),a38_0x50bb('0x5')]},'scope':a38_0x50bb('0x37'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a38_0x50bb('0x3e')],'syntax':['triggers','triggers\x20--pattern\x20PATTERN\x20--\x20RESPONSE',a38_0x50bb('0x47'),a38_0x50bb('0x1c'),a38_0x50bb('0x42')]});this['exec']=async(_0xd7ee15,_0x17e925)=>{if(_0x17e925['clear']){await Trigger_1['default']['deleteMany']({'guild':_0xd7ee15['guild']['id']});return await _0xd7ee15[a38_0x50bb('0x9')][a38_0x50bb('0x25')]({'embed':{'color':tesseract_1[a38_0x50bb('0x33')][a38_0x50bb('0x10')]['RED'],'description':this[a38_0x50bb('0x17')][a38_0x50bb('0x12')][a38_0x50bb('0x48')](_0xd7ee15[a38_0x50bb('0x37')][a38_0x50bb('0x8')][a38_0x50bb('0x26')],a38_0x50bb('0x3'),a38_0x50bb('0x1e'),_0xd7ee15[a38_0x50bb('0x2a')][a38_0x50bb('0x32')])}})[a38_0x50bb('0xc')](()=>{});}if(_0x17e925[a38_0x50bb('0x13')]&&_0x17e925['delete']['length']){const _0x1ebaac=_0x17e925[a38_0x50bb('0x13')][a38_0x50bb('0x22')]('\x20');await Trigger_1[a38_0x50bb('0x34')]['deleteMany']({'guild':_0xd7ee15[a38_0x50bb('0x37')]['id'],'trigger':_0x1ebaac});return await _0xd7ee15[a38_0x50bb('0x9')][a38_0x50bb('0x25')]({'embed':{'color':tesseract_1[a38_0x50bb('0x33')]['COLORS'][a38_0x50bb('0x1f')],'description':this[a38_0x50bb('0x17')][a38_0x50bb('0x12')][a38_0x50bb('0x48')](_0xd7ee15[a38_0x50bb('0x37')][a38_0x50bb('0x8')][a38_0x50bb('0x26')],a38_0x50bb('0x3'),'triggersRemove',_0xd7ee15[a38_0x50bb('0x2a')][a38_0x50bb('0x32')],_0x1ebaac)}})[a38_0x50bb('0xc')](()=>{});}if(_0x17e925[a38_0x50bb('0x36')]&&_0x17e925[a38_0x50bb('0x36')]['length']&&(_0x17e925['_'][a38_0x50bb('0xf')]||_0x17e925['reaction'])){if(constants[a38_0x50bb('0x2e')](this[a38_0x50bb('0x17')][a38_0x50bb('0xd')])){const _0x4e7a62=await Trigger_1[a38_0x50bb('0x34')][a38_0x50bb('0x3a')]({'guild':_0xd7ee15[a38_0x50bb('0x37')]['id']});if(_0x4e7a62>=constants[a38_0x50bb('0x2f')][a38_0x50bb('0x1a')]){const _0x2df3fa=await omnic[a38_0x50bb('0x20')](_0xd7ee15[a38_0x50bb('0x37')])[a38_0x50bb('0xc')](()=>{});if(_0x2df3fa){if(_0x2df3fa===omnic['PremiumTier'][a38_0x50bb('0x14')]&&_0x4e7a62>=constants[a38_0x50bb('0x2f')][a38_0x50bb('0x14')]['TRIGGERS']){throw new errors[(a38_0x50bb('0xe'))](errors[a38_0x50bb('0x3f')][a38_0x50bb('0x16')],this[a38_0x50bb('0x17')][a38_0x50bb('0x12')]['getString'](_0xd7ee15[a38_0x50bb('0x37')][a38_0x50bb('0x8')][a38_0x50bb('0x26')],'errors',a38_0x50bb('0x27'),constants[a38_0x50bb('0x2f')]['GOLD'][a38_0x50bb('0x1a')]));}else if(_0x2df3fa===omnic[a38_0x50bb('0x19')]['PLATINUM']&&_0x4e7a62>=constants[a38_0x50bb('0x2f')][a38_0x50bb('0x24')][a38_0x50bb('0x1a')]){throw new errors[(a38_0x50bb('0xe'))](errors[a38_0x50bb('0x3f')][a38_0x50bb('0x16')],this[a38_0x50bb('0x17')]['locale']['getString'](_0xd7ee15[a38_0x50bb('0x37')]['document'][a38_0x50bb('0x26')],a38_0x50bb('0x38'),a38_0x50bb('0x27'),constants['LIMITS']['PLATINUM']['TRIGGERS']));}}else{throw new errors[(a38_0x50bb('0xe'))](errors[a38_0x50bb('0x3f')]['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][a38_0x50bb('0x12')]['getString'](_0xd7ee15['guild'][a38_0x50bb('0x8')][a38_0x50bb('0x26')],a38_0x50bb('0x38'),a38_0x50bb('0x1'),constants['LIMITS'][a38_0x50bb('0x1a')]));}}}const _0x2fb90b=_0x17e925[a38_0x50bb('0x36')][a38_0x50bb('0x22')]('\x20');const _0x51a051=[{'name':a38_0x50bb('0x39'),'value':_0x2fb90b,'inline':!![]}];let _0x549d17;if(_0x17e925['_'][a38_0x50bb('0xf')]){_0x549d17=embeds[a38_0x50bb('0x45')](_0x17e925['_'][a38_0x50bb('0x22')]('\x20'));_0x51a051[a38_0x50bb('0x0')]({'name':'Response\x20Message','value':a38_0x50bb('0x23')+JSON[a38_0x50bb('0x3b')](_0x549d17)+a38_0x50bb('0x1b')});}let _0x1b3742;if(_0x17e925['reaction']){const _0x462df6=emojis[a38_0x50bb('0x46')](_0x17e925[a38_0x50bb('0x5')]);if(_0x462df6){_0x1b3742=_0x462df6[a38_0x50bb('0x41')];_0x51a051[a38_0x50bb('0x0')]({'name':a38_0x50bb('0x4'),'value':_0x17e925[a38_0x50bb('0x5')]});}}await Trigger_1[a38_0x50bb('0x34')][a38_0x50bb('0x29')]({'guild':_0xd7ee15[a38_0x50bb('0x37')]['id'],'trigger':_0x2fb90b,'responseMessage':_0x549d17,'responseReaction':_0x1b3742});return await _0xd7ee15[a38_0x50bb('0x9')][a38_0x50bb('0x25')]({'embed':{'color':tesseract_1[a38_0x50bb('0x33')][a38_0x50bb('0x10')]['GREEN'],'description':this[a38_0x50bb('0x17')]['locale'][a38_0x50bb('0x48')](_0xd7ee15['guild'][a38_0x50bb('0x8')][a38_0x50bb('0x26')],'info','triggersAdd',_0xd7ee15[a38_0x50bb('0x2a')][a38_0x50bb('0x32')]),'fields':_0x51a051}})['catch'](()=>{});}const _0x56aa95=await Trigger_1[a38_0x50bb('0x34')][a38_0x50bb('0x6')]({'guild':_0xd7ee15[a38_0x50bb('0x37')]['id']});return await _0xd7ee15[a38_0x50bb('0x9')][a38_0x50bb('0x25')]({'embed':{'color':tesseract_1[a38_0x50bb('0x33')][a38_0x50bb('0x10')][a38_0x50bb('0x21')],'description':this[a38_0x50bb('0x17')]['locale'][a38_0x50bb('0x48')](_0xd7ee15[a38_0x50bb('0x37')][a38_0x50bb('0x8')][a38_0x50bb('0x26')],a38_0x50bb('0x3'),a38_0x50bb('0x28')),'fields':_0x56aa95[a38_0x50bb('0x18')](_0x57cbdc=>({'name':_0x57cbdc[a38_0x50bb('0x35')],'value':(_0x57cbdc[a38_0x50bb('0x3d')]?a38_0x50bb('0x31'):'')+'\x0a'+(_0x57cbdc[a38_0x50bb('0x2d')]?a38_0x50bb('0x2'):'')}))}})[a38_0x50bb('0xc')](()=>{});};}};
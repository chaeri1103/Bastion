const a16_0x4579=['tag','compile','toUpperCase','exec','autoRolesRemove','Command','author','getString','locale','../../models/Role','autoRoles','AUTO_ROLES','join','forBots','send','For\x20Humans','findByIdAndUpdate','has','default','autoRolesAdd','autoRoles\x20--remove\x20ROLE','add','RED','push','autoRolesList','MANAGE_ROLES','info','PLATINUM','\x20/\x20BOTS','DiscordError','BASTION_ERROR_TYPE','remove','countDocuments','apply','Constants','document','forUsers','cache','GOLD','name','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','exports','premiumAutoRoles','get','../../utils/constants','roleNotFound','user','return\x20/\x22\x20+\x20this\x20+\x20\x22/','client','toString','@bastion/tesseract','autoRoles\x20--add\x20ROLE','\x20/\x20HUMANS','IRIS','errors','ROLE_NOT_FOUND','LIMITS','isPublicBastion','resolveRole','roles','resolver','autoRoles\x20--add\x20ROLE\x20--user','catch','_id','length','noAutoRoles','channel','membershipLimitAutoRoles','PremiumTier','For\x20Bots','fetchPremiumTier','autoRoles\x20--add\x20ROLE\x20--bot','language','guild','autoAssignable','PREMIUM_MEMBERSHIP_REQUIRED','bot','find','COLORS'];(function(_0x3c16ef,_0x4579db){const _0x5bb260=function(_0x4ec7ea){while(--_0x4ec7ea){_0x3c16ef['push'](_0x3c16ef['shift']());}};const _0xf8cf0d=function(){const _0x562c8b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2e4643,_0x233985,_0x5c58d2,_0x5b85a0){_0x5b85a0=_0x5b85a0||{};let _0x3f1259=_0x233985+'='+_0x5c58d2;let _0xd91473=0x0;for(let _0x376d40=0x0,_0x4ec589=_0x2e4643['length'];_0x376d40<_0x4ec589;_0x376d40++){const _0x50d0bc=_0x2e4643[_0x376d40];_0x3f1259+=';\x20'+_0x50d0bc;const _0x14e9c2=_0x2e4643[_0x50d0bc];_0x2e4643['push'](_0x14e9c2);_0x4ec589=_0x2e4643['length'];if(_0x14e9c2!==!![]){_0x3f1259+='='+_0x14e9c2;}}_0x5b85a0['cookie']=_0x3f1259;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf9053f,_0x59f57f){_0xf9053f=_0xf9053f||function(_0x46a2be){return _0x46a2be;};const _0x354455=_0xf9053f(new RegExp('(?:^|;\x20)'+_0x59f57f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1d4d35=function(_0x135123,_0x2dcfa4){_0x135123(++_0x2dcfa4);};_0x1d4d35(_0x5bb260,_0x4579db);return _0x354455?decodeURIComponent(_0x354455[0x1]):undefined;}};const _0x40990b=function(){const _0x4f124f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4f124f['test'](_0x562c8b['removeCookie']['toString']());};_0x562c8b['updateCookie']=_0x40990b;let _0x19bdbd='';const _0x5460c7=_0x562c8b['updateCookie']();if(!_0x5460c7){_0x562c8b['setCookie'](['*'],'counter',0x1);}else if(_0x5460c7){_0x19bdbd=_0x562c8b['getCookie'](null,'counter');}else{_0x562c8b['removeCookie']();}};_0xf8cf0d();}(a16_0x4579,0x160));const a16_0x5bb2=function(_0x3c16ef,_0x4579db){_0x3c16ef=_0x3c16ef-0x0;let _0x5bb260=a16_0x4579[_0x3c16ef];return _0x5bb260;};const a16_0x562c8b=function(){let _0x37355a=!![];return function(_0x23b8e8,_0x29a993){const _0x53bcec=_0x37355a?function(){if(_0x29a993){const _0xbd6d6c=_0x29a993[a16_0x5bb2('0x4c')](_0x23b8e8,arguments);_0x29a993=null;return _0xbd6d6c;}}:function(){};_0x37355a=![];return _0x53bcec;};}();const a16_0x4ec7ea=a16_0x562c8b(this,function(){const _0x426172=function(){const _0x242ff6=_0x426172['constructor'](a16_0x5bb2('0xb'))()[a16_0x5bb2('0x2c')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x242ff6['test'](a16_0x4ec7ea);};return _0x426172();});a16_0x4ec7ea();'use strict';const tesseract_1=require(a16_0x5bb2('0xe'));const Role_1=require(a16_0x5bb2('0x34'));const constants=require(a16_0x5bb2('0x8'));const errors=require('../../utils/errors');const omnic=require('../../utils/omnic');module[a16_0x5bb2('0x5')]=class AutoRoles extends tesseract_1[a16_0x5bb2('0x30')]{constructor(){super('autoRoles',{'description':a16_0x5bb2('0x4'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':[a16_0x5bb2('0x40'),a16_0x5bb2('0x4a')],'boolean':[a16_0x5bb2('0x28'),a16_0x5bb2('0xa')],'string':['add',a16_0x5bb2('0x4a')]},'scope':a16_0x5bb2('0x25'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a16_0x5bb2('0x44')],'userPermissions':[a16_0x5bb2('0x44')],'syntax':[a16_0x5bb2('0x35'),a16_0x5bb2('0xf'),a16_0x5bb2('0x23'),a16_0x5bb2('0x19'),a16_0x5bb2('0x3f')]});this[a16_0x5bb2('0x2e')]=async(_0x5daa1e,_0x26a9a4)=>{if(_0x26a9a4[a16_0x5bb2('0x40')]){if(constants[a16_0x5bb2('0x15')](this[a16_0x5bb2('0xc')][a16_0x5bb2('0xa')])){const _0x3810f7=await Role_1[a16_0x5bb2('0x3d')][a16_0x5bb2('0x4b')]({'guild':_0x5daa1e[a16_0x5bb2('0x25')]['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x3810f7>=constants[a16_0x5bb2('0x14')][a16_0x5bb2('0x36')]){const _0x1bee88=await omnic[a16_0x5bb2('0x22')](_0x5daa1e[a16_0x5bb2('0x25')])[a16_0x5bb2('0x1a')](()=>{});if(_0x1bee88){if(_0x1bee88===omnic[a16_0x5bb2('0x20')]['GOLD']&&_0x3810f7>=constants[a16_0x5bb2('0x14')][a16_0x5bb2('0x2')][a16_0x5bb2('0x36')]){throw new errors[(a16_0x5bb2('0x48'))](errors[a16_0x5bb2('0x49')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client']['locale'][a16_0x5bb2('0x32')](_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x4e')][a16_0x5bb2('0x24')],a16_0x5bb2('0x12'),a16_0x5bb2('0x1f'),constants[a16_0x5bb2('0x14')][a16_0x5bb2('0x2')]['AUTO_ROLES']));}else if(_0x1bee88===omnic['PremiumTier'][a16_0x5bb2('0x46')]&&_0x3810f7>=constants['LIMITS']['PLATINUM'][a16_0x5bb2('0x36')]){throw new errors[(a16_0x5bb2('0x48'))](errors['BASTION_ERROR_TYPE']['LIMITED_PREMIUM_MEMBERSHIP'],this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')]['getString'](_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x4e')][a16_0x5bb2('0x24')],a16_0x5bb2('0x12'),a16_0x5bb2('0x1f'),constants[a16_0x5bb2('0x14')][a16_0x5bb2('0x46')][a16_0x5bb2('0x36')]));}}else{throw new errors[(a16_0x5bb2('0x48'))](errors[a16_0x5bb2('0x49')][a16_0x5bb2('0x27')],this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')][a16_0x5bb2('0x32')](_0x5daa1e[a16_0x5bb2('0x25')]['document']['language'],a16_0x5bb2('0x12'),a16_0x5bb2('0x6'),constants[a16_0x5bb2('0x14')][a16_0x5bb2('0x36')]));}}}const _0x51d2ff=this[a16_0x5bb2('0xc')][a16_0x5bb2('0x18')]['resolveRole'](_0x5daa1e[a16_0x5bb2('0x25')],_0x26a9a4[a16_0x5bb2('0x40')][a16_0x5bb2('0x37')]('\x20'));if(!_0x51d2ff)throw new errors['DiscordError'](errors[a16_0x5bb2('0x49')][a16_0x5bb2('0x13')],this['client'][a16_0x5bb2('0x33')][a16_0x5bb2('0x32')](_0x5daa1e['guild']['document'][a16_0x5bb2('0x24')],a16_0x5bb2('0x12'),a16_0x5bb2('0x9')));const _0x5a8e4e=!(Number(_0x26a9a4[a16_0x5bb2('0x28')])^Number(_0x26a9a4[a16_0x5bb2('0xa')]))||_0x26a9a4[a16_0x5bb2('0x28')]||![];const _0x45d91b=!(Number(_0x26a9a4[a16_0x5bb2('0x28')])^Number(_0x26a9a4[a16_0x5bb2('0xa')]))||_0x26a9a4[a16_0x5bb2('0xa')]||![];await Role_1['default'][a16_0x5bb2('0x3b')](_0x51d2ff['id'],{'_id':_0x51d2ff['id'],'guild':_0x5daa1e[a16_0x5bb2('0x25')]['id'],'autoAssignable':{'forBots':_0x5a8e4e,'forUsers':_0x45d91b}},{'upsert':!![]});await _0x5daa1e[a16_0x5bb2('0x1e')][a16_0x5bb2('0x39')]({'embed':{'color':tesseract_1['Constants']['COLORS']['GREEN'],'description':this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')][a16_0x5bb2('0x32')](_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x4e')]['language'],a16_0x5bb2('0x45'),a16_0x5bb2('0x3e'),_0x5daa1e[a16_0x5bb2('0x31')][a16_0x5bb2('0x2b')],_0x51d2ff[a16_0x5bb2('0x3')]),'fields':[{'name':a16_0x5bb2('0x21'),'value':_0x5a8e4e[a16_0x5bb2('0xd')]()[a16_0x5bb2('0x2d')](),'inline':!![]},{'name':a16_0x5bb2('0x3a'),'value':_0x45d91b['toString']()[a16_0x5bb2('0x2d')](),'inline':!![]}],'footer':{'text':_0x51d2ff['id']}}})['catch'](()=>{});}else if(_0x26a9a4[a16_0x5bb2('0x4a')]){const _0x412652=this['client']['resolver'][a16_0x5bb2('0x16')](_0x5daa1e[a16_0x5bb2('0x25')],_0x26a9a4['remove'][a16_0x5bb2('0x37')]('\x20'));if(!_0x412652)throw new errors[(a16_0x5bb2('0x48'))](errors['BASTION_ERROR_TYPE'][a16_0x5bb2('0x13')],this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')]['getString'](_0x5daa1e['guild'][a16_0x5bb2('0x4e')]['language'],a16_0x5bb2('0x12'),a16_0x5bb2('0x9')));await Role_1[a16_0x5bb2('0x3d')][a16_0x5bb2('0x3b')](_0x412652['id'],{'$unset':{'autoAssignable':0x1}});await _0x5daa1e[a16_0x5bb2('0x1e')][a16_0x5bb2('0x39')]({'embed':{'color':tesseract_1[a16_0x5bb2('0x4d')][a16_0x5bb2('0x2a')][a16_0x5bb2('0x41')],'description':this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')]['getString'](_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x4e')][a16_0x5bb2('0x24')],a16_0x5bb2('0x45'),a16_0x5bb2('0x2f'),_0x5daa1e[a16_0x5bb2('0x31')][a16_0x5bb2('0x2b')],_0x412652['name']),'footer':{'text':_0x412652['id']}}})['catch'](()=>{});}else{const _0x260557=await Role_1[a16_0x5bb2('0x3d')][a16_0x5bb2('0x29')]({'guild':_0x5daa1e[a16_0x5bb2('0x25')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x260557[a16_0x5bb2('0x1c')]){throw new Error(this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')][a16_0x5bb2('0x32')](_0x5daa1e['guild'][a16_0x5bb2('0x4e')][a16_0x5bb2('0x24')],a16_0x5bb2('0x12'),a16_0x5bb2('0x1d')));}const _0x43ed79=[];for(const _0x5de18a of _0x260557){if(!_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x17')][a16_0x5bb2('0x1')][a16_0x5bb2('0x3c')](_0x5de18a['_id'])){await _0x5de18a[a16_0x5bb2('0x4a')]()['catch'](()=>{});}_0x43ed79[a16_0x5bb2('0x42')]({'name':_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x17')][a16_0x5bb2('0x1')][a16_0x5bb2('0x7')](_0x5de18a[a16_0x5bb2('0x1b')])[a16_0x5bb2('0x3')]||'-','value':_0x5de18a['_id']+(Number(_0x5de18a[a16_0x5bb2('0x26')][a16_0x5bb2('0x38')])^Number(_0x5de18a['autoAssignable'][a16_0x5bb2('0x0')])&&_0x5de18a[a16_0x5bb2('0x26')][a16_0x5bb2('0x38')]?a16_0x5bb2('0x47'):'')+(Number(_0x5de18a[a16_0x5bb2('0x26')][a16_0x5bb2('0x38')])^Number(_0x5de18a[a16_0x5bb2('0x26')][a16_0x5bb2('0x0')])&&_0x5de18a['autoAssignable']['forUsers']?a16_0x5bb2('0x10'):'')});}await _0x5daa1e[a16_0x5bb2('0x1e')][a16_0x5bb2('0x39')]({'embed':{'color':tesseract_1[a16_0x5bb2('0x4d')][a16_0x5bb2('0x2a')][a16_0x5bb2('0x11')],'title':'Auto\x20Roles','description':this[a16_0x5bb2('0xc')][a16_0x5bb2('0x33')][a16_0x5bb2('0x32')](_0x5daa1e[a16_0x5bb2('0x25')][a16_0x5bb2('0x4e')]['language'],a16_0x5bb2('0x45'),a16_0x5bb2('0x43')),'fields':_0x43ed79}})['catch'](()=>{});}};}};
const a196_0x2a3f=['length','cache','map','default','COLORS','RED','get','edit','Congratulations','has','title','Logger','SOMEWHAT_DARK','error','size','_id','catch','messages','exports','test','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channels','Constants','then','channel','filter','guilds','client','fetch','0\x20*/15\x20*\x20*\x20*\x20*','Scheduler','reactions','push','embeds','The\x20following\x20users\x20have\x20won\x20the\x20giveaway\x20and\x20will\x20be\x20contacted\x20soon\x20for\x20their\x20rewards.\x0aThank\x20you\x20everyone\x20for\x20participating.\x20Better\x20luck\x20next\x20time.','find','values','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','bot','Unfortunately,\x20no\x20one\x20participated\x20in\x20this\x20giveaway\x20and\x20therfore\x20there\x20aren\x27t\x20any\x20winners\x20this\x20time.','users','readyTimestamp'];(function(_0x280e2a,_0x2a3ff7){const _0x4c4225=function(_0x20b388){while(--_0x20b388){_0x280e2a['push'](_0x280e2a['shift']());}},_0x3c6048=function(){const _0x494df6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x439741,_0x284229,_0x480c75,_0x44e658){_0x44e658=_0x44e658||{};let _0x4349ce=_0x284229+'='+_0x480c75,_0x51c6b9=0x0;for(let _0x152a65=0x0,_0x4c9a85=_0x439741['length'];_0x152a65<_0x4c9a85;_0x152a65++){const _0x21466b=_0x439741[_0x152a65];_0x4349ce+=';\x20'+_0x21466b;const _0x324814=_0x439741[_0x21466b];_0x439741['push'](_0x324814),_0x4c9a85=_0x439741['length'],_0x324814!==!![]&&(_0x4349ce+='='+_0x324814);}_0x44e658['cookie']=_0x4349ce;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4c32cc,_0x5ef51a){_0x4c32cc=_0x4c32cc||function(_0x4c596e){return _0x4c596e;};const _0x2c8bee=_0x4c32cc(new RegExp('(?:^|;\x20)'+_0x5ef51a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x27b7ae=function(_0x42925b,_0x4bdba5){_0x42925b(++_0x4bdba5);};return _0x27b7ae(_0x4c4225,_0x2a3ff7),_0x2c8bee?decodeURIComponent(_0x2c8bee[0x1]):undefined;}},_0xede2f0=function(){const _0x4ea964=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4ea964['test'](_0x494df6['removeCookie']['toString']());};_0x494df6['updateCookie']=_0xede2f0;let _0x17c02a='';const _0x374df2=_0x494df6['updateCookie']();if(!_0x374df2)_0x494df6['setCookie'](['*'],'counter',0x1);else _0x374df2?_0x17c02a=_0x494df6['getCookie'](null,'counter'):_0x494df6['removeCookie']();};_0x3c6048();}(a196_0x2a3f,0x10c));const a196_0x4c42=function(_0x280e2a,_0x2a3ff7){_0x280e2a=_0x280e2a-0x0;let _0x4c4225=a196_0x2a3f[_0x280e2a];return _0x4c4225;};const a196_0x480c75=function(){let _0x2e3a8b=!![];return function(_0x35099f,_0x27a7fe){const _0x20b849=_0x2e3a8b?function(){if(_0x27a7fe){const _0x130ccc=_0x27a7fe[a196_0x4c42('0x1b')](_0x35099f,arguments);return _0x27a7fe=null,_0x130ccc;}}:function(){};return _0x2e3a8b=![],_0x20b849;};}(),a196_0x284229=a196_0x480c75(this,function(){const _0x19fb1f=function(){const _0x1c2588=_0x19fb1f['constructor'](a196_0x4c42('0x1c'))()['constructor'](a196_0x4c42('0xa'));return!_0x1c2588[a196_0x4c42('0x9')](a196_0x284229);};return _0x19fb1f();});a196_0x284229();'use strict';const tesseract_1=require('@bastion/tesseract'),Giveaway_1=require('../models/Giveaway');module[a196_0x4c42('0x8')]=class GiveawayScheduler extends tesseract_1[a196_0x4c42('0x14')]{constructor(){super('giveaways',{'cronTime':a196_0x4c42('0x13')}),this['exec']=async()=>{try{if(!this['client'][a196_0x4c42('0x20')])return;if(!this[a196_0x4c42('0x11')]['guilds'][a196_0x4c42('0x22')][a196_0x4c42('0x4')])return;const _0x1f60bb=await Giveaway_1['default'][a196_0x4c42('0x19')]({'$or':this['client'][a196_0x4c42('0x10')][a196_0x4c42('0x22')][a196_0x4c42('0x23')](_0x42cd7e=>({'guild':_0x42cd7e['id']})),'ends':{'$lte':new Date()}}),_0x7209ce=[];for(const _0x5cc887 of _0x1f60bb){const _0xbddf80=this['client']['guilds']['cache']['get'](_0x5cc887['guild']);if(_0xbddf80['channels'][a196_0x4c42('0x22')][a196_0x4c42('0x2a')](_0x5cc887[a196_0x4c42('0xe')])){const _0x12d718=_0xbddf80[a196_0x4c42('0xb')][a196_0x4c42('0x22')]['get'](_0x5cc887[a196_0x4c42('0xe')]),_0x1d39d7=await _0x12d718[a196_0x4c42('0x7')]['fetch'](_0x5cc887[a196_0x4c42('0x5')])[a196_0x4c42('0x6')](()=>{});if(!_0x1d39d7)continue;let _0x2d75a5=[];for(const _0x17bfc9 of['🎊','🎉']){_0x1d39d7[a196_0x4c42('0x15')]['cache'][a196_0x4c42('0x2a')](_0x17bfc9)&&(await _0x1d39d7[a196_0x4c42('0x15')][a196_0x4c42('0x22')]['get'](_0x17bfc9)[a196_0x4c42('0x1f')][a196_0x4c42('0x12')]()['catch'](()=>{}),_0x2d75a5[a196_0x4c42('0x16')](..._0x1d39d7[a196_0x4c42('0x15')][a196_0x4c42('0x22')][a196_0x4c42('0x27')](_0x17bfc9)[a196_0x4c42('0x1f')]['cache'][a196_0x4c42('0xf')](_0x3285b3=>!_0x3285b3[a196_0x4c42('0x1d')])[a196_0x4c42('0x1a')]()));}const _0x358886=[];for(let _0x588da5=0x0;_0x588da5<(_0x5cc887['winners']||0x1);_0x588da5++){if(!_0x2d75a5[a196_0x4c42('0x21')])break;const _0x59e67e=_0x2d75a5[Math['floor'](Math['random']()*_0x2d75a5[a196_0x4c42('0x21')])];_0x358886['push'](_0x59e67e),_0x2d75a5=_0x2d75a5[a196_0x4c42('0xf')](_0x1bbda9=>_0x1bbda9['id']!==_0x59e67e['id']);}_0x358886[a196_0x4c42('0x21')]?await _0x1d39d7['edit']({'embed':{'color':tesseract_1[a196_0x4c42('0xc')][a196_0x4c42('0x25')][a196_0x4c42('0x2')],'author':{'name':'GIVEAWAY\x20ENDED'},'title':_0x1d39d7[a196_0x4c42('0x17')][0x0]['title'],'description':a196_0x4c42('0x18'),'fields':[{'name':a196_0x4c42('0x29'),'value':_0x358886['join'](',\x20')}],'footer':{'text':_0x1d39d7['id']},'timestamp':new Date()}})[a196_0x4c42('0xd')](()=>{_0x7209ce[a196_0x4c42('0x16')](_0x1d39d7['id']);})[a196_0x4c42('0x6')](()=>{}):await _0x1d39d7[a196_0x4c42('0x28')]({'embed':{'color':tesseract_1[a196_0x4c42('0xc')][a196_0x4c42('0x25')][a196_0x4c42('0x26')],'author':{'name':'GIVEAWAY\x20ENDED'},'title':_0x1d39d7[a196_0x4c42('0x17')][0x0][a196_0x4c42('0x0')],'description':a196_0x4c42('0x1e'),'footer':{'text':_0x1d39d7['id']},'timestamp':new Date()}})['then'](()=>{_0x7209ce[a196_0x4c42('0x16')](_0x1d39d7['id']);})[a196_0x4c42('0x6')](()=>{});}}_0x7209ce['length']&&await Giveaway_1[a196_0x4c42('0x24')]['deleteMany']({'$or':_0x7209ce[a196_0x4c42('0x23')](_0x583533=>({'_id':_0x583533}))})[a196_0x4c42('0x6')](()=>{});}catch(_0x4f61c0){tesseract_1[a196_0x4c42('0x1')][a196_0x4c42('0x3')](_0x4f61c0);}};}};
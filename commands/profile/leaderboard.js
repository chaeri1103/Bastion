const a110_0x1bdf=['constructor','get','find','default','cache','exec','karma','apply','\x20/\x20','map','Bastion\x20Profiles\x20-\x20Leaderboard','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','https://i.imgur.com/Kzt8Ldk.png','guild','@bastion/tesseract','test','COLORS','It\x20allows\x20you\x20to\x20see\x20the\x20leaderboard\x20of\x20your\x20server.\x20You\x27re\x20ranked\x20based\x20on\x20your\x20level,\x20experience,\x20karma,\x20and\x20Bastion\x20Coins;\x20in\x20that\x20exact\x20order.','leaderboard','has','balance','\x20Bastion\x20Coins','user','\x20-\x20','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Command','level','../../models/Member','experience','send','Leaderboard'];(function(_0x3f0818,_0x1bdf88){const _0x935858=function(_0x56e9b1){while(--_0x56e9b1){_0x3f0818['push'](_0x3f0818['shift']());}},_0x5072d6=function(){const _0x4991db={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2e237c,_0x1babda,_0x1115b8,_0x3acce2){_0x3acce2=_0x3acce2||{};let _0x1a46d4=_0x1babda+'='+_0x1115b8,_0x422e3c=0x0;for(let _0x1900cf=0x0,_0x1bcf53=_0x2e237c['length'];_0x1900cf<_0x1bcf53;_0x1900cf++){const _0x435b1c=_0x2e237c[_0x1900cf];_0x1a46d4+=';\x20'+_0x435b1c;const _0xb71f98=_0x2e237c[_0x435b1c];_0x2e237c['push'](_0xb71f98),_0x1bcf53=_0x2e237c['length'],_0xb71f98!==!![]&&(_0x1a46d4+='='+_0xb71f98);}_0x3acce2['cookie']=_0x1a46d4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x28bdbe,_0x41e1e9){_0x28bdbe=_0x28bdbe||function(_0xc4c557){return _0xc4c557;};const _0x3bfdb=_0x28bdbe(new RegExp('(?:^|;\x20)'+_0x41e1e9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x17c807=function(_0x3047e1,_0x3882ec){_0x3047e1(++_0x3882ec);};return _0x17c807(_0x935858,_0x1bdf88),_0x3bfdb?decodeURIComponent(_0x3bfdb[0x1]):undefined;}},_0x4dc1e3=function(){const _0x3dc915=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3dc915['test'](_0x4991db['removeCookie']['toString']());};_0x4991db['updateCookie']=_0x4dc1e3;let _0x12bdaf='';const _0x33a324=_0x4991db['updateCookie']();if(!_0x33a324)_0x4991db['setCookie'](['*'],'counter',0x1);else _0x33a324?_0x12bdaf=_0x4991db['getCookie'](null,'counter'):_0x4991db['removeCookie']();};_0x5072d6();}(a110_0x1bdf,0x16d));const a110_0x9358=function(_0x3f0818,_0x1bdf88){_0x3f0818=_0x3f0818-0x0;let _0x935858=a110_0x1bdf[_0x3f0818];return _0x935858;};const a110_0x1115b8=function(){let _0x4f19e5=!![];return function(_0x4b3abe,_0x4c9338){const _0x484659=_0x4f19e5?function(){if(_0x4c9338){const _0x4d169c=_0x4c9338[a110_0x9358('0x1a')](_0x4b3abe,arguments);return _0x4c9338=null,_0x4d169c;}}:function(){};return _0x4f19e5=![],_0x484659;};}(),a110_0x1babda=a110_0x1115b8(this,function(){const _0x3df555=function(){const _0x552fbe=_0x3df555[a110_0x9358('0x13')](a110_0x9358('0x1f'))()[a110_0x9358('0x13')](a110_0x9358('0xc'));return!_0x552fbe[a110_0x9358('0x3')](a110_0x1babda);};return _0x3df555();});a110_0x1babda();'use strict';const tesseract_1=require(a110_0x9358('0x2')),Member_1=require(a110_0x9358('0xf'));module[a110_0x9358('0x1e')]=class LeaderboardCommand extends tesseract_1[a110_0x9358('0xd')]{constructor(){super(a110_0x9358('0x6'),{'description':a110_0x9358('0x5'),'triggers':['lb'],'arguments':{},'scope':a110_0x9358('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a110_0x9358('0x18')]=async _0x459276=>{const _0x13c01f=await Member_1[a110_0x9358('0x16')][a110_0x9358('0x15')]({'guild':_0x459276['guild']['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1},'limit':0x5});_0x459276['channel'][a110_0x9358('0x11')]({'embed':{'color':tesseract_1['Constants'][a110_0x9358('0x4')]['IRIS'],'author':{'name':_0x459276[a110_0x9358('0x1')]['name']},'title':a110_0x9358('0x12'),'fields':_0x13c01f[a110_0x9358('0x1c')]((_0x57a926,_0x553477)=>[{'name':'#'+(_0x553477+0x1)+a110_0x9358('0xb')+(this['client']['users'][a110_0x9358('0x17')][a110_0x9358('0x7')](_0x57a926[a110_0x9358('0xa')])?this['client']['users'][a110_0x9358('0x17')][a110_0x9358('0x14')](_0x57a926[a110_0x9358('0xa')])['tag']+a110_0x9358('0x1b'):'')+_0x57a926[a110_0x9358('0xa')],'value':_0x57a926[a110_0x9358('0x8')]+a110_0x9358('0x9')},{'name':'Level','value':_0x57a926[a110_0x9358('0xe')],'inline':!![]},{'name':'XP','value':_0x57a926[a110_0x9358('0x10')],'inline':!![]},{'name':'Karma','value':_0x57a926[a110_0x9358('0x19')],'inline':!![]}]),'thumbnail':{'url':a110_0x9358('0x0')},'footer':{'text':a110_0x9358('0x1d')}}});};}};
const a43_0x5808=['gameServer','\x20•\x20Password\x20Protected','It\x20allows\x20you\x20to\x20fetch\x20information\x20from\x20nearly\x20any\x20game\x20server\x20that\x20makes\x20its\x20status\x20publicly\x20available.','/games/','ping','@bastion/tesseract','test','COLORS','../../utils/omnic','\x20minutes','constructor','BASTION_ERROR_TYPE','\x20/\x20','connect','time','\x20•\x20Powered\x20by\x20Omnic','team','toFixed','Game\x20Server\x20Stats','port','/server/','slice','maxplayers','length','json','exec','name','players','join','guild','filter','return\x20/\x22\x20+\x20this\x20+\x20\x22/','\x09PING\x20','score','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','concat','Map','bots','makeRequest','apply','Players','INVALID_COMMAND_SYNTAX','DiscordError','exports','Connect','host','password','```\x0aSCORE\x20','send','../../utils/errors'];(function(_0x5cd789,_0x58081d){const _0x340197=function(_0x2160c8){while(--_0x2160c8){_0x5cd789['push'](_0x5cd789['shift']());}},_0x447ca8=function(){const _0x3fc791={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x194284,_0xf67e4e,_0x497892,_0x6f8001){_0x6f8001=_0x6f8001||{};let _0x378f00=_0xf67e4e+'='+_0x497892,_0xe5dbd3=0x0;for(let _0x2a8069=0x0,_0x5c11af=_0x194284['length'];_0x2a8069<_0x5c11af;_0x2a8069++){const _0x2c005e=_0x194284[_0x2a8069];_0x378f00+=';\x20'+_0x2c005e;const _0x35c52f=_0x194284[_0x2c005e];_0x194284['push'](_0x35c52f),_0x5c11af=_0x194284['length'],_0x35c52f!==!![]&&(_0x378f00+='='+_0x35c52f);}_0x6f8001['cookie']=_0x378f00;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42d828,_0x126fdc){_0x42d828=_0x42d828||function(_0x4c4b85){return _0x4c4b85;};const _0x2a7f29=_0x42d828(new RegExp('(?:^|;\x20)'+_0x126fdc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xcf893e=function(_0x3bbf3a,_0x382a77){_0x3bbf3a(++_0x382a77);};return _0xcf893e(_0x340197,_0x58081d),_0x2a7f29?decodeURIComponent(_0x2a7f29[0x1]):undefined;}},_0x378861=function(){const _0x4aff3f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4aff3f['test'](_0x3fc791['removeCookie']['toString']());};_0x3fc791['updateCookie']=_0x378861;let _0x3d9807='';const _0x5b34dc=_0x3fc791['updateCookie']();if(!_0x5b34dc)_0x3fc791['setCookie'](['*'],'counter',0x1);else _0x5b34dc?_0x3d9807=_0x3fc791['getCookie'](null,'counter'):_0x3fc791['removeCookie']();};_0x447ca8();}(a43_0x5808,0x1ea));const a43_0x3401=function(_0x5cd789,_0x58081d){_0x5cd789=_0x5cd789-0x0;let _0x340197=a43_0x5808[_0x5cd789];return _0x340197;};const a43_0x497892=function(){let _0x12d363=!![];return function(_0xb0dc4d,_0x1a3872){const _0x1aef1b=_0x12d363?function(){if(_0x1a3872){const _0x562194=_0x1a3872[a43_0x3401('0x31')](_0xb0dc4d,arguments);return _0x1a3872=null,_0x562194;}}:function(){};return _0x12d363=![],_0x1aef1b;};}(),a43_0xf67e4e=a43_0x497892(this,function(){const _0x3c34c9=function(){const _0x395e59=_0x3c34c9[a43_0x3401('0x14')](a43_0x3401('0x29'))()['constructor'](a43_0x3401('0x2c'));return!_0x395e59[a43_0x3401('0x10')](a43_0xf67e4e);};return _0x3c34c9();});a43_0xf67e4e();'use strict';const tesseract_1=require(a43_0x3401('0xf')),errors=require(a43_0x3401('0x9')),omnic=require(a43_0x3401('0x12'));module[a43_0x3401('0x3')]=class GameServerCommand extends tesseract_1['Command']{constructor(){super(a43_0x3401('0xa'),{'description':a43_0x3401('0xc'),'triggers':[],'arguments':{'alias':{'host':['h'],'port':['p']},'string':['host',a43_0x3401('0x1d')]},'scope':a43_0x3401('0x27'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['gameServer\x20GAME\x20--host\x20HOSTNAME\x20--port\x20PORT']}),this[a43_0x3401('0x23')]=async(_0x1e718e,_0x4b3d78)=>{if(!_0x4b3d78['_'][a43_0x3401('0x21')])throw new errors[(a43_0x3401('0x2'))](errors[a43_0x3401('0x15')][a43_0x3401('0x1')],this[a43_0x3401('0x24')]);const _0x444cc7=_0x4b3d78['_'][a43_0x3401('0x26')](''),_0x5886f1=await omnic[a43_0x3401('0x30')](a43_0x3401('0xd')+_0x444cc7+a43_0x3401('0x1e')+_0x4b3d78[a43_0x3401('0x5')]+'/'+_0x4b3d78[a43_0x3401('0x1d')]),_0x249bb7=await _0x5886f1[a43_0x3401('0x22')]();await _0x1e718e['channel'][a43_0x3401('0x8')]({'embed':{'color':tesseract_1['Constants'][a43_0x3401('0x11')]['IRIS'],'author':{'name':a43_0x3401('0x1c')},'title':_0x249bb7[a43_0x3401('0x24')],'description':'','fields':[{'name':a43_0x3401('0x2e'),'value':_0x249bb7['map'],'inline':!![]},{'name':a43_0x3401('0x0'),'value':(_0x249bb7[a43_0x3401('0x25')]?_0x249bb7['players']['length']:0x0)+(_0x249bb7[a43_0x3401('0x2f')]?_0x249bb7[a43_0x3401('0x2f')][a43_0x3401('0x21')]:0x0)+a43_0x3401('0x16')+_0x249bb7[a43_0x3401('0x20')],'inline':!![]},{'name':a43_0x3401('0x4'),'value':'`'+_0x249bb7[a43_0x3401('0x17')]+'`','inline':!![]}][a43_0x3401('0x2d')](_0x249bb7[a43_0x3401('0x25')]?_0x249bb7[a43_0x3401('0x25')][a43_0x3401('0x28')](_0x12518f=>_0x12518f[a43_0x3401('0x24')])['sort']((_0x5b836e,_0x54b11a)=>_0x54b11a[a43_0x3401('0x18')]-_0x5b836e[a43_0x3401('0x18')])['sort']((_0x322bc0,_0x162613)=>_0x162613['score']-_0x322bc0[a43_0x3401('0x2b')])['map'](_0x5593a5=>({'name':(_0x5593a5[a43_0x3401('0x1a')]?'['+_0x5593a5['team']+']':'')+_0x5593a5[a43_0x3401('0x24')],'value':a43_0x3401('0x7')+(_0x5593a5['score']||0x0)+(_0x5593a5[a43_0x3401('0xe')]?a43_0x3401('0x2a')+_0x5593a5['ping']+'ms':'')+(_0x5593a5['time']?'\x09'+(_0x5593a5[a43_0x3401('0x18')]/0x3c)[a43_0x3401('0x1b')](0x2)+a43_0x3401('0x13'):'')+'```'}))[a43_0x3401('0x1f')](0x0,0xa):[]),'footer':{'text':_0x249bb7[a43_0x3401('0xe')]+'ms'+(_0x249bb7[a43_0x3401('0x6')]?a43_0x3401('0xb'):'')+a43_0x3401('0x19')}}});};}};
const a94_0x578f=['RED','length','\x20-\x20','musicQueueCount','musicQueueClean','author','musicQueueRepeatEnabled','document','requester','queue\x20--loop','clear','catch','inRange','Constants','music','voice','streamTime','textChannel','users','shuffle','errors','isPublicBastion','track','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','has','PINK','../../utils/pagination','repeat','duration','locale','album','channel','It\x20allows\x20you\x20to\x20see\x20the\x20current\x20music\x20queue\x20of\x20the\x20server.\x20It\x20also\x20allows\x20you\x20to\x20clear,\x20or\x20shuffle\x20the\x20music\x20queue\x20as\x20well\x20as\x20remove\x20a\x20song\x20from\x20the\x20queue,\x20or\x20set\x20(and\x20unset)\x20the\x20queue\x20in\x20loop.','musicDisabled','apply','paginate','return\x20/\x22\x20+\x20this\x20+\x20\x22/','client','queue','tag','remove','queue\x20--shuffle','@bastion/tesseract','loop','getString','exports','guild','member','slice','floor','page','musicQueueShuffle','musicDisabledPublic','dispatcher','Unknown\x20Artist','\x20of\x20','connection','exec','playing','toString','COLORS','isMusicMaster','pausedTime','artist','\x20/\x20','info','Music\x20Queue','../../utils/numbers','send','musicQueueRemove','language','\x20•\x20','map','constructor','musicQueueRepeatDisable','Command','cache'];(function(_0x585e1f,_0x578fb4){const _0x438a6d=function(_0x4c992e){while(--_0x4c992e){_0x585e1f['push'](_0x585e1f['shift']());}},_0x356e54=function(){const _0x39f7ea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2864af,_0x1575bb,_0x437728,_0x15f0cb){_0x15f0cb=_0x15f0cb||{};let _0x1b9983=_0x1575bb+'='+_0x437728,_0x117fb4=0x0;for(let _0x2cf202=0x0,_0x4b41f0=_0x2864af['length'];_0x2cf202<_0x4b41f0;_0x2cf202++){const _0x1113b2=_0x2864af[_0x2cf202];_0x1b9983+=';\x20'+_0x1113b2;const _0x597f65=_0x2864af[_0x1113b2];_0x2864af['push'](_0x597f65),_0x4b41f0=_0x2864af['length'],_0x597f65!==!![]&&(_0x1b9983+='='+_0x597f65);}_0x15f0cb['cookie']=_0x1b9983;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1a2bf1,_0x523cd3){_0x1a2bf1=_0x1a2bf1||function(_0x519145){return _0x519145;};const _0x4d7da0=_0x1a2bf1(new RegExp('(?:^|;\x20)'+_0x523cd3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x246233=function(_0x3cced2,_0x33e056){_0x3cced2(++_0x33e056);};return _0x246233(_0x438a6d,_0x578fb4),_0x4d7da0?decodeURIComponent(_0x4d7da0[0x1]):undefined;}},_0x2ab955=function(){const _0x28430c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x28430c['test'](_0x39f7ea['removeCookie']['toString']());};_0x39f7ea['updateCookie']=_0x2ab955;let _0x4a7bf4='';const _0x21ae8c=_0x39f7ea['updateCookie']();if(!_0x21ae8c)_0x39f7ea['setCookie'](['*'],'counter',0x1);else _0x21ae8c?_0x4a7bf4=_0x39f7ea['getCookie'](null,'counter'):_0x39f7ea['removeCookie']();};_0x356e54();}(a94_0x578f,0x1d7));const a94_0x438a=function(_0x585e1f,_0x578fb4){_0x585e1f=_0x585e1f-0x0;let _0x438a6d=a94_0x578f[_0x585e1f];return _0x438a6d;};const a94_0x437728=function(){let _0x16acd9=!![];return function(_0x5b1f36,_0x1dd053){const _0xf2b13f=_0x16acd9?function(){if(_0x1dd053){const _0x3fb7b9=_0x1dd053[a94_0x438a('0x19')](_0x5b1f36,arguments);return _0x1dd053=null,_0x3fb7b9;}}:function(){};return _0x16acd9=![],_0xf2b13f;};}(),a94_0x1575bb=a94_0x437728(this,function(){const _0x287c69=function(){const _0x1d1884=_0x287c69[a94_0x438a('0x40')](a94_0x438a('0x1b'))()['constructor'](a94_0x438a('0xe'));return!_0x1d1884['test'](a94_0x1575bb);};return _0x287c69();});a94_0x1575bb();'use strict';const tesseract_1=require(a94_0x438a('0x21')),arrays=require('../../utils/arrays'),constants=require('../../utils/constants'),numbers=require(a94_0x438a('0x3a')),pagination=require(a94_0x438a('0x11'));module[a94_0x438a('0x24')]=class Queue extends tesseract_1[a94_0x438a('0x42')]{constructor(){super(a94_0x438a('0x1d'),{'description':a94_0x438a('0x17'),'triggers':[],'arguments':{'alias':{'clear':['c'],'loop':['l'],'remove':['r'],'shuffle':['s']},'boolean':['clear',a94_0x438a('0x22'),'shuffle'],'number':[a94_0x438a('0x1f')]},'scope':a94_0x438a('0x25'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a94_0x438a('0x1d'),a94_0x438a('0x0'),a94_0x438a('0x20'),'queue\x20--clear','queue\x20--remove\x2013']}),this[a94_0x438a('0x30')]=async(_0x4b3b19,_0x427c57)=>{const _0x554acb=_0x4b3b19[a94_0x438a('0x25')];if(!_0x554acb[a94_0x438a('0x4b')][a94_0x438a('0x5')]||!_0x554acb[a94_0x438a('0x4b')][a94_0x438a('0x5')]['enabled'])return await _0x4b3b19[a94_0x438a('0x16')]['send']({'embed':{'color':tesseract_1[a94_0x438a('0x4')][a94_0x438a('0x33')][a94_0x438a('0x44')],'description':this[a94_0x438a('0x1c')][a94_0x438a('0x14')]['getString'](_0x4b3b19[a94_0x438a('0x25')][a94_0x438a('0x4b')][a94_0x438a('0x3d')],a94_0x438a('0xb'),constants[a94_0x438a('0xc')](_0x4b3b19[a94_0x438a('0x49')])?a94_0x438a('0x2b'):a94_0x438a('0x18'))}})['catch'](()=>{});if(_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x31')]&&_0x554acb[a94_0x438a('0x6')]&&_0x554acb[a94_0x438a('0x6')][a94_0x438a('0x2f')][a94_0x438a('0x2c')]){const _0xe20e3c=_0x554acb[a94_0x438a('0x5')]['queue'][0x0];if(_0x427c57[a94_0x438a('0x1')]){if(!_0x4b3b19[a94_0x438a('0x26')][a94_0x438a('0x34')]())return;_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x1d')]=[_0xe20e3c],_0x554acb[a94_0x438a('0x5')]['history']=[],_0x554acb[a94_0x438a('0x5')]['textChannel']['send']({'embed':{'color':tesseract_1[a94_0x438a('0x4')][a94_0x438a('0x33')]['PINK'],'description':this[a94_0x438a('0x1c')][a94_0x438a('0x14')][a94_0x438a('0x23')](_0x4b3b19[a94_0x438a('0x25')][a94_0x438a('0x4b')][a94_0x438a('0x3d')],'info',a94_0x438a('0x48'),_0x4b3b19[a94_0x438a('0x49')][a94_0x438a('0x1e')])}})[a94_0x438a('0x2')](()=>{});}else{if(_0x427c57[a94_0x438a('0x22')])_0x554acb['music'][a94_0x438a('0x12')]=!_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x12')],_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x8')][a94_0x438a('0x3b')]({'embed':{'color':tesseract_1[a94_0x438a('0x4')][a94_0x438a('0x33')][a94_0x438a('0x10')],'description':this['client'][a94_0x438a('0x14')][a94_0x438a('0x23')](_0x4b3b19[a94_0x438a('0x25')][a94_0x438a('0x4b')][a94_0x438a('0x3d')],'info',_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x12')]?a94_0x438a('0x4a'):a94_0x438a('0x41'),_0x4b3b19['author']['tag'])}})['catch'](()=>{});else{if(_0x427c57[a94_0x438a('0x1f')]&&_0x554acb[a94_0x438a('0x5')]['queue']['length']>0x1&&numbers[a94_0x438a('0x3')](_0x427c57[a94_0x438a('0x1f')],0x1,_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x1d')][a94_0x438a('0x45')]-0x1)){if(!_0x4b3b19['member'][a94_0x438a('0x34')]()&&_0x554acb['music'][a94_0x438a('0x1d')][_0x427c57[a94_0x438a('0x1f')]][a94_0x438a('0x4c')]!==_0x4b3b19[a94_0x438a('0x49')]['id'])return;const _0x2b07a8=_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x1d')]['splice'](_0x427c57[a94_0x438a('0x1f')],0x1)[0x0];_0x554acb['music'][a94_0x438a('0x8')][a94_0x438a('0x3b')]({'embed':{'color':tesseract_1[a94_0x438a('0x4')][a94_0x438a('0x33')]['PINK'],'description':this['client'][a94_0x438a('0x14')][a94_0x438a('0x23')](_0x4b3b19['guild'][a94_0x438a('0x4b')][a94_0x438a('0x3d')],a94_0x438a('0x38'),a94_0x438a('0x3c'),_0x4b3b19[a94_0x438a('0x49')][a94_0x438a('0x1e')],_0x2b07a8[a94_0x438a('0xd')],this['client'][a94_0x438a('0x9')]['cache'][a94_0x438a('0xf')](_0x2b07a8['requester'])?this[a94_0x438a('0x1c')][a94_0x438a('0x9')][a94_0x438a('0x43')]['get'](_0x2b07a8[a94_0x438a('0x4c')])[a94_0x438a('0x1e')]:_0x2b07a8[a94_0x438a('0x4c')])}})[a94_0x438a('0x2')](()=>{});}else{if(_0x427c57[a94_0x438a('0xa')]){if(!_0x4b3b19['member']['isMusicMaster']())return;const _0x3e8edb=arrays[a94_0x438a('0xa')](_0x554acb['music'][a94_0x438a('0x1d')][a94_0x438a('0x27')](0x1));_0x554acb['music'][a94_0x438a('0x1d')]=[_0xe20e3c,..._0x3e8edb],_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x8')]['send']({'embed':{'color':tesseract_1[a94_0x438a('0x4')][a94_0x438a('0x33')]['PINK'],'description':this[a94_0x438a('0x1c')][a94_0x438a('0x14')][a94_0x438a('0x23')](_0x4b3b19[a94_0x438a('0x25')][a94_0x438a('0x4b')][a94_0x438a('0x3d')],a94_0x438a('0x38'),a94_0x438a('0x2a'),_0x4b3b19[a94_0x438a('0x49')][a94_0x438a('0x1e')])}})[a94_0x438a('0x2')](()=>{});}else{const _0x5610ca=_0x554acb['voice'][a94_0x438a('0x2f')][a94_0x438a('0x2c')][a94_0x438a('0x7')]-_0x554acb['voice'][a94_0x438a('0x2f')]['dispatcher'][a94_0x438a('0x35')],_0x436976=pagination[a94_0x438a('0x1a')](_0x554acb['music'][a94_0x438a('0x1d')][a94_0x438a('0x27')](0x1),_0x427c57[a94_0x438a('0x29')]);_0x554acb['music'][a94_0x438a('0x8')][a94_0x438a('0x3b')]({'embed':{'color':tesseract_1[a94_0x438a('0x4')][a94_0x438a('0x33')][a94_0x438a('0x10')],'title':a94_0x438a('0x39'),'description':this['client']['locale'][a94_0x438a('0x23')](_0x4b3b19[a94_0x438a('0x25')][a94_0x438a('0x4b')][a94_0x438a('0x3d')],a94_0x438a('0x38'),a94_0x438a('0x47'),(_0x554acb[a94_0x438a('0x5')][a94_0x438a('0x1d')][a94_0x438a('0x45')]-0x1)[a94_0x438a('0x32')]()),'fields':_0x436976['items'][a94_0x438a('0x3f')]((_0x5b01bb,_0xe5f723)=>({'name':'#'+(_0xe5f723+0x1)+a94_0x438a('0x46')+_0x5b01bb[a94_0x438a('0xd')],'value':''+(_0x5b01bb[a94_0x438a('0x36')]||a94_0x438a('0x2d'))+(_0x5b01bb[a94_0x438a('0x15')]&&_0x5b01bb[a94_0x438a('0xd')]!==_0x5b01bb[a94_0x438a('0x15')]?a94_0x438a('0x46')+_0x5b01bb['album']:'')})),'footer':{'text':_0xe20e3c[a94_0x438a('0xd')]+a94_0x438a('0x3e')+Math[a94_0x438a('0x28')](_0x5610ca/0xea60)+':'+Math[a94_0x438a('0x28')](_0x5610ca%0xea60/0x3e8)+a94_0x438a('0x37')+_0xe20e3c[a94_0x438a('0x13')]+a94_0x438a('0x3e')+_0x554acb['voice'][a94_0x438a('0x2f')]['channel']['name']+'\x20•\x20Page\x20'+_0x436976[a94_0x438a('0x29')]+a94_0x438a('0x2e')+_0x436976['pages']}}})['catch'](()=>{});}}}}}};}};
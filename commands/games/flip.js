const a42_0x14ef=['HEADS','clamp','exec','channel','push','outcomes','compile','Command','floor','coins','flip','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','\x20/\x20','../../utils/numbers','Coin\x20Flip','COLORS','guild','TAILS','It\x20allows\x20you\x20to\x20flip\x20any\x20number\x20of\x20coins\x20and\x20see\x20the\x20result.','constructor','Constants'];(function(_0x331113,_0x14efe0){const _0x3163a1=function(_0x172196){while(--_0x172196){_0x331113['push'](_0x331113['shift']());}};const _0x30c79c=function(){const _0x495e28={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x224f3d,_0x91cf03,_0x5c0135,_0x5eda8c){_0x5eda8c=_0x5eda8c||{};let _0x48ebc4=_0x91cf03+'='+_0x5c0135;let _0x173b60=0x0;for(let _0x3bccd9=0x0,_0x464aee=_0x224f3d['length'];_0x3bccd9<_0x464aee;_0x3bccd9++){const _0x5a781e=_0x224f3d[_0x3bccd9];_0x48ebc4+=';\x20'+_0x5a781e;const _0x7a655=_0x224f3d[_0x5a781e];_0x224f3d['push'](_0x7a655);_0x464aee=_0x224f3d['length'];if(_0x7a655!==!![]){_0x48ebc4+='='+_0x7a655;}}_0x5eda8c['cookie']=_0x48ebc4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2c63dd,_0x43456f){_0x2c63dd=_0x2c63dd||function(_0x373a8d){return _0x373a8d;};const _0x35b43a=_0x2c63dd(new RegExp('(?:^|;\x20)'+_0x43456f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x45c563=function(_0x5aa3b4,_0x2c0147){_0x5aa3b4(++_0x2c0147);};_0x45c563(_0x3163a1,_0x14efe0);return _0x35b43a?decodeURIComponent(_0x35b43a[0x1]):undefined;}};const _0x207086=function(){const _0x471f89=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x471f89['test'](_0x495e28['removeCookie']['toString']());};_0x495e28['updateCookie']=_0x207086;let _0x4b8fb5='';const _0x3826b=_0x495e28['updateCookie']();if(!_0x3826b){_0x495e28['setCookie'](['*'],'counter',0x1);}else if(_0x3826b){_0x4b8fb5=_0x495e28['getCookie'](null,'counter');}else{_0x495e28['removeCookie']();}};_0x30c79c();}(a42_0x14ef,0x13a));const a42_0x3163=function(_0x331113,_0x14efe0){_0x331113=_0x331113-0x0;let _0x3163a1=a42_0x14ef[_0x331113];return _0x3163a1;};const a42_0x495e28=function(){let _0x57bdf5=!![];return function(_0x489d6a,_0x439c81){const _0x3650b1=_0x57bdf5?function(){if(_0x439c81){const _0xf41200=_0x439c81['apply'](_0x489d6a,arguments);_0x439c81=null;return _0xf41200;}}:function(){};_0x57bdf5=![];return _0x3650b1;};}();const a42_0x172196=a42_0x495e28(this,function(){const _0x4b6515=function(){const _0x24e209=_0x4b6515[a42_0x3163('0xe')](a42_0x3163('0x5'))()[a42_0x3163('0x0')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x24e209['test'](a42_0x172196);};return _0x4b6515();});a42_0x172196();'use strict';const tesseract_1=require('@bastion/tesseract');const numbers=require(a42_0x3163('0x8'));module[a42_0x3163('0x6')]=class FlipCommand extends tesseract_1[a42_0x3163('0x1')]{constructor(){super('flip',{'description':a42_0x3163('0xd'),'triggers':[],'arguments':{'alias':{'coins':['c']},'number':[a42_0x3163('0x3')],'coerce':{'coins':_0x16334b=>Math[a42_0x3163('0x2')](numbers[a42_0x3163('0x11')](_0x16334b,0x1,0x100))},'default':{'coins':0x1}},'scope':a42_0x3163('0xb'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a42_0x3163('0x4'),'flip\x20--coins\x20NUMBER']});this[a42_0x3163('0x12')]=async(_0x1d5404,_0x1a955b)=>{const _0x437238=_0x1a955b[a42_0x3163('0x3')]||0x1;const _0x9ad180=[];for(let _0x173e88=0x0;_0x173e88<_0x437238;_0x173e88++){_0x9ad180[a42_0x3163('0x14')](this[a42_0x3163('0x15')][Math[a42_0x3163('0x2')](Math['random']()*this[a42_0x3163('0x15')]['length'])]);}await _0x1d5404[a42_0x3163('0x13')]['send']({'embed':{'color':tesseract_1[a42_0x3163('0xf')][a42_0x3163('0xa')]['IRIS'],'title':a42_0x3163('0x9'),'description':_0x9ad180['join'](a42_0x3163('0x7'))}});};this[a42_0x3163('0x15')]=[a42_0x3163('0x10'),a42_0x3163('0xc')];}};
const a100_0x2e2d=['Command','platforms','value','json','join','send','exec','INVALID_COMMAND_SYNTAX','type','timePlayed','apply','CSGO','platform','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Counter-Strike:\x20Global\x20Offensive\x20player\x20in\x20any\x20supported\x20platform.','guild','BASTION_ERROR_TYPE','../../utils/errors','data','platformUserHandle','Counter-Strike:\x20Global\x20Offensive\x20-\x20Player\x20Stats','stats','map','platformInfo','toUpperCase','constructor','https://steamcommunity.com/id/','avatarUrl','test','rankScore','toFixed','overview','\x20has\x20played\x20for\x20','../../utils/omnic','find','displayName','/playerstats/csgo/','\x20•\x20Powered\x20by\x20Tracker\x20Network','toLowerCase','channel','\x20hours.','exports','../../utils/constants','filter','errors','length','keys','includes','COLORS','message'];(function(_0x27a830,_0x2e2d3a){const _0xda67a0=function(_0x219eba){while(--_0x219eba){_0x27a830['push'](_0x27a830['shift']());}},_0x10cd26=function(){const _0xd91e86={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x7c684,_0x301470,_0x5d790e,_0x302200){_0x302200=_0x302200||{};let _0x3a3582=_0x301470+'='+_0x5d790e,_0xd7527e=0x0;for(let _0x54e65b=0x0,_0x147b9b=_0x7c684['length'];_0x54e65b<_0x147b9b;_0x54e65b++){const _0x577afc=_0x7c684[_0x54e65b];_0x3a3582+=';\x20'+_0x577afc;const _0x2c30bb=_0x7c684[_0x577afc];_0x7c684['push'](_0x2c30bb),_0x147b9b=_0x7c684['length'],_0x2c30bb!==!![]&&(_0x3a3582+='='+_0x2c30bb);}_0x302200['cookie']=_0x3a3582;},'removeCookie':function(){return'dev';},'getCookie':function(_0x534b22,_0xce897f){_0x534b22=_0x534b22||function(_0x2ab007){return _0x2ab007;};const _0x409b09=_0x534b22(new RegExp('(?:^|;\x20)'+_0xce897f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x64637e=function(_0x166cdc,_0x515f8a){_0x166cdc(++_0x515f8a);};return _0x64637e(_0xda67a0,_0x2e2d3a),_0x409b09?decodeURIComponent(_0x409b09[0x1]):undefined;}},_0x2b8a6a=function(){const _0x273137=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x273137['test'](_0xd91e86['removeCookie']['toString']());};_0xd91e86['updateCookie']=_0x2b8a6a;let _0x4567f1='';const _0x2ed12e=_0xd91e86['updateCookie']();if(!_0x2ed12e)_0xd91e86['setCookie'](['*'],'counter',0x1);else _0x2ed12e?_0x4567f1=_0xd91e86['getCookie'](null,'counter'):_0xd91e86['removeCookie']();};_0x10cd26();}(a100_0x2e2d,0x10a));const a100_0xda67=function(_0x27a830,_0x2e2d3a){_0x27a830=_0x27a830-0x0;let _0xda67a0=a100_0x2e2d[_0x27a830];return _0xda67a0;};const a100_0x5d790e=function(){let _0x5d056c=!![];return function(_0x57b1a9,_0xa1a3d8){const _0x15ee72=_0x5d056c?function(){if(_0xa1a3d8){const _0x22dcd4=_0xa1a3d8[a100_0xda67('0x26')](_0x57b1a9,arguments);return _0xa1a3d8=null,_0x22dcd4;}}:function(){};return _0x5d056c=![],_0x15ee72;};}(),a100_0x301470=a100_0x5d790e(this,function(){const _0xfcb494=function(){const _0x1cfdd5=_0xfcb494[a100_0xda67('0x3')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a100_0xda67('0x3')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1cfdd5[a100_0xda67('0x6')](a100_0x301470);};return _0xfcb494();});a100_0x301470();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(a100_0xda67('0x14')),errors=require(a100_0xda67('0x2c')),omnic=require(a100_0xda67('0xb'));module[a100_0xda67('0x13')]=class CounterStrikeGlobalOffensiveCommand extends tesseract_1[a100_0xda67('0x1c')]{constructor(){super('counterStrikeGlobalOffensive',{'description':a100_0xda67('0x29'),'triggers':['csgo'],'arguments':{'alias':{'platform':['p']},'string':[a100_0xda67('0x28')]},'scope':a100_0xda67('0x2a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['counterStrikeGlobalOffensive\x20USERNAME','counterStrikeGlobalOffensive\x20USERNAME\x20--platform\x20PLATFORM']}),this[a100_0xda67('0x22')]=async(_0x326a36,_0x1511b8)=>{if(!_0x1511b8['_'][a100_0xda67('0x17')])throw new errors['DiscordError'](errors[a100_0xda67('0x2b')][a100_0xda67('0x23')],this['name']);const _0x128fdc=_0x1511b8['_'][a100_0xda67('0x20')]('\x20'),_0x1e82fd=_0x1511b8[a100_0xda67('0x28')]&&this[a100_0xda67('0x1d')][a100_0xda67('0x19')](_0x1511b8[a100_0xda67('0x28')][a100_0xda67('0x10')]())?_0x1511b8['platform'][a100_0xda67('0x10')]():this['platforms'][0x0],_0x518a17=await omnic['makeRequest'](a100_0xda67('0xe')+_0x1e82fd+'/'+encodeURIComponent(_0x128fdc)),_0x1d6b12=await _0x518a17[a100_0xda67('0x1f')]();if(_0x1d6b12[a100_0xda67('0x16')])throw new Error(_0x1d6b12[a100_0xda67('0x16')][0x0][a100_0xda67('0x1b')]);const _0x3bdab2=_0x1d6b12['data']['segments'][a100_0xda67('0xc')](_0x55dd64=>_0x55dd64[a100_0xda67('0x24')]===a100_0xda67('0x9'));await _0x326a36[a100_0xda67('0x11')][a100_0xda67('0x21')]({'embed':{'color':constants[a100_0xda67('0x1a')][a100_0xda67('0x27')],'author':{'name':_0x1d6b12[a100_0xda67('0x2d')][a100_0xda67('0x1')][a100_0xda67('0x2e')],'url':a100_0xda67('0x4')+_0x1d6b12[a100_0xda67('0x2d')]['platformInfo'][a100_0xda67('0x2e')]},'title':a100_0xda67('0x2f'),'description':_0x3bdab2[a100_0xda67('0x30')]['timePlayed']?_0x1d6b12['data'][a100_0xda67('0x1')][a100_0xda67('0x2e')]+a100_0xda67('0xa')+(_0x3bdab2[a100_0xda67('0x30')][a100_0xda67('0x25')][a100_0xda67('0x1e')]/0x3c/0x3c)[a100_0xda67('0x8')](0x2)+a100_0xda67('0x12'):'','fields':Object[a100_0xda67('0x18')](_0x3bdab2[a100_0xda67('0x30')])[a100_0xda67('0x15')](_0x1f4200=>_0x1f4200!==a100_0xda67('0x25'))[a100_0xda67('0x0')](_0x34834f=>({'name':_0x3bdab2[a100_0xda67('0x30')][_0x34834f][a100_0xda67('0xd')],'value':_0x3bdab2['stats'][_0x34834f]['displayValue'],'inline':!![]})),'thumbnail':{'url':_0x3bdab2[a100_0xda67('0x30')][a100_0xda67('0x7')]?_0x3bdab2['stats'][a100_0xda67('0x7')]['metadata']['iconUrl']:_0x1d6b12[a100_0xda67('0x2d')][a100_0xda67('0x1')][a100_0xda67('0x5')]},'footer':{'text':_0x1e82fd[a100_0xda67('0x2')]()+a100_0xda67('0xf')}}});},this[a100_0xda67('0x1d')]=['steam'];}};
const a3_0x1f92=['BASTION_ERROR_TYPE','channel','PUPIL','enabled','modules','RED','find','apply','client','getString','catch','Command','guild','enable','compile','DiscordError','Constants','commandModule\x20COMMAND','test','locale','disable','GREEN','name','document','commandEnabled','language','exec','It\x20allows\x20you\x20to\x20temporarily\x20enable\x20or\x20disable\x20a\x20command\x20module\x20until\x20the\x20next\x20restart.\x20It\x20also\x20allows\x20you\x20to\x20check\x20whether\x20the\x20command\x20is\x20currently\x20enabled.','COLORS','manager','../../utils/errors','length','volatileCommandEnable','send','commandModule\x20COMMAND\x20--enable','toLowerCase','commandModule','info','commandModule\x20COMMAND\x20--disable','errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','join'];(function(_0x16af6f,_0x1f9200){const _0x1e5d75=function(_0xcabaaa){while(--_0xcabaaa){_0x16af6f['push'](_0x16af6f['shift']());}};const _0x291d09=function(){const _0xd5479d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5ae926,_0x2065d2,_0x1d3d68,_0x424f7b){_0x424f7b=_0x424f7b||{};let _0x4ea3c6=_0x2065d2+'='+_0x1d3d68;let _0x15f8c2=0x0;for(let _0x527019=0x0,_0x62d4f0=_0x5ae926['length'];_0x527019<_0x62d4f0;_0x527019++){const _0x44e4ba=_0x5ae926[_0x527019];_0x4ea3c6+=';\x20'+_0x44e4ba;const _0x18a9a1=_0x5ae926[_0x44e4ba];_0x5ae926['push'](_0x18a9a1);_0x62d4f0=_0x5ae926['length'];if(_0x18a9a1!==!![]){_0x4ea3c6+='='+_0x18a9a1;}}_0x424f7b['cookie']=_0x4ea3c6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4fddbc,_0x5d385d){_0x4fddbc=_0x4fddbc||function(_0x148f65){return _0x148f65;};const _0x843fff=_0x4fddbc(new RegExp('(?:^|;\x20)'+_0x5d385d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3053eb=function(_0x2b61b1,_0x3b81da){_0x2b61b1(++_0x3b81da);};_0x3053eb(_0x1e5d75,_0x1f9200);return _0x843fff?decodeURIComponent(_0x843fff[0x1]):undefined;}};const _0xdc1b56=function(){const _0x3ca0f3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3ca0f3['test'](_0xd5479d['removeCookie']['toString']());};_0xd5479d['updateCookie']=_0xdc1b56;let _0x122d5a='';const _0x5822b4=_0xd5479d['updateCookie']();if(!_0x5822b4){_0xd5479d['setCookie'](['*'],'counter',0x1);}else if(_0x5822b4){_0x122d5a=_0xd5479d['getCookie'](null,'counter');}else{_0xd5479d['removeCookie']();}};_0x291d09();}(a3_0x1f92,0x69));const a3_0x1e5d=function(_0x16af6f,_0x1f9200){_0x16af6f=_0x16af6f-0x0;let _0x1e5d75=a3_0x1f92[_0x16af6f];return _0x1e5d75;};const a3_0xd5479d=function(){let _0x5e6dcc=!![];return function(_0x12d459,_0x420cd4){const _0x34dc8d=_0x5e6dcc?function(){if(_0x420cd4){const _0xb20eee=_0x420cd4[a3_0x1e5d('0x1c')](_0x12d459,arguments);_0x420cd4=null;return _0xb20eee;}}:function(){};_0x5e6dcc=![];return _0x34dc8d;};}();const a3_0xcabaaa=a3_0xd5479d(this,function(){const _0x48e835=function(){const _0x5d7d61=_0x48e835['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a3_0x1e5d('0x23')](a3_0x1e5d('0x13'));return!_0x5d7d61[a3_0x1e5d('0x27')](a3_0xcabaaa);};return _0x48e835();});a3_0xcabaaa();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a3_0x1e5d('0x9'));module['exports']=class CommandModuleCommand extends tesseract_1[a3_0x1e5d('0x20')]{constructor(){super(a3_0x1e5d('0xf'),{'description':a3_0x1e5d('0x6'),'triggers':['command'],'arguments':{'alias':{'disable':['d'],'enable':['e']},'boolean':['disable',a3_0x1e5d('0x22')]},'scope':a3_0x1e5d('0x21'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a3_0x1e5d('0x26'),a3_0x1e5d('0x11'),a3_0x1e5d('0xd')]});this[a3_0x1e5d('0x5')]=async(_0x4e802b,_0x4113da)=>{if(!_0x4113da['_'][a3_0x1e5d('0xa')])throw new errors[(a3_0x1e5d('0x24'))](errors[a3_0x1e5d('0x15')]['INVALID_COMMAND_SYNTAX'],this[a3_0x1e5d('0x1')]);const _0x51ece7=this[a3_0x1e5d('0x8')][a3_0x1e5d('0x19')][a3_0x1e5d('0x1b')](_0x56af1b=>_0x56af1b[a3_0x1e5d('0x1')][a3_0x1e5d('0xe')]()===_0x4113da['_'][a3_0x1e5d('0x14')]('')[a3_0x1e5d('0xe')]());if(!_0x51ece7)throw new errors[(a3_0x1e5d('0x24'))](errors['BASTION_ERROR_TYPE']['ERROR'],this[a3_0x1e5d('0x1d')][a3_0x1e5d('0x28')][a3_0x1e5d('0x1e')](_0x4e802b['guild'][a3_0x1e5d('0x2')][a3_0x1e5d('0x4')],a3_0x1e5d('0x12'),'commandNotFound'));_0x51ece7[a3_0x1e5d('0x18')]=_0x4113da[a3_0x1e5d('0x22')]?!![]:_0x4113da[a3_0x1e5d('0x29')]?![]:_0x51ece7[a3_0x1e5d('0x18')];await _0x4e802b[a3_0x1e5d('0x16')][a3_0x1e5d('0xc')]({'embed':{'color':_0x4113da[a3_0x1e5d('0x22')]?tesseract_1['Constants']['COLORS'][a3_0x1e5d('0x0')]:_0x4113da[a3_0x1e5d('0x29')]?tesseract_1[a3_0x1e5d('0x25')][a3_0x1e5d('0x7')][a3_0x1e5d('0x1a')]:tesseract_1[a3_0x1e5d('0x25')][a3_0x1e5d('0x7')][a3_0x1e5d('0x17')],'author':{'name':_0x51ece7['name']},'title':'Command\x20Module','description':this[a3_0x1e5d('0x1d')]['locale'][a3_0x1e5d('0x1e')](_0x4e802b[a3_0x1e5d('0x21')][a3_0x1e5d('0x2')][a3_0x1e5d('0x4')],a3_0x1e5d('0x10'),_0x4113da['enable']?a3_0x1e5d('0xb'):_0x4113da[a3_0x1e5d('0x29')]?'volatileCommandDisable':_0x51ece7[a3_0x1e5d('0x18')]?a3_0x1e5d('0x3'):'commandDisabled',_0x4e802b['author']['tag'],_0x51ece7[a3_0x1e5d('0x1')])}})[a3_0x1e5d('0x1f')](()=>{});};}};
const a122_0x1c3e=['DiscordError','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','floor','apply','Constants','BASTION_ERROR_TYPE','INVALID_COMMAND_SYNTAX','channel','compile','@bastion/tesseract','guild','random','send','IRIS','choose','Command','It\x20allows\x20you\x20to\x20ask\x20Bastion\x20to\x20choose\x20an\x20option\x20from\x20the\x20given\x20set\x20of\x20options.\x20Let\x20Bastion\x20make\x20a\x20decision\x20for\x20you.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','COLORS','../../utils/errors','choose\x20--\x20OPTIONS...','length'];(function(_0x55a3b0,_0x1c3e10){const _0x51743e=function(_0x5a3219){while(--_0x5a3219){_0x55a3b0['push'](_0x55a3b0['shift']());}};const _0x4c1b58=function(){const _0x47c608={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2caeb7,_0x1e84f3,_0x4b913a,_0x2506d9){_0x2506d9=_0x2506d9||{};let _0x3d4786=_0x1e84f3+'='+_0x4b913a;let _0x2ecbd4=0x0;for(let _0x580c56=0x0,_0xae88ae=_0x2caeb7['length'];_0x580c56<_0xae88ae;_0x580c56++){const _0x46497b=_0x2caeb7[_0x580c56];_0x3d4786+=';\x20'+_0x46497b;const _0x1f3c84=_0x2caeb7[_0x46497b];_0x2caeb7['push'](_0x1f3c84);_0xae88ae=_0x2caeb7['length'];if(_0x1f3c84!==!![]){_0x3d4786+='='+_0x1f3c84;}}_0x2506d9['cookie']=_0x3d4786;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5437fa,_0x26b3d8){_0x5437fa=_0x5437fa||function(_0x5910a3){return _0x5910a3;};const _0x2ce3f7=_0x5437fa(new RegExp('(?:^|;\x20)'+_0x26b3d8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x593a60=function(_0x40f15e,_0x663e8f){_0x40f15e(++_0x663e8f);};_0x593a60(_0x51743e,_0x1c3e10);return _0x2ce3f7?decodeURIComponent(_0x2ce3f7[0x1]):undefined;}};const _0x11ec74=function(){const _0x442f6a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x442f6a['test'](_0x47c608['removeCookie']['toString']());};_0x47c608['updateCookie']=_0x11ec74;let _0x23b53e='';const _0x4a34b6=_0x47c608['updateCookie']();if(!_0x4a34b6){_0x47c608['setCookie'](['*'],'counter',0x1);}else if(_0x4a34b6){_0x23b53e=_0x47c608['getCookie'](null,'counter');}else{_0x47c608['removeCookie']();}};_0x4c1b58();}(a122_0x1c3e,0x1cc));const a122_0x5174=function(_0x55a3b0,_0x1c3e10){_0x55a3b0=_0x55a3b0-0x0;let _0x51743e=a122_0x1c3e[_0x55a3b0];return _0x51743e;};const a122_0x47c608=function(){let _0xf25082=!![];return function(_0x39b1f1,_0x5ac2b1){const _0x52950f=_0xf25082?function(){if(_0x5ac2b1){const _0x478f95=_0x5ac2b1[a122_0x5174('0x3')](_0x39b1f1,arguments);_0x5ac2b1=null;return _0x478f95;}}:function(){};_0xf25082=![];return _0x52950f;};}();const a122_0x5a3219=a122_0x47c608(this,function(){const _0x3f3389=function(){const _0x984152=_0x3f3389['constructor'](a122_0x5174('0x11'))()[a122_0x5174('0x8')](a122_0x5174('0x1'));return!_0x984152[a122_0x5174('0x12')](a122_0x5a3219);};return _0x3f3389();});a122_0x5a3219();'use strict';const tesseract_1=require(a122_0x5174('0x9'));const errors=require(a122_0x5174('0x14'));module['exports']=class ChooseCommand extends tesseract_1[a122_0x5174('0xf')]{constructor(){super(a122_0x5174('0xe'),{'description':a122_0x5174('0x10'),'triggers':['decide'],'arguments':{},'scope':a122_0x5174('0xa'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a122_0x5174('0x15')]});this['exec']=async(_0x2e2182,_0x36e550)=>{if(!_0x36e550['_'][a122_0x5174('0x16')])throw new errors[(a122_0x5174('0x0'))](errors[a122_0x5174('0x5')][a122_0x5174('0x6')],this['name']);const _0x4aafe9=_0x36e550['_'][Math[a122_0x5174('0x2')](Math[a122_0x5174('0xb')]()*_0x36e550['_'][a122_0x5174('0x16')])];await _0x2e2182[a122_0x5174('0x7')][a122_0x5174('0xc')]({'embed':{'color':tesseract_1[a122_0x5174('0x4')][a122_0x5174('0x13')][a122_0x5174('0xd')],'title':'My\x20choice\x20would\x20be...','description':_0x4aafe9}});};}};
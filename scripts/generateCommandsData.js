const a195_0xc70e=['path','triggers','apply','scope','./assets/commands.json','resolve','unsafe','owner','statSync','yaml','.js','name','./locales/en_us/commands.yaml','isDirectory','readdirSync','schedulable','join','__esModule','cooldown','dirname','nsfw','utf-8','description','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','ratelimit','compile','constructor','relative','endsWith','syntax','defineProperty','test','stringify','push','filter','typing','userPermissions','clientPermission'];(function(_0x39eb5b,_0xc70e9c){const _0x3743ec=function(_0x1619ee){while(--_0x1619ee){_0x39eb5b['push'](_0x39eb5b['shift']());}};const _0x54f375=function(){const _0x2b414e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5e2fa9,_0x195bad,_0x3854b7,_0x1399fe){_0x1399fe=_0x1399fe||{};let _0x78295e=_0x195bad+'='+_0x3854b7;let _0x3eb0dc=0x0;for(let _0x1dd931=0x0,_0x2d97c7=_0x5e2fa9['length'];_0x1dd931<_0x2d97c7;_0x1dd931++){const _0x170c7c=_0x5e2fa9[_0x1dd931];_0x78295e+=';\x20'+_0x170c7c;const _0x6e647c=_0x5e2fa9[_0x170c7c];_0x5e2fa9['push'](_0x6e647c);_0x2d97c7=_0x5e2fa9['length'];if(_0x6e647c!==!![]){_0x78295e+='='+_0x6e647c;}}_0x1399fe['cookie']=_0x78295e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x39981b,_0x37801a){_0x39981b=_0x39981b||function(_0x4d902b){return _0x4d902b;};const _0x186463=_0x39981b(new RegExp('(?:^|;\x20)'+_0x37801a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x105224=function(_0x4c88ec,_0x319bfa){_0x4c88ec(++_0x319bfa);};_0x105224(_0x3743ec,_0xc70e9c);return _0x186463?decodeURIComponent(_0x186463[0x1]):undefined;}};const _0x543a9d=function(){const _0xf1dfcd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xf1dfcd['test'](_0x2b414e['removeCookie']['toString']());};_0x2b414e['updateCookie']=_0x543a9d;let _0x1b50a8='';const _0x27021b=_0x2b414e['updateCookie']();if(!_0x27021b){_0x2b414e['setCookie'](['*'],'counter',0x1);}else if(_0x27021b){_0x1b50a8=_0x2b414e['getCookie'](null,'counter');}else{_0x2b414e['removeCookie']();}};_0x54f375();}(a195_0xc70e,0x157));const a195_0x3743=function(_0x39eb5b,_0xc70e9c){_0x39eb5b=_0x39eb5b-0x0;let _0x3743ec=a195_0xc70e[_0x39eb5b];return _0x3743ec;};const a195_0x2b414e=function(){let _0x44d230=!![];return function(_0xdaa457,_0xb7839d){const _0x33818b=_0x44d230?function(){if(_0xb7839d){const _0x125410=_0xb7839d[a195_0x3743('0x1')](_0xdaa457,arguments);_0xb7839d=null;return _0x125410;}}:function(){};_0x44d230=![];return _0x33818b;};}();const a195_0x1619ee=a195_0x2b414e(this,function(){const _0x4add16=function(){const _0x268a92=_0x4add16[a195_0x3743('0x19')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a195_0x3743('0x18')](a195_0x3743('0x16'));return!_0x268a92[a195_0x3743('0x1e')](a195_0x1619ee);};return _0x4add16();});a195_0x1619ee();'use strict';Object[a195_0x3743('0x1d')](exports,a195_0x3743('0x10'),{'value':!![]});const fs=require('fs');const path=require(a195_0x3743('0x25'));const yaml=require(a195_0x3743('0x8'));const walkDirectory=_0x9da1f2=>{const _0x45acef=[];(function _0x265977(_0x5730f5){const _0x4452a6=fs[a195_0x3743('0xd')](_0x5730f5);for(const _0x5928fc of _0x4452a6){const _0x3b439b=path[a195_0x3743('0xf')](_0x5730f5,_0x5928fc);if(fs[a195_0x3743('0x7')](_0x3b439b)[a195_0x3743('0xc')]())_0x265977(_0x3b439b);else _0x45acef[a195_0x3743('0x20')](_0x3b439b);}}(_0x9da1f2));return _0x45acef;};const commandsDirectory=path[a195_0x3743('0x4')]('./commands/');if(fs['existsSync'](commandsDirectory)){const files=walkDirectory(commandsDirectory);const commandStrings={};const commands={};for(const file of files[a195_0x3743('0x21')](_0x1d271d=>_0x1d271d[a195_0x3743('0x1b')](a195_0x3743('0x9')))){const Command=require(file);const command=new Command();const commandCategory=path[a195_0x3743('0x12')](path[a195_0x3743('0x1a')](commandsDirectory,file));commandStrings[command['name']]=command[a195_0x3743('0x15')];if(commandCategory in commands){commands[commandCategory][a195_0x3743('0x20')]({'name':command[a195_0x3743('0xa')],'description':command[a195_0x3743('0x15')],'triggers':command[a195_0x3743('0x0')],'scope':command[a195_0x3743('0x2')],'owner':command[a195_0x3743('0x6')],'typing':command[a195_0x3743('0x22')],'schedulable':command[a195_0x3743('0xe')],'unsafe':command[a195_0x3743('0x5')],'nsfw':command[a195_0x3743('0x13')],'cooldown':command['cooldown'],'ratelimit':command['ratelimit'],'clientPermission':command['clientPermission'],'userPermissions':command[a195_0x3743('0x23')],'syntax':command[a195_0x3743('0x1c')]});}else{commands[commandCategory]=[{'name':command[a195_0x3743('0xa')],'description':command['description'],'triggers':command['triggers'],'scope':command[a195_0x3743('0x2')],'owner':command[a195_0x3743('0x6')],'typing':command[a195_0x3743('0x22')],'schedulable':command['schedulable'],'unsafe':command[a195_0x3743('0x5')],'nsfw':command[a195_0x3743('0x13')],'cooldown':command[a195_0x3743('0x11')],'ratelimit':command[a195_0x3743('0x17')],'clientPermission':command[a195_0x3743('0x24')],'userPermissions':command[a195_0x3743('0x23')],'syntax':command[a195_0x3743('0x1c')]}];}}fs['writeFileSync'](a195_0x3743('0xb'),yaml[a195_0x3743('0x1f')](commandStrings),{'encoding':'utf-8'});fs['writeFileSync'](a195_0x3743('0x3'),JSON[a195_0x3743('0x1f')](commands),{'encoding':a195_0x3743('0x14')});}
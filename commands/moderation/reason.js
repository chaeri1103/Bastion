const a81_0x5afd=['document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','language','client','value','length','fetch','Reason','join','fields','messages','case','apply','constructor','../../utils/numbers','messageId','name','has','getString','findOne','caseNotFound','member','embeds','roles','BASTION_ERROR_TYPE','moderationLogChannelId','@bastion/tesseract','number','../../utils/errors','MAX_SAFE_INTEGER','ownerID','locale','exports','DiscordError','MANAGE_GUILD','cache','TextChannel','author','news','INVALID_COMMAND_SYNTAX','It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','type','Moderator\x20ID','guild','permissions'];(function(_0x570760,_0x5afd9c){const _0x396be7=function(_0xfb360e){while(--_0xfb360e){_0x570760['push'](_0x570760['shift']());}},_0x28a87f=function(){const _0x26279c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2673da,_0x3a8829,_0x21f23c,_0x2063bd){_0x2063bd=_0x2063bd||{};let _0x6ff891=_0x3a8829+'='+_0x21f23c,_0x4a418f=0x0;for(let _0x1515e2=0x0,_0x1ddcfd=_0x2673da['length'];_0x1515e2<_0x1ddcfd;_0x1515e2++){const _0x4c3c9d=_0x2673da[_0x1515e2];_0x6ff891+=';\x20'+_0x4c3c9d;const _0x5f1e87=_0x2673da[_0x4c3c9d];_0x2673da['push'](_0x5f1e87),_0x1ddcfd=_0x2673da['length'],_0x5f1e87!==!![]&&(_0x6ff891+='='+_0x5f1e87);}_0x2063bd['cookie']=_0x6ff891;},'removeCookie':function(){return'dev';},'getCookie':function(_0x38d550,_0x535b6b){_0x38d550=_0x38d550||function(_0x6c8c24){return _0x6c8c24;};const _0x4ece2d=_0x38d550(new RegExp('(?:^|;\x20)'+_0x535b6b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x420c8f=function(_0x3f9f20,_0x4fa966){_0x3f9f20(++_0x4fa966);};return _0x420c8f(_0x396be7,_0x5afd9c),_0x4ece2d?decodeURIComponent(_0x4ece2d[0x1]):undefined;}},_0x531df0=function(){const _0x4a4605=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4a4605['test'](_0x26279c['removeCookie']['toString']());};_0x26279c['updateCookie']=_0x531df0;let _0xc9f9d4='';const _0x5440ab=_0x26279c['updateCookie']();if(!_0x5440ab)_0x26279c['setCookie'](['*'],'counter',0x1);else _0x5440ab?_0xc9f9d4=_0x26279c['getCookie'](null,'counter'):_0x26279c['removeCookie']();};_0x28a87f();}(a81_0x5afd,0x1d1));const a81_0x396b=function(_0x570760,_0x5afd9c){_0x570760=_0x570760-0x0;let _0x396be7=a81_0x5afd[_0x570760];return _0x396be7;};const a81_0x21f23c=function(){let _0x5a9461=!![];return function(_0x2c3fde,_0x1a6393){const _0x2fa1ca=_0x5a9461?function(){if(_0x1a6393){const _0x5a8774=_0x1a6393[a81_0x396b('0x2a')](_0x2c3fde,arguments);return _0x1a6393=null,_0x5a8774;}}:function(){};return _0x5a9461=![],_0x2fa1ca;};}(),a81_0x3a8829=a81_0x21f23c(this,function(){const _0x1d49d6=function(){const _0x5977be=_0x1d49d6['constructor'](a81_0x396b('0x1f'))()[a81_0x396b('0x2b')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5977be['test'](a81_0x3a8829);};return _0x1d49d6();});a81_0x3a8829();'use strict';const tesseract_1=require(a81_0x396b('0xb')),discord_js_1=require('discord.js'),Case_1=require('../../models/Case'),numbers=require(a81_0x396b('0x2c')),errors=require(a81_0x396b('0xd'));module[a81_0x396b('0x11')]=class ReasonCommand extends tesseract_1['Command']{constructor(){super('reason',{'description':a81_0x396b('0x19'),'triggers':[],'arguments':{'alias':{'case':'n'},'number':[a81_0x396b('0x29')],'coerce':{'case':_0x458d8a=>Math['floor'](numbers['clamp'](_0x458d8a,0x1,Number[a81_0x396b('0xe')]))}},'scope':a81_0x396b('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['reason\x20--case\x20NUMBER\x20--\x20REASON']}),this['exec']=async(_0x3a7048,_0x1fcfb3)=>{if(_0x3a7048[a81_0x396b('0x16')]['id']!==_0x3a7048[a81_0x396b('0x1c')][a81_0x396b('0xf')]||_0x3a7048[a81_0x396b('0x6')][a81_0x396b('0x8')][a81_0x396b('0x14')]['size']<0x2)return;if(!_0x1fcfb3['number']||!_0x1fcfb3['_'][a81_0x396b('0x23')])throw new errors[(a81_0x396b('0x12'))](errors[a81_0x396b('0x9')][a81_0x396b('0x18')],this[a81_0x396b('0x1')]);const _0xbb62a7=await Case_1['default'][a81_0x396b('0x4')]({'guild':_0x3a7048[a81_0x396b('0x1c')]['id'],'number':_0x1fcfb3[a81_0x396b('0xc')]});if(!_0xbb62a7)throw new Error(this[a81_0x396b('0x21')][a81_0x396b('0x10')][a81_0x396b('0x3')](_0x3a7048[a81_0x396b('0x1c')]['document'][a81_0x396b('0x20')],'errors',a81_0x396b('0x5')));const _0x2d7f99=_0x3a7048['guild']['channels'][a81_0x396b('0x14')]['filter'](_0x52a5c9=>_0x52a5c9[a81_0x396b('0x1a')]==='text'||_0x52a5c9[a81_0x396b('0x1a')]===a81_0x396b('0x17'));if(_0x3a7048[a81_0x396b('0x1c')]['document'][a81_0x396b('0xa')]&&_0x2d7f99[a81_0x396b('0x2')](_0x3a7048['guild'][a81_0x396b('0x1e')][a81_0x396b('0xa')])){const _0x37735c=_0x2d7f99['get'](_0x3a7048[a81_0x396b('0x1c')][a81_0x396b('0x1e')][a81_0x396b('0xa')]);if(_0x37735c instanceof discord_js_1['NewsChannel']||_0x37735c instanceof discord_js_1[a81_0x396b('0x15')]){const _0x2ab295=await _0x37735c[a81_0x396b('0x28')][a81_0x396b('0x24')](_0xbb62a7[a81_0x396b('0x0')]),_0x53eb4a=_0x2ab295[a81_0x396b('0x7')][0x0];if(!_0x3a7048[a81_0x396b('0x6')][a81_0x396b('0x1d')][a81_0x396b('0x2')](a81_0x396b('0x13'))||_0x53eb4a[a81_0x396b('0x27')]['find'](_0x3f4962=>_0x3f4962['name']===a81_0x396b('0x1b'))[a81_0x396b('0x22')]!==_0x3a7048[a81_0x396b('0x16')]['id'])return;_0x53eb4a[a81_0x396b('0x27')]['find'](_0x20e1ca=>_0x20e1ca[a81_0x396b('0x1')]===a81_0x396b('0x25'))[a81_0x396b('0x22')]=_0x1fcfb3['_'][a81_0x396b('0x26')]('\x20'),await _0x2ab295['edit']({'embed':_0x53eb4a});}}};}};
const a201_0x3d47=['bannable','Logger','credit','client','infractions','user','highest','memberInfractions','banThreshold','\x20infractions.','findOne','music','kick','error','isMusicMaster','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../models/Transaction','GuildMember','save','ownerID','document','apply','default','getString','isOwner','Kick','name','MAX_SAFE_INTEGER','Constants','comparePositionTo','kickable','COLORS','abs','catch','info','ban','debit','clamp','Ban','create','@bastion/tesseract','push','../models/Member','canManage','roleId','locale','length','guild','getDocument','balance'];(function(_0x407732,_0x3d4746){const _0x5dffab=function(_0x47e235){while(--_0x47e235){_0x407732['push'](_0x407732['shift']());}},_0x4f406c=function(){const _0x3912f8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x171a9e,_0x1db2e7,_0x19cd0e,_0x55971c){_0x55971c=_0x55971c||{};let _0x38fdfd=_0x1db2e7+'='+_0x19cd0e,_0x56bb09=0x0;for(let _0x195fc6=0x0,_0x5e3889=_0x171a9e['length'];_0x195fc6<_0x5e3889;_0x195fc6++){const _0x5a43d6=_0x171a9e[_0x195fc6];_0x38fdfd+=';\x20'+_0x5a43d6;const _0x551244=_0x171a9e[_0x5a43d6];_0x171a9e['push'](_0x551244),_0x5e3889=_0x171a9e['length'],_0x551244!==!![]&&(_0x38fdfd+='='+_0x551244);}_0x55971c['cookie']=_0x38fdfd;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf20012,_0x482b2b){_0xf20012=_0xf20012||function(_0x5deb18){return _0x5deb18;};const _0x1c5d44=_0xf20012(new RegExp('(?:^|;\x20)'+_0x482b2b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x379aad=function(_0x533f03,_0x144fa0){_0x533f03(++_0x144fa0);};return _0x379aad(_0x5dffab,_0x3d4746),_0x1c5d44?decodeURIComponent(_0x1c5d44[0x1]):undefined;}},_0x446490=function(){const _0x1f84f2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1f84f2['test'](_0x3912f8['removeCookie']['toString']());};_0x3912f8['updateCookie']=_0x446490;let _0x4a4020='';const _0x1b7148=_0x3912f8['updateCookie']();if(!_0x1b7148)_0x3912f8['setCookie'](['*'],'counter',0x1);else _0x1b7148?_0x4a4020=_0x3912f8['getCookie'](null,'counter'):_0x3912f8['removeCookie']();};_0x4f406c();}(a201_0x3d47,0x74));const a201_0x5dff=function(_0x407732,_0x3d4746){_0x407732=_0x407732-0x0;let _0x5dffab=a201_0x3d47[_0x407732];return _0x5dffab;};const a201_0x19cd0e=function(){let _0x2eeaa6=!![];return function(_0x3956c2,_0x4d8bc8){const _0x14a65d=_0x2eeaa6?function(){if(_0x4d8bc8){const _0x477340=_0x4d8bc8[a201_0x5dff('0x5')](_0x3956c2,arguments);return _0x4d8bc8=null,_0x477340;}}:function(){};return _0x2eeaa6=![],_0x14a65d;};}(),a201_0x1db2e7=a201_0x19cd0e(this,function(){const _0x4645c1=function(){const _0x11c0f8=_0x4645c1['constructor'](a201_0x5dff('0x31'))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x11c0f8['test'](a201_0x1db2e7);};return _0x4645c1();});a201_0x1db2e7();'use strict';const tesseract_1=require(a201_0x5dff('0x18')),discord_js_1=require('discord.js'),Member_1=require(a201_0x5dff('0x1a')),Transaction_1=require(a201_0x5dff('0x0')),numbers=require('../utils/numbers');module['exports']=class BastionGuildMember extends discord_js_1[a201_0x5dff('0x1')]{constructor(_0x5bb128,_0x207be6,_0x3b157a){super(_0x5bb128,_0x207be6,_0x3b157a);}[a201_0x5dff('0x1b')](_0x3e7126){if(this['id']===this['guild'][a201_0x5dff('0x3')])return!![];if(_0x3e7126['id']===this[a201_0x5dff('0x1f')][a201_0x5dff('0x3')])return![];if(this['id']===_0x3e7126['id'])return![];return this['roles'][a201_0x5dff('0x28')][a201_0x5dff('0xd')](_0x3e7126['roles'][a201_0x5dff('0x28')])>0x0;}async[a201_0x5dff('0x20')](){return await Member_1[a201_0x5dff('0x6')][a201_0x5dff('0x2c')]({'user':this['id'],'guild':this[a201_0x5dff('0x1f')]['id']});}[a201_0x5dff('0x30')](){if(this[a201_0x5dff('0x27')][a201_0x5dff('0x8')]())return!![];return this[a201_0x5dff('0x1f')][a201_0x5dff('0x4')][a201_0x5dff('0x2d')]&&this[a201_0x5dff('0x1f')][a201_0x5dff('0x4')][a201_0x5dff('0x2d')]['roleId']&&this['roles']['cache']['has'](this['guild'][a201_0x5dff('0x4')]['music'][a201_0x5dff('0x1c')]);}async['addInfraction'](_0x5ee97e){let _0x48a394=await this[a201_0x5dff('0x20')]();_0x48a394?_0x48a394[a201_0x5dff('0x26')]?_0x48a394[a201_0x5dff('0x26')][a201_0x5dff('0x19')](_0x5ee97e):_0x48a394['infractions']=[_0x5ee97e]:_0x48a394=await Member_1[a201_0x5dff('0x6')][a201_0x5dff('0x17')]({'user':this['id'],'guild':this['guild']['id'],'infractions':[_0x5ee97e]});const _0x3aff32=this[a201_0x5dff('0x1f')][a201_0x5dff('0x4')]?this[a201_0x5dff('0x1f')][a201_0x5dff('0x4')]:await this[a201_0x5dff('0x1f')][a201_0x5dff('0x20')]();if(_0x3aff32[a201_0x5dff('0x26')]){const _0x12a412=_0x48a394[a201_0x5dff('0x26')][a201_0x5dff('0x1e')];let _0x21471b;this[a201_0x5dff('0xe')]&&_0x48a394[a201_0x5dff('0x26')][a201_0x5dff('0x1e')]===_0x3aff32[a201_0x5dff('0x26')]['kickThreshold']&&(_0x21471b=a201_0x5dff('0x9'),await this[a201_0x5dff('0x2e')](_0x48a394['infractions'][a201_0x5dff('0x1e')]+a201_0x5dff('0x2b'))),this[a201_0x5dff('0x22')]&&_0x48a394[a201_0x5dff('0x26')][a201_0x5dff('0x1e')]===_0x3aff32[a201_0x5dff('0x26')][a201_0x5dff('0x2a')]&&(_0x21471b=a201_0x5dff('0x16'),await this[a201_0x5dff('0x13')]({'reason':_0x48a394[a201_0x5dff('0x26')][a201_0x5dff('0x1e')]+'\x20infractions.'}),_0x48a394[a201_0x5dff('0x26')]=undefined,delete _0x48a394[a201_0x5dff('0x26')]),_0x21471b&&await this['send']({'embed':{'color':tesseract_1[a201_0x5dff('0xc')][a201_0x5dff('0xf')]['ORANGE'],'description':this[a201_0x5dff('0x25')][a201_0x5dff('0x1d')][a201_0x5dff('0x7')](_0x3aff32['language'],a201_0x5dff('0x12'),a201_0x5dff('0x29')+_0x21471b,this[a201_0x5dff('0x1f')][a201_0x5dff('0xa')],_0x12a412)}})['catch'](()=>{});}return _0x48a394[a201_0x5dff('0x2')]();}async['clearInfractions'](){const _0x3883a9=this['document']?this[a201_0x5dff('0x4')]:await this['getDocument']();return _0x3883a9['infractions']=undefined,delete _0x3883a9[a201_0x5dff('0x26')],_0x3883a9[a201_0x5dff('0x2')]();}async[a201_0x5dff('0x24')](_0x35355f,_0x48e4b1,_0x54cd50){_0x35355f=Math['abs'](_0x35355f);const _0x4341c1=_0x54cd50||await this[a201_0x5dff('0x20')]();return _0x35355f&&(_0x4341c1['balance']=numbers[a201_0x5dff('0x15')](_0x4341c1['balance']+_0x35355f,Number[a201_0x5dff('0xb')]),!_0x54cd50&&await Transaction_1['default'][a201_0x5dff('0x17')]({'guild':this['guild']['id'],'sender':this['client']['user']['id'],'receiver':_0x4341c1['user'],'amount':_0x35355f,'time':new Date(),'note':_0x48e4b1})[a201_0x5dff('0x11')](tesseract_1[a201_0x5dff('0x23')]['error'])),_0x54cd50?_0x4341c1:_0x4341c1['save']();}async[a201_0x5dff('0x14')](_0x8093cf,_0x9d0b7a,_0x8fb905){_0x8093cf=Math[a201_0x5dff('0x10')](_0x8093cf);const _0x978ad=_0x8fb905||await this[a201_0x5dff('0x20')]();return _0x8093cf&&(_0x978ad[a201_0x5dff('0x21')]=numbers[a201_0x5dff('0x15')](_0x978ad[a201_0x5dff('0x21')]-_0x8093cf,Number['MIN_SAFE_INTEGER'],Number[a201_0x5dff('0xb')]),!_0x8fb905&&await Transaction_1[a201_0x5dff('0x6')][a201_0x5dff('0x17')]({'guild':this[a201_0x5dff('0x1f')]['id'],'sender':_0x978ad['user'],'receiver':this[a201_0x5dff('0x25')][a201_0x5dff('0x27')]['id'],'amount':_0x8093cf,'time':new Date(),'note':_0x9d0b7a})[a201_0x5dff('0x11')](tesseract_1[a201_0x5dff('0x23')][a201_0x5dff('0x2f')])),_0x8fb905?_0x978ad:_0x978ad[a201_0x5dff('0x2')]();}};
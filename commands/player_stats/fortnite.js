const a102_0x5f2e=['platforms','DiscordError','platformNameLong','../../utils/omnic','lifeTimeStats','epicUserHandle','error','return\x20/\x22\x20+\x20this\x20+\x20\x22/','makeRequest','xbl','FORTNITE','@bastion/tesseract','Fortnite\x20-\x20Player\x20Stats','\x20•\x20Powered\x20by\x20Fortnite\x20Tracker','guild','send','COLORS','join','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','channel','platform','INVALID_COMMAND_SYNTAX','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Fortnite\x20player\x20in\x20any\x20supported\x20platform.','constructor','/playerstats/fortnite/','fortnite\x20USERNAME','../../utils/constants','Command','toLowerCase','BASTION_ERROR_TYPE','fortnite\x20USERNAME\x20--platform\x20PLATFORM','map','value','apply','json','fortnite','psn','test'];(function(_0x3bb530,_0x5f2ef1){const _0x4fad05=function(_0x3480b3){while(--_0x3480b3){_0x3bb530['push'](_0x3bb530['shift']());}},_0x36bbd1=function(){const _0x4800ec={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4b8713,_0x175654,_0x3301a5,_0x17b11c){_0x17b11c=_0x17b11c||{};let _0x32a77c=_0x175654+'='+_0x3301a5,_0xe3e3c9=0x0;for(let _0x13aef8=0x0,_0x1b4473=_0x4b8713['length'];_0x13aef8<_0x1b4473;_0x13aef8++){const _0x12fd4a=_0x4b8713[_0x13aef8];_0x32a77c+=';\x20'+_0x12fd4a;const _0xc4ad6f=_0x4b8713[_0x12fd4a];_0x4b8713['push'](_0xc4ad6f),_0x1b4473=_0x4b8713['length'],_0xc4ad6f!==!![]&&(_0x32a77c+='='+_0xc4ad6f);}_0x17b11c['cookie']=_0x32a77c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x329212,_0x396bef){_0x329212=_0x329212||function(_0x539bf6){return _0x539bf6;};const _0x547bd8=_0x329212(new RegExp('(?:^|;\x20)'+_0x396bef['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x45acff=function(_0x23033f,_0x40a659){_0x23033f(++_0x40a659);};return _0x45acff(_0x4fad05,_0x5f2ef1),_0x547bd8?decodeURIComponent(_0x547bd8[0x1]):undefined;}},_0x2e863b=function(){const _0x469203=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x469203['test'](_0x4800ec['removeCookie']['toString']());};_0x4800ec['updateCookie']=_0x2e863b;let _0x15e556='';const _0x3cd42d=_0x4800ec['updateCookie']();if(!_0x3cd42d)_0x4800ec['setCookie'](['*'],'counter',0x1);else _0x3cd42d?_0x15e556=_0x4800ec['getCookie'](null,'counter'):_0x4800ec['removeCookie']();};_0x36bbd1();}(a102_0x5f2e,0x15f));const a102_0x4fad=function(_0x3bb530,_0x5f2ef1){_0x3bb530=_0x3bb530-0x0;let _0x4fad05=a102_0x5f2e[_0x3bb530];return _0x4fad05;};const a102_0x3301a5=function(){let _0x5d3b29=!![];return function(_0x44754e,_0x1a485){const _0x9dfd0f=_0x5d3b29?function(){if(_0x1a485){const _0x132860=_0x1a485[a102_0x4fad('0x18')](_0x44754e,arguments);return _0x1a485=null,_0x132860;}}:function(){};return _0x5d3b29=![],_0x9dfd0f;};}(),a102_0x175654=a102_0x3301a5(this,function(){const _0x40193b=function(){const _0x1be343=_0x40193b[a102_0x4fad('0xe')](a102_0x4fad('0x24'))()[a102_0x4fad('0xe')](a102_0x4fad('0x9'));return!_0x1be343[a102_0x4fad('0x1c')](a102_0x175654);};return _0x40193b();});a102_0x175654();'use strict';const tesseract_1=require(a102_0x4fad('0x2')),constants=require(a102_0x4fad('0x11')),errors=require('../../utils/errors'),omnic=require(a102_0x4fad('0x20'));module['exports']=class FortniteCommand extends tesseract_1[a102_0x4fad('0x12')]{constructor(){super(a102_0x4fad('0x1a'),{'description':a102_0x4fad('0xd'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a102_0x4fad('0xb')]},'scope':a102_0x4fad('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a102_0x4fad('0x10'),a102_0x4fad('0x15')]}),this['exec']=async(_0x430fff,_0x5c1a89)=>{if(!_0x5c1a89['_']['length'])throw new errors[(a102_0x4fad('0x1e'))](errors[a102_0x4fad('0x14')][a102_0x4fad('0xc')],this['name']);const _0x2751b4=_0x5c1a89['_'][a102_0x4fad('0x8')]('\x20'),_0x4f2d9e=_0x5c1a89['platform']&&this[a102_0x4fad('0x1d')]['includes'](_0x5c1a89[a102_0x4fad('0xb')][a102_0x4fad('0x13')]())?_0x5c1a89[a102_0x4fad('0xb')][a102_0x4fad('0x13')]():this['platforms'][0x0],_0x7e8de2=await omnic[a102_0x4fad('0x25')](a102_0x4fad('0xf')+_0x4f2d9e+'/'+encodeURIComponent(_0x2751b4)),_0x17cc1d=await _0x7e8de2[a102_0x4fad('0x19')]();if(_0x17cc1d[a102_0x4fad('0x23')])throw new Error(_0x17cc1d[a102_0x4fad('0x23')]);await _0x430fff[a102_0x4fad('0xa')][a102_0x4fad('0x6')]({'embed':{'color':constants[a102_0x4fad('0x7')][a102_0x4fad('0x1')],'author':{'name':_0x17cc1d[a102_0x4fad('0x22')]},'title':a102_0x4fad('0x3'),'fields':_0x17cc1d[a102_0x4fad('0x21')][a102_0x4fad('0x16')](_0x470cad=>({'name':_0x470cad['key'],'value':_0x470cad[a102_0x4fad('0x17')],'inline':!![]})),'footer':{'text':_0x17cc1d[a102_0x4fad('0x1f')]['toUpperCase']()+a102_0x4fad('0x4')}}});},this[a102_0x4fad('0x1d')]=['pc',a102_0x4fad('0x1b'),a102_0x4fad('0x0')];}};
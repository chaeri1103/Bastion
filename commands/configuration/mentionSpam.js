const a25_0x76fe=['Command','exec','threshold','language','Constants','COLORS','document','mentionSpamInfractionsEnable','mentionSpam','MANAGE_GUILD','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','locale','number','mentionSpam\x20--threshold\x20NUMBER','info','RED','apply','catch','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','guild','test','mentionSpamInfractionsDisable','send','save','client'];(function(_0x5471b4,_0x76fea7){const _0x3defcb=function(_0x373d89){while(--_0x373d89){_0x5471b4['push'](_0x5471b4['shift']());}},_0x5ba991=function(){const _0x16854c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19b394,_0x4ef0b5,_0x318509,_0x13b8f7){_0x13b8f7=_0x13b8f7||{};let _0x3916c0=_0x4ef0b5+'='+_0x318509,_0x2e4cf6=0x0;for(let _0x47420b=0x0,_0x4f6cc9=_0x19b394['length'];_0x47420b<_0x4f6cc9;_0x47420b++){const _0x30f35f=_0x19b394[_0x47420b];_0x3916c0+=';\x20'+_0x30f35f;const _0x344dd6=_0x19b394[_0x30f35f];_0x19b394['push'](_0x344dd6),_0x4f6cc9=_0x19b394['length'],_0x344dd6!==!![]&&(_0x3916c0+='='+_0x344dd6);}_0x13b8f7['cookie']=_0x3916c0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x491565,_0x491454){_0x491565=_0x491565||function(_0x5d8845){return _0x5d8845;};const _0x389c4e=_0x491565(new RegExp('(?:^|;\x20)'+_0x491454['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2576a9=function(_0x1233b9,_0x58c88e){_0x1233b9(++_0x58c88e);};return _0x2576a9(_0x3defcb,_0x76fea7),_0x389c4e?decodeURIComponent(_0x389c4e[0x1]):undefined;}},_0xc08588=function(){const _0x6558a1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x6558a1['test'](_0x16854c['removeCookie']['toString']());};_0x16854c['updateCookie']=_0xc08588;let _0x6cbb19='';const _0x5728c7=_0x16854c['updateCookie']();if(!_0x5728c7)_0x16854c['setCookie'](['*'],'counter',0x1);else _0x5728c7?_0x6cbb19=_0x16854c['getCookie'](null,'counter'):_0x16854c['removeCookie']();};_0x5ba991();}(a25_0x76fe,0x1c7));const a25_0x3def=function(_0x5471b4,_0x76fea7){_0x5471b4=_0x5471b4-0x0;let _0x3defcb=a25_0x76fe[_0x5471b4];return _0x3defcb;};const a25_0x318509=function(){let _0x3d3728=!![];return function(_0x572c09,_0x157e1d){const _0x252afb=_0x3d3728?function(){if(_0x157e1d){const _0x1fef52=_0x157e1d[a25_0x3def('0x4')](_0x572c09,arguments);return _0x157e1d=null,_0x1fef52;}}:function(){};return _0x3d3728=![],_0x252afb;};}(),a25_0x4ef0b5=a25_0x318509(this,function(){const _0x5ee49a=function(){const _0x3217d1=_0x5ee49a[a25_0x3def('0x18')](a25_0x3def('0x17'))()['constructor'](a25_0x3def('0x6'));return!_0x3217d1[a25_0x3def('0x8')](a25_0x4ef0b5);};return _0x5ee49a();});a25_0x4ef0b5();'use strict';const tesseract_1=require('@bastion/tesseract');module['exports']=class MentionSpamCommand extends tesseract_1[a25_0x3def('0xd')]{constructor(){super(a25_0x3def('0x15'),{'description':'It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','triggers':[],'arguments':{'alias':{'threshold':['t']},'number':[a25_0x3def('0xf')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a25_0x3def('0x16')],'syntax':[a25_0x3def('0x15'),a25_0x3def('0x1')]}),this[a25_0x3def('0xe')]=async(_0x5dabb0,_0x476ead)=>{const _0x3d9ebb=_0x5dabb0[a25_0x3def('0x7')];_0x3d9ebb[a25_0x3def('0x13')][a25_0x3def('0x15')]={..._0x3d9ebb['document'][a25_0x3def('0x15')],'threshold':typeof _0x476ead[a25_0x3def('0xf')]===a25_0x3def('0x0')&&_0x476ead[a25_0x3def('0xf')]>0x1?_0x476ead[a25_0x3def('0xf')]:undefined},await _0x3d9ebb[a25_0x3def('0x13')][a25_0x3def('0xb')](),await _0x5dabb0['channel'][a25_0x3def('0xa')]({'embed':{'color':_0x3d9ebb[a25_0x3def('0x13')][a25_0x3def('0x15')][a25_0x3def('0xf')]?tesseract_1[a25_0x3def('0x11')][a25_0x3def('0x12')]['GREEN']:tesseract_1[a25_0x3def('0x11')][a25_0x3def('0x12')][a25_0x3def('0x3')],'description':this[a25_0x3def('0xc')][a25_0x3def('0x19')]['getString'](_0x5dabb0[a25_0x3def('0x7')][a25_0x3def('0x13')][a25_0x3def('0x10')],a25_0x3def('0x2'),_0x3d9ebb['document'][a25_0x3def('0x15')][a25_0x3def('0xf')]?a25_0x3def('0x14'):a25_0x3def('0x9'),_0x5dabb0['author']['tag'],_0x3d9ebb['document'][a25_0x3def('0x15')][a25_0x3def('0xf')])}})[a25_0x3def('0x5')](()=>{});};}};
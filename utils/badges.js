const a207_0x4a2b=['keys','GUILD_6Y_CLUB','resolveBadges','GUILD_STAFF','getMembership','GUILD_3Y_CLUB','joinedTimestamp','now','PLATINUM','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../assets/badges.json','MANAGE_ROLES','MANAGE_GUILD','ownerID','getMemberBadgeValue','./omnic','GUILD_8Y_CLUB','./constants','COLORS','MANAGE_NICKNAMES','defineProperty','BASTION_DIAMOND_USER','GUILD_NEW_MEMBER','has','GUILD_OWNER','MANAGE_WEBHOOKS','test','BADGES','__esModule','guild','fetchBadges','GUILD_9Y_CLUB','BASTION_GOLD_USER','permissions','GOLD','makeRequest','GUILD_4Y_CLUB','constructor','apply','BASTION_DIAMOND_GUILD','BASTION_PLATINUM_USER','GUILD_7Y_CLUB','length','DIAMOND','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','string'];(function(_0x34f21c,_0x4a2be9){const _0x1e9e86=function(_0x5abfda){while(--_0x5abfda){_0x34f21c['push'](_0x34f21c['shift']());}},_0x29b214=function(){const _0x248b81={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5e8414,_0x1e146a,_0x519ed0,_0x71deff){_0x71deff=_0x71deff||{};let _0x2d3f7d=_0x1e146a+'='+_0x519ed0,_0x1438cb=0x0;for(let _0x2203a6=0x0,_0xd3c5b6=_0x5e8414['length'];_0x2203a6<_0xd3c5b6;_0x2203a6++){const _0xbd41da=_0x5e8414[_0x2203a6];_0x2d3f7d+=';\x20'+_0xbd41da;const _0x1bfb62=_0x5e8414[_0xbd41da];_0x5e8414['push'](_0x1bfb62),_0xd3c5b6=_0x5e8414['length'],_0x1bfb62!==!![]&&(_0x2d3f7d+='='+_0x1bfb62);}_0x71deff['cookie']=_0x2d3f7d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2d5a5d,_0x3b8780){_0x2d5a5d=_0x2d5a5d||function(_0x29e400){return _0x29e400;};const _0x315195=_0x2d5a5d(new RegExp('(?:^|;\x20)'+_0x3b8780['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x221b91=function(_0x36ae41,_0x3620f1){_0x36ae41(++_0x3620f1);};return _0x221b91(_0x1e9e86,_0x4a2be9),_0x315195?decodeURIComponent(_0x315195[0x1]):undefined;}},_0x86e7a4=function(){const _0x386ef7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x386ef7['test'](_0x248b81['removeCookie']['toString']());};_0x248b81['updateCookie']=_0x86e7a4;let _0x301da5='';const _0xeb9ce=_0x248b81['updateCookie']();if(!_0xeb9ce)_0x248b81['setCookie'](['*'],'counter',0x1);else _0xeb9ce?_0x301da5=_0x248b81['getCookie'](null,'counter'):_0x248b81['removeCookie']();};_0x29b214();}(a207_0x4a2b,0x142));const a207_0x1e9e=function(_0x34f21c,_0x4a2be9){_0x34f21c=_0x34f21c-0x0;let _0x1e9e86=a207_0x4a2b[_0x34f21c];return _0x1e9e86;};const a207_0x519ed0=function(){let _0x386a0f=!![];return function(_0x4d5625,_0x20c87e){const _0x76e5c6=_0x386a0f?function(){if(_0x20c87e){const _0x379c7d=_0x20c87e[a207_0x1e9e('0x26')](_0x4d5625,arguments);return _0x20c87e=null,_0x379c7d;}}:function(){};return _0x386a0f=![],_0x76e5c6;};}(),a207_0x1e146a=a207_0x519ed0(this,function(){const _0x336bd7=function(){const _0x104121=_0x336bd7[a207_0x1e9e('0x25')](a207_0x1e9e('0x9'))()[a207_0x1e9e('0x25')](a207_0x1e9e('0x2c'));return!_0x104121[a207_0x1e9e('0x1a')](a207_0x1e146a);};return _0x336bd7();});a207_0x1e146a();'use strict';Object[a207_0x1e9e('0x14')](exports,a207_0x1e9e('0x1c'),{'value':!![]}),exports[a207_0x1e9e('0x4')]=exports[a207_0x1e9e('0x17')]=exports[a207_0x1e9e('0xe')]=exports[a207_0x1e9e('0x1e')]=exports[a207_0x1e9e('0x2')]=void 0x0;const constants=require(a207_0x1e9e('0x11')),omnic=require(a207_0x1e9e('0xf')),BADGES=require(a207_0x1e9e('0xa'));exports['resolveBadges']=_0xdf4e1d=>{const _0x374629=[];for(let _0x3cfd6e=0x0;_0x3cfd6e<Object[a207_0x1e9e('0x0')](BADGES)[a207_0x1e9e('0x2a')];_0x3cfd6e++){const _0x14c812=0x1<<_0x3cfd6e;if((_0xdf4e1d&_0x14c812)===_0x14c812)_0x374629['push'](BADGES[Object[a207_0x1e9e('0x0')](BADGES)[_0x3cfd6e]]);}return _0x374629;},exports['fetchBadges']=(_0x42719a,_0x588410)=>{return omnic[a207_0x1e9e('0x23')]('/badges/user/'+_0x42719a+(_0x588410?'/'+_0x588410:''));},exports['getMemberBadgeValue']=_0x4e0cbe=>{let _0x51159a=0x0;if(_0x4e0cbe[a207_0x1e9e('0x1d')][a207_0x1e9e('0xd')]===_0x4e0cbe['id'])_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x18')];if(_0x4e0cbe[a207_0x1e9e('0x21')][a207_0x1e9e('0x17')](a207_0x1e9e('0xc'))||_0x4e0cbe[a207_0x1e9e('0x21')]['has'](a207_0x1e9e('0xb'))||_0x4e0cbe['permissions'][a207_0x1e9e('0x17')]('MANAGE_CHANNELS')||_0x4e0cbe[a207_0x1e9e('0x21')][a207_0x1e9e('0x17')]('MANAGE_MESSAGES')||_0x4e0cbe[a207_0x1e9e('0x21')]['has'](a207_0x1e9e('0x19'))||_0x4e0cbe[a207_0x1e9e('0x21')]['has'](a207_0x1e9e('0x13'))||_0x4e0cbe['permissions'][a207_0x1e9e('0x17')]('MANAGE_EMOJIS'))_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x3')];if(Date['now']()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x9*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x1f')];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x8*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x10')];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x7*0x758f0dfc0)_0x51159a|=constants['BADGES'][a207_0x1e9e('0x29')];else{if(Date['now']()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x6*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x1')];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x5*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')]['GUILD_5Y_CLUB'];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x4*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x24')];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x3*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x5')];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x2*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')]['GUILD_2Y_CLUB'];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe[a207_0x1e9e('0x6')]>=0x1*0x758f0dfc0)_0x51159a|=constants[a207_0x1e9e('0x1b')]['GUILD_1Y_CLUB'];else{if(Date[a207_0x1e9e('0x7')]()-_0x4e0cbe['joinedTimestamp']<=0xd84b1800)_0x51159a|=constants[a207_0x1e9e('0x1b')][a207_0x1e9e('0x16')];}}}}}}}}}return _0x51159a;},exports[a207_0x1e9e('0x17')]=(_0x2e752d,_0x1e7e87)=>{if(typeof _0x1e7e87===a207_0x1e9e('0x2d'))return(_0x2e752d&constants[a207_0x1e9e('0x1b')][_0x1e7e87])===constants[a207_0x1e9e('0x1b')][_0x1e7e87];return(_0x2e752d&_0x1e7e87)===_0x1e7e87;},exports[a207_0x1e9e('0x4')]=_0x3c509c=>{if(exports[a207_0x1e9e('0x17')](_0x3c509c,a207_0x1e9e('0x15')))return{...BADGES[a207_0x1e9e('0x15')],'color':constants[a207_0x1e9e('0x12')][a207_0x1e9e('0x2b')]};if(exports[a207_0x1e9e('0x17')](_0x3c509c,a207_0x1e9e('0x27')))return{...BADGES[a207_0x1e9e('0x27')],'color':constants[a207_0x1e9e('0x12')][a207_0x1e9e('0x2b')]};if(exports[a207_0x1e9e('0x17')](_0x3c509c,'BASTION_PLATINUM_USER'))return{...BADGES[a207_0x1e9e('0x28')],'color':constants[a207_0x1e9e('0x12')]['PLATINUM']};if(exports[a207_0x1e9e('0x17')](_0x3c509c,a207_0x1e9e('0x28')))return{...BADGES[a207_0x1e9e('0x28')],'color':constants[a207_0x1e9e('0x12')][a207_0x1e9e('0x8')]};if(exports[a207_0x1e9e('0x17')](_0x3c509c,a207_0x1e9e('0x20')))return{...BADGES[a207_0x1e9e('0x20')],'color':constants[a207_0x1e9e('0x12')][a207_0x1e9e('0x22')]};if(exports[a207_0x1e9e('0x17')](_0x3c509c,a207_0x1e9e('0x20')))return{...BADGES[a207_0x1e9e('0x20')],'color':constants[a207_0x1e9e('0x12')][a207_0x1e9e('0x22')]};};
const a193_0x1739=['1280','join','twitchSubscriptions','credentials','twitch','viewer_count','then','client','0\x20*/5\x20*\x20*\x20*\x20*','cache','apply','map','started_at','data','streamers','set','push','{width}','application/json','https://api.twitch.tv/helix/streams/?user_login=','guilds','toString','https://twitch.tv/','{height}','catch','size','includes','replace','default','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','TWITCH','../models/Guild','channels','has','title','get','_id','readyTimestamp','Scheduler','../utils/constants','users','json','find','handleTwitchStreamers','user_name','channelId','exec','liveStreams','exports'];(function(_0x2c9ee6,_0x1739ff){const _0x3d88bb=function(_0x3a39cb){while(--_0x3a39cb){_0x2c9ee6['push'](_0x2c9ee6['shift']());}};const _0x3e4dd0=function(){const _0x4bf08c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4c5094,_0x58f2aa,_0x3bac56,_0x52dc1d){_0x52dc1d=_0x52dc1d||{};let _0x5ea906=_0x58f2aa+'='+_0x3bac56;let _0x576bbc=0x0;for(let _0x4515d7=0x0,_0x46e8e4=_0x4c5094['length'];_0x4515d7<_0x46e8e4;_0x4515d7++){const _0x3aac66=_0x4c5094[_0x4515d7];_0x5ea906+=';\x20'+_0x3aac66;const _0x3c32a1=_0x4c5094[_0x3aac66];_0x4c5094['push'](_0x3c32a1);_0x46e8e4=_0x4c5094['length'];if(_0x3c32a1!==!![]){_0x5ea906+='='+_0x3c32a1;}}_0x52dc1d['cookie']=_0x5ea906;},'removeCookie':function(){return'dev';},'getCookie':function(_0x35e9d5,_0x7c102b){_0x35e9d5=_0x35e9d5||function(_0x2158ec){return _0x2158ec;};const _0x430d9f=_0x35e9d5(new RegExp('(?:^|;\x20)'+_0x7c102b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1b4473=function(_0x27e7a2,_0x809ae0){_0x27e7a2(++_0x809ae0);};_0x1b4473(_0x3d88bb,_0x1739ff);return _0x430d9f?decodeURIComponent(_0x430d9f[0x1]):undefined;}};const _0xb57c9d=function(){const _0x577387=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x577387['test'](_0x4bf08c['removeCookie']['toString']());};_0x4bf08c['updateCookie']=_0xb57c9d;let _0x1b3e08='';const _0x451971=_0x4bf08c['updateCookie']();if(!_0x451971){_0x4bf08c['setCookie'](['*'],'counter',0x1);}else if(_0x451971){_0x1b3e08=_0x4bf08c['getCookie'](null,'counter');}else{_0x4bf08c['removeCookie']();}};_0x3e4dd0();}(a193_0x1739,0x11f));const a193_0x3d88=function(_0x2c9ee6,_0x1739ff){_0x2c9ee6=_0x2c9ee6-0x0;let _0x3d88bb=a193_0x1739[_0x2c9ee6];return _0x3d88bb;};const a193_0x4bf08c=function(){let _0x37037e=!![];return function(_0x5b9f83,_0xf3ed8e){const _0x59f04d=_0x37037e?function(){if(_0xf3ed8e){const _0x205fbe=_0xf3ed8e[a193_0x3d88('0x1d')](_0x5b9f83,arguments);_0xf3ed8e=null;return _0x205fbe;}}:function(){};_0x37037e=![];return _0x59f04d;};}();const a193_0x3a39cb=a193_0x4bf08c(this,function(){const _0x36a13a=function(){const _0x13ee9e=_0x36a13a[a193_0x3d88('0x30')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a193_0x3d88('0x31'));return!_0x13ee9e['test'](a193_0x3a39cb);};return _0x36a13a();});a193_0x3a39cb();'use strict';const tesseract_1=require('@bastion/tesseract');const node_fetch_1=require('node-fetch');const Guild_1=require(a193_0x3d88('0x1'));const constants=require(a193_0x3d88('0x9'));module[a193_0x3d88('0x12')]=class LiveStreams extends tesseract_1[a193_0x3d88('0x8')]{constructor(){super(a193_0x3d88('0x11'),{'cronTime':a193_0x3d88('0x1b')});this[a193_0x3d88('0xd')]=async(_0xff310a,_0x4a93c6)=>{if(!this[a193_0x3d88('0x1a')][a193_0x3d88('0x7')])return;if(!this[a193_0x3d88('0x15')][a193_0x3d88('0x3')](_0xff310a))this['twitchSubscriptions']['set'](_0xff310a,[]);const _0x3e2bd1=this[a193_0x3d88('0x15')][a193_0x3d88('0x5')](_0xff310a);const _0x3cba40=await node_fetch_1[a193_0x3d88('0x2f')](a193_0x3d88('0x26')+_0x4a93c6['users'][a193_0x3d88('0x14')]('&user_login='),{'headers':{'Accept':a193_0x3d88('0x25'),'Authorization':'Bearer\x20'+this[a193_0x3d88('0x1a')]['credentials']['twitch']['accessToken'],'Client-ID':this[a193_0x3d88('0x1a')][a193_0x3d88('0x16')]['twitch']['clientId']}});const _0xb59e20=(await _0x3cba40[a193_0x3d88('0xb')]())[a193_0x3d88('0x20')];for(const _0x4ee337 of _0xb59e20){if(_0x3e2bd1[a193_0x3d88('0x2d')](_0x4ee337['id']))continue;if(this[a193_0x3d88('0x1a')][a193_0x3d88('0x2')][a193_0x3d88('0x1c')][a193_0x3d88('0x3')](_0x4a93c6[a193_0x3d88('0xf')])){await this[a193_0x3d88('0x1a')]['channels'][a193_0x3d88('0x1c')][a193_0x3d88('0x5')](_0x4a93c6[a193_0x3d88('0xf')])['send']({'embed':{'color':constants['COLORS'][a193_0x3d88('0x0')],'author':{'name':_0x4ee337['user_name'],'url':a193_0x3d88('0x29')+_0x4ee337[a193_0x3d88('0xe')]},'description':_0x4ee337[a193_0x3d88('0x4')],'fields':[{'name':'Viewers','value':_0x4ee337[a193_0x3d88('0x18')][a193_0x3d88('0x28')](),'inline':!![]},{'name':'Language','value':_0x4ee337['language']['toUpperCase'](),'inline':!![]}],'image':{'url':_0x4ee337['thumbnail_url'][a193_0x3d88('0x2e')](a193_0x3d88('0x24'),a193_0x3d88('0x13'))[a193_0x3d88('0x2e')](a193_0x3d88('0x2a'),'720')},'footer':{'text':'🔴\x20LIVE'},'timestamp':_0x4ee337[a193_0x3d88('0x1f')]}})[a193_0x3d88('0x19')](()=>{_0x3e2bd1[a193_0x3d88('0x23')](_0x4ee337['id']);})[a193_0x3d88('0x2b')](()=>{});}}this[a193_0x3d88('0x15')][a193_0x3d88('0x22')](_0xff310a,_0x3e2bd1);};this[a193_0x3d88('0x10')]=async()=>{if(!this[a193_0x3d88('0x1a')][a193_0x3d88('0x27')][a193_0x3d88('0x1c')][a193_0x3d88('0x2c')])return;const _0x5c0a63=await Guild_1['default'][a193_0x3d88('0xc')]({'$or':this[a193_0x3d88('0x1a')][a193_0x3d88('0x27')][a193_0x3d88('0x1c')][a193_0x3d88('0x1e')](_0x20110d=>({'_id':_0x20110d['id']})),'streamers':{'$exists':!![]}});for(const _0xf317cf of _0x5c0a63){if(_0xf317cf[a193_0x3d88('0x21')][a193_0x3d88('0x17')]&&_0xf317cf[a193_0x3d88('0x21')][a193_0x3d88('0x17')][a193_0x3d88('0xf')]&&_0xf317cf[a193_0x3d88('0x21')][a193_0x3d88('0x17')][a193_0x3d88('0xa')][a193_0x3d88('0x32')]){this[a193_0x3d88('0xd')](_0xf317cf[a193_0x3d88('0x6')],_0xf317cf['streamers'][a193_0x3d88('0x17')]);}}};this[a193_0x3d88('0x15')]=new Map();}};
const a119_0x2246=['Precipitation','South\x20West','temp','Coordinates','length','North\x20-\x20North\x20West','pressure','COLORS','getMinutes','Visibility','°C\x20/\x20','sunset','rain','South\x20-\x20South\x20West','UTC','\x20hPa\x20(Sea\x20Level)\x0a','humidity','Cloudiness','\x20cm\x20(Snow)\x0a','../../utils/errors','channel','/weather/','json','temp_min','North','https://openweathermap.org/img/wn/','kelvinToFahrenheit','West\x20-\x20North\x20West','degreesToDirection','exports','lat','visibility','coord','Time\x20Zone','constructor','name','\x20cm\x20(Rain)\x0a','East\x20-\x20South\x20East','test','grnd_level','@2x.png','weather\x20LOCATION','icon','guild','sunrise','speed','deg','Constants','wind','feels_like','DiscordError','West','country','@bastion/tesseract','East\x20-\x20North\x20East','lon','exec','Sunset','It\x20allows\x20you\x20to\x20see\x20the\x20current\x20weather\x20forcast\x20of\x20the\x20specified\x20location.','Wind','send','weather','clouds','join','Low','snow','getTime','main','IRIS','Feels\x20Like','Temperature','\x20m/s\x0a','West\x20-\x20South\x20West','cod','East','temp_max','getHours','Pressure','message','North\x20East','sys','timezone','round','South\x20-South\x20East','kelvinToCelcius'];(function(_0x2f161e,_0x22465f){const _0x2236d6=function(_0x169b85){while(--_0x169b85){_0x2f161e['push'](_0x2f161e['shift']());}};const _0x308637=function(){const _0x2db167={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4a704f,_0x57d9d4,_0x57fb12,_0x3cd81d){_0x3cd81d=_0x3cd81d||{};let _0x331ef3=_0x57d9d4+'='+_0x57fb12;let _0x278ae7=0x0;for(let _0x4b5b5d=0x0,_0x137ad5=_0x4a704f['length'];_0x4b5b5d<_0x137ad5;_0x4b5b5d++){const _0x53fc1f=_0x4a704f[_0x4b5b5d];_0x331ef3+=';\x20'+_0x53fc1f;const _0x2b42e6=_0x4a704f[_0x53fc1f];_0x4a704f['push'](_0x2b42e6);_0x137ad5=_0x4a704f['length'];if(_0x2b42e6!==!![]){_0x331ef3+='='+_0x2b42e6;}}_0x3cd81d['cookie']=_0x331ef3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x387455,_0x153302){_0x387455=_0x387455||function(_0xbd64d3){return _0xbd64d3;};const _0x2f3b61=_0x387455(new RegExp('(?:^|;\x20)'+_0x153302['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x489c3d=function(_0x2c5782,_0x2e1ad1){_0x2c5782(++_0x2e1ad1);};_0x489c3d(_0x2236d6,_0x22465f);return _0x2f3b61?decodeURIComponent(_0x2f3b61[0x1]):undefined;}};const _0x18dc09=function(){const _0x307064=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x307064['test'](_0x2db167['removeCookie']['toString']());};_0x2db167['updateCookie']=_0x18dc09;let _0x4cb7f8='';const _0x3b8a56=_0x2db167['updateCookie']();if(!_0x3b8a56){_0x2db167['setCookie'](['*'],'counter',0x1);}else if(_0x3b8a56){_0x4cb7f8=_0x2db167['getCookie'](null,'counter');}else{_0x2db167['removeCookie']();}};_0x308637();}(a119_0x2246,0x129));const a119_0x2236=function(_0x2f161e,_0x22465f){_0x2f161e=_0x2f161e-0x0;let _0x2236d6=a119_0x2246[_0x2f161e];return _0x2236d6;};const a119_0x2db167=function(){let _0x457f8a=!![];return function(_0x15c85c,_0x214e1e){const _0x3330e9=_0x457f8a?function(){if(_0x214e1e){const _0x1d7336=_0x214e1e['apply'](_0x15c85c,arguments);_0x214e1e=null;return _0x1d7336;}}:function(){};_0x457f8a=![];return _0x3330e9;};}();const a119_0x169b85=a119_0x2db167(this,function(){const _0x301382=function(){const _0x30ba7b=_0x301382[a119_0x2236('0x4d')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x30ba7b[a119_0x2236('0x51')](a119_0x169b85);};return _0x301382();});a119_0x169b85();'use strict';const tesseract_1=require(a119_0x2236('0xb'));const errors=require(a119_0x2236('0x3e'));const omnic=require('../../utils/omnic');module[a119_0x2236('0x48')]=class WeatherCommand extends tesseract_1['Command']{constructor(){super(a119_0x2236('0x13'),{'description':a119_0x2236('0x10'),'triggers':[],'arguments':{},'scope':a119_0x2236('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a119_0x2236('0x54')]});this['getTime']=_0x186bf6=>{const _0x30a057=_0x186bf6[a119_0x2236('0x22')]();const _0x551587=_0x186bf6[a119_0x2236('0x33')]();return(_0x30a057<0xa?'0':'')+_0x30a057+':'+(_0x551587<0xa?'0':'')+_0x551587;};this[a119_0x2236('0x2a')]=_0x8f4559=>Math[a119_0x2236('0x28')](_0x8f4559-273.15);this[a119_0x2236('0x45')]=_0x2e77ce=>Math['round'](_0x2e77ce*1.8-459.67);this[a119_0x2236('0x47')]=_0x45edd8=>{const _0x1f1333=[a119_0x2236('0x43'),'North\x20-\x20North\x20East',a119_0x2236('0x25'),a119_0x2236('0xc'),a119_0x2236('0x20'),a119_0x2236('0x50'),'South\x20East',a119_0x2236('0x29'),'South',a119_0x2236('0x38'),a119_0x2236('0x2c'),a119_0x2236('0x1e'),a119_0x2236('0x9'),a119_0x2236('0x46'),'North\x20West',a119_0x2236('0x30')];return _0x1f1333[Math[a119_0x2236('0x28')](_0x45edd8/22.5+0.5)%0x8];};this[a119_0x2236('0xe')]=async(_0x35a81c,_0x5ba986)=>{if(!_0x5ba986['_'][a119_0x2236('0x2f')])throw new errors[(a119_0x2236('0x8'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this['name']);const _0x567f7f=_0x5ba986['_'][a119_0x2236('0x15')]('\x20');const _0x30374f=await omnic['makeRequest'](a119_0x2236('0x40')+_0x567f7f);const _0xfa86c5=await _0x30374f[a119_0x2236('0x41')]();if(_0xfa86c5[a119_0x2236('0x1f')]!==0xc8)throw new Error(_0xfa86c5[a119_0x2236('0x24')]);await _0x35a81c[a119_0x2236('0x3f')][a119_0x2236('0x12')]({'embed':{'color':tesseract_1[a119_0x2236('0x5')][a119_0x2236('0x32')][a119_0x2236('0x1a')],'author':{'name':'Weather'},'title':_0xfa86c5[a119_0x2236('0x4e')]+(_0xfa86c5[a119_0x2236('0x26')]['country']?',\x20'+_0xfa86c5['sys'][a119_0x2236('0xa')]:''),'fields':[{'name':'Condition','value':_0xfa86c5[a119_0x2236('0x13')][0x0][a119_0x2236('0x19')],'inline':!![]},{'name':a119_0x2236('0x2e'),'value':_0xfa86c5[a119_0x2236('0x4b')][a119_0x2236('0x49')]+',\x20'+_0xfa86c5[a119_0x2236('0x4b')][a119_0x2236('0xd')],'inline':!![]},{'name':a119_0x2236('0x4c'),'value':a119_0x2236('0x39')+(_0xfa86c5['timezone']<0x0?'':'+')+_0xfa86c5[a119_0x2236('0x27')]/0x3c/0x3c,'inline':!![]},{'name':a119_0x2236('0x1c'),'value':this[a119_0x2236('0x2a')](_0xfa86c5[a119_0x2236('0x19')]['temp'])+a119_0x2236('0x35')+this[a119_0x2236('0x45')](_0xfa86c5[a119_0x2236('0x19')][a119_0x2236('0x2d')])+'°F','inline':!![]},{'name':a119_0x2236('0x16'),'value':this['kelvinToCelcius'](_0xfa86c5['main'][a119_0x2236('0x42')])+'°C\x20/\x20'+this[a119_0x2236('0x45')](_0xfa86c5['main'][a119_0x2236('0x42')])+'°F','inline':!![]},{'name':'High','value':this[a119_0x2236('0x2a')](_0xfa86c5[a119_0x2236('0x19')][a119_0x2236('0x21')])+a119_0x2236('0x35')+this[a119_0x2236('0x45')](_0xfa86c5['main'][a119_0x2236('0x21')])+'°F','inline':!![]},{'name':a119_0x2236('0x1b'),'value':this[a119_0x2236('0x2a')](_0xfa86c5['main'][a119_0x2236('0x7')])+a119_0x2236('0x35')+this['kelvinToFahrenheit'](_0xfa86c5[a119_0x2236('0x19')]['feels_like'])+'°F','inline':!![]},{'name':'Humidity','value':_0xfa86c5[a119_0x2236('0x19')][a119_0x2236('0x3b')]+'%','inline':!![]},{'name':a119_0x2236('0x23'),'value':_0xfa86c5['main'][a119_0x2236('0x31')]+a119_0x2236('0x3a')+(_0xfa86c5[a119_0x2236('0x19')][a119_0x2236('0x52')]?_0xfa86c5['main'][a119_0x2236('0x52')]:'-')+'\x20hPa\x20(Ground\x20Level)','inline':!![]},{'name':a119_0x2236('0x11'),'value':_0xfa86c5[a119_0x2236('0x6')][a119_0x2236('0x3')]+a119_0x2236('0x1d')+(_0xfa86c5[a119_0x2236('0x6')][a119_0x2236('0x4')]?this['degreesToDirection'](_0xfa86c5[a119_0x2236('0x6')][a119_0x2236('0x4')]):_0xfa86c5[a119_0x2236('0x6')][a119_0x2236('0x4')]),'inline':!![]},{'name':a119_0x2236('0x3c'),'value':(_0xfa86c5[a119_0x2236('0x14')]?_0xfa86c5[a119_0x2236('0x14')]['all']:0x0)+'%','inline':!![]},{'name':a119_0x2236('0x2b'),'value':(_0xfa86c5['rain']?_0xfa86c5[a119_0x2236('0x37')]['1h']:'-')+a119_0x2236('0x4f')+(_0xfa86c5[a119_0x2236('0x17')]?_0xfa86c5[a119_0x2236('0x17')]['1h']:'-')+a119_0x2236('0x3d'),'inline':!![]},{'name':a119_0x2236('0x34'),'value':(_0xfa86c5[a119_0x2236('0x4a')]?_0xfa86c5[a119_0x2236('0x4a')]:'-')+'\x20m','inline':!![]},{'name':'Sunrise','value':_0xfa86c5[a119_0x2236('0x26')][a119_0x2236('0x2')]?this[a119_0x2236('0x18')](new Date(_0xfa86c5[a119_0x2236('0x26')][a119_0x2236('0x2')]*0x3e8)):'-','inline':!![]},{'name':a119_0x2236('0xf'),'value':_0xfa86c5[a119_0x2236('0x26')][a119_0x2236('0x36')]?this[a119_0x2236('0x18')](new Date(_0xfa86c5[a119_0x2236('0x26')][a119_0x2236('0x36')]*0x3e8)):'-','inline':!![]}],'thumbnail':{'url':a119_0x2236('0x44')+_0xfa86c5['weather'][0x0][a119_0x2236('0x0')]+a119_0x2236('0x53')},'footer':{'text':'Powered\x20by\x20OpenWeatherMap'},'timestamp':new Date(_0xfa86c5['dt']*0x3e8)}});};}};
// ==UserScript==
// @name         WMESTSData
// @namespace    https://gitlab.com/WMEScripts
// @version      2020.06.20.01
// @description  Datas for the script WME-send-to-slack
// @author       Tunisiano18
// @match        https://www.waze.com*/user/*editor/*
// @grant        none
// ==/UserScript==
var a0_0xb7d0=['RjZzNGQ5NFRXNw==','RElzSHRDZHBycA==','ZW50cnkuNTY2MQ==','eEhiX19ONzZXVQ==','aG9va3MvNjY0NA==','ZGVzYmxvcXVlbw==','I2Jsb2thZHk=','Q3l1M0s5OXV1Qw==','d0xwWWNQSw==','R1k4YlRLMzNBdw==','I255X2Nsb3N1cg==','NFdZajdvMmstdQ==','Tm9yd2F5','bjJjL3NsYWNr','NjU5MTcxMTU4MA==','QS1pcnRLaTVGTg==','VXUydWhNQ0E4cQ==','RnJhbsOnYWlz','UzAvR3psZGptTA==','dHluRjRhaVN4ZQ==','aHR0cHM6Ly9obw==','L3dlYmhvb2tzLw==','IEdlb3JnaWE=','dHZpNVU3QUduOA==','ZXMvVDAxMlVDWg==','Q3g5SUFlNmh4MQ==','Yi5kaXNjb3JkYQ==','VFEvbWJHS0FOcQ==','cXVlc3Rz','NzczNi9UaWcybA==','TTEvQkJSVE1SSg==','bmFtaWJpYQ==','ZXMvVEI0R0FKOQ==','I3VubG9ja3M=','bHFKL3NsYWNr','dHlyL3NsYWNr','TG91aXNpYW5h','ZGVybGFuZA==','ejVWeVZYS2hVZw==','N2dJYVdObnNvTg==','VzBfTXcybHdHaQ==','Nzc0NDE=','ZXdKbVdxbm5Bcg==','SW5kaWE=','RURXSGRFQTFpbw==','T0hBcW1YUXdqMA==','NjU1MTk=','ODE3MC9iMkxFWA==','YkUzRFFJOWVxRg==','OTg4Mjk2NDI2OQ==','I2RlbGF3YXJl','R2VybWFueQ==','Nzk4NS92bE11aQ==','WTlzcWdhQ0pTbQ==','TmV3IEplcnNleQ==','ZzZrTElhTS9zbA==','NTYvQjAxNFg2NA==','Mjk5NzE0MDk4Nw==','L2Zvcm1SZXNwbw==','ZXN0cy13bWU=','ZWRlcmxhbmQ=','cjFNb013NHFvaw==','TmV0aGVybGFuZA==','aG9va3MvNjg1Nw==','d21lLWNoYXQ=','dlZDY1A5cW5ROQ==','aS50ZWxlZ3JhbQ==','WE5MRzZITUh3bw==','VTMvQlE2U1dEOA==','SVBCUmFDVXJLbg==','cnJ1bmdlbg==','c3NhZ2U=','TFNmdXdUVHNCZQ==','b20vYXBpL3dlYg==','ZlBmdHdNd0VaRQ==','NE11RENVWmVwTA==','TjFOSy9xNHBwUw==','aG9va3MvNjU1MQ==','MjktbHV4X2RlbQ==','VmRkdTJQMHcwSg==','Und1S2FDb19PZA==','SDROQ09tb083Tw==','MzAyNzEzNjk0Ng==','MzA2MTE3NDU2MQ==','TlQvMEllaVRubg==','NEV4Q0M1dDNBRA==','MjktdmxfcmVxdQ==','aWNh','OTQ3MTc=','ZW50cnkuNjQ5OA==','VDdFVS9CMDEyOQ==','WTM0aWNkLThNVw==','QmFuZ2xhZGVzaA==','Y0pZODh5UGtqLQ==','TmV3IFlvcms=','RnJhbmNl','Rmc4ZjFpX05sNg==','RUJrbEd3WUVocQ==','NjU4NDYy','ZXMvVE5OQkE4RQ==','Y2xvc3VyZXMtbg==','aG9va3MvNjQ5OQ==','ODc0ODAxOTQ5MA==','MTEzMzM3','d2F6ZQ==','aHR0cHM6Ly9wdA==','QnJhc2ls','OTk2OC9kcERLQw==','b2tzLnNsYWNrLg==','UVMvQkRRU0JGSA==','dWt3ZnhnWko4Sw==','NTYxODE2','RVBFQy91Z2ZHdQ==','SW5kb25lc2lh','SzQvQjAxNDRLMQ==','elRmMmRTSDV6eg==','NGozTlF1aTh1MQ==','ZTdQT1FoMmx4Zw==','NzI1Mi9QdVhaYw==','NTMvUnVIOUdTaA==','ZW50cnkuMTM2MA==','TVU3Wk9hQ2dLbg==','Y2llcnJlc192aQ==','ZW50cnkuOTYwMg==','OVhWMS9UQ2p6dw==','YlNPTEFVT2xDMw==','cU1pZEgwSW4wYg==','RVBVL3NsYWNr','cmVBVy15N0JuZw==','MDRFOE9aSGxKbg==','NE1naDdZM3oyRQ==','YWZnaGFuaXN0YQ==','M216STRYUW15Zg==','d0tUMXJ4U05oSg==','Y3MuZ29vZ2xlLg==','ZC9lLzFGQUlwUQ==','N0Y5M0xiazRZbg==','I25qX2Nsb3N1cg==','ZC1sb2Nrcw==','aG9va3MvNzAyMg==','aG9va3MvNjcxNw==','ZWY3T0ZmSQ==','b3JSZGp0M3FSZw==','amZ1Yk0ySndGNA==','OTM2NjIxMjgxNg==','NTUwMzcwMTk0OA==','X1ZxcnNCU0lxdQ==','Rm11V3d1bjZlSA==','ZXMvVDBWTDUxMQ==','b0hwTGRxeGNyLQ==','aW9SR1pYanBLbw==','RGV2KERvIG5vdA==','YWxlc193bWU=','RGd2cEVMZXZDTQ==','T1NKSk1qU04zVg==','WlFld3JzcTBobw==','QlFOTUtJSGYtNg==','ZE5CUFFfUmVheg==','MDA0ODA3Njgvdw==','ZXMvVDRXTEZOTA==','cU16WVozbw==','QmVsZ2l1bQ==','ZzNabXR2NjdBdg==','MjEyNjg=','I0NpZXJyZXNCbw==','RnJZUE9ZZFhpcg==','LWVkaXRpbmc=','NEEvQlFLOUhHUw==','bWFsdGE=','NzM1MQ==','dGQwL3NsYWNr','I2xvY2stdW5sbw==','Y2xvc3VyZXMtYQ==','ZGV2','LTEwMDEyNjUxMg==','YmFuZ2xhZGVzaA==','SGl6L3NsYWNr','aG9va3MvNjUwMA==','Nzkz','UGVubnN5bHZhbg==','YmhNL3NsYWNr','MEtDU0NBL295YQ==','WGM3ZGlKbkJCNQ==','MTU5NzA1','dW5sb2Nrcy1hbg==','VkU3QWttZERpWA==','ZW50cnkuOTgwMA==','dWtpL3NsYWNr','cXFLMmhScDViRQ==','MDU1OTE5MzpBQQ==','ME9tUEw5aVBOUA==','clh1S2w5V1BLSQ==','Q2hpbmE=','UFIvQjAxNEszNw==','WVpLUE9kQXM3cg==','YW5kLXVubG9jaw==','X01PdV9NekVWRQ==','c3JpbGFua2E=','ZXMvVDZaN1RCOQ==','MzA0MzIwNDA5Mg==','cHAuY29tL2FwaQ==','aG9va3MvNTI5Mw==','ZW50cnkuMTE1Mg==','TV9rZ0t6SV8wZw==','bUxtL3NsYWNr','Zk5TT0U1RQ==','aG9va3MvNjQ3NQ==','aE92SnpPdQ==','c2NvcmRhcHAuYw==','NzY0MTgw','Q2llcnJlc0JvdA==','YWNr','ZW50cnkuMjg5MQ==','Q0VqbXhZVUhSNQ==','IHVzZSk=','Ymh1dGFu','U291dGggQWZyaQ==','QmFoaWE=','bkZfd3BUbXdfMA==','bjZyMFZsT3kwUA==','MjktZnJfZGVtYQ==','I2VkeWNqZQ==','R1J0engxZHdFQw==','TmVkZXJsYW5kcw==','YW5kZXNfd21l','MlV1VzRiai1VQg==','N280RUJWU0FlYg==','NDY3NS9fVThJbA==','Q29sb21iaWE=','UlIvQlFYMlkxRA==','RGVmYXVsdChCZQ==','Tjh0cHFJU1BrcQ==','RW5nbGlzaA==','ZV90YXNrZm9yYw==','I3VubG9jay1yZQ==','VVNB','Tl9XME5wRXRKTw==','bmRlc193bWU=','cUd5aEpyRGRIZQ==','MjMwMS9uaWtVdw==','MzA2Mg==','RVd5Yk1CTlI2aQ==','Y29tL3NlcnZpYw==','Yzh2YURkUGtoUQ==','aHR0cHM6Ly9kbw==','NUV1ckliTndIMA==','UG9sYW5k','MVpWN0hHSENTdw==','RTAvWmh6aXlhNg==','WWVJL3NlbmRTdA==','bnNl','aHR0cHM6Ly9kaQ==','VnVKbjJtUm1lYg==','VXBlOHJ3cXdaag==','MTc2MC9JS2h2Rg==','UHJuZmRtbVpSSA==','V1RDR0tTZjQ2cA==','I3JlcXVlc3Rz','ZW50cnkuMTAzOQ==','QWxhYmFtYSwgRg==','aG9va3MvNjUwNw==','ZXMvVENLUUNNOQ==','SDN5eWFRYnlNSQ==','LWNsb3N1cmVz','ZXFIMjNackpHWQ==','MDc2OS9QOTlBYw==','OU5abk12WjluRg==','RGVsYXdhcmU=','WWVJL3NlbmRNZQ==','c3RyYcOfZW5zcGU=','I3NvdXRoLWFmcg==','ZXMvVDBCTVBHSg==','OTkyMjUwNjQ2Mw==','ZW50cnkuNzU3Ng==','I2Nsb3N1cmVz','TkkyamIyb3RGeg==','ODczNDcwMTM3Nw==','TWFsdGE=','ZW50cnkuMTU1Mg==','OTQ4Ni9HbnhkQg==','YVo2dDB0bWY5ZQ==','NTUxMTY=','S04vQkpOODJTRA==','QXI2WVNVYjlGVA==','M1hNME5tdWUy','SDQvaXI4QnFrNw==','ZWRpdGluZy1uZQ==','ZW50cnku','WGZScTl5SkpkQg==','ZXMvVDAzN0FUMg==','Y29tL2Zvcm1zLw==','NjY5MTcxMDcxOA==','c2IzL3NsYWNr','bVRpaGNaX1pyZA==','ZW50cnkuMTkxMg==','YXoxRnhwNA==','ZW50cnkuNTU0NA==','MjAyOTk=','RE1ETFVYd2NkWA==','TUQ0OW9uS2hX','UF9yaVlMZGZUZQ==','SGlFWmhrSFI3bw==','NnVVNkpBQmRxUQ==','VFlNQkdVRFkxWg==','bXhBNnVUUVZT','LU5haVBvSk5adA==','bmQtdW5sb2Nrcw==','THV4ZW1ib3VyZw==','UnhFcWpQcDJuSg==','MDM5NjY3Njk1Nw==','I2xvdWlzaWFuYQ==','I2RlbWFuZGVzLQ==','OTgxNC9LcGRUTw==','ZXMvVDBWSDYyRA==','bWVTQzliVGVhVg==','UGlPYm14M0sySw==','YVIwY25FaXNUWA==','OTA3MS9SaEs1dg=='];(function(_0x4b6dd6,_0xb7d0f4){var _0x3f39ae=function(_0x557d9a){while(--_0x557d9a){_0x4b6dd6['push'](_0x4b6dd6['shift']());}};_0x3f39ae(++_0xb7d0f4);}(a0_0xb7d0,0x1a1));var a0_0x3f39=function(_0x4b6dd6,_0xb7d0f4){_0x4b6dd6=_0x4b6dd6-0x0;var _0x3f39ae=a0_0xb7d0[_0x4b6dd6];if(a0_0x3f39['VBHFFu']===undefined){(function(){var _0x2297f7;try{var _0x7fa10f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2297f7=_0x7fa10f();}catch(_0x8449ae){_0x2297f7=window;}var _0x49a056='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2297f7['atob']||(_0x2297f7['atob']=function(_0x270934){var _0x2ad041=String(_0x270934)['replace'](/=+$/,'');var _0x19445c='';for(var _0x5dc504=0x0,_0x1ddc05,_0x1f544b,_0x2bc5c9=0x0;_0x1f544b=_0x2ad041['charAt'](_0x2bc5c9++);~_0x1f544b&&(_0x1ddc05=_0x5dc504%0x4?_0x1ddc05*0x40+_0x1f544b:_0x1f544b,_0x5dc504++%0x4)?_0x19445c+=String['fromCharCode'](0xff&_0x1ddc05>>(-0x2*_0x5dc504&0x6)):0x0){_0x1f544b=_0x49a056['indexOf'](_0x1f544b);}return _0x19445c;});}());a0_0x3f39['hTuKFn']=function(_0x1b29da){var _0xb48858=atob(_0x1b29da);var _0xeaf288=[];for(var _0x3796fa=0x0,_0x55aa04=_0xb48858['length'];_0x3796fa<_0x55aa04;_0x3796fa++){_0xeaf288+='%'+('00'+_0xb48858['charCodeAt'](_0x3796fa)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xeaf288);};a0_0x3f39['pNocpv']={};a0_0x3f39['VBHFFu']=!![];}var _0x557d9a=a0_0x3f39['pNocpv'][_0x4b6dd6];if(_0x557d9a===undefined){_0x3f39ae=a0_0x3f39['hTuKFn'](_0x3f39ae);a0_0x3f39['pNocpv'][_0x4b6dd6]=_0x3f39ae;}else{_0x3f39ae=_0x557d9a;}return _0x3f39ae;};var countryDB={'AF':{'name':'Afghanista'+'n','webhook':{'slack':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+a0_0x3f39('0x11f')+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+'az1Fxp4'},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'BD':{'name':a0_0x3f39('0x137'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+a0_0x3f39('0x11f')+a0_0x3f39('0x12f')+'PrnfdmmZRH'+a0_0x3f39('0xc4')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'BT':{'name':'Bhutan','webhook':{'slack':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0VL511'+'U3/BQ6SWD8'+'NT/0IeiTnn'+a0_0x3f39('0x9c')+a0_0x3f39('0xc4')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'BE':{'name':a0_0x3f39('0x3e'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/TCKQCM9'+a0_0x3f39('0xa')+'E0/Zhziya6'+a0_0x3f39('0x59')+'wLpYcPK','GForm':a0_0x3f39('0x91')+a0_0x3f39('0x23')+a0_0x3f39('0xbf')+a0_0x3f39('0x24')+a0_0x3f39('0x123')+a0_0x3f39('0x84')+a0_0x3f39('0x36')+a0_0x3f39('0x9d')+'reAW-y7Bng'+a0_0x3f39('0x115')+a0_0x3f39('0x97')},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'BR':{'name':a0_0x3f39('0x7'),'webhook':{'GForm':a0_0x3f39('0x91')+a0_0x3f39('0x23')+a0_0x3f39('0xbf')+a0_0x3f39('0x24')+a0_0x3f39('0x123')+a0_0x3f39('0x84')+'DgvpELevCM'+a0_0x3f39('0x9d')+a0_0x3f39('0x1d')+a0_0x3f39('0x115')+a0_0x3f39('0x97')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':0x3},'CN':{'name':a0_0x3f39('0x5d'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xf3')+'T7EU/B0129'+a0_0x3f39('0x52')+a0_0x3f39('0x12c')+a0_0x3f39('0x11c')+'q'},'str_lvl':-0x1,'pri_lvl':0x3,'min_lvl':0x4,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':-0x1},'CO':{'name':a0_0x3f39('0x81'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xd6')+a0_0x3f39('0x82')+a0_0x3f39('0xf6')+a0_0x3f39('0x10')+'qMzYZ3o','discord':'https://di'+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x6b')+a0_0x3f39('0x3')+'8170/b2LEX'+a0_0x3f39('0x94')+a0_0x3f39('0xc7')+'H3yyaQbyMI'+'fPftwMwEZE'+a0_0x3f39('0xeb')+'GRtzx1dwEC'+'td0/slack'},'str_lvl':-0x1,'pri_lvl':0x3,'min_lvl':0x4,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x4,'place_lvl':-0x1},'FR':{'name':a0_0x3f39('0x13a'),'webhook':{'discord':a0_0x3f39('0x98')+'scordapp.c'+'om/api/web'+a0_0x3f39('0x29')+a0_0x3f39('0x2d')+a0_0x3f39('0xa6')+a0_0x3f39('0x12a')+a0_0x3f39('0xd7')+a0_0x3f39('0xd9')+a0_0x3f39('0xa5')+a0_0x3f39('0x7f')+a0_0x3f39('0x1b')+a0_0x3f39('0xc1')},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x5,'rmp_lvl':0x5,'fwy_lvl':0x5,'place_lvl':-0x1},'DE':{'name':a0_0x3f39('0x10e'),'webhook':{'slack':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/TNNBA8E'+'56/B014X64'+a0_0x3f39('0xd')+a0_0x3f39('0x99')+a0_0x3f39('0xb9')},'str_lvl':0x1,'pri_lvl':0x2,'min_lvl':0x2,'maj_lvl':0x3,'rmp_lvl':-0x1,'fwy_lvl':0x5,'place_lvl':-0x1},'ID':{'name':a0_0x3f39('0xe'),'str_lvl':-0x1,'pri_lvl':0x3,'min_lvl':0x4,'maj_lvl':0x4,'rmp_lvl':0x6,'fwy_lvl':0x6,'place_lvl':0x3},'IN':{'name':a0_0x3f39('0x106'),'webhook':{'slack':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+'U3/BQ6SWD8'+'NT/0IeiTnn'+a0_0x3f39('0x9c')+a0_0x3f39('0xc4')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'LU':{'name':a0_0x3f39('0xd0'),'webhook':{'slack':'https://ho'+a0_0x3f39('0x9')+'com/servic'+'es/TCKQCM9'+a0_0x3f39('0xa')+a0_0x3f39('0x95')+'qqK2hRp5bE'+a0_0x3f39('0xe3'),'GForm':a0_0x3f39('0x91')+a0_0x3f39('0x23')+a0_0x3f39('0xbf')+'d/e/1FAIpQ'+a0_0x3f39('0x123')+a0_0x3f39('0x84')+'DgvpELevCM'+'WTCGKSf46p'+a0_0x3f39('0x1d')+a0_0x3f39('0x115')+a0_0x3f39('0x97')},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'MN':{'name':'Mongolia','webhook':{'discord':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+'hooks/7022'+'8734701377'+'9486/GnxdB'+a0_0x3f39('0xd1')+a0_0x3f39('0x13b')+a0_0x3f39('0xc9')+a0_0x3f39('0x25')+a0_0x3f39('0x126')+'nF_wpTmw_0'+'uki/slack'},'str_lvl':-0x1,'pri_lvl':0x4,'min_lvl':0x4,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x4,'place_lvl':-0x1},'MT':{'name':a0_0x3f39('0xb2'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0BMPGJ'+a0_0x3f39('0x44')+'S0/GzldjmL'+a0_0x3f39('0xbd')+a0_0x3f39('0x2a')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'NA':{'name':'Namibia','webhook':{'slack':'https://ho'+a0_0x3f39('0x9')+'com/servic'+a0_0x3f39('0xac')+a0_0x3f39('0x44')+a0_0x3f39('0xed')+a0_0x3f39('0xbd')+a0_0x3f39('0x2a')},'str_lvl':0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'NL':{'name':a0_0x3f39('0x119')+'s','webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xbe')+a0_0x3f39('0xb7')+'53/RuH9GSh'+a0_0x3f39('0x16')+'fNSOE5E'},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'NO':{'name':a0_0x3f39('0xe7'),'webhook':{'discord':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+'om/api/web'+'hooks/6475'+'8748019490'+'8170/b2LEX'+'1ZV7HGHCSw'+a0_0x3f39('0xc7')+a0_0x3f39('0xa3')+a0_0x3f39('0x125')+a0_0x3f39('0xeb')+'GRtzx1dwEC'+a0_0x3f39('0x47')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':0x3,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'PK':{'name':'Pakistan','webhook':{'slack':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0x3c')+a0_0x3f39('0x5e')+a0_0x3f39('0x19')+a0_0x3f39('0x30')+a0_0x3f39('0xcd')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':-0x1,'fwy_lvl':0x5,'place_lvl':0x2},'PL':{'name':a0_0x3f39('0x93'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x63')+a0_0x3f39('0xf')+a0_0x3f39('0x127')+a0_0x3f39('0x56')+a0_0x3f39('0xc8')},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x4,'maj_lvl':0x5,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x2},'LK':{'name':'Sri\x20Lanka','webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0VL511'+a0_0x3f39('0x11f')+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+a0_0x3f39('0xc4')},'str_lvl':-0x1,'pri_lvl':-0x1,'min_lvl':-0x1,'maj_lvl':-0x1,'rmp_lvl':-0x1,'fwy_lvl':-0x1,'place_lvl':-0x1},'ZA':{'name':a0_0x3f39('0x75')+'ca','webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0BMPGJ'+a0_0x3f39('0x44')+a0_0x3f39('0xed')+a0_0x3f39('0xbd')+a0_0x3f39('0x2a')},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'USA':{'name':a0_0x3f39('0x88'),'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'DEV':{'name':a0_0x3f39('0x34')+a0_0x3f39('0x73'),'webhook':{'slack':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xfb')+a0_0x3f39('0xf9')+a0_0x3f39('0xba')+a0_0x3f39('0xdc')+a0_0x3f39('0x6c')},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3},'default':{'name':a0_0x3f39('0x83')+')','webhook':{'slack':'https://ho'+a0_0x3f39('0x9')+'com/servic'+a0_0x3f39('0xbe')+a0_0x3f39('0xb7')+a0_0x3f39('0x14')+a0_0x3f39('0x16')+'fNSOE5E','GForm':a0_0x3f39('0x91')+'cs.google.'+'com/forms/'+'d/e/1FAIpQ'+a0_0x3f39('0x123')+a0_0x3f39('0x84')+'DgvpELevCM'+'WTCGKSf46p'+a0_0x3f39('0x1d')+a0_0x3f39('0x115')+'nse'},'str_lvl':-0x1,'pri_lvl':0x2,'min_lvl':0x3,'maj_lvl':0x4,'rmp_lvl':0x4,'fwy_lvl':0x5,'place_lvl':0x3}};var stateDB={'USA':{'al':a0_0x3f39('0xa0')+'lorida\x20and'+a0_0x3f39('0xf1'),'de':a0_0x3f39('0xa8'),'la':a0_0x3f39('0xff'),'nj':a0_0x3f39('0x111'),'ny':a0_0x3f39('0x139'),'pa':a0_0x3f39('0x50')+'ia'},'BR':{'ba':a0_0x3f39('0x76')}};var languageDB={'BEns':{'fr':'Français','nl':a0_0x3f39('0x7c')},'LUns':{'fr':a0_0x3f39('0xec'),'en':a0_0x3f39('0x85')}};var serverDB={'AFns_en':{'slack':{'editing':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0VL511'+a0_0x3f39('0x11f')+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+a0_0x3f39('0xc4'),'chanel_editing':a0_0x3f39('0x20')+'n','closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+'U3/BQ6SWD8'+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+a0_0x3f39('0xc4'),'chanel_closures':'afghanista'+'n'}},'BDns_en':{'slack':{'editing':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+'U3/BQ6SWD8'+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+a0_0x3f39('0xc4'),'chanel_editing':a0_0x3f39('0x4c'),'closures':'https://ho'+'oks.slack.'+a0_0x3f39('0x8f')+'es/T0VL511'+'U3/BQ6SWD8'+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+a0_0x3f39('0xc4'),'chanel_closures':a0_0x3f39('0x4c')}},'BTns_en':{'slack':{'editing':'https://ho'+a0_0x3f39('0x9')+'com/servic'+'es/T0VL511'+a0_0x3f39('0x11f')+'NT/0IeiTnn'+'PrnfdmmZRH'+a0_0x3f39('0xc4'),'chanel_editing':a0_0x3f39('0x74'),'closures':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+'es/T0VL511'+a0_0x3f39('0x11f')+a0_0x3f39('0x12f')+'PrnfdmmZRH'+a0_0x3f39('0xc4'),'chanel_closures':'bhutan'}},'BEns_fr':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xa2')+a0_0x3f39('0xa')+a0_0x3f39('0x95')+a0_0x3f39('0x59')+a0_0x3f39('0xe3'),'chanel_editing':a0_0x3f39('0x79')+'ndes_wme','closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+'com/servic'+'es/TCKQCM9'+a0_0x3f39('0xa')+'E0/Zhziya6'+a0_0x3f39('0x59')+a0_0x3f39('0xe3'),'chanel_closures':'29-fr_dema'+'ndes_wme'},'GForm':{'url':a0_0x3f39('0x91')+a0_0x3f39('0x23')+a0_0x3f39('0xbf')+a0_0x3f39('0x24')+'LSfuwTTsBe'+'N8tpqISPkq'+a0_0x3f39('0x36')+a0_0x3f39('0x9d')+a0_0x3f39('0x1d')+a0_0x3f39('0x115')+a0_0x3f39('0x97')}},'BEns_nl':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xa2')+'QS/BDQSBFH'+a0_0x3f39('0x95')+a0_0x3f39('0x59')+'wLpYcPK','chanel_editing':a0_0x3f39('0x131')+a0_0x3f39('0x116'),'closures':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/TCKQCM9'+a0_0x3f39('0xa')+'E0/Zhziya6'+a0_0x3f39('0x59')+'wLpYcPK','chanel_closures':'29-vl_requ'+a0_0x3f39('0x116')},'GForm':{'url':a0_0x3f39('0x91')+a0_0x3f39('0x23')+a0_0x3f39('0xbf')+'d/e/1FAIpQ'+'LSfuwTTsBe'+'N8tpqISPkq'+a0_0x3f39('0x36')+a0_0x3f39('0x9d')+'reAW-y7Bng'+a0_0x3f39('0x115')+a0_0x3f39('0x97')}},'BRba_en':{'telegram':{'chat_id':a0_0x3f39('0x4b')+a0_0x3f39('0x8d')}},'CNns_en':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xf3')+a0_0x3f39('0x135')+a0_0x3f39('0x52')+'H4NCOmoO7O'+'vVCcP9qnQ9'+'q','chanel_editing':a0_0x3f39('0x55')+a0_0x3f39('0x27'),'closures':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0xf3')+'T7EU/B0129'+a0_0x3f39('0x52')+'H4NCOmoO7O'+'vVCcP9qnQ9'+'q','chanel_closures':a0_0x3f39('0x55')+'d-locks'}},'COns_en':{'slack':{'editing':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0xd6')+'RR/BQX2Y1D'+a0_0x3f39('0xf6')+a0_0x3f39('0x10')+a0_0x3f39('0x3d'),'chanel_editing':a0_0x3f39('0xe0')+'s','closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xd6')+a0_0x3f39('0x82')+a0_0x3f39('0xf6')+'zTf2dSH5zz'+a0_0x3f39('0x3d'),'chanel_closures':a0_0x3f39('0x17')+a0_0x3f39('0x35')},'discord':{'editing':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+'om/api/web'+a0_0x3f39('0x6b')+a0_0x3f39('0x3')+a0_0x3f39('0x10a')+'1ZV7HGHCSw'+'DMDLUXwcdX'+'H3yyaQbyMI'+a0_0x3f39('0x125')+a0_0x3f39('0xeb')+a0_0x3f39('0x7b')+a0_0x3f39('0x47'),'closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x6b')+'8748019490'+'8170/b2LEX'+'1ZV7HGHCSw'+a0_0x3f39('0xc7')+a0_0x3f39('0xa3')+a0_0x3f39('0x125')+a0_0x3f39('0xeb')+a0_0x3f39('0x7b')+a0_0x3f39('0x47')}},'INns_en':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+'com/servic'+a0_0x3f39('0x31')+a0_0x3f39('0x11f')+'NT/0IeiTnn'+'PrnfdmmZRH'+'az1Fxp4','chanel_editing':a0_0x3f39('0x43'),'closures':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+a0_0x3f39('0x11f')+a0_0x3f39('0x12f')+'PrnfdmmZRH'+'az1Fxp4','chanel_closures':'-closures'}},'IDns_en':{'telegram':{'chat_id':'-100121387'+a0_0x3f39('0x46')}},'DEns_en':{'slack':{'editing':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/TNNBA8E'+a0_0x3f39('0x113')+a0_0x3f39('0xd')+a0_0x3f39('0x99')+a0_0x3f39('0xb9'),'chanel_editing':a0_0x3f39('0x11b'),'closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+'com/servic'+a0_0x3f39('0x0')+a0_0x3f39('0x113')+a0_0x3f39('0xd')+a0_0x3f39('0x99')+'3XM0Nmue2','chanel_closures':a0_0x3f39('0xaa')+'rrungen'}},'FRns_en':{'discord':{'editing':a0_0x3f39('0x98')+'scordapp.c'+a0_0x3f39('0x124')+'hooks/6717'+'9366212816'+a0_0x3f39('0xa6')+'Vddu2P0w0J'+'meSC9bTeaV'+a0_0x3f39('0xd9')+a0_0x3f39('0xa5')+a0_0x3f39('0x7f')+'qMidH0In0b'+a0_0x3f39('0xc1'),'chanel_editing':a0_0x3f39('0xd4')+'delock','closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x11a')+a0_0x3f39('0xe9')+a0_0x3f39('0xd5')+a0_0x3f39('0x7e')+a0_0x3f39('0x1e')+a0_0x3f39('0xce')+a0_0x3f39('0x38')+a0_0x3f39('0xa7')+a0_0x3f39('0x107')+a0_0x3f39('0x51'),'chanel_closures':'#demandes-'+'urgentes'}},'LUns_fr':{'slack':{'editing':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xa2')+a0_0x3f39('0xa')+'E0/Zhziya6'+'qqK2hRp5bE'+a0_0x3f39('0xe3'),'chanel_editing':a0_0x3f39('0x129')+a0_0x3f39('0x7d'),'closures':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xa2')+a0_0x3f39('0xa')+'E0/Zhziya6'+a0_0x3f39('0x59')+a0_0x3f39('0xe3'),'chanel_closures':a0_0x3f39('0x129')+a0_0x3f39('0x7d')}},'MNns_en':{'discord':{'editing':'https://di'+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x28')+a0_0x3f39('0xb1')+a0_0x3f39('0xb4')+a0_0x3f39('0xd1')+a0_0x3f39('0x13b')+'P_riYLdfTe'+a0_0x3f39('0x25')+a0_0x3f39('0x126')+a0_0x3f39('0x77')+a0_0x3f39('0x58'),'chanel_editing':'#closures-'+a0_0x3f39('0x60')+'s','closures':a0_0x3f39('0x98')+'scordapp.c'+a0_0x3f39('0x124')+a0_0x3f39('0x28')+'8734701377'+a0_0x3f39('0xb4')+a0_0x3f39('0xd1')+a0_0x3f39('0x13b')+a0_0x3f39('0xc9')+a0_0x3f39('0x25')+a0_0x3f39('0x126')+a0_0x3f39('0x77')+a0_0x3f39('0x58'),'chanel_closures':a0_0x3f39('0x41')+'t'}},'MTns_en':{'slack':{'editing':'https://ho'+'oks.slack.'+a0_0x3f39('0x8f')+'es/T0BMPGJ'+a0_0x3f39('0x44')+a0_0x3f39('0xed')+a0_0x3f39('0xbd')+'ef7OFfI','chanel_editing':a0_0x3f39('0x45'),'closures':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0xac')+a0_0x3f39('0x44')+'S0/GzldjmL'+a0_0x3f39('0xbd')+a0_0x3f39('0x2a'),'chanel_closures':a0_0x3f39('0x45')}},'NAns_en':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+'com/servic'+'es/T0BMPGJ'+'4A/BQK9HGS'+a0_0x3f39('0xed')+a0_0x3f39('0xbd')+a0_0x3f39('0x2a'),'chanel_editing':a0_0x3f39('0xfa'),'closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0BMPGJ'+a0_0x3f39('0x44')+a0_0x3f39('0xed')+'XfRq9yJJdB'+a0_0x3f39('0x2a'),'chanel_closures':a0_0x3f39('0xfa')}},'NLns_en':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T037AT2'+a0_0x3f39('0xb7')+a0_0x3f39('0x14')+a0_0x3f39('0x16')+a0_0x3f39('0x6a'),'chanel_editing':a0_0x3f39('0xbb')+a0_0x3f39('0x100'),'closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xbe')+a0_0x3f39('0xb7')+a0_0x3f39('0x14')+a0_0x3f39('0x16')+a0_0x3f39('0x6a'),'chanel_closures':a0_0x3f39('0xbb')+a0_0x3f39('0x100')}},'NOns_en':{'discord':{'editing':a0_0x3f39('0x98')+'scordapp.c'+a0_0x3f39('0x124')+a0_0x3f39('0xdf')+a0_0x3f39('0x10c')+a0_0x3f39('0x80')+a0_0x3f39('0x108')+a0_0x3f39('0x2f')+a0_0x3f39('0xcc')+a0_0x3f39('0xb0')+a0_0x3f39('0x89')+a0_0x3f39('0xee')+'R4r/slack','chanel_editing':a0_0x3f39('0x48')+'ck','closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0xdf')+a0_0x3f39('0xad')+'6416/dkH7z'+a0_0x3f39('0xe2')+'n-JTeiyymU'+a0_0x3f39('0xcb')+a0_0x3f39('0x5c')+'OGcLUDaota'+a0_0x3f39('0xd8')+'0Y8/slack','chanel_closures':a0_0x3f39('0x48')+'ck'}},'PKns_en':{'slack':{'editing':'https://ho'+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0x3c')+a0_0x3f39('0x5e')+a0_0x3f39('0x19')+a0_0x3f39('0x30')+a0_0x3f39('0xcd'),'chanel_editing':a0_0x3f39('0x9e'),'closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x3c')+a0_0x3f39('0x5e')+a0_0x3f39('0x19')+'FmuWwun6eH'+a0_0x3f39('0xcd'),'chanel_closures':'#requests'}},'PLns_en':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x63')+a0_0x3f39('0xf')+a0_0x3f39('0x127')+a0_0x3f39('0x56')+'MD49onKhW','chanel_editing':a0_0x3f39('0x7a'),'closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x63')+a0_0x3f39('0xf')+a0_0x3f39('0x127')+a0_0x3f39('0x56')+a0_0x3f39('0xc8'),'chanel_closures':a0_0x3f39('0xe1')}},'ZAns_en':{'slack':{'editing':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xac')+'4A/BQK9HGS'+a0_0x3f39('0xed')+a0_0x3f39('0xbd')+'ef7OFfI','chanel_editing':'#south-afr'+'ica','closures':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0xac')+a0_0x3f39('0x44')+a0_0x3f39('0xed')+a0_0x3f39('0xbd')+a0_0x3f39('0x2a'),'chanel_closures':a0_0x3f39('0xab')+a0_0x3f39('0x132')}},'LKns_en':{'slack':{'editing':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0x31')+'U3/BQ6SWD8'+a0_0x3f39('0x12f')+'PrnfdmmZRH'+a0_0x3f39('0xc4'),'chanel_editing':a0_0x3f39('0x62'),'closures':'https://ho'+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+'es/T0VL511'+'U3/BQ6SWD8'+a0_0x3f39('0x12f')+a0_0x3f39('0x9c')+'az1Fxp4','chanel_closures':a0_0x3f39('0x62')}},'USAal_en':{'discord':{'editing':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+'hooks/6507'+'6651034804'+a0_0x3f39('0x8c')+'HA282JNP9A'+a0_0x3f39('0x3f')+'JSzRqkylcR'+a0_0x3f39('0xe6')+a0_0x3f39('0x53')+a0_0x3f39('0x138')+a0_0x3f39('0x4d'),'chanel_editing':a0_0x3f39('0xfc'),'closures':a0_0x3f39('0x98')+'scordapp.c'+'om/api/web'+a0_0x3f39('0xa1')+a0_0x3f39('0xc0')+a0_0x3f39('0xf8')+a0_0x3f39('0xb')+a0_0x3f39('0x78')+a0_0x3f39('0x22')+a0_0x3f39('0x11e')+'Y3PSZxq0e0'+a0_0x3f39('0x90')+a0_0x3f39('0xfd'),'chanel_closures':a0_0x3f39('0xaf')}},'USAnj_en':{'discord':{'editing':a0_0x3f39('0x6')+a0_0x3f39('0xf5')+a0_0x3f39('0x65')+a0_0x3f39('0xf0')+'6492953066'+a0_0x3f39('0x3b')+a0_0x3f39('0x136')+a0_0x3f39('0x39')+a0_0x3f39('0x3a')+'7gIaWNnsoN'+a0_0x3f39('0xde')+a0_0x3f39('0xca')+a0_0x3f39('0x112')+a0_0x3f39('0x70'),'chanel_editing':a0_0x3f39('0x87')+a0_0x3f39('0xf7'),'closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x2')+a0_0x3f39('0x64')+a0_0x3f39('0x13')+a0_0x3f39('0x120')+a0_0x3f39('0x13c')+a0_0x3f39('0x103')+a0_0x3f39('0x37')+a0_0x3f39('0x61')+a0_0x3f39('0x105')+a0_0x3f39('0x69'),'chanel_closures':a0_0x3f39('0x26')+'es'}},'USAde_en':{'discord':{'editing':a0_0x3f39('0x6')+a0_0x3f39('0xf5')+a0_0x3f39('0x65')+'/webhooks/'+'6492953066'+a0_0x3f39('0x3b')+a0_0x3f39('0x136')+a0_0x3f39('0x39')+'dNBPQ_Reaz'+'7gIaWNnsoN'+a0_0x3f39('0xde')+a0_0x3f39('0xca')+a0_0x3f39('0x112')+'ack','chanel_editing':a0_0x3f39('0x87')+'quests','closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x2')+a0_0x3f39('0x12e')+a0_0x3f39('0x8')+a0_0x3f39('0xf4')+a0_0x3f39('0x130')+a0_0x3f39('0xc2')+a0_0x3f39('0x1f')+a0_0x3f39('0x12')+a0_0x3f39('0x12b')+'p0u/slack','chanel_closures':a0_0x3f39('0x10d')}},'USAla_en':{'discord':{'editing':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+'om/api/web'+'hooks/6551'+a0_0x3f39('0xd2')+a0_0x3f39('0x10f')+'oHpLdqxcr-'+a0_0x3f39('0x92')+'gg7VssTQ-z'+a0_0x3f39('0xb5')+a0_0x3f39('0x8e')+a0_0x3f39('0xdb')+'n2c/slack','chanel_editing':a0_0x3f39('0xd3'),'closures':'https://di'+a0_0x3f39('0x6d')+'om/api/web'+a0_0x3f39('0x128')+a0_0x3f39('0xd2')+'7985/vlMui'+a0_0x3f39('0x32')+a0_0x3f39('0x92')+'gg7VssTQ-z'+a0_0x3f39('0xb5')+'EWybMBNR6i'+a0_0x3f39('0xdb')+a0_0x3f39('0xe8'),'chanel_closures':a0_0x3f39('0xd3')}},'USAny_en':{'discord':{'editing':a0_0x3f39('0x6')+a0_0x3f39('0xf5')+a0_0x3f39('0x65')+'/webhooks/'+'6492953066'+a0_0x3f39('0x3b')+a0_0x3f39('0x136')+'BQNMKIHf-6'+a0_0x3f39('0x3a')+'7gIaWNnsoN'+a0_0x3f39('0xde')+a0_0x3f39('0xca')+a0_0x3f39('0x112')+a0_0x3f39('0x70'),'chanel_editing':a0_0x3f39('0x87')+'quests','closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+'hooks/6499'+a0_0x3f39('0x114')+a0_0x3f39('0xda')+a0_0x3f39('0x68')+a0_0x3f39('0x8b')+a0_0x3f39('0x9a')+a0_0x3f39('0x110')+a0_0x3f39('0x118')+'DxDbrgGIn7'+'UON/slack','chanel_closures':a0_0x3f39('0xe5')+a0_0x3f39('0x86')+'e'}},'USApa_en':{'discord':{'editing':a0_0x3f39('0x6')+a0_0x3f39('0xf5')+a0_0x3f39('0x65')+a0_0x3f39('0xf0')+'6492953066'+a0_0x3f39('0x3b')+a0_0x3f39('0x136')+a0_0x3f39('0x39')+a0_0x3f39('0x3a')+a0_0x3f39('0x102')+a0_0x3f39('0xde')+a0_0x3f39('0xca')+a0_0x3f39('0x112')+'ack','chanel_editing':'#unlock-re'+a0_0x3f39('0xf7'),'closures':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x2')+a0_0x3f39('0x12d')+a0_0x3f39('0x9b')+a0_0x3f39('0xf2')+a0_0x3f39('0x10b')+a0_0x3f39('0x2b')+a0_0x3f39('0xb8')+a0_0x3f39('0x11')+a0_0x3f39('0x5b')+a0_0x3f39('0x1c'),'chanel_closures':'#pa_closur'+'es'}},'DEVns_en':{'slack':{'editing':a0_0x3f39('0xef')+'oks.slack.'+a0_0x3f39('0x8f')+a0_0x3f39('0xfb')+a0_0x3f39('0xf9')+'H4/ir8Bqk7'+'DIsHtCdprp'+'hOvJzOu','chanel_editing':a0_0x3f39('0x5'),'closures':a0_0x3f39('0xef')+a0_0x3f39('0x9')+a0_0x3f39('0x8f')+a0_0x3f39('0xfb')+a0_0x3f39('0xf9')+a0_0x3f39('0xba')+a0_0x3f39('0xdc')+a0_0x3f39('0x6c'),'chanel_closures':a0_0x3f39('0x5')},'discord':{'editing':a0_0x3f39('0x98')+a0_0x3f39('0x6d')+a0_0x3f39('0x124')+a0_0x3f39('0x66')+'2149297925'+'3248/Fmk9F'+a0_0x3f39('0x33')+'vr8tySFu07'+a0_0x3f39('0x101')+'m9si9O-I29'+a0_0x3f39('0xea')+a0_0x3f39('0x72')+a0_0x3f39('0xfe'),'chanel_editing':a0_0x3f39('0x4a'),'closures':'https://di'+'scordapp.c'+a0_0x3f39('0x124')+a0_0x3f39('0x4e')+a0_0x3f39('0x2e')+'8318/K28fn'+'Hf5HUsShbE'+'8GJO-RW0gc'+a0_0x3f39('0x2c')+a0_0x3f39('0x1a')+a0_0x3f39('0xe4')+'UuDI-B5QZS'+'K5r/slack','chanel_closures':'closures'},'telegram':{'editing':'https://ap'+a0_0x3f39('0x11d')+'.org/bot99'+a0_0x3f39('0x5a')+a0_0x3f39('0x42')+'3mzI4XQmyf'+'YZKPOdAs7r'+a0_0x3f39('0xa9')+a0_0x3f39('0x122'),'stickers':'https://ap'+'i.telegram'+'.org/bot99'+a0_0x3f39('0x5a')+a0_0x3f39('0x42')+a0_0x3f39('0x21')+a0_0x3f39('0x5f')+a0_0x3f39('0x96')+'icker','chat_id':'-478038225'}}};var channelDB={'BD_en':{'closure':'bangladesh','editing':'bangladesh'},'BE_fr':{'closure':'29-fr_dema'+a0_0x3f39('0x8a'),'editing':a0_0x3f39('0x79')+a0_0x3f39('0x8a')},'BE_nl':{'closure':a0_0x3f39('0x131')+'ests-wme','editing':'29-vl_requ'+a0_0x3f39('0x116')},'CN_en':{'closure':a0_0x3f39('0x55')+a0_0x3f39('0x27'),'editing':a0_0x3f39('0x55')+a0_0x3f39('0x27')},'CO_en':{'closure':a0_0x3f39('0x17')+'ales_wme','editing':a0_0x3f39('0xe0')+'s'},'DEV_fr':{'closure':a0_0x3f39('0x5'),'editing':a0_0x3f39('0x5')},'LU_fr':{'closure':a0_0x3f39('0x129')+a0_0x3f39('0x7d'),'editing':'29-lux_dem'+'andes_wme'},'LU_en':{'closure':a0_0x3f39('0x129')+a0_0x3f39('0x7d'),'editing':a0_0x3f39('0x129')+a0_0x3f39('0x7d')},'LK_en':{'closure':a0_0x3f39('0x62'),'editing':a0_0x3f39('0x62')},'ZA_en':{'closure':'#south-afr'+'ica','editing':a0_0x3f39('0xab')+a0_0x3f39('0x132')},'MN_en':{'closure':a0_0x3f39('0x49')+a0_0x3f39('0xcf'),'editing':a0_0x3f39('0x6f')},'MT_en':{'closure':a0_0x3f39('0x45'),'editing':'malta'},'NA_en':{'closure':'namibia','editing':'namibia'},'NL_nl':{'closure':a0_0x3f39('0x1')+a0_0x3f39('0x117'),'editing':a0_0x3f39('0xbb')+a0_0x3f39('0x100')},'IN_en':{'closure':a0_0x3f39('0xa4'),'editing':a0_0x3f39('0x43')},'DE_en':{'closure':a0_0x3f39('0xaa')+a0_0x3f39('0x121'),'editing':a0_0x3f39('0x11b')},'AF_en':{'closure':a0_0x3f39('0x20')+'n','editing':a0_0x3f39('0x20')+'n'},'BT_en':{'closure':'bhutan','editing':a0_0x3f39('0x74')},'PK_en':{'closure':a0_0x3f39('0x9e'),'editing':a0_0x3f39('0x9e')},'PL_en':{'closure':a0_0x3f39('0x7a'),'editing':'#blokady'}};var gFormDB={'BEns_fr':{'username':a0_0x3f39('0xdd')+a0_0x3f39('0x104'),'editorlevel':a0_0x3f39('0x134')+a0_0x3f39('0x40'),'pl':a0_0x3f39('0x18')+a0_0x3f39('0x109'),'levelrequired':a0_0x3f39('0xae')+a0_0x3f39('0xb6'),'type':'entry.1039'+a0_0x3f39('0x54'),'longlat':a0_0x3f39('0x67')+a0_0x3f39('0x6e'),'requesttype':a0_0x3f39('0xb3')+'113337','city':a0_0x3f39('0xc3')+a0_0x3f39('0xc'),'state':'','country':'entry.2891'+a0_0x3f39('0x4f'),'selectcount':a0_0x3f39('0x15')+a0_0x3f39('0x13d'),'communitypart':a0_0x3f39('0x57')+a0_0x3f39('0xc6'),'message':a0_0x3f39('0xc5')+a0_0x3f39('0x133')},'BEns_nl':{'username':a0_0x3f39('0xdd')+'77441','editorlevel':a0_0x3f39('0x134')+a0_0x3f39('0x40'),'pl':'entry.9602'+a0_0x3f39('0x109'),'levelrequired':a0_0x3f39('0xae')+a0_0x3f39('0xb6'),'type':a0_0x3f39('0x9f')+a0_0x3f39('0x54'),'longlat':a0_0x3f39('0x67')+a0_0x3f39('0x6e'),'requesttype':a0_0x3f39('0xb3')+'113337','city':a0_0x3f39('0xc3')+a0_0x3f39('0xc'),'state':'','country':a0_0x3f39('0x71')+a0_0x3f39('0x4f'),'selectcount':a0_0x3f39('0x15')+'658462','communitypart':a0_0x3f39('0x57')+'20299','message':'entry.5544'+'94717'},'LUns_fr':{'username':a0_0x3f39('0xdd')+'77441','editorlevel':'entry.6498'+a0_0x3f39('0x40'),'pl':a0_0x3f39('0x18')+a0_0x3f39('0x109'),'levelrequired':a0_0x3f39('0xae')+'55116','type':a0_0x3f39('0x9f')+'159705','longlat':a0_0x3f39('0x67')+a0_0x3f39('0x6e'),'requesttype':a0_0x3f39('0xb3')+a0_0x3f39('0x4'),'city':a0_0x3f39('0xc3')+'561816','state':'','country':a0_0x3f39('0x71')+a0_0x3f39('0x4f'),'selectcount':a0_0x3f39('0x15')+a0_0x3f39('0x13d'),'communitypart':'entry.9800'+a0_0x3f39('0xc6'),'message':a0_0x3f39('0xc5')+a0_0x3f39('0x133')},'LUns_en':{'username':'entry.5661'+'77441','editorlevel':a0_0x3f39('0x134')+a0_0x3f39('0x40'),'pl':a0_0x3f39('0x18')+'65519','levelrequired':a0_0x3f39('0xae')+a0_0x3f39('0xb6'),'type':'entry.1039'+'159705','longlat':'entry.1152'+a0_0x3f39('0x6e'),'requesttype':a0_0x3f39('0xb3')+a0_0x3f39('0x4'),'city':'entry.1912'+a0_0x3f39('0xc'),'state':'','country':a0_0x3f39('0x71')+a0_0x3f39('0x4f'),'selectcount':a0_0x3f39('0x15')+a0_0x3f39('0x13d'),'communitypart':a0_0x3f39('0x57')+'20299','message':a0_0x3f39('0xc5')+'94717'},'NLns_nl':{'username':a0_0x3f39('0xbc'),'editorlevel':a0_0x3f39('0xbc'),'pl':'entry.','levelrequired':a0_0x3f39('0xbc'),'type':a0_0x3f39('0xbc'),'longlat':a0_0x3f39('0xbc'),'requesttype':a0_0x3f39('0xbc'),'city':a0_0x3f39('0xbc'),'state':'','country':a0_0x3f39('0xbc'),'selectcount':'entry.','communitypart':a0_0x3f39('0xbc'),'message':'entry.'}};
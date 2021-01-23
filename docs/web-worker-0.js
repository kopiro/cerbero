!function(){"use strict";var e={timeInPage:"timeInPage",selection:"selection",scroll:"scroll",mouseExit:"mouseExit",performance:"performance",click:"click"},t=function(){function t(){}return t.formatEvent=function(t){var n=Date.now();return{type:e.click,time:n,after:n-t.startDate,data:{position:{screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY,x:t.x,y:t.y,offsetX:t.offsetX,offsetY:t.offsetY},keys:{ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey},elements:{target:t.target}}}},t}(),n=function(){function t(){}return t.formatEvent=function(t){return{type:e.performance,time:Date.now(),data:{timing:t.timing,navigation:t.navigation,memory:t.memory}}},t}(),o=function(){function t(){}return t.formatEvent=function(t){var n=Date.now();return{type:e.mouseExit,time:n,after:n-t.startDate,data:{position:{screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY,x:t.x,y:t.y,offsetX:t.offsetX,offsetY:t.offsetY},keys:{ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey},elements:{fromElement:t.fromElement}}}},t}(),r=function(){function t(){}return t.formatEvent=function(t){var n=Date.now(),o=t.event,r=o.anchorNode,a=o.anchorOffset,s=o.focusNode,i=o.focusOffset,f=o.baseNode,c=o.baseOffset,m=o.extentNode,l=o.extentOffset;return r.offset=a,s.offset=i,f.offset=c,m.offset=l,{type:e.selection,time:n,after:n-t.startDate,data:{text:t.selection,elements:{anchorNode:r,focusNode:s,baseNode:f,extentNode:m}}}},t}(),a=function(){function t(){}return t.formatEvent=function(t){var n=t.event,o=t.scroll,r=t.height,a=t.startDate,s=Date.now();return{type:e.scroll,time:s,after:s-a,data:{scroll:{fromTop:o,domHeight:r,percentage:Math.ceil(100*o/r)},elements:{srcElement:n.srcElement,target:n.target}}}},t}(),s=function(){function t(){}return t.formatEvent=function(t){var n=t.startTime,o=t.nowTime,r=Date.now();return{type:e.timeInPage,time:r,data:{timePassed:o-n}}},t}();new function(){var i,f=this;this.textDecoder=new TextDecoder,this.formatters=((i={})[e.click]=t,i[e.performance]=n,i[e.mouseExit]=o,i[e.selection]=r,i[e.scroll]=a,i[e.timeInPage]=s,i),this.onMessage=function(e){var t,n=e.data,o=n.type,r=n.event,a=JSON.parse(f.textDecoder.decode(r));f.formatters[o]&&(t=f.formatters[o].formatEvent(a)),t&&postMessage(t,null)},this.self=self,this.self.addEventListener("message",this.onMessage.bind(this)),this.onMessage=this.onMessage.bind(this)}}();

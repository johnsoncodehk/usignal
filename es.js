/*! (c) Andrea Giammarchi */
const{is:s}=Object;let t;const e=s=>{const e=t;t=e||[];try{if(s(),!e)for(const{value:s}of t);}finally{t=e}};class i{constructor(s){this._=s}then(){return this.value}toJSON(){return this.value}toString(){return this.value}valueOf(){return this.value}}let h;class n extends i{constructor(s,t,e,i){super(s),this.f=i,this.$=!0,this.r=null,this.s=new v(t,e)}get value(){if(this.$){const s=h;h=this,this.r=[];try{this.s.value=this._(this.s._)}finally{this.$=!1,h=s}}return this.s.value}}const o={async:!1,equals:!0},c=(s,t,e=o)=>new n(s,t,e,!1);let r;const u=()=>{},l=s=>{for(const t of s)t.stop()};class a extends n{constructor(s,t,e){super(s,t,e,!0),this.i=0,this.a=!!e.async,this.m=!0,this.e=[]}get value(){this.a?this.async():this.sync()}async(){this.m&&(this.m=!1,queueMicrotask((()=>{this.m=!0,this.sync()})))}sync(){const s=r;r=this,this.i=0;const{length:t}=this.e;super.value,this.i<t&&l(this.e.splice(this.i));for(const{value:s}of this.e);r=s}stop(){this._=u,this.r=[],this.s.c.clear(),this.e.length&&l(this.e.splice(0))}}const f=(s,t,e=o)=>{let i;if(r){const{i:h,e:n}=r;h!==n.length&&n[h]._===s||(n[h]=new a(s,t,e)),i=n[h],r.i++}else(i=new a(s,t,e)).value;return()=>{i.stop()}},p=()=>!1;class v extends i{constructor(t,{equals:e}){super(t),this.c=new Set,this.s=!0===e?s:e||p}peek(){return this._}get value(){return h&&(this.c.add(h),h.r.push(this)),this._}set value(s){if(!this.s(this._,s)&&(this._=s,this.c.size)){const s=[],e=[this];for(const t of e)for(const i of t.c)if(!i.$&&i.r.includes(t))if(i.$=!0,i.f){s.push(i);const t=[i];for(const s of t)for(const e of s.e)e.$=!0,t.push(e)}else e.push(i.s);for(const e of s)t?t.push(e):e.value}}}const y=(s,t=o)=>new v(s,t);export{i as Signal,e as batch,c as computed,f as effect,y as signal};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-upload-upload"],{"092b":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("12be")),o={components:{tuiUpload:n.default},data:function(){return{imageData:[],serverUrl:"http://upload.cn"}},methods:{result:function(t){console.log(t),this.imageData=t.imgArr},remove:function(t){console.log(t);t.index}}};e.default=o},"12be":function(t,e,i){"use strict";i.r(e);var a=i("f2c1"),n=i("87c7");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("ebde");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"ebe45e34",null);e["default"]=s.exports},"1b62":function(t,e,i){"use strict";i.r(e);var a=i("ea65"),n=i("5217");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("c263");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"406074ba",null);e["default"]=s.exports},5217:function(t,e,i){"use strict";i.r(e);var a=i("092b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"706b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@font-face{font-family:tuiUpload;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATcAA0AAAAAByQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEwAAAABoAAAAciR52BUdERUYAAASgAAAAHgAAAB4AKQALT1MvMgAAAaAAAABCAAAAVjxvR/tjbWFwAAAB+AAAAEUAAAFK5ibpuGdhc3AAAASYAAAACAAAAAj//wADZ2x5ZgAAAkwAAADXAAABAAmNjcZoZWFkAAABMAAAAC8AAAA2FpiS+WhoZWEAAAFgAAAAHQAAACQH3QOFaG10eAAAAeQAAAARAAAAEgwAACBsb2NhAAACQAAAAAwAAAAMAEoAgG1heHAAAAGAAAAAHwAAACABEgA2bmFtZQAAAyQAAAFJAAACiCnmEVVwb3N0AAAEcAAAACgAAAA6OMUs4HjaY2BkYGAAYo3boY/i+W2+MnCzMIDAzb3qdQj6fwPzf+YGIJeDgQkkCgA/KAtvAHjaY2BkYGBu+N/AEMPCAALM/xkYGVABCwBZ4wNrAAAAeNpjYGRgYGBl0GJgZgABJiDmAkIGhv9gPgMADTABSQB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PGJ9xMjf8b2CIYW5gaAAKM4LkANt9C+UAAHjaY2GAABYIVmBgAAAA+gAtAAAAeNpjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYnjE+4/z/n4EBQksxSf6GqgcCRjYGOIeRCUgwMaACRoZhDwCiLwmoAAAAAAAAAAAAAAAASgCAeNpdjkFKw0AARf/vkIR0BkPayWRKQZtYY90ohJju2kOIbtz0KD1HVm50UfEmWXoAr9ADOHFARHHzeY//Fx8Ci+FJfIgdJFa4AhgiMshbrCuIsLxhFJZVs+Vl1bT1GddtbXTC3OhohN4dg4BJ3zMJAnccyfm468ZzHXddrH9ZKbHzdf9n/vkY/xv9sPQXgGEvBrHHwst5kTbXLE+YpYVPkxepPmW94W16UbdNJd6f3SAzo5W7m1jaKd+8ZZIvk5nlKw9SK6Wle7BLS3f/bTzQLmfAF2T1NsQAeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMGiTIxMjMxsKak5qSWpbFmZiRmJ+QAmgAUIAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMABAABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9M296nUwGgA+8QYgAAA=) format("woff");font-weight:400;font-style:normal}.tui-upload-icon[data-v-ebe45e34]{font-family:tuiUpload!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:%?10?%}.tui-icon-delete[data-v-ebe45e34]:before{content:"\\E601"}.tui-icon-plus[data-v-ebe45e34]:before{content:"\\E609"}.tui-upload-box[data-v-ebe45e34]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.tui-upload-add[data-v-ebe45e34]{width:%?220?%;height:%?220?%;font-size:%?68?%;font-weight:100;color:#888;background-color:#f7f7f7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0}.tui-image-item[data-v-ebe45e34]{width:%?220?%;height:%?220?%;position:relative;margin-right:%?20?%;margin-bottom:%?20?%}.tui-image-item[data-v-ebe45e34]:nth-of-type(3n){margin-right:0}.tui-item-img[data-v-ebe45e34]{width:%?220?%;height:%?220?%;display:block}.tui-img-del[data-v-ebe45e34]{width:%?36?%;height:%?36?%;position:absolute;right:%?-12?%;top:%?-12?%;background:#eb0909;border-radius:50%;color:#fff;font-size:%?34?%;z-index:999}.tui-img-del[data-v-ebe45e34]:before{content:"";width:%?16?%;height:1px;position:absolute;left:%?10?%;top:%?18?%;background:#fff}.tui-upload-mask[data-v-ebe45e34]{width:100%;height:100%;position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;padding:%?40?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.6)}.tui-upload-loading[data-v-ebe45e34]{width:%?28?%;height:%?28?%;border-radius:50%;border:2px solid;border-color:#b2b2b2 #b2b2b2 #b2b2b2 #fff;-webkit-animation:tui-rotate-data-v-ebe45e34 .7s linear infinite;animation:tui-rotate-data-v-ebe45e34 .7s linear infinite}@-webkit-keyframes tui-rotate-data-v-ebe45e34{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes tui-rotate-data-v-ebe45e34{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-tips[data-v-ebe45e34]{font-size:%?26?%;color:#fff}.tui-mask-btn[data-v-ebe45e34]{padding:%?6?% %?16?%;border-radius:%?40?%;text-align:center;font-size:%?24?%;color:#fff;border:%?1?% solid #fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tui-hover[data-v-ebe45e34]{opacity:.5}',""])},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function o(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),s=i.n(r),A=i("c8bb"),u=i.n(A);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return o(t)||l(t)||c()}i.d(e,"default",function(){return d})},"7fb7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-406074ba]{background:#fff}.container[data-v-406074ba]{padding:%?20?% 0 %?120?% 0;-webkit-box-sizing:border-box;box-sizing:border-box}.header[data-v-406074ba]{padding:%?80?% %?90?% %?60?% %?90?%;-webkit-box-sizing:border-box;box-sizing:border-box}.title[data-v-406074ba]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-406074ba]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-box-upload[data-v-406074ba]{padding-left:%?25?%;-webkit-box-sizing:border-box;box-sizing:border-box}body.?%PAGE?%[data-v-406074ba]{background:#fff}",""])},"87c7":function(t,e,i){"use strict";i.r(e);var a=i("e89f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"8aec":function(t,e,i){var a=i("7fb7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c346866e",a,!0,{sourceMap:!1,shadowMode:!1})},c263:function(t,e,i){"use strict";var a=i("8aec"),n=i.n(a);n.a},c89f:function(t,e,i){var a=i("706b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("52e8d240",a,!0,{sourceMap:!1,shadowMode:!1})},e89f:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481");var n=a(i("795b")),o=a(i("5d73")),r=a(i("75fc"));i("c5f6");var s={name:"tuiUpload",props:{value:{type:Array,default:function(){return[]}},forbidDel:{type:Boolean,default:!1},forbidAdd:{type:Boolean,default:!1},serverUrl:{type:String,default:""},limit:{type:Number,default:9},fileKeyName:{type:String,default:"file"}},data:function(){return{imageList:[],statusArr:[]}},created:function(){this.imageList=(0,r.default)(this.value);var t=!0,e=!1,i=void 0;try{for(var a,n=(0,o.default)(this.imageList);!(t=(a=n.next()).done);t=!0){a.value;this.statusArr.push("1")}}catch(s){e=!0,i=s}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}},computed:{isShowAdd:function(){var t=!0;return(this.forbidAdd||this.limit&&this.imageList.length>=this.limit)&&(t=!1),t}},methods:{reUpLoad:function(t){var e=this;this.$set(this.statusArr,t,"2"),this.change(),this.uploadImage(t,this.imageList[t]).then(function(){e.change()}).catch(function(){e.change()})},change:function(){var t=~this.statusArr.indexOf("2")?2:1;2!=t&&~this.statusArr.indexOf("3")&&(t=3),this.$emit("complete",{status:t,imgArr:this.imageList})},chooseImage:function(){var t=this;uni.chooseImage({count:t.limit-t.imageList.length,success:function(e){for(var i=[],a=0;a<e.tempFilePaths.length;a++){var n=t.imageList.length;if(n>=t.limit){uni.showToast({title:"最多可上传".concat(t.limit,"张图片"),icon:"none"});break}var o=e.tempFilePaths[a];i.push(o),t.imageList.push(o),t.statusArr.push("2")}t.change();for(var r=t.imageList.length-i.length,s=0;s<i.length;s++){var A=r+s;t.serverUrl?t.uploadImage(A,i[s]).then(function(){t.change()}).catch(function(){t.change()}):(t.$set(t.statusArr,A,"1"),t.change())}}})},uploadImage:function(t,e){var i=this,a=this;return new n.default(function(n,o){uni.uploadFile({url:i.serverUrl,name:i.fileKeyName,header:{},formData:{},filePath:e,success:function(e){if(console.log(e),200==e.statusCode){var i=JSON.parse(e.data.replace(/\ufeff/g,"")||"{}");i.code%100===0?(i.url&&(a.imageList[t]=i.url),a.$set(a.statusArr,t,i.url?"1":"3")):a.$set(a.statusArr,t,"3"),n(t)}else a.$set(a.statusArr,t,"3"),o(t)},fail:function(e){a.$set(a.statusArr,t,"3"),o(t)}})})},delImage:function(t){this.imageList.splice(t,1),this.statusArr.splice(t,1),this.$emit("remove",{index:t}),this.change()},previewImage:function(t){this.imageList.length&&uni.previewImage({current:this.imageList[t],loop:!0,urls:this.imageList})}}};e.default=s},ea65:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[t._v("upload")]),i("v-uni-view",{staticClass:"sub-title"},[t._v("图片上传，需要根据上传接口实际返回数据进行调整")])],1),i("v-uni-view",{staticClass:"tui-box-upload"},[i("tui-upload",{attrs:{serverUrl:t.serverUrl},on:{complete:function(e){e=t.$handleEvent(e),t.result(e)},remove:function(e){e=t.$handleEvent(e),t.remove(e)}}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},ebde:function(t,e,i){"use strict";var a=i("c89f"),n=i.n(a);n.a},f2c1:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-container"},[i("v-uni-view",{staticClass:"tui-upload-box"},[t._l(t.imageList,function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-image-item"},[i("v-uni-image",{staticClass:"tui-item-img",attrs:{src:e,mode:"aspectFill"},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.previewImage(a)}}}),t.forbidDel?t._e():i("v-uni-view",{staticClass:"tui-img-del",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.delImage(a)}}}),1!=t.statusArr[a]?i("v-uni-view",{staticClass:"tui-upload-mask"},[2==t.statusArr[a]?i("v-uni-view",{staticClass:"tui-upload-loading"}):t._e(),i("v-uni-text",{staticClass:"tui-tips"},[t._v(t._s(2==t.statusArr[a]?"上传中...":"上传失败"))]),3==t.statusArr[a]?i("v-uni-view",{staticClass:"tui-mask-btn",attrs:{"hover-class":"tui-hover","hover-stay-time":150},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.reUpLoad(a)}}},[t._v("重新上传")]):t._e()],1):t._e()],1)}),t.isShowAdd?i("v-uni-view",{staticClass:"tui-upload-add",on:{click:function(e){e=t.$handleEvent(e),t.chooseImage(e)}}},[i("v-uni-view",{staticClass:"tui-upload-icon tui-icon-plus"})],1):t._e()],2)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})}}]);
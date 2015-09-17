// Compiled by ClojureScript 1.7.58 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__7167_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7167_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7172 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7173 = null;
var count__7174 = (0);
var i__7175 = (0);
while(true){
if((i__7175 < count__7174)){
var s = cljs.core._nth.call(null,chunk__7173,i__7175);
var temp__4425__auto___7176 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7176)){
var sheet_7177 = temp__4425__auto___7176;
var temp__4425__auto___7178__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7177.href,changed);
if(cljs.core.truth_(temp__4425__auto___7178__$1)){
var href_uri_7179 = temp__4425__auto___7178__$1;
sheet_7177.ownerNode.href = href_uri_7179.makeUnique().toString();
} else {
}
} else {
}

var G__7180 = seq__7172;
var G__7181 = chunk__7173;
var G__7182 = count__7174;
var G__7183 = (i__7175 + (1));
seq__7172 = G__7180;
chunk__7173 = G__7181;
count__7174 = G__7182;
i__7175 = G__7183;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7172);
if(temp__4425__auto__){
var seq__7172__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7172__$1)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,seq__7172__$1);
var G__7184 = cljs.core.chunk_rest.call(null,seq__7172__$1);
var G__7185 = c__5211__auto__;
var G__7186 = cljs.core.count.call(null,c__5211__auto__);
var G__7187 = (0);
seq__7172 = G__7184;
chunk__7173 = G__7185;
count__7174 = G__7186;
i__7175 = G__7187;
continue;
} else {
var s = cljs.core.first.call(null,seq__7172__$1);
var temp__4425__auto___7188__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7188__$1)){
var sheet_7189 = temp__4425__auto___7188__$1;
var temp__4425__auto___7190__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7189.href,changed);
if(cljs.core.truth_(temp__4425__auto___7190__$2)){
var href_uri_7191 = temp__4425__auto___7190__$2;
sheet_7189.ownerNode.href = href_uri_7191.makeUnique().toString();
} else {
}
} else {
}

var G__7192 = cljs.core.next.call(null,seq__7172__$1);
var G__7193 = null;
var G__7194 = (0);
var G__7195 = (0);
seq__7172 = G__7192;
chunk__7173 = G__7193;
count__7174 = G__7194;
i__7175 = G__7195;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7200 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7201 = null;
var count__7202 = (0);
var i__7203 = (0);
while(true){
if((i__7203 < count__7202)){
var s = cljs.core._nth.call(null,chunk__7201,i__7203);
var temp__4425__auto___7204 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7204)){
var image_7205 = temp__4425__auto___7204;
var temp__4425__auto___7206__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7205.src,changed);
if(cljs.core.truth_(temp__4425__auto___7206__$1)){
var href_uri_7207 = temp__4425__auto___7206__$1;
image_7205.src = href_uri_7207.makeUnique().toString();
} else {
}
} else {
}

var G__7208 = seq__7200;
var G__7209 = chunk__7201;
var G__7210 = count__7202;
var G__7211 = (i__7203 + (1));
seq__7200 = G__7208;
chunk__7201 = G__7209;
count__7202 = G__7210;
i__7203 = G__7211;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7200);
if(temp__4425__auto__){
var seq__7200__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7200__$1)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,seq__7200__$1);
var G__7212 = cljs.core.chunk_rest.call(null,seq__7200__$1);
var G__7213 = c__5211__auto__;
var G__7214 = cljs.core.count.call(null,c__5211__auto__);
var G__7215 = (0);
seq__7200 = G__7212;
chunk__7201 = G__7213;
count__7202 = G__7214;
i__7203 = G__7215;
continue;
} else {
var s = cljs.core.first.call(null,seq__7200__$1);
var temp__4425__auto___7216__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7216__$1)){
var image_7217 = temp__4425__auto___7216__$1;
var temp__4425__auto___7218__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7217.src,changed);
if(cljs.core.truth_(temp__4425__auto___7218__$2)){
var href_uri_7219 = temp__4425__auto___7218__$2;
image_7217.src = href_uri_7219.makeUnique().toString();
} else {
}
} else {
}

var G__7220 = cljs.core.next.call(null,seq__7200__$1);
var G__7221 = null;
var G__7222 = (0);
var G__7223 = (0);
seq__7200 = G__7220;
chunk__7201 = G__7221;
count__7202 = G__7222;
i__7203 = G__7223;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7226){
var map__7229 = p__7226;
var map__7229__$1 = ((((!((map__7229 == null)))?((((map__7229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7229):map__7229);
var on_jsload = cljs.core.get.call(null,map__7229__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7229,map__7229__$1,on_jsload){
return (function (p1__7224_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7224_SHARP_,".js");
});})(map__7229,map__7229__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7229,map__7229__$1,on_jsload){
return (function (p1__7225_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7225_SHARP_).makeUnique());
});})(js_files,map__7229,map__7229__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7229,map__7229__$1,on_jsload){
return (function() { 
var G__7231__delegate = function (_){
return on_jsload.call(null);
};
var G__7231 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7232__i = 0, G__7232__a = new Array(arguments.length -  0);
while (G__7232__i < G__7232__a.length) {G__7232__a[G__7232__i] = arguments[G__7232__i + 0]; ++G__7232__i;}
  _ = new cljs.core.IndexedSeq(G__7232__a,0);
} 
return G__7231__delegate.call(this,_);};
G__7231.cljs$lang$maxFixedArity = 0;
G__7231.cljs$lang$applyTo = (function (arglist__7233){
var _ = cljs.core.seq(arglist__7233);
return G__7231__delegate(_);
});
G__7231.cljs$core$IFn$_invoke$arity$variadic = G__7231__delegate;
return G__7231;
})()
;})(js_files,map__7229,map__7229__$1,on_jsload))
,((function (js_files,map__7229,map__7229__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7229,map__7229__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7238_7242 = cljs.core.seq.call(null,things_to_log);
var chunk__7239_7243 = null;
var count__7240_7244 = (0);
var i__7241_7245 = (0);
while(true){
if((i__7241_7245 < count__7240_7244)){
var t_7246 = cljs.core._nth.call(null,chunk__7239_7243,i__7241_7245);
console.log(t_7246);

var G__7247 = seq__7238_7242;
var G__7248 = chunk__7239_7243;
var G__7249 = count__7240_7244;
var G__7250 = (i__7241_7245 + (1));
seq__7238_7242 = G__7247;
chunk__7239_7243 = G__7248;
count__7240_7244 = G__7249;
i__7241_7245 = G__7250;
continue;
} else {
var temp__4425__auto___7251 = cljs.core.seq.call(null,seq__7238_7242);
if(temp__4425__auto___7251){
var seq__7238_7252__$1 = temp__4425__auto___7251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7238_7252__$1)){
var c__5211__auto___7253 = cljs.core.chunk_first.call(null,seq__7238_7252__$1);
var G__7254 = cljs.core.chunk_rest.call(null,seq__7238_7252__$1);
var G__7255 = c__5211__auto___7253;
var G__7256 = cljs.core.count.call(null,c__5211__auto___7253);
var G__7257 = (0);
seq__7238_7242 = G__7254;
chunk__7239_7243 = G__7255;
count__7240_7244 = G__7256;
i__7241_7245 = G__7257;
continue;
} else {
var t_7258 = cljs.core.first.call(null,seq__7238_7252__$1);
console.log(t_7258);

var G__7259 = cljs.core.next.call(null,seq__7238_7252__$1);
var G__7260 = null;
var G__7261 = (0);
var G__7262 = (0);
seq__7238_7242 = G__7259;
chunk__7239_7243 = G__7260;
count__7240_7244 = G__7261;
i__7241_7245 = G__7262;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7264 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7264,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7264);

adzerk.boot_reload.reload.reload_css.call(null,G__7264);

adzerk.boot_reload.reload.reload_img.call(null,G__7264);

return G__7264;
});

//# sourceMappingURL=reload.js.map
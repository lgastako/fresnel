// Compiled by ClojureScript 1.7.58 {}
goog.provide('fresnel.app');
goog.require('cljs.core');
fresnel.app.mouse_x = cljs.core.atom.call(null,(0));
fresnel.app.mouse_y = cljs.core.atom.call(null,(0));
fresnel.app.get_aspect_ratio = (function fresnel$app$get_aspect_ratio(){
return (window.innerWidth / window.innerHeight);
});
fresnel.app.window_half_x = (function fresnel$app$window_half_x(){
return (window.innerWidth / (2));
});
fresnel.app.window_half_y = (function fresnel$app$window_half_y(){
return (window.innerHeight / (2));
});
fresnel.app.add_sphere_BANG_ = (function fresnel$app$add_sphere_BANG_(spheres,scene,geometry,material){
var mesh = (new THREE.Mesh(geometry,material));
mesh.position.x = ((Math.random() * (10000)) - (5000));

mesh.position.y = ((Math.random() * (10000)) - (5000));

mesh.position.z = ((Math.random() * (10000)) - (5000));

var v_16504 = ((Math.random() * (3)) + (1));
mesh.scale.x = v_16504;

mesh.scale.y = v_16504;

mesh.scale.z = v_16504;

scene.add(mesh);

return spheres.push(mesh);
});
fresnel.app.add_cube_BANG_ = (function fresnel$app$add_cube_BANG_(scene_cube,texture_cube){
var shader = (THREE.ShaderLib["cube"]);
(shader.uniforms["tCube"]).value = texture_cube;

var material = (new THREE.ShaderMaterial({"fragmentShader": shader.fragmentShader, "vertexShader": shader.vertexShader, "uniforms": shader.uniforms, "side": THREE.BackSide}));
var mesh = (new THREE.Mesh((new THREE.BoxGeometry((100000),(100000),(100000))),material));
return scene_cube.add(mesh);
});
fresnel.app.disable_auto_clear = (function fresnel$app$disable_auto_clear(renderer){
return renderer.autoClear = false;
});
fresnel.app.create_renderer = (function fresnel$app$create_renderer(){
var G__16506 = (new THREE.WebGLRenderer({"antialias": false}));
G__16506.setPixelRatio(window.devicePixelRatio);

G__16506.setSize(window.innerWidth,window.innerHeight);

fresnel.app.disable_auto_clear.call(null,G__16506);

return G__16506;
});
fresnel.app.init = (function fresnel$app$init(){
if(cljs.core.not.call(null,Detector.webgl)){
Detector.addGetWebGLMessage();
} else {
}

document.addEventListener("mousemove",(function (p1__16507_SHARP_){
cljs.core.reset_BANG_.call(null,fresnel.app.mouse_x,((10) * (p1__16507_SHARP_.clientX - fresnel.app.window_half_x.call(null))));

return cljs.core.reset_BANG_.call(null,fresnel.app.mouse_y,((10) * (p1__16507_SHARP_.clientY - fresnel.app.window_half_y.call(null))));
}),false);

var num_spheres = (500);
var container = document.createElement("div");
var spheres = (new Array());
var aspect_ratio = fresnel.app.get_aspect_ratio.call(null);
var camera = (new THREE.PerspectiveCamera((60),aspect_ratio,(1),(100000)));
var camera_cube = (new THREE.PerspectiveCamera((60),aspect_ratio,(1),(100000)));
var scene = (new THREE.Scene());
var scene_cube = (new THREE.Scene());
var geometry = (new THREE.SphereGeometry((100),(32),(16)));
var image = ((function (num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry){
return (function (p1__16508_SHARP_){
return [cljs.core.str("textures/cube/Park2/"),cljs.core.str(p1__16508_SHARP_),cljs.core.str(".jpg")].join('');
});})(num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry))
;
var urls = cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,image,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posx","negx","posy","negy","posz","negz"], null)));
var texture_cube = THREE.ImageUtils.loadTextureCube(urls);
var shader = THREE.FresnelShader;
var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
var parameters = {"fragmentShader": shader.fragmentShader, "vertexShader": shader.vertexShader, "uniforms": uniforms};
var material = (new THREE.ShaderMaterial(parameters));
document.body.appendChild(container);

camera.position.z = (3200);

texture_cube.format = THREE.RGBFormat;

(uniforms["tCube"]).value = texture_cube;

scene.matrixAutoUpdate = false;

var n__5311__auto___16557 = num_spheres;
var __16558 = (0);
while(true){
if((__16558 < n__5311__auto___16557)){
fresnel.app.add_sphere_BANG_.call(null,spheres,scene,geometry,material);

var G__16559 = (__16558 + (1));
__16558 = G__16559;
continue;
} else {
}
break;
}

fresnel.app.add_cube_BANG_.call(null,scene_cube,texture_cube);

var renderer = fresnel.app.create_renderer.call(null);
container.appendChild(renderer.domElement);

var on_window_resize = ((function (renderer,num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry,image,urls,texture_cube,shader,uniforms,parameters,material){
return (function fresnel$app$init_$_on_window_resize(){
var aspect_ratio__$1 = fresnel.app.get_aspect_ratio.call(null);
camera.aspect = aspect_ratio__$1;

camera_cube.aspect = aspect_ratio__$1;

camera.updateProjectionMatrix();

camera_cube.updateProjectionMatrix();

return renderer.setSize(window.innerWidth,window.innerHeight);
});})(renderer,num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry,image,urls,texture_cube,shader,uniforms,parameters,material))
;
window.addEventListener("resize",on_window_resize,false);

var render = ((function (renderer,num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry,image,urls,texture_cube,shader,uniforms,parameters,material){
return (function fresnel$app$init_$_render(){
var timer = (1.0E-4 * Date.now());
camera.position.x = (camera.position.x + (0.05 * (cljs.core.deref.call(null,fresnel.app.mouse_x) - camera.position.x)));

camera.position.y = (camera.position.y + (0.05 * ((- cljs.core.deref.call(null,fresnel.app.mouse_y)) - camera.position.y)));

camera.lookAt(scene.position);

camera_cube.rotation.copy(camera.rotation);

var seq__16551_16560 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,spheres));
var chunk__16552_16561 = null;
var count__16553_16562 = (0);
var i__16554_16563 = (0);
while(true){
if((i__16554_16563 < count__16553_16562)){
var vec__16555_16564 = cljs.core._nth.call(null,chunk__16552_16561,i__16554_16563);
var i_16565 = cljs.core.nth.call(null,vec__16555_16564,(0),null);
var sphere_16566 = cljs.core.nth.call(null,vec__16555_16564,(1),null);
sphere_16566.position.x = ((5000) * Math.cos((timer + i_16565)));

sphere_16566.position.y = ((5000) * Math.sin((timer + (i_16565 * 1.1))));

var G__16567 = seq__16551_16560;
var G__16568 = chunk__16552_16561;
var G__16569 = count__16553_16562;
var G__16570 = (i__16554_16563 + (1));
seq__16551_16560 = G__16567;
chunk__16552_16561 = G__16568;
count__16553_16562 = G__16569;
i__16554_16563 = G__16570;
continue;
} else {
var temp__4425__auto___16571 = cljs.core.seq.call(null,seq__16551_16560);
if(temp__4425__auto___16571){
var seq__16551_16572__$1 = temp__4425__auto___16571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16551_16572__$1)){
var c__5211__auto___16573 = cljs.core.chunk_first.call(null,seq__16551_16572__$1);
var G__16574 = cljs.core.chunk_rest.call(null,seq__16551_16572__$1);
var G__16575 = c__5211__auto___16573;
var G__16576 = cljs.core.count.call(null,c__5211__auto___16573);
var G__16577 = (0);
seq__16551_16560 = G__16574;
chunk__16552_16561 = G__16575;
count__16553_16562 = G__16576;
i__16554_16563 = G__16577;
continue;
} else {
var vec__16556_16578 = cljs.core.first.call(null,seq__16551_16572__$1);
var i_16579 = cljs.core.nth.call(null,vec__16556_16578,(0),null);
var sphere_16580 = cljs.core.nth.call(null,vec__16556_16578,(1),null);
sphere_16580.position.x = ((5000) * Math.cos((timer + i_16579)));

sphere_16580.position.y = ((5000) * Math.sin((timer + (i_16579 * 1.1))));

var G__16581 = cljs.core.next.call(null,seq__16551_16572__$1);
var G__16582 = null;
var G__16583 = (0);
var G__16584 = (0);
seq__16551_16560 = G__16581;
chunk__16552_16561 = G__16582;
count__16553_16562 = G__16583;
i__16554_16563 = G__16584;
continue;
}
} else {
}
}
break;
}

renderer.clear();

renderer.render(scene_cube,camera_cube);

return renderer.render(scene,camera);
});})(renderer,num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry,image,urls,texture_cube,shader,uniforms,parameters,material))
;
var animate = ((function (renderer,num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry,image,urls,texture_cube,shader,uniforms,parameters,material){
return (function fresnel$app$init_$_animate(){
requestAnimationFrame(fresnel$app$init_$_animate);

return render.call(null);
});})(renderer,num_spheres,container,spheres,aspect_ratio,camera,camera_cube,scene,scene_cube,geometry,image,urls,texture_cube,shader,uniforms,parameters,material))
;
return animate.call(null);
});

//# sourceMappingURL=app.js.map
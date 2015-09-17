(ns fresnel.app)

(def mouse-x (atom 0))
(def mouse-y (atom 0))

(defn get-aspect-ratio []
  (/ js/window.innerWidth
     js/window.innerHeight))

(defn window-half-x []
  (/ js/window.innerWidth 2))

(defn window-half-y []
  (/ js/window.innerHeight 2))

(defn init []
  (when (not js/Detector.webgl)
    (js/Detector.addGetWebGLMessage))

  (letfn [(on-mouse-move [e]
            (reset! mouse-x (* 10 (- (.-clientX e) (window-half-x))))
            (reset! mouse-y (* 10 (- (.-clientY e) (window-half-y)))))]
    (js/document.addEventListener "mousemove" on-mouse-move false))

  (let [container (js/document.createElement "div")
        spheres (js/Array.)
        aspect-ratio (get-aspect-ratio)
        camera (js/THREE.PerspectiveCamera. 60
                                            aspect-ratio
                                            1
                                            100000)
        camera-cube (js/THREE.PerspectiveCamera. 60
                                                 aspect-ratio
                                                 1
                                                 100000)
        scene (js/THREE.Scene.)
        scene-cube (js/THREE.Scene.)
        geometry (js/THREE.SphereGeometry. 100 32 16)
        path "textures/cube/Park2/"
        ext ".jpg"
        urls #js [(str path "posx" ext)
                  (str path "negx" ext)
                  (str path "posy" ext)
                  (str path "negy" ext)
                  (str path "posz" ext)
                  (str path "negz" ext)]
        texture-cube (js/THREE.ImageUtils.loadTextureCube urls)
        shader js/THREE.FresnelShader
        uniforms (js/THREE.UniformsUtils.clone (.-uniforms shader))
        parameters #js {:fragmentShader (.-fragmentShader shader)
                        :vertexShader (.-vertexShader shader)
                        :uniforms uniforms}
        material (js/THREE.ShaderMaterial. parameters)]
    (js/document.body.appendChild container)
    (set! (.. camera -position -z) 3200)
    (set! (.-format texture-cube) js/THREE.RGBFormat)
    (set! (.-value (aget uniforms "tCube")) texture-cube)
    (doseq [i (range 500)]
      (let [mesh (js/THREE.Mesh. geometry material)]
        (set! (.-x (.-position mesh)) (- (* (js/Math.random) 10000) 5000))
        (set! (.-y (.-position mesh)) (- (* (js/Math.random) 10000) 5000))
        (set! (.-z (.-position mesh)) (- (* (js/Math.random) 10000) 5000))
        (let [v (inc (* (js/Math.random) 3))]
          (set! (.-x (.-scale mesh)) v)
          (set! (.-y (.-scale mesh)) v)
          (set! (.-z (.-scale mesh)) v))
        (.add scene mesh)
        (.push spheres mesh)))
    (set! (.-matrixAutoUpdate scene) false)
    ;; Skybox
    (let [shader (aget js/THREE.ShaderLib "cube")]
      (set! (.-value (aget shader.uniforms "tCube")) texture-cube)
      (let [material (js/THREE.ShaderMaterial.
                      #js {:fragmentShader (.-fragmentShader shader)
                           :vertexShader (.-vertexShader shader)
                           :uniforms (.-uniforms shader)
                           :side js/THREE.BackSide})
            mesh (js/THREE.Mesh. (js/THREE.BoxGeometry. 100000 100000 100000) material)]
        (.add scene-cube mesh)))
    (let [renderer (js/THREE.WebGLRenderer. #js {:antialias false})]
      (.setPixelRatio renderer js/window.devicePixelRatio)
      (.setSize renderer js/window.innerWidth js/window.innerHeight)
      (set! (.-autoClear renderer) false)
      (.appendChild container (.-domElement renderer))
      (letfn [(on-window-resize []
                (let [aspect-ratio (get-aspect-ratio)]
                  (set! (.-aspect camera) aspect-ratio)
                  (set! (.-aspect camera-cube) aspect-ratio)
                  (set! (.-cam js/window) camera)
                  (set! (.-cc js/window) camera-cube)
                  (.updateProjectionMatrix camera)
                  (.updateProjectionMatrix camera-cube)
                  (.setSize renderer js/window.innerWidth js/window.innerHeight)))]
        (js/window.addEventListener "resize" on-window-resize false))

      (letfn [(render []
                (let [timer (* 0.0001 (js/Date.now))]
                  (set! (.-x camera.position)
                        (+ (.-x camera.position)
                           (* 0.05 (- @mouse-x camera.position.x))))
                  (set! (.-y camera.position)
                        (+ (.-y camera.position)
                           (* 0.05 (- (- @mouse-y) camera.position.y))))
                  (.lookAt camera (.-position scene))
                  (.copy (.-rotation camera-cube) (.-rotation camera))
                  (doseq [[i sphere] (map-indexed vector spheres)]
                    (set! (.-x (.-position sphere)) (* 5000 (js/Math.cos (+ timer i))))
                    (set! (.-y (.-position sphere)) (* 5000 (js/Math.sin (+ timer (* i 1.1))))))
                  (.clear renderer)
                  (.render renderer scene-cube camera-cube)
                  (.render renderer scene camera)))
              (animate []
                (js/requestAnimationFrame animate)
                (render))]
        (animate)))))


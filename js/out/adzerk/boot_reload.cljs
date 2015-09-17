(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] fresnel.app))
(when-not (client/alive?) (client/connect "ws://localhost:55682" {:on-jsload (fn* [] (fresnel.app/init))}))
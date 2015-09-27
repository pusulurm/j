System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/directive1/directive1.js": [
      "github:pusulurm/directive1@master",
      "github:pusulurm/directive1@master/main",
      "github:pusulurm/directive1@master/myDirective1",
      "github:pusulurm/directive1@master/_directive1_template_cache",
      "github:pusulurm/directive1@master/dirCtrl1"
    ],
    "dist/directive2/directive2.js": [
      "github:pusulurm/directive2@master",
      "github:pusulurm/directive2@master/main",
      "github:pusulurm/directive2@master/_directive2_template_cache",
      "github:pusulurm/directive2@master/myDirective2",
      "github:pusulurm/directive2@master/dirCtrl2"
    ]
  },

  map: {
    "angular": "npm:angular@1.5.0-beta.0",
    "angular-translate": "npm:angular-translate@2.8.0",
    "angular123": "npm:angular@1.5.0-beta.0",
    "directive1": "github:pusulurm/directive1@master",
    "directive2": "github:pusulurm/directive2@master",
    "jquery": "github:components/jquery@2.1.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:angular-translate@2.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.5.0-beta.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

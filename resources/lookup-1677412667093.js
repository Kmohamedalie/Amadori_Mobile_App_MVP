(function(window, undefined) {
  var dictionary = {
    "30d4211e-cb30-4995-87f3-c8789e5b92a0": "Sign up",
    "408d5d7d-704c-4a2c-b336-81a575fdbc5e": "Succesfully order",
    "c11dd910-53fa-427b-bbed-06845b1e25de": "Menu",
    "115dcf16-522a-4d98-b75f-3e11b05f0a49": "Checkout",
    "d7f757ec-9b28-4fc7-9ad3-5b2fb93d5d20": "Restaurants",
    "794e2ce8-cb61-483d-a6ac-7346f6969a4f": "Restaurant page",
    "9731833e-406a-49e8-b9b2-b4d4344ae441": "Discover",
    "58f0cf9d-c06a-448e-a648-23800f322cc3": "Sign in",
    "fd0a3984-85d6-4565-b0ca-6aa737b1e69a": "Order",
    "2185b077-b8bc-4f59-99e6-7174fbff3d5f": "Filters",
    "eba7ce23-f787-4835-bc18-35b4f95d5499": "Profile",
    "f49fcfa8-be36-4a8f-afb2-33e2846f9913": "Template 1",
    "e779882a-d72f-4632-a452-bfe211bcb3ed": "default_1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
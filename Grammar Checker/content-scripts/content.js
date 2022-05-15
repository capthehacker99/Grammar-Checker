if(window.top == window){
	var THEgetCookie = function(iframez,cname) {
	  var name = cname + "=";
	  var ca = iframez.cookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	}
	//alert("yeet");
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		//alert(request.action);
		//alert(request.type);
		if(request.action == 0xF1){
			if(request.type == 0){
				var all = document.getElementsByTagName("*");
				for (var i=0, max=all.length; i < max; i++) {
					if(all[i].textContent == "Show correct answers"){
						all[i].parentNode.style = "";
						all[i].parentNode.click();
					}else if(all[i].textContent == "Submit answer"){
						var yer = all[i].parentNode;
						setInterval(function(){
							yer.style = "";
						},100);
					}
				}
				sendResponse();
			}else if(request.type == 1){
				if(document.getElementById("class_iframe") != null){
					var iframey = (document.getElementById("class_iframe").contentDocument || document.getElementById("class_iframe").contentWindow.document);
					if(iframey){
						var iframez = (iframey.getElementById("t0_iframe").contentDocument || iframey.getElementById("t0_iframe").contentWindow.document);
						if(iframez){
							//alert("exists");
							var all = iframez.getElementsByClassName("distractor")
							for (var i=0, max=all.length; i < max; i++) {
								(function(){
									var ori = all[i].style;
									var oriel = all[i];
									all[i].style = "background-color: #FF0000;";
									setTimeout(function(){
										oriel.style = ori;
									},3000);
								})();
							}
						}
					}
				}
			}else if(request.type == 2){
				if(document.getElementById("class_iframe") != null){
					var iframey = (document.getElementById("class_iframe").contentDocument || document.getElementById("class_iframe").contentWindow.document);
					if(iframey){
						var iframez = (iframey.getElementById("t0_iframe").contentDocument || iframey.getElementById("t0_iframe").contentWindow.document);
						if(iframez){
							//alert("on");
							iframez.cookie = "unitClose=1;";
						}
					}
				}
			}else if(request.type == 3){
				if(document.getElementById("class_iframe") != null){
					var iframey = (document.getElementById("class_iframe").contentDocument || document.getElementById("class_iframe").contentWindow.document);
					if(iframey){
						var iframez = (iframey.getElementById("t0_iframe").contentDocument || iframey.getElementById("t0_iframe").contentWindow.document);
						if(iframez){
							//alert("off");
							iframez.cookie = "unitClose=0;";
						}
					}
				}
			}
			return true;
		}
	});
}
var s = document.createElement('script');
s.src = chrome.runtime.getURL('jquery-3.5.1.A.min.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
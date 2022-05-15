
const redirector = document.getElementById("redirect")
			const redirector2 = document.getElementById("redirect2")
			const redirector3 = document.getElementById("redirect3")
			redirector3.checked = localStorage['wsugst'] == 1;
			chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id,{
							type: redirector3.value ? 2 : 3,
							action: 0xF1
						},function() {});
					 });
			if (redirector) {
				redirector.onclick = function() {
					 chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id,{
							type: 0,
							action: 0xF1
						},function() {window.close();});
					 });
				}
			}
			if (redirector2) {
				redirector2.onclick = function() {
					 chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id,{
							type: 1,
							action: 0xF1
						},function() {window.close();});
					 });
				}
			}
			if (redirector3) {
				redirector3.onclick = function() {
					localStorage['wsugst'] = redirector3.checked ? 1 : 0;
					 chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id,{
							type: redirector3.checked ? 2 : 3,
							action: 0xF1
						},function() {});
					 });
				}
			}
			

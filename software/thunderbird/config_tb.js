//Thunderbird Default Settings

// disable application updates
pref("app.update.enabled", false);
lockPref("app.update.auto", false); 

// disables the 'know your rights' button from displaying on first run
pref("browser.rights.3.shown", true);

// disables the request to send performance data from displaying
pref("toolkit.telemetry.prompted", 2);
pref("toolkit.telemetry.rejected", true);

// extensions managing
//pref("extensions.shownSelectionUI", true);
//pref("extensions.autoDisableScopes", 0);

// lock default firefox proxy
lockPref("network.proxy.type", 5);

pref("mailnews.start_page.enabled", false);
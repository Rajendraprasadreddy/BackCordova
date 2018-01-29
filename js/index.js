window.utils = {
    initialize: function(){
        debugger;
        this.bindEvents();
    },
    bindEvents: function(){
        debugger;
      document.addEventListener('deviceready',this.deviceReady,false);  
    },
    deviceReady:function(){
        debugger;
         utils.loadTemplate(['HeaderView','fotterview'], function() {
    webview.Show('https://www.comcastnow.com');
//    window.open = cordova.InAppBrowser.open;
    app = new AppRouter();
    Backbone.history.start();
});  
    },

    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {
//        alert(navigator.platform);
        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get("templates/"+view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }

};

window.utils.initialize();

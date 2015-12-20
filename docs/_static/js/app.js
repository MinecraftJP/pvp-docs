var App = {
    baseUrl: '/',
    binds: [],
    pjax: null,
    init: function () {
        this.activate();
    },
    log: function (message) {
        if (console !== undefined) {
            console.log(message);
        }
    },
    register: function (el, callback) {
        App.binds.push({selector: el, callback: callback});
        jQuery(document).bind('AppActivate', function (event) {
            jQuery(event.el).find(el).each(callback);
        });
    },
    activate: function () {
        jQuery(document).trigger({
            el: document,
            type: 'AppActivate'
        });
    },
    setBaseURL: function(url) {
        App.baseUrl = url;
    },
    debounce: (function() {
        var timers = [];

        return function(func, delay) {
            if (timers[func]) {
                return;
            }

            timers[func] = setTimeout(function() {
                delete timers[func];
                func();
            }, delay);
        }
    })(),
    queue: (function() {
        var pending = [];

        function next() {
            var fn = pending.shift();
            if (fn) {
                fn(next);
            }
        }

        return function(fn) {
            pending.push(fn);
            if (pending.length == 1) next();
        };
    })()
};

App.register('.table-filter', function(i, el) {
    var input = jQuery('input[name=query]', el);
    var tbody = jQuery('tbody', el);
    input.on('input', function() {
        var query = input.val().toLowerCase();
        if (query) {
            tbody.children().each(function(i, el) {
                var tr = jQuery(el);
                var text = tr.text().toLowerCase();

                if (text.indexOf(query) !== -1) {
                    tr.show();
                } else {
                    tr.hide();
                }
            });
        } else {
            tbody.children().show();
        }
    });
});

jQuery(document).ready(function() {
    App.init.call(App);
});

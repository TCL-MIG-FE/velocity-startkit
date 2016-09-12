import $ from "./jquery";
import Layer from "../plugins/layer/layer";
var icons = {
    WARNING: 0,
    INFO: 1,
    ERROR: 2,
    SMILE: 6
};

var messageOptions = {
    time: 2000,
    skin: "layui-layer-msg",
    offset:'10px'
};

export default {
    
    warning(msg) {
        Layer.msg(msg, $.extend({icon: icons.WARNING}, messageOptions));
    },
    
    error(msg) {
        Layer.msg(msg, $.extend({icon: icons.ERROR}, messageOptions));
    },
    
    info(msg) {
        Layer.msg(msg, $.extend({icon: icons.INFO}, messageOptions));
    },
    
    confirm(msg, okCallback) {
        var defaultMsg = "Sure to continue?";
        if ($.isFunction(msg)) {
            okCallback = msg;
            msg = defaultMsg;
        } else {
            msg = msg || defaultMsg;
            okCallback = $.isFunction(okCallback) ? okCallback : $.noop;
            
        }
        var index = Layer.confirm(msg, {
            icon: icons.WARNING,
            btn: ['Yes', 'Cancel'],
            title: "Confirm",
            scrollbar: false,
            skin: "login-class",
            move: false
        }, function () {
            Layer.close(index);
            okCallback();
        });
        
    },
    
    open(dom, options) {
        options = $.extend({
            type: 1,
            closeBtn: 1,
            content: dom,
            btn: ''
        }, options);
        
        return Layer.open(options);
    },
    
    close(index) {
        index ? Layer.close(index) : Layer.closeAll();
    },
    
    closeParent() {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    },
    
    showLoading(msg) {
        return Layer.msg(msg, {
            skin: "layui-layer-msg loading",
            icon: 0,
            time: 0,
            shade: 0.3
        })
    },
    
    hideLoading(index) {
        Layer.close(index);
    }
    
}


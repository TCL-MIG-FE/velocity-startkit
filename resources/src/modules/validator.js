import $ from "jquery";
import "../plugins/validator/jquery-validate";

$.validateExtend({
    password: {
        require: true,
        conditional(value){
            value = $.trim(value);
            return value.length >= 8 && /\d/.test(value) && /[a-zA-Z]/.test(value);
        }
    }
});


const validate = (element, conditions, callback) => {
    var $ele = $(element);
    !$ele.is("form") && ( $ele = $ele.find("form").eq(0));
    if ($ele.length == 0) return;
    
    return $ele.validate({
        onKeyup: true,
        sendForm: false,
        
        eachInvalidField() {
            var $this = $(this),
                $parent = $this.closest("div.form-group").addClass("has-error"),
                $msgBlock = $parent.find(".help-block"),
                msg = $this.data("msg");
            if( !$msgBlock.length ){
                $msgBlock = $('<p class="help-block"></p>').text( msg );
                $this.parent().append($msgBlock);
            }else{
                $msgBlock.text(msg);
            }
            
        },
        eachValidField() {
            var $parent = $(this).closest("div.form-group");
            $parent.removeClass("has-error");
            $parent.find(".help-block").remove();
        },
        
        valid() {
            $.isFunction(callback) && callback();
        },
        
        conditional: $.isPlainObject(conditions) ? conditions : {}
    });
    
};


export  default validate;

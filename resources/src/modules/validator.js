import $ from 'jquery';
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


const validate = (element, conditions, callback) =>{
    var $ele = $(element);
    !$ele.is("form") && ( $ele = $ele.find("form").eq(0));
    if ($ele.length == 0) return;
    return $ele.validate({
        onKeyup: true,
        sendForm: false,
        
        eachInvalidField() {
            $(this).closest("div.form-group").addClass("has-error");
            
        },
        eachValidField() {
            $(this).closest("div.form-group").removeClass("has-error");
        },
        
        valid() {
            $.isFunction(callback) && callback();
        },
        
        conditional: $.isPlainObject(conditions) ? conditions : {}
    });
    
};


export  default validate;

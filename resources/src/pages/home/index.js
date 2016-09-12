import $ from "../../modules/jquery";
import Api from "../../utils/api";
import validate from "../../modules/validator";

class Page {
    
    constructor() {
        this.init();
    }
    
    init() {
        this.$form = $("#loginForm");
        this.bindEvents();
    }
    
    bindEvents() {
        validate(this.$form, null, $.proxy(this.submit, this));
    }
    
    submit() {
        let params = {};
        this.$form.find("input").each((index, item) => {
            params[item.id || item.name] = $.trim(item.value);
        });
        
        Api.login(params).then(()=> {
            window.location = '/tasks';
        });
    }
}


new Page();




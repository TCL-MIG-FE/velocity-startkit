import Api from "../../utils/api";

Api.getConfig().then(res => {
    console.log(res);
}).fail(error => {
    console.error(error);
});



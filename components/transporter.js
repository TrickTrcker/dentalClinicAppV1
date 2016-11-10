/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var DataSourceTransportor = function () {
    this.default = {
        method: "POST",
        dataType: "json",
        url:"",
        ajaxData:[],
        callBackfunction:""
    };
}

$.extend(DataSourceTransportor.prototype, {
    read: function (CustomObj) {
        $.extend(this.default,CustomObj);
//        DataSourceTransportor.default.extend(CustomObj);
        var jqxhr = $.ajax({
            method: this.default.method,
            dataType: this.default.dataType,
            url: this.default.url,
            data: this.default.ajaxData
        })
                .done(
                this.default.callBackfunction
                )
                .fail(function () {
                    alert("error");
                })
                .always(function () {
                    alert("complete");
                });
    },
    schema: function (CustomObj) {
        $.extend(this.default,CustomObj);
//        DataSourceTransportor.default.extend(CustomObj);
        var jqxhr = $.ajax({
            method: this.default.method,
            dataType: this.default.dataType,
            url: this.default.url,
            data: this.default.ajaxData
        })
                .done(
                this.default.callBackfunction
                )
                .fail(function () {
                    alert("error");
                })
                .always(function () {
                    alert("complete");
                });
    }
});




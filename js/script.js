/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var DataSourceTransportor = new DataSourceTransportor().read({
    method: "GET",
    dataType: "json",
    url: "http://localhost/JqueryComponent/public_html/reference/examples/820000.json",
    ajaxData: [],
    callBackfunction: mycallBack
});

function mycallBack(res)
{
    alert(res);
    console.log(res);
}
//        alert(DataSourceTransportor.r + ' -> ' + DataSourceTransportor.area());



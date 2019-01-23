//设备管理的添加ajax的post请求
$(document).on('click', '#shebeitianjia', function() {
    var id=this.parentNode.getAttribute("class");
    shebeitianjia_ajax(id);
    b();
})
function shebeitianjia_ajax(last_id){
    var main=document.getElementById("shebeitianjiamain");
    var fenlei=main.getElementsByTagName("input")[0].value;
    var biaoti=main.getElementsByTagName("input")[1].value;
    var guanjianzi=main.getElementsByTagName("input")[2].value;
    var zuozhe=main.getElementsByTagName("input")[3].value;

    var files = main.files[0];

    var form = new FormData();
    form.append('file',files);

    $.ajax({
        url:"?",//写上后台接受处理的文件名
        type:"post",
        data:{
　　　　　　　fenlei:fenlei,  
　　　　　　　biaoti:biaoti,
            guanjianzi :guanjianzi,
            zuozhe:zuozhe,
            form
            },
        success:function(data){
            alert("添加成功！");
            
        },
        error:function(data){
            alert("添加失败");
        }
    });
}
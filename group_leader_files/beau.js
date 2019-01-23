
function show0(){
    $("#renyuan").slideToggle("slow");
}
function hiden0(){
    var ban=document.getElementById("renyuan");
    ban.style.display="none";
}
$(document).on('click', '#gerenxinxi2 .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("sssss").setAttribute("value",id);
    $(".renyuandelete").eq(0).slideToggle("slow");
})
function renyuanhiden(){
    $(".renyuandelete").eq(0).css("display","none");
}
function show0gai(){
    $("#renyuangai").slideToggle("slow");
}
function hiden0gai(){
    var ban=document.getElementById("renyuangai");
    ban.style.display="none";
}




function show1(){
    $("#banqianbanhou").slideToggle("slow");
}
function hiden1(){
    var ban=document.getElementById("banqianbanhou");
    ban.style.display="none";
}
function show1gai(){
    $("#banqianbanhou-gai").slideToggle("slow");
}
function hiden1gai(){
    var ban=document.getElementById("banqianbanhou-gai");
    ban.style.display="none";
}
$(document).on('click', '#banqianAdd .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("bandel").setAttribute("value",id);
    $(".banqiandelete").eq(0).slideToggle("slow");
})
function banqianhiden(){
    $(".banqiandelete").eq(0).css("display","none");
}



function show2(){
    $("#wenjinaguanli").slideToggle("slow");
}

function hiden2(){
    var ban=document.getElementById("wenjinaguanli");
    ban.style.display="none";
}
function show2gai(){
    $("#wenjinaguanli-gai").slideToggle("slow");
}
function hiden2gai(){
    var ban=document.getElementById("wenjinaguanli-gai");
    ban.style.display="none";
}
$(document).on('click', '#wenjianguanlili .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("wenjiandel").setAttribute("value",id);
    $(".wenjiandelete").eq(0).slideToggle("slow");
})
function wenjianhiden(){
    $(".wenjiandelete").eq(0).css("display","none");
}






function show3(){
    $("#qingxaiojia").slideToggle("slow");
}
function hiden3(){
    var ban=document.getElementById("qingxaiojia");
    ban.style.display="none";
}
$(document).on('click', '#qingxiaojiajia .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("qingxiaodel").setAttribute("value",id);
    $(".qingxiaojdelete").eq(0).slideToggle("slow");
})
function qingxiaohiden(){
    $(".qingxiaojdelete").eq(0).css("display","none");
}




function show4(){
    $("#shengpiguanli").slideToggle("slow");
}
function hiden4(){
    var ban=document.getElementById("shengpiguanli");
    ban.style.display="none";
}
function show4gai(){
    $("#shengpiguanli-gai").slideToggle("slow");
}
function hiden4gai(){
    var ban=document.getElementById("shengpiguanli-gai");
    ban.style.display="none";
}
$(document).on('click', '#shengpiguanlili .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("shenpidel").setAttribute("value",id);
    $(".shenpidelete").eq(0).slideToggle("slow");
})
function shenpihiden(){
    $(".shenpidelete").eq(0).css("display","none");
}




function show5(){
    $("#anquan").slideToggle("slow");
}
function hiden5(){
    var ban=document.getElementById("anquan");
    ban.style.display="none";
}
function show5gai(){
    $("#anquan-gai").slideToggle("slow");
}
function hiden5gai(){
    var ban=document.getElementById("anquan-gai");
    ban.style.display="none";
}
$(document).on('click', '#anquanxingzuoye .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("anquanworkdel").setAttribute("value",id);
    $(".anquanworkdelete").eq(0).slideToggle("slow");
})
function anquanworkhiden(){
    $(".anquanworkdelete").eq(0).css("display","none");
}




function show6(){
    $("#t6stpm").slideToggle("slow");
}
function hiden6(){
    var ban=document.getElementById("t6stpm");
    ban.style.display="none";
}
function show6gai(){
    $("#t6stpmgai").slideToggle("slow");
}
function hiden6gai(){
    var ban=document.getElementById("t6stpmgai");
    ban.style.display="none";
}



function show7(){
    $("#helihua").slideToggle("slow");
}
function hiden7(){
    var ban=document.getElementById("helihua");
    ban.style.display="none";
}
function show7gai(){
    $("#helihuagai").slideToggle("slow");
}
function hiden7gai(){
    var ban=document.getElementById("helihuagai");
    ban.style.display="none";
}
$(document).on('click', '#helihuajianyi .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("helidel").setAttribute("value",id);
    $(".hrlihuadelete").eq(0).slideToggle("slow");
})
function helihuahiden(){
    $(".hrlihuadelete").eq(0).css("display","none");
}


function show8(){
    
    $("#xuexiziliao_add").slideToggle("slow");
}

function hiden8(){
    var ban=document.getElementById("xuexiziliao_add");
    ban.style.display="none";
}
function show8gai(){
    $("#xuexiziliao-gai").slideToggle("slow");
}
function hiden8gai(){
    var ban=document.getElementById("xuexiziliao-gai");
    ban.style.display="none";
}
$(document).on('click', '#xuexiziliao .btn-danger', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("xuexidel").setAttribute("value",id);
    $(".xuexidelete").eq(0).slideToggle("slow");
})
function wenjianhiden(){
    $(".xuexidelete").eq(0).css("display","none");
}



function view1(){
    var ban=document.getElementById("gerenxinxi2");
    ban.style.display="none";
    var ban=document.getElementById("gerenxinxi1");
    ban.style.display="block";
}

function view2(){
    var ban=document.getElementById("gerenxinxi1");
    ban.style.display="none";
    var ban=document.getElementById("gerenxinxi2");
    ban.style.display="block";
}

// function dele(){
//     $("#delete").slideToggle("slow");
// }
// function deletow(){
//     $("#delete").css("display","none");
// }
// function banAdd(){
//     var indexr=document.getElementById("banqianAdd").getElementsByTagName("tr").length;
//     var indexc=document.getElementById("banqianAdd").getElementsByTagName("tr")[0].getElementsByTagName("td").length;
//     var x=document.getElementById('banqianAdd').insertRow(index+1);
//     var a=x.insertCell(0);
//     var b=x.insertCell(1);
//     var c=x.insertCell(2);
//     var d=x.insertCell(3);
//     var e=x.insertCell(4);
//     a.innerHTML=document.getElementById('banqianAdd').insertRow(index).insertCell(0).value;
//     b.innerHTML=$(".banhuizhuti").text();
//     c.innerHTML=$(".chuqinrenshu").text();
//     d.innerHTML=$(".banhuishijian").text();
//     e.innerHTML='<button type="button" class="btn btn-primary" onclick="show1gai()">修改</button>'+
//      '<button type="button" class="btn btn-danger">删除</button>';
// }


//个人信息的修改
$(document).on('click', '#gerenxinxi2 .btn-primary', function() {
    
    var id=this.parentNode.getAttribute("class");
    renyuanxinxigetMsg(id);
    
    show0gai();
})
function renyuanxinxigetMsg(last_id){
    $.ajax({
        url:"?id="+last_id+"&biao=1'",
        type:"get",
        success:function(data){
            var put_id=document.getElementById("renyuangai").getElementsByTagName("input")[4];
            put_id.value=data.ID;
            var put_gonghao=document.getElementById("renyuangai").getElementsByTagName("input")[5];
            put_gonghao.value=data.gonghao;
            var put_shenfen=document.getElementById("renyuangai").getElementsByTagName("input")[6];
            put_shenfen.value=data.shenfen;
            var put_name=document.getElementById("renyuangai").getElementsByTagName("input")[7];
            put_name.value=data.pname;
            var put_sex=document.getElementById("renyuangai").getElementsByTagName("input")[8];
            put_sex.value=data.sex;
            var put_age=document.getElementById("renyuangai").getElementsByTagName("input")[9];
            put_age.value=data.age;
            var put_dianhua=document.getElementById("renyuangai").getElementsByTagName("input")[10];
            put_dianhua.value=data.dianhua;
            var put_zhiwei=document.getElementById("renyuangai").getElementsByTagName("input")[11];
            put_zhiwei.value=data.zhiwei;
            var put_ru_time=document.getElementById("renyuangai").getElementsByTagName("input")[12];
            put_ru_time.value=data.ru_time;
            var put_chezu=document.getElementById("renyuangai").getElementsByTagName("input")[13];
            put_chezu.value=data.chezu;
            var put_gongzi=document.getElementById("renyuangai").getElementsByTagName("input")[14];
            put_gongzi.value=data.gongzi;
            var put_xueli=document.getElementById("renyuangai").getElementsByTagName("input")[15];
            put_xueli.value=data.xueli;
            var put_minzu=document.getElementById("renyuangai").getElementsByTagName("input")[16];
            put_minzu.value=data.minzu;
            var put_zaizhi=document.getElementById("renyuangai").getElementsByTagName("input")[17];
            put_zaizhi.value=data.zaizhi;
            var put_beizhu=document.getElementById("renyuangai").getElementsByTagName("textarea")[0];
            put_beizhu.value=data.beizhu;
        },
        error:function(data){
            console.log(data);
        }
    });
}


//班前班后会的修改请求
$(document).on('click', '#banqianAdd .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("bansssss").setAttribute("value",id);
    banqianxiugaiMsg(id);
    //将修改的值放入表单中
    // var ban_num=this.parentNode.parentNode.parentNode.getElementsByTagName("td")[2].innerHTML;

    // var put_num=document.getElementById("banqianbanhou-gai").getElementsByTagName("input")[6];
    // put_num.value=ban_num;
    show1gai();
})
function banqianxiugaiMsg(last_id){
    $.ajax({
        url:"?id="+last_id+"&biao=2",
        type:"get",
        success:function(data){
            document.getElementById("banqianbanhou-gai").getElementsByTagName("td")[6].innerHTML=data[0];
            var put_id=document.getElementById("banqianbanhou-gai").getElementsByTagName("input")[6];
            put_id.value=data[1];
            var put_qingjia=document.getElementById("banqianbanhou-gai").getElementsByTagName("input")[7];
            put_qingjia.value=data[2];
            var put_tiaoxiu=document.getElementById("banqianbanhou-gai").getElementsByTagName("input")[8];
            put_tiaoxiu.value=data[3];
            // var put_beizhu=document.getElementById("banqianbanhou-gai").getElementsByTagName("input")[9];
            // put_beizhu.value=data.beizhu;
            var put_banqian=document.getElementById("banqianbanhou-gai").getElementsByTagName("textarea")[0];
            put_banqian.value=data[4];
            var put_benban=document.getElementById("banqianbanhou-gai").getElementsByTagName("textarea")[1];
            put_benban.value=data[5];
            var put_banhou=document.getElementById("banqianbanhou-gai").getElementsByTagName("textarea")[2];
            put_banhou.value=data[6];
            
        },
        error:function(data){
            console.log(data);
        }
    });
}
//文件管理的修改回显
$(document).on('click', '#wenjianguanlili .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("wensssss").setAttribute("value",id);
    wenjiangaiMsg(id);
    show2gai();
})
function wenjiangaiMsg(last_id){
    // var fenzu=document.getElementById("wangyefenzu").innerHTML;
    // var data={
    //     "fenzu":fenzu,
    //     "id":last_id
    // }
    // data=stringify(data);
    // console.log(data);
    // $.ajax({
    //     url:"",
    //     type:"post",
    //     data:data,
    //     dataType:'json',
    //     success:function(data){
            
    //         var put_xuanze=document.getElementById("wenjinaguanli-gai").getElementsByTagName("select")[0];
    //         var value = data.xuanze;
    //         if(value!=""){
    //            for(var i=0;i<put_xuanze.options.length;i++){
    //                if(value==put_xuanze.options[i].value){
    //                 put_xuanze.options[i].selected = 'selected';
    //                 break;
    //                  }
    //               }
    //         }
    //     },
    //     error:function(data){
    //         console.log(data);
    //     }
    // });
}



//请销假的审核
$(document).on('click', '#qingxiaojiajia .btn-info', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("qingsssss").setAttribute("value",id);
    //将需要修改的信息加载到修改表单里
    var qin_name=this.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML;
    var qin_time=this.parentNode.parentNode.parentNode.getElementsByTagName("td")[3].innerHTML;
    
    var put_id=document.getElementById("chuxian").getElementsByTagName("input")[6];
    put_id.value=qin_name;
    var put_time=document.getElementById("chuxian").getElementsByTagName("input")[7];
    put_time.value=qin_time;

    qingxiaojiaxiugaiMsg(id);
    b();
})
function qingxiaojiaxiugaiMsg(last_id){
    $.ajax({
        url:"?id="+last_id+"&biao=6",
        type:"get",
        success:function(data){
            var put_qingjiaren=document.getElementById("chuxian").getElementsByTagName("input")[6];
            put_qingjiaren.value=data.qingjiaren;
            var put_shiyou=document.getElementById("chuxian").getElementsByTagName("textarea")[0];
            put_shiyou.value=data.shiyou;
            var put_qing_time=document.getElementById("chuxian").getElementsByTagName("input")[7];
            put_qing_time.value=data.qing_time;
            var put_yijian=document.getElementById("chuxian").getElementsByTagName("textarea")[1];
            put_yijian.value=data.yijian;
            var put_xuanze=document.getElementById("chuxian").getElementsByTagName("select")[0];
            var lvalue = data.leibie;
            if(lvalue!=""){
               for(var i=0;i<put_xuanze.options.length;i++){
                   if(value==put_xuanze.options[i].value){
                    put_xuanze.options[i].selected = 'selected';
                    break;
                     }
                  }
            }
            var put_beizhu=document.getElementById("chuxian").getElementsByTagName("textarea")[2];
            put_beizhu.value=data.beizhu;
            
        },
        error:function(data){
            console.log(data);
        }
    });
}



//审批管理的修改
$(document).on('click', '#shengpiguanlili .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("shenpisssss").setAttribute("value",id);
    //将需要修改的内容放到表单里
    shenpixiugaiMsg(id);
    show4gai();
})
function shenpixiugaiMsg(last_id){
    $.ajax({
        url:"?id="+last_id+"&biao=7",
        type:"get",
        success:function(data){
            var put_shenpiname=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[4];
            put_shenpiname.value=data.shenpiname;
            var put_leibie=document.getElementById("shengpiguanli-gai").getElementsByTagName("select")[0];
            var lvalue = data.leibie;
            if(lvalue!=""){
               for(var i=0;i<put_leibie.options.length;i++){
                   if(value==put_leibie.options[i].value){
                    put_leibie.options[i].selected = 'selected';
                    break;
                     }
                  }
            }
            var put_shiyou=document.getElementById("shengpiguanli-gai").getElementsByTagName("textarea")[0];
            put_shiyou.value=data.shiyou;
            var put_bao_time=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[5];
            put_bao_time.value=data.bao_time;
            var put_bao_peo=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[6];
            put_bao_peo.value=data.bao_peo;
            var put_shenpi_peo=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[7];
            put_shenpi_peo.value=data.shenpi_peo;
            var put_shenpi_time=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[8];
            put_shenpi_time.value=data.shenpi_time;
            
            var put_yijian=document.getElementById("shengpiguanli-gai").getElementsByTagName("textarea")[1];
            put_yijian.value=data.yijian;
            
            var put_beizhu=document.getElementById("shengpiguanli-gai").getElementsByTagName("textarea")[2];
            put_beizhu.value=data.beizhu;
            
        },
        error:function(data){
            console.log(data);
        }
    });
}


//安全性作业的修改
$(document).on('click', '#anquanxingzuoye .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("anquansss").setAttribute("value",id);
    anquanzuoyeMsg(id)
    show5gai();
})
function anquanzuoyeMsg(last_id){
    $.ajax({
        url:""+last_id,
        type:"get",
        success:function(data){
            var put_minchen=document.getElementById("anquan-gai").getElementsByTagName("input")[4];
            put_minchen.value=data.mingcheng;
            var put_leibie=document.getElementById("anquan-gai").getElementsByTagName("input")[5];
            put_leibie.value = data.leibie;
            
            var put_miaoshu=document.getElementById("anquan-gai").getElementsByTagName("textarea")[0];
            put_miaoshu.value=data.miaoshu;
            
            
        },
        error:function(data){
            console.log(data);
        }
    });
}

//6s&&tpm的修改
$(document).on('click', '#ssstpm .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("s6tpmsss").setAttribute("value",id);
    tpm6sssgaiMsg(id)
    show6gai();
})
function tpm6sssgaiMsg(last_id){
    $.ajax({
        url:"?id="+last_id+"&biao=9",
        type:"get",
        success:function(data){
            var put_chejian=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[4];
            put_chejian.value=data[0];
           var put_bao_time=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[5];
            put_bao_time.value=data[1];
            var put_zhiwu=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[6];
            put_zhiwu.value=data[2];
            var put_xingmin=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[7];
            put_xingmin.value=data[3];
            var put_didian=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[8];
            put_didian.value=data[4];
            var put_gaikuang=document.getElementById("shengpiguanli-gai").getElementsByTagName("textarea")[0];
            put_gaikuang.value=data[5];
            var put_zeren=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[9];
            put_zeren.value=data[6];
            var put_qingkuang=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[10];
            put_qingkuang.value=data[7];
            

             var put_leibie=document.getElementById("shengpiguanli-gai").getElementsByTagName("select")[0];
            var lvalue = data[8];
            if(lvalue!=""){
               for(var i=0;i<put_leibie.options.length;i++){
                   if(value==put_leibie.options[i].value){
                    put_leibie.options[i].selected = 'selected';
                    break;
                     }
                  }
            }
            var put_gaitime=document.getElementById("shengpiguanli-gai").getElementsByTagName("input")[11];
            put_gaitime.value=data[9];
            
            
        },
        error:function(data){
            console.log(data);
        }
    });
}

//合理化建议的修改回显
$(document).on('click', '#helihuajianyi .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("helissss").setAttribute("value",id);
    helihuagaiMsg(id)
    show7gai();
})
function helihuagaiMsg(last_id){
    $.ajax({
        url:""+last_id,
        type:"get",
        success:function(data){
           
            var put_leibie=document.getElementById("helihuagai-main").getElementsByTagName("select")[0];
            var lvalue = data.leibie;
            if(lvalue!=""){
               for(var i=0;i<put_leibie.options.length;i++){
                   if(value==put_leibie.options[i].value){
                    put_leibie.options[i].selected = 'selected';
                    break;
                     }
                  }
            }
             var put_neirong=document.getElementById("helihuagai-main").getElementsByTagName("input")[4];
            put_neirong.value=data.neirong;
            var gaishanfangan=document.getElementById("helihuagai-main").getElementsByTagName("input")[4];
            gaishanfangan.value=data.gaishanfangan;
            var put_beizhu=document.getElementById("helihuagai-main").getElementsByTagName("input")[6];
            put_beizhu.value=data.beizhu;
            
            
        },
        error:function(data){
            console.log(data);
        }
    });
}

//学习资料修改回显
$(document).on('click', '#xuexiziliao .btn-primary', function() {
    var id=this.parentNode.getAttribute("class");
    document.getElementById("xuexisssss").setAttribute("value",id);
    xuexiziliaogaiMsg(id);
    show8gai();
})
function xuexiziliaogaiMsg(last_id){
    // console.log(last_id);
    // var fenzu=document.getElementById("wangyefenzu").innerHTML;

    // $.ajax({
    //     url:"/shenmu_war_exploded/wenjian/query/"+last_id,
    //     type:"get",
    //     success:function(data){
    //         var inputs=document.getElementById("xuexiziliao-gai").getElementsByTagName('input');
    //         inputs[9].value=data.faburen;
    //         inputs[10].value=data.fabushijian;
    //         var put_xuanze=document.getElementById("xuexiziliao-gai").getElementsByTagName("select")[0];
    //         var value = data.suoshufenlei;
    //         if(value!=""){
    //             for(var i=0;i<put_xuanze.options.length;i++){
    //                 if(value==put_xuanze.options[i].value){
    //                     put_xuanze.options[i].selected = 'selected';
    //                     break;
    //                 }
    //             }
    //         }
    //     },
    //     error:function(data){
    //         console.log(data);
    //     }
    // });
}

                  //ajax请求数据库的数据如下

//个人信息的个人信息加载
  // setInterval(getMsg,500);
function addMsg(Id,gonghao,shenfengzheng,pname,p_sex,p_age,p_phone,
    zhiwei,int_time,chezu,gongzi,xueli,minzu,zaizhi,p_beizhu){
    var htm='';
    htm+=`<tbody><tr id="thead">
    <td>名称</td>
    <td>资料</td>
    </tr>
    <tr>
    <td>ID</td>
    <td>${Id}</td>
    </tr>
    <tr>
    <td>工号</td>
    <td>${gonghao}</td>
    </tr>
    <tr>
    <td>身份证号</td>
    <td>${shenfengzheng}</td>
    </tr>
    <tr>
    <td>姓名</td>
    <td>${pname}</td>
    </tr>
    <tr>
    <td>性别</td>
    <td>${p_sex}</td>
    </tr>
    <tr>
    <td>年龄</td>
    <td>${p_age}</td>
    </tr>
    <tr>
    <td>电话</td>
    <td>${p_phone}</td>
    </tr>
    <tr>
    <td>职位</td>
    <td>${zhiwei}</td>
    </tr>
    <tr>
    <td>入职时间</td>
    <td>${int_time}</td>
    </tr>
    <tr>
    <td>车组</td>
    <td>${chezu}</td>
    </tr>
    <tr>
    <td>基本工资</td>
    <td>${gongzi}</td>
    </tr>
    <tr>
    <td>学历</td>
    <td>${xueli}</td>
    </tr>
    <tr>
    <td>民族</td>
    <td>${minzu}</td>
    </tr>
    <tr>
    <td >在职</td>
    <td>${zaizhi}</td>
    </tr>
    <tr>
    <td>备注</td>
    <td>${p_beizhu}</td>
    </tr>
    </tbody>`;
    $('#diyilie-color').html(htm);
}
function getMsg(){
    var last_id='组长信息';
    $.ajax({
        url:"?id="+last_id,
        type:"get",
        success:function(data){
            console.log(data);
            for(var i=0;i<data.length;i++){
                addMsg(data[i].Id,data[i].gonghao,data[i].shenfengzheng,data[i].pname,data[i].p_sex,data[i].p_age,data[i].p_phone,
                    data[i].zhiwei,data[i].int_time,data[i].chezu,data[i].gongzi,data[i].xueli,data[i].minzu,data[i].zaizhi,data[i].p_beizhu);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}

//人员信息表信息加载
  // setInterval(renyuanxinxigetMsg,500);
  function renyuantou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>ID</td>
    <td>姓名</td>
    <td>性别</td>
    <td>备注</td>
    <td>操作</td>
    </tr>`;
    $('#get_renyuan').html(htm);
  }
  function renyuanxinaddMsg(i,ID,pname,p_sex,beizhu){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${ID}</td>
    <td>${pname}</td>
    <td>${p_sex}</td>
    <td>${beizhu}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-primary" >修改</button>
            <button type="button" class="btn btn-danger" >删除</button></div>
    </td>
    </tr>`;
    $('#get_renyuan').append(html);
}
function renyuanxinxigetMsg(){
    var last_id='人员信息';
    $.ajax({
        url:"?id="+last_id,
        type:"get",
        success:function(data){
            console.log(data);
            renyuantou();
            for(var i=0;i<data.length;i++){
                renyuanxinaddMsg(i,data[i].ID,data[i].pname,data[i].p_sex,data[i].beizhu);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}

//班前班后会信息加载
  // setInterval(banqiangetMsg,500);
  function banqiantou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>会议名称</td>
    
    <td>出勤人数</td>
    <td>发布人</td>
    <td>操作</td>
    </tr>
    <tr>`;
    $('#banqianAdd').html(htm);
  }
  function banqianaddMsg(i,huiyiminchen,renshu,faburen,ID){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${huiyiminchen}</td>
    
    <td>${renshu}</td>
    <td>${faburen}</td>
    <td><div class="${ID}">
    <button type="submit" class="btn btn-primary" >修改</button>
    <button type="button" class="btn btn-danger">删除</button></div>
    </td>
    </tr>`;
    $('#banqianAdd').append(html);
}
function banqiangetMsg(){
    var last_id='班前班后';
    $.ajax({
        url:"?id="+last_id,
        type:"get",
        success:function(data){
            console.log(data);
            banqiantou();
            for(var i=0;i<data.length;i++){
                banqianaddMsg(i,data[i].huiyiminchen,data[i].renshu,data[i].faburen,data[i].ID);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}

//班组文化内容回显
function banzuwenhuahuixian(){
    var inputs=document.getElementById("banzuwenhua").getElementsByTagName("input");
    var texts=document.getElementById("banzuwenhua").getElementsByTagName("textarea");
    $.ajax({
        url:'',
        type:'post',
        success:function(data){
            console.log(data);

        },
        error:function(data){
            console.log(data);
        }
    });

}

//当一个积分都没有的时候先显示本族的人积分都为0
function zhigongjifenchushitou(){
    var htm='';
    htm+=`<tr id="thead">
<td> 姓 名 </td>
<td>个人分值汇总</td>
<td>分值</td>
</tr>`;
    $('#jiden_juzhong').html(htm);
}
function zhigongjifenchushiaddMsg(pname){
    var html='';
    html+=`<tr>
<td>${pname}<input type="hidden" class="jifenluruyuannames" value="${pname}"></td>
<td>0</td>
<td><input class="jifenluruyuan" type="text" name="106" value="0" style="width:20%"></td>
</tr>`;
    $('#jiden_juzhong').append(html);
}
function zhigongjifenchushigetMsg(){
    var fenzu=document.getElementById("wangyefenzu").innerHTML;
    console.log(fenzu);
    fenzu=Number(fenzu);
    $.ajax({
        url:"/shenmu_war_exploded/renyuan/name/"+fenzu,
        type:"get",
        success:function(data){
            console.log(data);
            console.log(data[0].xingming);
            zhigongjifenchushitou()
            for(var i=0;i<data.length;i++){
                zhigongjifenchushiaddMsg(data[i].xingming);
            }
        },
        error:function(data){
            console.log("zpou555");
        }
    });

}

//当数据库有记录的时候
function zhigongjifentou(){
    var htm='';
    htm+=`<tr id="thead">
<td> 姓 名 </td>
<td>个人分值汇总</td>
<td>分值</td>
</tr>`;
    $('#jiden_juzhong').html(htm);
}
function zhigongjifenaddMsg(pname,fenzhi){
    var html='';
    html+=`<tr>
<td>${pname}<input type="hidden" class="jifenluruyuannames" value="${pname}"></td>
<td>${fenzhi}</td>
<td><input class="jifenluruyuan" type="text" name="106" value="0" style="width:20%"></td>
</tr>`;
    $('#jiden_juzhong').append(html);
}
function zhigongjifengetMsg(leixing){

      var fenzu=document.getElementById("wangyefenzu").innerHTML;
    console.log(fenzu);
    fenzu=Number(fenzu);
    data={
        "jifenleixing":leixing,
        "fenzu":fenzu,
    }
    data=JSON.stringify(data);
    $.ajax({
        url:"/shenmu_war_exploded/jifen/huizong/",
        type:"post",
        data:data,
        dataType:'json',
        contentType: 'application/json',
        success:function(data){
            console.log(data);
            // console.log(data[0].xingming);
            if(data.length==0){
                zhigongjifenchushigetMsg();
            }else{
                zhigongjifentou();
                for(var i=0;i<data.length;i++){
                    zhigongjifenaddMsg(data[i].xingming,data[i].gerenfenzhihuizong);
                }
            }

        },
        error:function(data){
            console.log("zpou555");
        }
    });
    
}

        





//文件管理信息加载
  
  function wenjiantou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>文件名</td>
    <td>所属分类</td>
    <td>发布人</td>
    <td>发布时间</td>
    <td>操作</td>
    </tr>`;
    $('#wenjian_get').html(htm);
  }
  function wenjianaddMsg(i,wenjianname,fenlei,IfaburenD,fabutime,ID){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${wenjianname}</td>
    <td>
    ${fenlei}
    </td>
    <td>${IfaburenD}</td>
    <td>${fabutime}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-primary" >修改</button>
            <button type="button" class="btn btn-danger">删除</button></div>
    </td>
    </tr>`;
    $('#wenjian_get').append(html);
}
function wenjiangetMsg(){
    var fenzu=document.getElementById("wangyefenzu").innerHTML;
    $.ajax({
        url:""+fenzu,
        type:"get",
        success:function(data){
            console.log(data);
            wenjiantou();
            for(var i=0;i<data.length;i++){
                wenjianaddMsg(i,data[i].wenjianname,data[i].fenlei,data[i].fabutime,data[i].faburen,data[i].ID);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}

//文件修改提交的接口
function wenjianguanliapedatechuan(){
    var fenzu=document.getElementById("wangyefenzu").innerHTML;
    var id=document.getElementById("wensssss").value;
    var inputs=document.getElementById("wenjinaguanli").getElementsByTagName("input");
    var texts=document.getElementById("wenjinaguanli").getElementsByTagName("textarea");
    var sel=document.getElementById("wenjianpostfenleigaiupdate"); 
    var index = sel.selectedIndex; 
    var albumid= sel.options[index].value;
    var data1={
            "fenzu":fenzu,
            "id":id,
            "faburen":inputs[9].value,
            "leibie":albumid,
            "shijian":texts[10].value
    }
    console.log(data1);
    data1=JSON.stringify(data1);
    console.log(data1);
    
    $.ajax({
            url:'',
            type:'post',
            data:data1,
            dataType:'json',
            contentType: 'application/json',
            success:function(data){
                wenjianguanliupdatefile();
               
            },
            error:function(data){
                wenjianguanliupdatefile();
               
            }
    });
}
    //文件的删除
 
function wenjiandedelete(){
        var fenzu=document.getElementById("wangyefenzu").innerHTML;
        var id=document.getElementById("wenjiandel").value;
        var data={
                "fenzu":denzu,
                "id":id
        }
        data=JSON.stringify(data);
        $.ajax({
                url:'',
                type:'post',
                data:data,
                dataType:'json',
                contentType:'application/jaon',
                success:function(){
                alert("删除成功！");
                wenjianhiden();
                },
                error:function(){
                alert("删除成功！");
                wenjianhiden();
                }
        })
}





//请销假信息加载
  // setInterval(qingxiaogetMsg,500);
  function qingxiaotou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>姓名</td>
    <td>类别</td>
    <td>时间</td>
    <td>操作</td>
    </tr>`;
    $('#qingxiaojiajia').html(htm);
  }
  function qingxiaoaddMsg(i,p_name,leibie,shijian,ID){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${p_name}</td>
    <td>$leibie{}</td>
    <td>${leibie}</td>
    <td>${shijian}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-info">审核</button>
            <button type="button" class="btn btn-danger">删除</button></div>
    </td>
</tr>`;
    $('#qingxiaojiajia').append(html);
}
function qingxiaogetMsg(){
    var last_id='请销假';
    $.ajax({
        url:"?id="+last_id,
        type:"get",
        success:function(data){
            console.log(data);
            qingxiaotou();
            for(var i=0;i<data.length;i++){
                qingxiaoaddMsg(i,data[i].p_name,data[i].leibie,data[i].shijian,data[i].ID);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}

//审批信息加载
  // setInterval(shenpigetMsg,500);
  function shenpitou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>审批名称</td>
    <td>审批是由</td>
    <td>报送时间</td>
    <td>报送人</td>
    <td>审批人1</td>
    <td>审批人2</td>
    <td>审批人3</td>
    <td>审批时间</td>
    <td>操作</td>
    </tr>`;
    $('#shengpiguanlili').html(htm);
  }
  function shenpiaddMsg(i,mingchen,shiyou,bao_time,bao_people,shenp1,shenpi2,shenpi3,shenpi_time,ID){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${mingchen}</td>
    <td>${shiyou}</td>
    <td>${bao_time}</td>
    <td>${bao_people}</td>
    <td>${shenp1}</td>
    <td>${shenpi2}</td>
    <td>${shenpi3}</td>
    <td>${shenpi_time}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-primary " >修改</button>
            <button type="button" class="btn btn-danger">删除</button></div>
    </td>
    </tr>`;
    $('#shengpiguanlili').append(html);
}
function shenpigetMsg(){
    var last_id='审批管理';
    $.ajax({
        url:"?id="+last_id,
        type:"get",
        success:function(data){
            console.log(data);
            shenpitou();
            for(var i=0;i<data.length;i++){
                shenpiaddMsg(i,data[i].mingchen,data[i].shiyou,data[i].bao_time,data[i].bao_people,data[i].shenp1,data[i].shenpi2
                    ,data[i].shenpi3,data[i].shenpi_time,data[i].ID);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}

//安全关键性作业信息加载
  // setInterval(shenpigetMsg,500);
  function anquantou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>关键项目</td>
    <td>名称</td>
    <td>类别</td>
    <td>描述</td>
    <td>操作</td>
    </tr>
    <tr>`;
    $('#anquanxingzuoye').html(htm);
  }
  function anquanaddMsg(i,mingcheng,leibie,miaoshu,ID){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>卡控措施</td>
    <td>${mingcheng}</td>
    <td>${leibie}</td>
    <td>${miaoshu}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-primary " >修改</button>
            <button type="button" class="btn btn-danger">删除</button></div>
    </td>
    </tr>`;
    $('#anquanxingzuoye').append(html);
}
function anquangetMsg(){
    var fenzu=document.getElementById("wangyefenzu").innerHTML;
    $.ajax({
        url:"?"+fenzu,
        type:"get",
        success:function(data){
            console.log(data);
            anquantou();
            for(var i=0;i<data.length;i++){
                anquanaddMsg(i,data[i].mingcheng,data[i].leibie,data[i].miaoshu,data[i].ID);
            }
        },
        error:function(data){
            console.log("111111111111111111111111111111111111");
        }
    });
}
//合理化建议信息加载
  // setInterval(shenpigetMsg,500);
  function helihuatou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>类型</td>
    <td>内容</td>
    <td>改善方案</td>
    <td>备注</td>
    <td>操作</td>
    </tr>
    <tr>`;
    $('#helihuajianyi').html(htm);
  }
  function helihuaaddMsg(i,leixing,neisong,gaishanfangan,beizhu,ID){
    
    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${leixing}</td>
    <td>${neisong}</td>
    <td>${gaishanfangan}</td>
    <td>${beizhu}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-primary " >修改</button>
            <button type="button" class="btn btn-danger">删除</button></div>
    </td>
    </tr>`;
    $('#helihuajianyi').append(html);
}
function helihuagetMsg(){
    var fenzu=document.getElementById("wangyefenzu").innerHTML;
    $.ajax({
        url:"?"+fenzu,
        type:"get",
        success:function(data){
            console.log(data);
            helihuatou();
            for(var i=0;i<data.length;i++){
                helihuaaddMsg(i,data[i].leixing,data[i].neisong,data[i].gaishanfangan,data[i].beizhu,data[i].ID);
            }
        },
        error:function(data){
            console.log("111111111111111111111111111111111111");
        }
    });
}


//学习资料信息加载

function xuexitou(){
    var htm='';
    htm+=`<tr id="thead">
    <td>序号</td>
    <td>文件名</td>
    <td>所属分类</td>
    <td>发布人</td>
    <td>发布时间</td>
    <td>操作</td>
    </tr>`;
    $('#xuexiziliao').html(htm);
}
function xuexiaddMsg(i,wenjianname,fenlei,IfaburenD,fabutime,ID){

    var html='';
    html+=`<tr>
    <td>${i+1}</td>
    <td>${wenjianname}</td>
    <td>
    ${fenlei}
    </td>
    <td>${IfaburenD}</td>
    <td>${fabutime}</td>
    <td><div class="${ID}">
            <button type="button" class="btn btn-primary" >修改</button>
            <button type="button" class="btn btn-danger">删除</button></div>
    </td>
    </tr>`;
    $('#xuexiziliao').append(html);
}
function xuexigetMsg(){
    var fenzu=document.getElementById("wangyefenzu").innerHTML;
    $.ajax({
        url:"/shenmu_war_exploded/wenjian/getListWenjianByFenzu/"+fenzu,
        type:"get",
        success:function(data){
            console.log(data);
            xuexitou();
            for(var i=0;i<data.length;i++){
                xuexiaddMsg(i,data[i].wenjianmingcheng,data[i].suoshufenlei,data[i].faburen,data[i].fabushijian,data[i].id);
            }
        },
        error:function(data){
            console.log(data);
        }
    });
}


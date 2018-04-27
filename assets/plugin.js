var init_d = "格式：'SXX',其中'S'代表Start,调用时会传入'start'参数;'XX'决定执行顺序,数值小的先执行";
var S90swupdate = "检测升级是否成功";
var S99bst_manager = "核心管理程序，包括网络维护等";
var gprs_connect_chat = '(pppd) 内含关闭命令回显、设置APN、开始ATD拨号等命令<br>此脚本作为`connect`命令`-f`选项的参数，\
并整体作为pppd参数，即可写入pppd的option文件中，也可直接放在pppd之后，如下示例：<br><b>\
`pppd call cellular "/dev/ttyACM0" connect "chat -E -s -v -f /etc/ppp/chat/gprs-connect-chat"`</b><br>\
同时，此文件支持传入参数，如：<br><b>\
`connect "USE_APN=3gnet ${apn_user:+APN_USER=$apn_user }${apn_passwd:+APN_PASSWD=$apn_passwd }chat -E -s -v -f /etc/ppp/chat/gprs-connect-chat"`</b></br>\
上面调用方式把`USE_APN`参数传入，值为`3gnet`，`${apn_passwd:+APN_PASSWD=$apn_passwd }`这种写法的意思是若`apn_passwd`变量存在，则赋值给`APN_PASSWD`并传入，否则不传入';
var gprs_connect_chat_huawei = '华为模块有专用的设置网络模式指令，故单独拿出来';
var cellular = '此文件存放调用pppd时传入的参数<br>\
#Usage: root>pppd call cellular <br>\
以上为一般用法，实际参数选项既可全部放在一个文件中，一行一个参数;也可以直接放在命令后面，并且支持两种方式混合使用，如：<br>\
`pppd call cellular "/dev/ttyACM0" connect "USE_APN=3gnet ${apn_user:+APN_USER=$apn_user }${apn_passwd:+APN_PASSWD=$apn_passwd }chat -E -s -v -f /etc/ppp/chat/gprs-connect-chat"`';

var my_text="Hello this is an example of customize content.<br>\
if you want to wrap ,you have to type a '&lt;br&gt;',and '\\r\\n' is no use.";
var Tom_info = "\
Tel:18938862457<br>\
Mail:tommy@abcd.com<br>\
Addr:16 Romm,Amazing Street,Mars Province\
";

function expand_collapse(id,id_head){
    var open="▼";close="►";//▷▽ ►▼ ▸▾ ▹▿
    if(document.getElementById(id).style.maxHeight == "0px") 
    {
        document.getElementById(id_head).innerHTML = document.getElementById(id_head).innerHTML.replace(close,open);
        document.getElementById(id).style.maxHeight="900px";
        setTimeout('document.getElementById("'+id+'").style.overflow = "visible"',250);//目的：不让popup window超出父元素范围时不显示
    }
    else if(document.getElementById(id).style.maxHeight == "900px")
    {
        document.getElementById(id).style.overflow = "hidden";
        document.getElementById(id).style.maxHeight="0px"; 
        document.getElementById(id_head).innerHTML = document.getElementById(id_head).innerHTML.replace(open,close);
    }
    else    //value of maxHeight is null on first load,so add this
    {
        
        document.getElementById(id_head).innerHTML = document.getElementById(id_head).innerHTML.replace(close,open);
        document.getElementById(id).style.maxHeight="900px";
        setTimeout('document.getElementById("'+id+'").style.overflow = "visible"',250);
    }    
}
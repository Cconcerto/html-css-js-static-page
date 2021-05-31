$(document).ready(function(){
    $(".intro_img").hover(function(){
        $(this).next().css({"visibility":"visible", "overflow":"hidden"}).fadeIn()
    }).mouseleave(function(){
        $(this).next().fadeOut()
    })
    $("#name").focus(function () { 
        $("#name").blur(function () { 
            checkName(this)
        });
    });
    $("#pass").focus(function () { 
        $("#pass").blur(function () { 
            checkPass(this)
        });
    });
    $("#resubmit").click(function () {
        if ($("#name").val() == "" || $("#pass").val() == "" || $("#confirmPass").val() == "") {
            alert("用户名或密码不能为空！")
        } else{
            Register()
        }
    })
    $("#submit").click(function () {
        if ($("#name").val() == "" || $("#pass").val() == "") {
            alert("用户名或密码不能为空！")
        } else{
            Login()
        }
    })
})

function Login() {
    $.ajax({
        type: "POST",
        url: "http://localhost:5678/login",
        data: {
            "name": $("#name").val(),
            "password": $("#pass").val()
        },
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (data) {
            if (data.match(/success/i)) {
                alert(data)
                window.location = "book.html"
            } else {
                alert(data)
            }
        }
    })
} 
 
function checkpwd(inp){
    pwd1 = document.getElementById("pass")
    div1 = document.getElementById("warning")
    if (inp.value != pwd1.value) {
        div1.style.visibility = "visible"
        inp.focus()
    } else {
        div1.style.visibility = "hidden"
    }
}

function Register() {
    $.ajax({
        type: "POST",
        url: "http://localhost:5678/web/register/",
        data: {
            "name": $("#name").val(),
            "password": $("#pass").val()
        },
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        success: function(data) {
            if (data.match(/success/i)) {
                alert(data)
                window.location = "login.html"
            }
            else {
                alert(data)
            }
        },
        error: function (xhr) {
            alert("错误提示："+xhr.status+" "+xhr.statusText)
        }
    })
}

// 用户名仅可使用汉字、数字、字母和下划线
function checkName(inp) {
    var patt = /^\w+$/
    var text = $(inp).val()
    if (!patt.test(text)) {
        alert("用户名仅可使用数字、字母和下划线")
        return false
    }
}

// 密码仅可使用数字、字母和下划线
function checkPass(inp) {
    var patt = /^\w{6,16}$/
    var text = $(inp).val()
    if (!patt.test(text)) {
        alert("密码仅可使用数字、字母和下划线，且只能是6-16位")
        return false
    }
} 
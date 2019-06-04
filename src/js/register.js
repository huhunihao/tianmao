$(function () {
    // 随机数字函数：
    function getNumber(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    // 随机验证码函数：
    function checkcode() {
        var str = "";
        for (var i = 0; i < 4; i++) {
            var num = getNumber(1, 3)
            switch (num) {
                case 1:
                    str += String.fromCharCode(getNumber(97, 122));
                    break;
                case 2:
                    str += String.fromCharCode(getNumber(65, 90));
                    break;
                case 3:
                    str += String.fromCharCode(getNumber(48, 57))
            }
        }

        return str;
    }
    var reg = {
        "username": /^\w{2,}$/,
        "email": /^\w{6,}@[A-z0-9]{2,}\.[A-z]{2,}\.?[A-z]*$/,
        "password": /^.{6,16}$/,
        "number": /^1[3-9]\d{9}$/,
        "code": /^\w{4}$/i,
        "low": /^\d{6,16}$/,
        "middle": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
        "high": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,16}$/,

    }
    $('.codes').html(checkcode());
    $('.change').on('click', function () {
        $('.codes').html(checkcode())
    })
    $('#username').on('keyup', function () {
        var username = this.value;
        $.ajax({
            type: "get",
            url: "../lib/hasname.php",
            data: { username: username },
            dataType: "json",
            success: function (response) {
                $('.res').html(response.msg);
                if (response.hasname) {
                    $('.res').css('color', 'red');
                } else {
                    $('.res').css('color', 'green')
                }
            }
        });
        $('#username').on('blur', function () {
            if (reg["username"].test(this.value) && $('.res').html() == "用户名可以使用") {
                this.dataset.pass = "true";
                $('.username').addClass('true');
                $('.username').removeClass('error');
                $('.username').html('');
            } else {
                $('.username').addClass('error');
                $('.username').html('请输入正确的用户名');
                $('.username').removeClass('true');
                this.dataset.pass = "false";
            }
            check()
        })

    })
    $('#email').on('keyup', function () {
        $('#email').on('blur', function () {
            console.log(this);
            if (reg["email"].test(this.value)) {
                this.dataset.pass = "true";
                $('.email').addClass('true');
                $('.email').removeClass('error');
                $('.email').html('');
            } else {
                $('.email').addClass('error');
                $('.email').html("请填写正确的邮箱");
                $('.email').removeClass('true');
                this.dataset.pass = "false";
            }
            check()
        })

    })
    $('#create-password').on('keyup', function () {
        if (reg["low"].test(this.value)) {
            $('.middle').css({
                'background': '#ccc',
                'color': 'white'
            })
            $('.high').css({
                'background': '#ccc',
                'color': 'white'
            })
            $('.low').css({
                'background': 'red',
                'color': 'black'
            })
        } else if (reg["middle"].test(this.value)) {
            $('.low').css({
                'background': '#ccc',
                'color': 'white'
            })
            $('.high').css({
                'background': '#ccc',
                'color': 'white'
            })
            $('.middle').css({
                'background': 'yellow',
                'color': 'black'
            })
        } else if (reg["high"].test(this.value)) {
            $('.middle').css({
                'background': '#ccc',
                'color': 'white'
            })
            $('.low').css({
                'background': '#ccc',
                'color': 'white'
            })
            $('.high').css({
                'background': 'green',
                'color': 'black'
            })
        }
        $('#create-password').on('blur', function () {
            if (reg["password"].test(this.value)) {
                $('.create-password').addClass('true');
                $('.create-password').removeClass('error');
                $('.create-password').html('');
                this.dataset.pass = "true"
            } else {
                $('.create-password').addClass('error');
                $('.create-password').removeClass('true');
                $('.create-password').html('密码为6-16位大小写英文字母、数字或特殊字符的组合');
                this.dataset.pass = "false"
            }
            check()
        })

    })

    $('#confirm-password').on('keyup', function () {
        $('#confirm-password').on('blur', function () {
            if (this.value === $('#create-password').val() && this.value) {
                $('.confirm-password').addClass('true');
                $('.confirm-password').removeClass('error');
                $('.confirm-password').html('');
                this.dataset.pass = "true"
            } else {
                $('.confirm-password').addClass('error');
                $('.confirm-password').html('两次输入的密码不一致');
                $('.confirm-password').removeClass('true');
                this.dataset.pass = "false"

            }
            check()
        })

    })


    $('#my-number').on('keyup', function () {
        $('#my-number').on('blur', function () {
            if (reg["number"].test(this.value)) {
                $('.my-number').addClass('true');
                $('.my-number').removeClass('error');
                $('.my-number').html('');
                this.dataset.pass = "true"
            } else {
                $('.my-number').addClass('error');
                $('.my-number').removeClass('true');
                $('.my-number').html('请填写有效的手机号');
                this.dataset.pass = "false"
            }
            check()
        })

    })

    $('#code').on('keyup', function () {
        $('#code').on('blur', function () {
            if (this.value === $('.codes').html()) {
                $('.code').addClass('true');
                $('.code').removeClass('error');
                $('.code').html('');
                this.dataset.pass = "true"
            } else {
                $('.code').addClass('error');
                $('.code').html('输入的验证码错误');
                $('.code').removeClass('true');
                this.dataset.pass = "false"
            }
            check()
        })

    })
    function check() {
        var pass = $('input[data-pass="true"]');
        // console.log(pass)
        // console.log(pass.length)
        if (pass.length === 6) {
            $('#submit').removeAttr('disabled');
            $('.btn').addClass('true');
            $('#submit').css({
                'cursor': 'pointer',
                'background': 'lightgreen'
            })
        } else {
            $('#submit').css('disabled', 'disabled');
            $('.btn').removeClass('true');
        }
    }
    $('#submit').on('click', function () {
        if (!$('#submit').attr('disabled')) {
            var username = $('#username').val();
            var password = $('#create-password').val();
            var email = $('#email').val();
            $.ajax({
                type: "get",
                url: "../lib/register.php",
                data: {
                    username: username,
                    password: password,
                    email: email
                },
                // dataType: "dataType",
                success: function (response) {
                    if(response){alert('注册成功');
                    location.href = 'login.html'};
                }
            });
        }



    })
})
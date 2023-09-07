<template>
    <div class="container">
        <div class="loginBox"></div>
        <a-form-model ref="loginFormRef" :rules="rules" :model = "model" class="loginForm">

        </a-form-model>
    </div>
</template>
<script>
export default {
    data(){
        return {
            formdata:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    {required:true,message:'请输入用户名',trigger:'blur'},
                    {
                        min:4,
                        max:12,
                        message:'用户名必须在4到12个字符之间',
                        trigger:'blur',
                    }
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {
                        min:6,
                        max:20,
                        message:'密码必须在6~20个字符之间',
                        trigger:'blur'

                    }
                ]
            }
        }
    }
}
</script>
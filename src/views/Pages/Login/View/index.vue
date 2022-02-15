<template>
    <div class="default-box">
        <!-- <img class="bac-img animate__animated animate__pulse" src="@/assets/bac.png" alt="" /> -->
        <a-form ref="loginForm" :model="form" class="login-box animate__animated animate__bounceIn" @submit="handleSubmit" auto-label-width>
            <h1 style="text-align: center">EZ-Admin</h1>
            <p class="tips">The simpler the better</p>
            <a-form-item field="user" :rules="[{ required: true, message: '用户名可使用admin' }]" :validate-trigger="['change', 'focus']" label="用户">
                <a-input v-model="form.user" placeholder="用户输入..." />
            </a-form-item>
            <a-form-item field="psw" :rules="[{ required: true, message: '密码可使用6个6' }]" :validate-trigger="['change', 'focus']" label="密码">
                <a-input-password v-model="form.psw" placeholder="密码输入..." />
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit" type="primary" size="large" long>登录</a-button>
                <a-button @click="$refs.loginForm.resetFields()" size="large" long>重置</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
    name: "LoginView",
    data() {
        return {
            form: {
                user: "",
                psw: "",
            },
        };
    },
    methods: {
        ...mapActions("user", ["handlerlogin"]),
        validForm(form) {
            let flag = [];
            for (let i in form) {
                if (!form[i]) flag.push(false);
                else flag.push(true);
            }
            return flag.every((el) => {
                return el;
            });
        },
        // eslint-disable-next-line no-unused-vars
        handleSubmit(value) {
            if (this.validForm(this.form)) {
                this.handlerlogin(this.form)
                    .then((res) => {
                        const { login, msg } = res;
                        login && this.$message.success(msg) && router.push("/");
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch((err) => {
                        // Message.error("请求超时")
                    });
            } else return;
        },
    },
};
</script>
<style scoped>
.login-box {
    max-width: 400px;
    box-sizing: border-box;
    padding: 80px 30px;
    /* box-shadow: 0 0 6px #e0e0e0; */
    border-radius: 9px;
    background-color: #fff;
}

.tips {
    color: #d8d8d8;
    text-align: center;
    margin-top: -9px;
}

@media (max-width: 1024px) {
    .bac-img {
        display: none;
    }
}

@media (max-width: 390px) {
    .login-box {
        width: 350px;
    }
}

@media (max-width: 330px) {
    .login-box {
        width: 300px;
    }
}
</style>

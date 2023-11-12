<template>
    <div class="login__page">
        <form class="login__page-form" @submit.prevent="submitLogin">
            <router-link to="/signup">
                <div class="login__page-link">Not a member? Sign up here</div>
            </router-link>
            <h1 class="login__page-form__title">Login</h1>
            <input class="login__page-form__user" type="text" placeholder="Username" v-model="username">
            <input class="login__page-form__pass" type="password" name="" id="" placeholder="Password" v-model="password">
            <div class="login__page-form__check">
                <input class="login__page-form__check-inp" type="checkbox" name="check" id="check" v-model="checkbox">
                <label class="login__page-form__check-label" for="check">I agree to receive updates by email</label>
            </div>
            <div class="login__page-snackbar" v-if="snackbar">
                <v-snackbar
                v-model="snackbar" v-for="error in errors" :key="error"
                >
                {{ error }}
                </v-snackbar>
            </div>
            <button class="login__page-form__button">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "LoginPage",
        data() {
            return {
                username: '',
                password: '',
                errors: [],
                snackbar: false
            }
        },
        methods: {
            callSnackbar() {
                setTimeout(() => {
                    this.snackbar = false
                }, 2000)
            },
            async submitLogin() {
                this.errors = [];

                const formData = {
                    password: this.password,
                    username: this.username,
                };
                try {
                    const response = await axios.post('api/login', formData);
                    if (response.status === 200) {
                        const { token } = response.data;
                        localStorage.setItem('token', token);
                        const data = await response.data;
                        console.log(data);
                        this.$store.commit('setAuthenticated', true)
                        this.$router.push('/');
                    } else {
                        this.errors.push('Invalid credentials');
                        this.snackbar = true
                        this.callSnackbar()
                    }
                } catch (err) {
                    console.log(err);
                    this.errors.push(err.response.data.msg);
                    this.snackbar = true
                    this.callSnackbar()
                }
            }
        }
}
</script>

<style lang="scss" scoped>
.login__page {
    height: 100vh;
    background-image: url('@/assets/rest.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    &-link {
        color: #D58C51;
        font-family: 'Montserrat';
        font-size: 11px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: 7px;
    }

    &-snackbar {
        position: fixed;
        background-color: red;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 300px;
        right: 0;
        bottom: 10px;
        min-height: 20px;
        z-index: 9999;
    }

    &-form {
        background: #FFF;
        width: 460px;
        height: 340px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title {
            color: #161516;
            font-family: 'Montserrat';
            font-size: 31px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
            margin-top: 15px;
            margin-bottom: 36px;
        }

        &__user, &__pass {
            width: 420px;
            height: 39px;
            flex-shrink: 0;
            border-radius: 61px;
            border: 1px solid #D58C51;
            color: #161516;
            font-family: 'Montserrat';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 15px;
            padding-left: 18px;
        }

        &__check {
            margin-left: 20px;
            margin-bottom: 30px;
            display: flex;
            align-self: flex-start;

            &-label {
                color: #161516;
                margin-left: 9px;
                color: #301411;
                font-family: 'Montserrat';
                font-size: 11px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
        }

        &__button {
            cursor: pointer;
            background: #D58C51;
            border: none;
            width: 200px;
            height: 42px;
            color: #131313;
            font-family: 'Montserrat';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
}
</style>
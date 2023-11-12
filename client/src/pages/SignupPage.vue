<template>
    <div class="signup__page">
        <form @submit.prevent="submitForm" class="signup__page-form">
            <router-link to="/login">
                <div class="signup__page-link">Already a member? Login here</div>
            </router-link>
            <h1 class="signup__page-form__title">Sign Up</h1>
            <input class="signup__page-form__user" type="text" placeholder="Username" v-model="username">
            <input class="signup__page-form__pass" type="password" name="" id="" placeholder="Password" v-model="password">
            <div class="signup__page-form__check">
                <input class="signup__page-form__check-inp" type="checkbox" name="check" id="check" v-model="checkbox">
                <label class="signup__page-form__check-label" for="check">I agree to receive updates by email</label>
            </div>
            <div class="signup__page-snackbar" v-if="snackbar">
                <v-snackbar
                v-model="snackbar" v-for="error in errors" :key="error"
                >
                {{ error }}
                </v-snackbar>
            </div>
            <button class="signup__page-form__button">Sign Up</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SignupPage",
    data() {
        return {
            username: '',
            password: '',
            errors: [],
            snackbar: false
        };
    },
    mounted() {
        document.title = 'Sign Up'
    },
    methods: {
        callSnackbar() {
            setTimeout(() => {
                this.snackbar = false
            }, 2000)
        },
        async submitForm() {
            this.errors = [];

            const formData = {
                username: this.username,
                password: this.password
            };

            try {
                const response = await axios.post('/api/register', formData);

                if (response.status === 200) {
                    const data = response.data;
                    console.log(data);
                    this.$router.push('/login');
                }
            } catch (error) {
                console.log(error.response);
                if (error.response && error.response.data && error.response.data.msg) {
                    this.errors.push(error.response.data.msg);
                    this.snackbar = true
                    this.callSnackbar()
                } else {
                    this.errors.push('An unexpected error occurred');
                    this.snackbar = true
                    this.callSnackbar()
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.signup__page {
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
            margin-top: 36px;
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


<template>
    <div class="navbar">
    <router-link to="/">
        <img :src="logo" alt="" class="navbar-logo">
    </router-link>
        <div class="navbar-container">
            <div class="navbar-container__link">
            Login
            </div>
            <div class="navbar-container__link">
            Sign Up
            </div>
        </div>
        
    </div>
    <!-- <router-link to="/login">
        <div>Login</div>
    </router-link>
    <router-link to="/signin">
        <div>Sign In</div>
    </router-link> -->
</template>

<script>
import logo from '@/assets/logo.png';

    export default {
        name: "NavBar",
        data() {
            return {
                logo,
            }
        }
    }
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: space-between;
    align-items: center;

    &-logo {
        width: 100px;
        height: 80px;
    }

    &-container {
        display: flex;

        &__link {
            padding: 20px;
        }
    }

}
</style>
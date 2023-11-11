<template>
    <div class="navbar">
    <router-link to="/">
        <img :src="logo" alt="" class="navbar-logo">
    </router-link>
        <div class="navbar-container" v-if="!token && !isAuthenticated">
                <router-link to="/login">
                    <div class="navbar-container__link">Login</div>
                </router-link>
                <router-link to="/signup">
                    <div class="navbar-container__link">Sign Up</div>
                </router-link>
        </div>
        <div class="navbar-container" v-else>
            <router-link to="/login">
                <div class="navbar-container__link" @click="logout">Log Out</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/logo.png';

    export default {
        name: "NavBar",
        data() {
            return {
                logo,
                token: localStorage.getItem('token') || null
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.state.isAuthenticated
            }
        },
        methods: {
            logout() {
                this.$store.commit('setAuthenticated', false)

                localStorage.removeItem('token')
                this.token = null
                localStorage.removeItem('cart')
            }
        }
    }
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #000;

    &-logo {
        width: 100px;
        height: 80px;
    }

    &-container {
        display: flex;

        &__link {
            text-decoration: none;
            color: white;
            padding: 20px;
        }
    }

}
</style>
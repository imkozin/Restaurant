<template>
    <button @click="router.back()" class="back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
        <path d="M3.65142 1.04688C3.78676 0.911539 3.99983 0.911539 4.13517 1.04688C4.26594 1.17765 4.26594 1.39529 4.13517 1.52575L1.68228 3.97864H9.77647C9.96516 3.97864 10.12 4.12861 10.12 4.31729C10.12 4.50598 9.96516 4.66082 9.77647 4.66082H1.68228L4.13517 7.10914C4.26594 7.24448 4.26594 7.46242 4.13517 7.59289C3.99983 7.72823 3.78676 7.72823 3.65142 7.59289L0.617851 4.55932C0.487083 4.42855 0.487083 4.21091 0.617851 4.08045L3.65142 1.04688Z" fill="#D58C51"/>
        </svg>
    </button>
</template>

<script>
import { useRouter } from 'vue-router';
    export default {
        name: "BackButton",

        setup() {
            const router = useRouter();

            return {
                router,
            }
        }
    }
</script>

<style lang="scss" scoped>
.back-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-shrink: 0;
}
</style>
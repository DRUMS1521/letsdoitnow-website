<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';

import menuIco from '../icons/menu-ico.vue'

interface LangInter {
    menu: {
        home: string;
        about: string;
        services: string;
        portfolio: string;
        blog: string;
    }
}

const language = ref<LangInter>({
    "menu": {
        "home": "",
        "about": "",
        "services": "",
        "portfolio": "",
        "blog": ""
    }
});

const showMobileMenu = ref<Boolean>(false);
const showMenu = () => {
    showMobileMenu.value =  !showMobileMenu.value;
}

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es")
});
</script>

<template>
    <header class="header">
        <i @click="showMenu">
            <menu-ico svgColorClass="#D9D9D9" :height="'32'" :width="'32'" />
        </i>
            <div class="logo">
                <img src="../../assets/logo-header.svg" alt="">
            </div>
            <nav class="nav" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="links">
                    <li @click="showMobileMenu = false"><router-link to="/">{{ language.menu.home }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/about">{{ language.menu.about }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/services">{{language.menu.services}}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/portfolio">{{ language.menu.portfolio }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/blog">{{ language.menu.blog }}</router-link></li>
                </ul>
            </nav>
    </header>
</template>
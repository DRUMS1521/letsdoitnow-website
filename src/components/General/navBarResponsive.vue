<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { useRouter } from 'vue-router';

import menuIco from '../icons/menu-ico.vue'

interface LangInter {
    menu: {
        home: string;
        about: string;
        services: string;
        portfolio: string;
        blog: string;
        contact: string;
    }
}

const language = ref<LangInter>({
    "menu": {
        "home": "",
        "about": "",
        "services": "",
        "portfolio": "",
        "blog": "",
        "contact": ""
    }
});

const router = useRouter();
const showMobileMenu = ref<Boolean>(false);
const showMenu = () => {
    showMobileMenu.value =  !showMobileMenu.value;
}

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es")
});


const isActive = (route: string) => {
    return router.currentRoute.value.path === route;
};
</script>

<template>
    <header class="header" style="z-index: 1000;">
        <i @click="showMenu">
            <menu-ico svgColorClass="#D9D9D9" :height="'32'" :width="'32'" />
        </i>
            <div class="logo">
                <img src="../../assets/logo-header.svg" alt="">
            </div>
            <nav class="nav" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="links">
                    <li @click="showMobileMenu = false"><router-link to="/" exact :class="{ active: isActive('/') }">{{ language.menu.home }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/about" exact :class="{ active: isActive('/about') }">{{ language.menu.about }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/services" exact :class="{ active: isActive('/services') }">{{language.menu.services}}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/portfolio" :class="{ active: isActive('/portfolio') }">{{ language.menu.portfolio }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/blog" :class="{ active: isActive('/blog') }">{{ language.menu.blog }}</router-link></li>
                    <li @click="showMobileMenu = false"><router-link to="/contact" :class="{ active: isActive('/contact') }">{{ language.menu.contact }}</router-link></li>
                </ul>
            </nav>
    </header>
</template>
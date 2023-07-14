<template>
    <header class="header" :class="{'scrolled-nav' : scrollPosition}">
            <div class="logo">
                <img src="../assets/logo-header.svg" alt="">
            </div>
            <nav class="nav">
                <ul class="links" v-show="!mobile">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">Nosotros</router-link></li>
                    <li><router-link to="/services">Servicios</router-link></li>
                    <li><router-link to="/portfolio">Portafolio</router-link></li>
                    <li><router-link to="/blog">Blog Site</router-link></li>
                </ul>
            </nav>
            <div class="icon">
                <img @click="toggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}" src="../assets/menu-icon.svg" alt="">
            </div>
            <transition name="mobile-nav" >
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">Nosotros</router-link></li>
                    <li><router-link to="/services">Servicios</router-link></li>
                    <li><router-link to="/portfolio">Portafolio</router-link></li>
                    <li><router-link to="/blog">Blog Site</router-link></li>
                </ul>
            </transition>
    </header>
</template>

<script>
export default {
    name: "navigation",
    data(){
        return {
            scrollPosition: null,
            mobile: false,
            mobileNav: null,
            windowWith: null
        };
    },
    created(){
        window.addEventListener('resize', this.changeScreen);
        this.changeScreen();
    },
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        changeScreen(){
            this.windowWith = window.innerWidth
            if(this.windowWith <=750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>

<style>
/*Estilo header */
.header{
    background-color: #4D4D4D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin-top: 24px;
    margin-left: 16px;
    margin-right: 16px;
    padding: 0px 16px;
    border-radius: 15px;
    position: sticky; top: 0;
    
}

.nav{
    height: 100%;
}
.logo{
    cursor: pointer;
}

.links,
.dropdown-nav{
    height: 100%;
    margin: 0px;
    align-items: center;
    padding: initial;
    list-style: none;
    display: inline-flex;
    gap: 32px;
}

.links a,
.dropdown-nav a{
    color: white;
    font-weight: 700;
    letter-spacing: 0.48px;
    text-decoration: none;
}
/*Animaciones header*/
.nav a:hover{
    padding: 26px 16px 16px 16px;
    background-color: white;
    color: #263F28;
    border-radius: 0px 0px 10px 10px;
}

.dropdown-nav a:hover{
    padding: 16px;
    background-color: white;
    color: #263F28;
    
}

.icon{
    cursor: pointer;
    transition: 0.8s ease all;
}

.icon-active{
    transform: rotate(180deg);
}

.dropdown-nav{
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #4D4D4D;
    top: 0;
    left: 0;
}


.btn{
    text-decoration: none;
}

.btn button{
    display: flex;
    width: 189px;
    height: 46px;
    align-items: center;
    justify-content: center;
    color: #333333;
    font-weight: 700;
    letter-spacing: 0.48px;
    border-radius: 10px;
    cursor: pointer;
}

.btn button{
    background: var(--degradado-1, linear-gradient(90deg, #79DB92 0%, #9CCE7C 100%));
    border: none;
}

.btn-outline button{ 
    background: none;
    color: white;
    border-width: 2px;
    border-color: #79DB92;
}

</style>
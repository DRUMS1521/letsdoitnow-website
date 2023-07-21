<template>
    <header class="header">
        <i @click="showMenu"> <img src="../assets/menu-icon.svg" alt=""></i>
            <div class="logo">
                <img src="../assets/logo-header.svg" alt="">
            </div>
            <nav class="nav" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="links">
                    <li><router-link to="/">{{home}}</router-link></li>
                    <li><router-link to="/about">{{ about }}</router-link></li>
                    <li><router-link to="/services">{{services}}</router-link></li>
                    <li><router-link to="/portfolio">{{ porfolio }}</router-link></li>
                    <li><router-link to="/blog">{{ blog }}</router-link></li>
                </ul>
            </nav>
    </header>
</template>

<script>
export default {
    props:{
        home:{
            type: String
        },
        services:{
            type: String
        },
        about:{
            type: String
        },
        porfolio:{
            type: String
        },
        blog:{
            type: String
        },
    },
    data() {
        return {
            showMobileMenu: false,
            };
        },
        methods: {
            showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
                },
            },
        };
    
</script>

<style>
/*Estilo header */
.header{
    background-color: #4D4D4D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    padding: 0px 16px;
    border-radius: 15px;
    position: sticky; top: 0;
    
}

i{
    display: none;
}
.nav{
    height: 100%;
}
.logo{
    cursor: pointer;
}

.links{
    height: 100%;
    margin: 0px;
    align-items: center;
    padding: initial;
    list-style: none;
    display: inline-flex;
    gap: 32px;
}

.links a{
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

@media screen and (max-width: 768px){
    .header{
        margin: 0;
        width: auto;
        border-radius: 0;
        position: relative;
    }

    .open-menu {
        padding: 16px;
        background-color: #4D4D4D;
        opacity: 1;
        height: auto;
        border-radius: 0 0px 16px 16px;
    }
    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }

    .nav{
        flex-direction: column;
        z-index: 100;
        position: absolute;
        transition: all 0.2s ease-out;
        top: 50px;
        left: 10px;
    }

    .nav a:hover{
    padding: 8px 8px 8px 8px;
    background-color: white;
    color: #263F28;
    border-radius: 0px 0px 0px 0px;
}

    .links{
        flex-direction: column;
    }

    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }

}

</style>
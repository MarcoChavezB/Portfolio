<template>
    <div class="cont">
        <header>
            <RouterLink :to="{name: 'main'}">
                <div class="vet"><span class="logo material-symbols-outlined">navigation</span></div>
            </RouterLink>
            <div class="vet">
            </div>
            <div class="navbar normal">
                <li>
                    <div class="active">Home</div>
                </li>
                <li>
                    <div>Info</div>
                </li>
                <li>
                    <div>Proyects</div>
                </li>
                <li>
                    <div>Contact</div>
                </li>
                <li>
                    <div>About me</div>
                </li>

            </div>
            <div class="main">
                <span @click="menu" class=" material-symbols-outlined">menu</span>
                <ul v-if="despliegue" class="despliegue">
                        <li>
                        <router-link class="c"  :to="{path: '/personal'}">
                            <div>Personal info</div>
                        </router-link>
                        </li>
                    <li>
                        <router-link class="c" :to="{path: '/contact'}">
                        <div>Contact Me</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="c" :to="{path: '/contact'}">
                            <div>Contact</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="c" :to="{path: '/personal'}">
                            <div>About me</div>
                        </router-link>
                    </li>
                    <li>
                    <router-link class="c" :to="{path: '/personalSkill'}">
                            <div>Personal Skills</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const despliegue = ref(false);

const menu = () => {
    if (despliegue.value) {
        despliegue.value = false
    }
    else {
        despliegue.value = true
    }
}


</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

li {
  cursor: pointer;
  transition: transform 0.3s ease; 
}

li:hover {
  transform: translateY(-5px);
}




a {
    color: black;
}


header {
  position: fixed;
  width: 100%;
  height: 1rem;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 12%;
  transition: background-color 0.5s ease; 
    border-radius: 0px 0px 30px 30px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

    

.despliegue {
  position: absolute;
  right: 0px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 30px 0px 0px 30px;
  transition: transform 0.3s ease;
  background-color:#303030;
}

.despliegue li {
    width: 100%;
    text-align: end;
    margin-bottom: 10px;
}

#danger {
    cursor: pointer;
}

.despliegue a:hover {
    color: blueviolet;
}
.navbar {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.navbar a {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 5px 0;
    margin: 0px 30px;
    transition: all .50s ease;
}

.vet p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navbar a:hover {
    color: blueviolet;
}

.main {
    display: none;
    align-items: center;
    cursor: pointer;
}

.main span {
    font-size: 40px;
}


.main a {
    margin-right: 25px;
    margin-left: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all .50 ease;
}



#menu-icon {
    font-size: 35px;
    cursor: pointer;
    z-index: 1001;
}

.profile {
    display: flex;
    gap: 16px;
}


@media (max-width: 1280px) {
    header {
        padding: 14px 2%;
        transition: .2s;
        height: 4rem;
    }

    .navbar a {
        padding: 5px 0;
        margin: 0px 20px;
    }
}

@media (max-width: 1090px) {



    .navbar {

        position: absolute;
        top: 100%;
        right: 0;
        width: 270px;
        height: 29vh;
        display: flex;
        justify-content: flex-end;
        border-radius: 10px;
        transition: all .50s ease;
    }

    .normal {
        display: none;
    }

    .despliegue {
        display: flex;
        justify-content: flex-end;
    }

    .navbar a {
        display: block;
        margin: 12px o;
        padding: 0px 35px;
        transition: all .50s ease;
    }

    .navbar a:hover {
        transform: translateY(5px);
    }

    .profile {
        display: none;
    }

    .navbar a:active {
        color: aqua;
    }

    .navbar.open {
        right: 2%;
    }

    .main {
        display: block;
        margin-right: 30px;
    }

    .vet {
        width: 100%;
        display: flex;
        justify-content: start;
        margin-left: 1rem;
    }

}</style>
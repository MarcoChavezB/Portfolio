<template>
    <div class="app-main">
        <div class="header">
            <div class="time">
                <p>22:01 PM</p>
            </div>
            <div class="perfil">
                <div class="foto">
                    <img src="../assets/img/palette.jpg" alt="">
                </div>
                <div class="name">
                    <h2>Paulo Sergio</h2>
                </div>
                <div class="profesion">
                    <p>Civil Engineer</p>
                </div>
            </div>
            <div class="available">
                <div class="check">
                    <check />
                </div>
                <p>Available for hire</p>
            </div>
            <div class="social-media">
                <div class="socials">
                    <img src="../assets/icons/facebook.png" alt="">
                    <img src="../assets/icons/Linkedin.png" alt="">
                    <img src="../assets/icons/Cellphone.png" alt="">
                    <img src="../assets/icons/Github.png" alt="">
                </div>
            </div>
            <div class="buttons">
                <div class="button-div">
                    <buttonWhite title="Contact me" />
                    <p>Or</p>
                    <buttonBlack title="Copy email" icon="content_copy" />
                </div>
            </div>
            <div class="location">
                <p>BSC, MX. Los cabos</p>
            </div>
            <div class="scroll">
                <scroll />
            </div>
        </div>
        <div class="body">
            <div class="about">
                <div class="title">
                    <p>About me</p>
                </div>
                <div class="cont">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis doloremque dolor quos error!
                    Cupiditate aliquam maxime eos adipisci reprehenderit vel porro ipsa, culpa, quidem expedita in, facere
                    ullam voluptate!
                </div>
            </div>
            <div class="work">
                <div class="title-work">
                    <p>Work</p>
                </div>
                <div class="works">
                    <div>
                        <workCard title="Renderizing Gama" icon="package_2" img="src\assets\img\mount.jpg" />
                    </div>
                    <div>
                        <workCard title="Renderizing Gama" icon="light_mode" img="src\assets\img\mountain.jpg" />
                    </div>
                    <div>
                        <workCard title="Renderizing Gama" icon="drag_indicator" img="src\assets\img\palette.jpg" />
                    </div>
                    <div class="button">
                        <router-link class="c" :to="{path: '/personalWorks'}">
                            <buttonBlack title="View All" icon="arrow_right" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="habilities">
                <div class="title-hab">
                    <p>My habilities</p>
                </div>
                <div class="body-hab">
                    <div class="line">
                        <div></div>
                    </div>
                    <div class="cont-hab">
                        <div class="hab">
                            <div class="icon">
                                <img src="../assets/icons/excel.png" alt="">
                            </div>
                            <div class="text-hab">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                            </div>
                        </div>
                        <div class="hab">
                            <div class="icon">
                                <img src="../assets/icons/office.png" alt="">
                            </div>
                            <div class="text-hab">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                            </div>
                        </div>
                        <div class="hab">
                            <div class="icon">
                                <img src="../assets/icons/autocad.png" alt="">
                            </div>
                            <div class="text-hab">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="preferences">
                <div class="title-pref">
                    <p>Activities and Interests</p>
                </div>
                <div class="body-pref">
                    <preferences icon="src\assets\icons\movies.png"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing " />
                    <preferences icon="src\assets\icons\events.png"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing " />
                    <preferences icon="src\assets\icons\beach.png"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing " />
                    <preferences icon="src\assets\icons\food.png"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing " />
                    <preferences icon="src\assets\icons\natural.png"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing " />
                </div>
            </div>
            <div class="footer">
                <footerComp />
            </div>
        </div>
    </div>
</template>

<script setup>
import buttonWhite from '../components/buttonWhite.vue';
import buttonBlack from '../components/buttonBlack.vue';
import scroll from '../components/scrollComp.vue';
import check from '../components/doneComp.vue';
import workCard from '../components/workCard.vue';
import preferences from '../components/preferences.vue';
import footerComp from '../components/footer.vue';
</script>

<style scoped>
/* * {
    border: 1px solid ;
} */

.body-hab {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 0.5fr 1.7fr;
    gap: 0px 0px;
}

.body-pref {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem 0px;
    margin-top: 1rem;
}

.preferences {
    margin-top: 10vh;
    height: 60vh;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.1fr 1.9fr;
    gap: 0px 0px;
}

.title-pref {
    display: flex;
    align-items: center;
}

.line div {
    height: 90%;
    width: 0.1rem;
    background-color: #242324;

}

.hab {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
}

.cont-hab {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
}

.line {
    display: flex;
    justify-content: center;
    align-items: center;
}

.habilities {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.1fr 1.8fr;
    gap: 0px 0px;
    margin-top: 20vh;
    height: 50vh;

}

.app-main {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    height: 100vh;
}

.about {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 0.5fr 1.5fr;
    gap: 0px 0px;
}

.body {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    height: 100vh;
    margin-top: 40vh;
}



.header {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.5fr 1.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 0px 0px;
    height: 70vh;
}

.work {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.1fr 1.8fr;
    gap: 0px 0px;
    height: 100vh;
    margin-top: 10vh;
}

.works {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-rows: 1fr 1fr 1fr 0.1fr;
    gap: 0px 0px;
}

.works div {
    margin-top: 1rem;
}

.socials {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.socials img {
 cursor: pointer;
}

.title-work {
    display: flex;
    align-items: end;
}

.socials img {
    width: 100%;
    height: 2rem;
}

.buttons {
    display: flex;
    flex-direction: column;
}

.button {
    margin-top: 1rem;
}

.button-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
}

.available {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
}


.perfil {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1.5fr 0.5fr 0.5fr;
    gap: 0px 0px;
}

.foto {
    display: flex;
    justify-content: center;
    align-items: center;
}

.foto img {
    width: 19%;
    height: 60%;

    border-radius: 50%;
}

.name,
.profesion,
.available,
.social-media,
.buttons,
.location,
.time {
    display: flex;
    justify-content: center;
    align-items: center;
}

.time p{
    font-size: 10px;
}
.scroll {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>
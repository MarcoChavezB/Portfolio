<template>
    <div class="flex">
        <div class="app-contact">
        <div class="title">
            <h1>Contact me</h1>
            <h2>Let's talk about work together</h2>
            <div class="done">
                <doneComp />
                <p>Available for new oportunities</p>
            </div>
        </div>
        <div class="icons">
            <div class="socials">
                <img src="../assets/icons/facebook.png" alt="">
                <img src="../assets/icons/Linkedin.png" alt="">
                <img src="../assets/icons/Cellphone.png" alt="">
                <img src="../assets/icons/Github.png" alt="">
            </div>
        </div>
        <div class="buttons">
            <div class="button-div">
                <buttonBlack title="Boock call" icon="calendar_month" />
                <buttonBlack title="Copy email" icon="content_copy" />
                <buttonBlack title="Find me " icon="person" />
            </div>
        </div>
        <div class="inputs">
            <div class="inputs-div">
                <inputComp placeholder="Your name"/>
                <inputComp placeholder="Your email"/>
            </div>
        </div>
        <div class="textBox">
            <textAreaComp/>
            <div class="button">
                <buttonBlack @click="checkSend" title="Send me" icon="rocket_launch" />
                <div class="alert">
                    <p>Around 5 - 3 hours to respond</p>
                </div>
            </div>
        </div>
        <div class="credits">
                <span class="material-symbols-outlined">
                    copyright
                </span>
                <p>Ultra by @MarcoChavez</p>
        </div>
    </div>
    </div>
</template>

<script setup>
import inputComp from '../components/input.vue'
import buttonBlack from '../components/buttonBlack.vue';
import doneComp from '../components/doneComp.vue';
import textAreaComp from '../components/textArea.vue';
import {ref} from 'vue'

var isEnabled = ref(false)
var isChecked = ref(false)

const checkSend = () => {
  isChecked.value = true;
  if (isChecked.value) {
    isEnabled.value = true;
    setTimeout(() => {
      isEnabled.value = false;
      isChecked.value = false;
    }, 10000);
  }
};
</script>


<style scoped>
.credits{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #757575;
}
.alert{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    color: #757575;
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110vh;
}
.app-contact {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.2fr 0.3fr 0.6fr 0.4fr 1.8fr;
    gap: 0px 0px;
    height: 100vh;
}

.button{
    margin-top: 2vh;
}
.done{
    display: flex;
    gap: 1rem;
    margin-top: 3vh;
}
.inputs-div{
    display: flex;
    gap: 1rem;
}
.buttons{
    margin-top: 4vh;
    display: flex;
    justify-content: center;
    align-content: center;
}
.socials {
    display: flex;
    gap: 1rem;
    height: 100%;
    justify-content: center;
    align-items: end;
}

.socials img{
    height: 3vh;
    width: 3vh;

}

.button-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
}
.socials img {
    cursor: pointer;
}
</style>
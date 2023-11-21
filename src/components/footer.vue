<template>
    <div class="app-footer">
        <div class="icon">
            <div class="icon-img">
                <span class="material-symbols-outlined">
                    mark_email_read
                </span>
            </div>
        </div>
        <div class="sub">
            <h2>We work togetter</h2>
        </div>
        <div class="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni perspiciatis </p>
        </div>
    </div>
</template>

<style scoped>
.app-footer{
    margin-top: 10vh;
    height: 30vh;
    width: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-rows: 1fr 0.5fr 0.5fr; 
    gap: 0px 0px; 
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.sub{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.text{
    display: flex;
    justify-content: center;
    align-items: center;
}

.text p{
    text-align: center;
}
.icon-img span{
    font-size: 6rem;
}

</style>


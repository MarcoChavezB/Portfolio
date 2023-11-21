<template>
    <div class="app-card">
       <div class="card">
        <div class="body">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing maxime placeat, magnam odio!</p>
        </div>
        <div class="date">
            <p>10/02/12</p>
        </div>
       </div>
    </div>
</template>

<style scoped>
.app-card{
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-rows: 1.9fr 0.1fr; 
  gap: 0px 0px; 
  width: 80%;
  background-color: #242324;
  border-radius: 10px;
  place-items: center;
}    

.card{
    height: 8rem;
    width: 95%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>


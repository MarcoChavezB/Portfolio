<template>
    <div class="app-personal">
      <div class="title">
        <h2>About</h2>
        <h3>A few things you should know</h3>
      </div>
      <div class="img">
        <img src="../assets/img/mountain.jpg" alt="img">
      </div>
      <div class="body">
        <h4>Desde el 2016, he estado al frente como el Titular del Departamento de Costos para el Desarrollo de Presupuestos de Obra Civil, Infraestructura y Edificación. Durante este tiempo, he dirigido proyectos notables en Desarrollos de Villas en lugares exclusivos como Palmilla, Chileno Bay, Cabo del Sol y Costa Palmas. Mi chamba ha consistido en armar presupuestos para Villas Residenciales de alta gama en fraccionamientos exclusivos, todos ubicados en esos rincones turísticos top de Baja California Sur. <br><br>
          Mi misión principal ha sido la creación de presupuestos personalizados, desde la edificación y la estructura hasta las albañilerías y acabados de primer nivel. Pero eso no es todo; también me encargo de rastrear cualquier presupuesto adicional y mantener un control estricto de expedientes para asegurar que cada proyecto se maneje con transparencia y eficiencia financiera. <br><br>
          En cuanto a mi bagaje académico, me gradué en la Facultad de Ingeniería Civil de la Universidad Juárez del Estado de Durango con una Licenciatura en Ingeniería Civil. Pero eso no fue suficiente, así que decidí seguir echándole ganas y obtuve mi Maestría en Planeación y Construcción de Obras en la misma institución.<br><br>
          Mis poderes se extienden más allá de los libros y la escuela, ya que domino herramientas como Opus, Precios Unitarios, Autocad y Ms Office. Pero no todo es técnico, también me considero un maestro de la escucha activa, lo que hace que mi comunicación con clientes y colegas sea efectiva y sin complicaciones.<br><br>
          Pero hablemos real: trabajar bajo presión es mi segunda naturaleza. Mantengo altos estándares de calidad en cada proyecto, y no hay obstáculo que me haga perder la calma. No solo me destaco en mi trabajo, sino que también tengo experiencia en formar y orientar equipos hacia el éxito del proyecto.<br><br>
          Además, soy un alma autodidacta. Siempre estoy listo para aprender y adaptarme a las últimas tendencias y tecnologías en la industria de la construcción. En resumen, mi historia se resume en una sólida combinación de experiencia laboral y educación, y estoy comprometido a seguir contribuyendo al éxito de proyectos de construcción de alta calidad mientras sigo creciendo en el campo de la ingeniería civil. ¡Vamos a construir algo grandioso juntos!<br></h4>
      </div>
      <div class="footer">
        <footerComp />
      </div>
    </div>
  </template>

  <script setup>
  import footerComp from '../components/footer.vue';
</script>
  
  <style scoped>
  .app-personal {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.1fr auto 1.9fr; /* Ajuste de la altura de la fila de la imagen */
    gap: 0px 0px;
    height: 100vh;
  }
  .title h3{
    font-size: 1.5rem;
    font-weight: 700;
    color: #3e3e3e;
  }
  

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .body, .img{
    margin-top: 5vh;
  }

  </style>
  
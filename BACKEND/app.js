
const express = require("express");
const cors = require("cors");
const app=express();
const usuario=require('./routers/usuarioRouters');
const prestamo=require('./routers/prestamoRouter');
const libros=require('./routers/libroRouters');
const PORT=4002;
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

app.use(express.json());
app.use("/usuarioapi",usuario);
app.use("/prestamoapi",prestamo);
app.use("/libroapi",libros);


app.listen(PORT,()=>
{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

})
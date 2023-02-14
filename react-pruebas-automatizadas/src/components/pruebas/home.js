import React, { useState } from "react";
import { sendEmail , alo} from "../../contexts/SendEmail";

function Home() {
const [name, setName] = useState("");
const [identification, setIdentification] = useState("");
//console.log(sendEmail())
return (
<div style={{ padding: "20px" }}>
<h3>Contenido de la página principal o definir otra prueba aquí</h3>
<br />
<label>
Nombre:
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
style={{ padding: "5px", margin: "5px" }}
/>
</label>
<br />
<label>
Documento de identificación:
<input
type="text"
value={identification}
onChange={(e) => setIdentification(e.target.value)}
style={{ padding: "5px", margin: "5px" }}
/>
</label>
</div>
);
}

export default Home;
import "../css/customerForm.css";

export function CustomerFormPage() {
  return (
    <div className="container-principal">
      <h1>Datos Personales</h1>

      <form action="" id="formulario-cliente">
        <div className="container">
          <div className="campos-form campos-mitad">
            <label htmlFor="Nombre">Nombre(s)</label>
            <input type="text" placeholder="Ingrese su(s) nombres(s)" />
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="Apellido">Apellido(s)</label>
            <input type="text" placeholder="Ingrese su(s) apellidos(s)" />
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="Fecha-nacimiento">Fecha de Nacimiento</label>
            <input type="date" placeholder="DD/MM/AA" />
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="Genero">Genero</label>
            <select id="genero" name="genero">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="Pais">Pais</label>
            <select id="pais" name="pais">
              <option value="Bolivia">Bolivia</option>
              <option value="Peru">Peru</option>
            </select>
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="Ciudad">Ciudad</label>
            <select id="ciudad" name="ciudad">
              <option value="Cochabamba">Cochabamba</option>
              <option value="Lima">Lima</option>
            </select>
          </div>

          <div className="campos-form campo-full">
            <label htmlFor="Correo_electronico">Correo Electronico</label>
            <input type="text" placeholder="Ingrese su correo electronico" />
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="Contrasena">Contrasena</label>
            <input type="password" placeholder="Ingrese su contrasena" />
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="Confirmar contrasena">Confirmar constrasena</label>
            <input type="text" placeholder="confirmar contrasena" />
          </div>

          <div className="campos-form campo-full">
            <label htmlFor="descripcion">descripcion</label>
            <textarea name="descripcion" id="" cols="30" rows="5"></textarea>
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="Gustos">Gustos e Intereses</label>
            <input type="text" placeholder="aniadir gusto o intereses" />
          </div>

          <div className="campos-form campos-mitad">
            
          </div>

          
          <div className="campos-form campos-mitad-mitad llevar-inicio">
            <label htmlFor="precio">Precio</label>
            <select id="Precio" name="Precio">
              <option value="20">20bs</option>
              <option value="30">30bs</option>
              <option value="40">40bs</option>
              <option value="50">50bs</option>
            </select>
          </div>

          <div className="buttons-cancel-register">
            <button>Cancelar</button>
            <button>Registrar</button>
          </div>

        </div>
      </form>
    </div>
  );
}
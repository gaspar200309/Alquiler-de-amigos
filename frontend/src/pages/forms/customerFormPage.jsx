import {useForm} from "react-hook-form"
import "./customerForm.css";

export function CustomerFormPage() {
  const {register, handleSubmit,
     formState: {errors},
     watch, 
     setValue,
     reset
    } = useForm();
    
  console.log(errors)

  const onSubmit  = handleSubmit ((data) => {
    console.log(data)
    alert("Envio correcto de datos")
    setValue('correo', '')
    reset()
    //  send data to server here

  })

  return (
    <nav className="container-principal">
      <h1>Datos Personales</h1>
      <form action="" id="formulario-cliente" onSubmit={onSubmit}>
        <div className="container">
          <div className="campos-form campos-mitad">
            <label htmlFor="Nombre">Nombre(s)</label>
            <input type="text" placeholder="Ingrese su(s) nombres(s)" 
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre es requerido"
              }, 
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres"
              },
              maxLength: {
                value: 20, 
                message: "El nombre debe tener menos caracteres"
              }
              
            })}/>
            {errors.nombre && <span>{errors.nombre.message}</span>}
            
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="apellido">Apellido(s)</label>
            <input type="text" placeholder="Ingrese su(s) apellidos(s)" 
            {...register("apellido", {required: true})} />
              {errors.apellido && <span>Apellido es requerido</span>}
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" placeholder="DD/MM/AA" 
              {...register("fechaNacimiento", {
                required: {
                  value: true,
                  message: "Fecha de nacimiento es requerida",
                },
                validate: (value) => {
                  const fechaNacimiento = new Date(value);
                  const fechaActual = new Date();
                  const edad = 
                    fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                    if(edad >= 18 ){
                      return  true;
                    }else{
                      return "Debe ser mayor de edad";
                    }
                }
                })}
            />
            {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}
            
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="genero">Genero</label>
            <select id="genero" name="genero" 
              {...register("genero", {required: true})}>
              {errors.genero && <span>Genero es requerido</span>}
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="pais">Pais</label>
            <select id="pais" name="pais" 
            {...register("pais", {
              required:{
              value:true,
              message:"Seleccione un pais"
            }})}>
            {errors.pais && <span>{errors.pais.message}</span>}
              <option value="Bolivia">Bolivia</option>
              <option value="Peru">Peru</option>
            </select>
          </div>

          <div className="campos-form campos-mitad-mitad">
            <label htmlFor="ciudad">Ciudad</label>
            <select id="ciudad" name="ciudad" 
              {...register("ciudad", {required: true})}  >
              {
                errors.ciudad && <span>Ciudad es requerido </span> 
              }
              <option value="Cochabamba">Cochabamba</option>
              <option value="Lima">Lima</option>
            </select>
          </div>

          <div className="campos-form campo-full">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" placeholder="Ingrese su correo electronico"
            {...register("correo", {
              required: {
                value: true,
                message: "Correo es requerido"
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Formato de email no valido"
              }
              })}
             />
             {errors.correo && <span>{errors.correo.message}</span>}
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="Contrasena">Contrasena</label>
            <input type="password" placeholder="Ingrese su contrasena"
            {...register("contraseña", {
              required: {
                value: true,
                message: "Contraseña es requerida",
                minLength:{
                  value: 8,
                  message: "Debe tener al menos 8 caracteres"
                }
              }
              })}
             />
             {
              errors.contraseña && <span>{errors.contraseña.message}</span>
             }
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="confirmarContrasena">Confirmar constrasena</label>
            <input type="password" placeholder="confirmarContrasena" 
            {...register("confirmarContraseña", {
              required: {
                value: true,
                message: "La confirmación de la contraseña es requerida"
              },
              validate: (value) => {
                if(value == watch('contraseña')){
                  return true;
                }else{
                  return "Las contraseñas no coinciden";
                }
  
              }
              })}
            />
            {
              errors.confirmarContraseña && <span>{errors.confirmarContraseña.message}</span>
            }
          </div>

          <div className="campos-form campo-full">
            <label htmlFor="descripcion">descripcion</label>
            <textarea name="descripcion" id="" cols="30" rows="5"
            {...register("descripcion")}
            ></textarea>
          </div>

          <div className="campos-form campos-mitad">
            <label htmlFor="Gustos">Gustos e Intereses</label>
            <input type="text" placeholder="aniadir gusto o intereses" 
              {...register("intereses", {required: true})}
            />
            {errors.intereses && <span>Debe seleccionar al menos dos</span>}
          </div>
          
          <div className="campos-form campos-mitad-mitad llevar-inicio">
            <label htmlFor="precio">Precio</label>
            <select id="Precio" name="Precio"
            {...register("precio", {required: true})}
            >
            {
              errors.precio && <span>Debe establecer un precio</span>
            }
              <option value="20">20bs</option>
              <option value="30">30bs</option>
              <option value="40">40bs</option>
              <option value="50">50bs</option>
            </select>
          </div>
          <div>
            <label htmlFor="foto">Foto</label>
            <input type="file" onChange={(e) => {
              console.log(e.target.files[0])
              setValue('fotoDelUsuario', e.target.files[0].name);
            }}
            />
            {errors.foto && <span>Debe subir una foto</span>}
          </div>
        <div>            
            <label htmlFor="terminos">Acepto terminos y condiciones</label>
            <input type="checkbox"></input>
          </div>

          <div className="buttons-cancel-register">
            <button>Cancelar</button>
            <button type="submit">Registrarse</button>
          </div>

        </div>
        <pre>
          {JSON.stringify(watch(), null, 2)},
        </pre>
      </form>
    </nav>
  );
}
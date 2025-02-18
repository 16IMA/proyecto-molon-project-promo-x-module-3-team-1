import PropTypes from "prop-types";
import GetAvatar from './GetAvatar';

function Form({ formData, handleClickSave, handleInputChange, errors, onSubmit }) {
  console.log(errors);
  const handleInput = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    handleInputChange(inputName, inputValue);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const updatePhoto = (image) => { // Proyecto
    handleInputChange('photo', image);
  }

  const updateImage = (image) => { // Autora
    handleInputChange('image', image);
  }


  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <div className="form-field">
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            value={formData.name}
            onChange={handleInput}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            value={formData.slogan}
            onChange={handleInput}
          />
          {errors.slogan && <p className="error">{errors.slogan}</p>}
        </div>

        <div className="addForm__2col">
          <div className="form-field">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              value={formData.repo}
              onChange={handleInput}
            />
            {errors.repo && <p className="error">{errors.repo}</p>}
          </div>
          <div className="form-field">
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              value={formData.demo}
              onChange={handleInput}
            />
            {errors.demo && <p className="error">{errors.demo}</p>}
          </div>
        </div>

        <div className="form-field">
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            value={formData.technologies}
            onChange={handleInput}
          />
          {errors.technologies && (
            <p className="error">{errors.technologies}</p>
          )}
        </div>

        <div className="form-field">
          <textarea
            className="addForm__input"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
            value={formData.desc}
            onChange={handleInput}
          ></textarea>
          {errors.desc && <p className="error">{errors.desc}</p>}
        </div>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <div className="form-field">
          <input
            className="addForm__input"
            type="text"
            name="autor"
            id="autor"
            placeholder="Nombre"
            value={formData.autor}
            onChange={handleInput}
          />
          {errors.autor && <p className="error">{errors.autor}</p>}
        </div>

        <div className="form-field">
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            value={formData.job}
            onChange={handleInput}
          />
          {errors.job && <p className="error">{errors.job}</p>}
        </div>
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar updateAvatar={updatePhoto} text="Subir foto del proyecto" />

        <GetAvatar updateAvatar={updateImage} text="Subir foto de la autora" />

        <button className="button--large" onClick={handleClickSave}>
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.object.isRequired,
  handleClickSave: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Form;

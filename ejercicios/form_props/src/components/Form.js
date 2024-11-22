import { TitleTemplate } from "./TitleTemplate";
import { InputTemplate } from "./InputTemplate";
import { SelectCity } from "./SelectCity";
import { TextAreaTemplate } from "./TextAreaTemplate";

export default function Form() {
	return (
		<form method='GET' action=''>
			<TitleTemplate content={"FORM SIGN UP"}></TitleTemplate>
			<InputTemplate id={"name"} type={"text"} name={"name"} maxlength="50" label="Name: "></InputTemplate>
			<br />
			<br />
			<InputTemplate id={"surname"} type={"text"} name={"surname"} maxlength="50" label="Surname: "></InputTemplate>
			<br />
			<br />
			<InputTemplate id={"gender-m"} type={"radio"} name={"gender"} label="Man"></InputTemplate>
			<InputTemplate id={"gender-w"} type={"radio"} name={"gender"} label="Woman"></InputTemplate>
			<br />
			<br />
			<InputTemplate id={"email"} type={"email"} name={"email"} label="Email: "></InputTemplate>
			<br />
			<br />
			<label for="city">City: </label>
			<SelectCity id="city" name="city"></SelectCity>
			<br />
			<br />
			<label for="descripcion">Description: </label>
			<TextAreaTemplate id={"description"} name={"description"} rows={"6"} cols={"60"}></TextAreaTemplate>
			<br />
			<br />
			<InputTemplate id={"spam"} type={"checkbox"} name={"spam"} checked={"checked"} label={"Deseo recibir información sobre novedades y ofertas"}></InputTemplate>
			<br />
			<InputTemplate id={"terms"} type={"checkbox"} name={"terms"} label={"Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos"}></InputTemplate>
			<br />
			<br />
			<input type="submit" value={"SEND"}></input>
		</form>
	);
}
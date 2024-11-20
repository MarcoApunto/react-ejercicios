export default function SurnameField() {
	return (
		<p>
			<label for="surname">Surname: </label>
			<input type="text" name="surname" id="surname" maxLength={50}></input>
		</p>
	)
}
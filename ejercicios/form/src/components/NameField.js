export default function NameField() {
	return (
		<p>
			<label for="name">Name: </label>
			<input type="text" name="name" id="name" maxLength={50}></input>
		</p>
	)
}
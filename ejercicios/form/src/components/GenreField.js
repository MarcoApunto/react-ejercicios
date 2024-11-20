export default function GenreField() {
	return (
		<p>
			Genre: 
			<input type="radio" name="genre" id="genre-m"></input>
			<label for="genre">Man</label>

			<input type="radio" name="genre" id="genre-w"></input>
			<label for="genre">Woman</label>
		</p>
	);
}
import NameField from './NameField.js';
import SurnameField from './SurnameField.js';
import GenreField from './GenreField.js';
import EmailField from './EmailField.js';
import CityField from './CityField.js';
import DescriptionField from './DescriptionField.js';
import CheckboxSpamField from './CheckboxSpamField.js';
import CheckboxTermsField from './CheckboxTermsField.js';
import ButtonSubmit from './ButtonSubmit.js';

export default function Form() {
	return (
		<div>
			<form method='GET' action=''>
				<h1>FORM SIGN UP</h1>
				<NameField />
				<SurnameField />
				<GenreField />
				<EmailField />
				<CityField />
				<DescriptionField />
				<CheckboxSpamField />
				<CheckboxTermsField />
				<ButtonSubmit />
			</form>
		</div>
	);
}

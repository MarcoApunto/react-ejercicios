export function InputTemplate({ id, type, name, label, checked, maxlength }) {
	return (
		<>
			<label
				for={id}
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				name={name}
				checked={checked}
				maxlength={maxlength}
			>
			</input>
		</>
	);
}
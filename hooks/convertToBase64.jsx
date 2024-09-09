export const convertToBase64 = (event, prop) => {
	const file = event.target.files[0];
	
	const reader = new FileReader();
	reader.readAsDataURL(file);
	
	reader.onload = () => {
		// @ts-ignore
		prop({
			// @ts-ignore
			base64textString: reader.result
		});
	};
	
	reader.onerror = (error) => {
		console.log('Error: ', error);
	};
};
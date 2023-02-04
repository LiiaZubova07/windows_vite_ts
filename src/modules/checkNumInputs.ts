const checkNumInputs = (selector:string)=>{
const numInputs: NodeListOf<HTMLElement> = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

numInputs.forEach(numInput => {
	numInput.addEventListener('input', ()=> {


		(numInput as HTMLInputElement).value = (numInput as HTMLInputElement).value.replace(/\D/, '');
	});
  });

};

export default checkNumInputs;
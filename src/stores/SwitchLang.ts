import es from '../lang/es-es.json';
import en from '../lang/en-us.json';

export const lang = (e: boolean) => {
	e ? localStorage.setItem("Lang", "Es") : localStorage.setItem("Lang", "En");
	return e ? es : en;
};
/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/i1.png',
		title: 'Restaurant',
		skills: ['Flutter', 'Laravel','Mysql'],
		descripcion:
			'Table Management, Menu Management, Reservation Management, Point of Sale System, Billing and Payment, Order Management',
		demoURL: '/img/restaurent.pdf',
		repoURL: 'https://github.com/DorraBN/stage',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/flower.png',
		title: 'flower shop',
		skills: ['Angular', 'Springboot','Mysql','Docker'],
		descripcion:
			'Table Management, Menu Management, Reservation Management, Point of Sale System, Billing and Payment, Order Management',
		demoURL: '/img/restaurent.pdf',
		repoURL: 'https://github.com/DorraBN/flowershop',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/h4.png',
		title: 'Mobile Application',
		skills: ['Flutter', 'Firebase'],
		descripcion:
			'Recipe Sharing Mobile Application: Development of a mobile application with interfaces similar to Facebook for sharing recipes.',
		demoURL: 'https://github.com/DorraBN/Chefconnect',
		repoURL: 'https://github.com/DorraBN/Chefconnect',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/h5.png',
		title: 'E-commerce Mobile app',
		skills: ['Ionic', 'NodeJs','Mongodb'],
		descripcion:
			'Development of a Mobile Application for Buying and Selling Used Products',
		demoURL: 'https://github.com/DorraBN/Swap-Shop',
		repoURL: 'https://github.com/DorraBN/Swap-Shop',
		anim: 'fade-right',
	},
	{
		imgSrc: '/images/h1.png',
		title: 'E-commerce Web app',
		skills: ['Angular', 'Springboot','Mysql'],
		descripcion:
			' Implemented features such as product management, shopping cart, user authentication, and order processing. Ensured a responsive and user-friendly interface with secure backend services.',
		demoURL: '/docs/h1.pdf',
		repoURL: 'https://github.com/DorraBN/e-commerce_webapp_with_angular_and_springboot',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	

	{
		imgSrc: '/img/c1.jpg.png',
		title: 'FullStack gym app',
		skills: ['Angular', 'NodeJs','Mysql'],
		descripcion:
			'FullStack gym app.',
		demoURL: '/img/sport.pdf',
		repoURL: 'https://github.com/DorraBN/App_fullStack_salle_de_sport',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/ca1.png',
		title: 'Education website',
		skills: ['React'],
		descripcion:
			'Education Website Using ReactJS',
		demoURL: 'https://dorrabn.github.io/Education-Website-Using-ReactJS/',
		repoURL: 'https://github.com/DorraBN/Education-Website-Using-ReactJS',
		anim: 'fade-right',
	},
	
	{
		imgSrc: '/img/ca.png',
		title: ' showcase website',
		skills: ['Angular'],
		descripcion:
			'showcase website',
		demoURL: '/img/site.pdf',
		repoURL: 'https://github.com/DorraBN/greenix-angular-version',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Flutter: 'simple-icons:flutter', 
	Laravel: 'simple-icons:laravel',           // Simple Icons Flutter Icon
	Angular: 'skill-icons:angular-dark',          // Font Awesome Angular Icon
	Springboot: 'simple-icons:springboot',    // Simple Icons Springboot Icon          // Spring Boot: Correct icon name is 'spring'
	CSS: 'skill-icons:css3',                   // CSS: Correct icon name is 'css3'
	Mysql: 'skill-icons:mysql-dark',           // MySQL: Correct icon name is 'mysql-dark'
	Firebase: 'simple-icons:firebase',        // Simple Icons Firebase Icon
  Ionic: 'fa-brands fa-ionic',              // Font Awesome Ionic Icon
  PHP: 'fa-brands fa-php',                 // PHP: Correct icon name is 'php-dark'
	Python: 'skill-icons:python-dark',         // Python: Correct icon name is 'python-dark'
	Pandas: 'skill-icons:pandas',              
	numpy: 'skill-icons:numpy',                
	Mongodb: 'skill-icons:mongodb',            
	Bootstrap: 'skill-icons:bootstrap',        
	Tailwind: 'skill-icons:tailwindcss' , 
	NodeJs: 'skill-icons:nodejs-dark',
	Docker: 'skill-icons:docker'
   
  };
  


/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});

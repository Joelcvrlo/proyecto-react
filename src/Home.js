import {
	CloudArrowUpIcon,
	CheckBadgeIcon,
	ChatBubbleBottomCenterIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";
import logo from "./assets/logo.webp";

const features = [
	{
		name: "Especialistas en Nube: ",
		description:
			"Nuestro equipo está altamente especializado en la administración y mantenimiento de infraestructuras en la nube. Desde el despliegue inicial hasta la gestión continua, te ofrecemos servicios de mantenimiento en la nube adaptados a tus necesidades específicas.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "Prioridad en Seguridad:",
		description:
			"Implementamos rigurosas medidas de protección y cifrado para garantizar la integridad y confidencialidad de tus datos.",
		icon: LockClosedIcon,
	},
	{
		name: "Soporte Continuo:",
		description:
			"Nuestra relación contigo no termina después del servicio. Estamos aquí para brindarte soporte técnico continuo y asesoramiento siempre que lo necesites.",
		icon: ChatBubbleBottomCenterIcon,
	},
	{
		name: "Actualizaciones y Optimización Constante: ",
		description:
			"Realizamos análisis periódicos para identificar oportunidades de mejora y asegurarnos de que estás aprovechando al máximo los recursos de la nube.",
		icon: CheckBadgeIcon,
	},
];
export default function Home() {
	return (
		<div className="bg-white py-24 sm:py-8">
			<div className="mx-auto max-w-12xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<img className="mx-auto" src={logo} alt="logo" width={300} height={300}></img>
					<p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ReliableTech</p>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Trust, Our Technology</p>
					<p className="mt-12 text-lg leading-8 text-gray-600">
						Bienvenido a ReliableTech. En ReliableTech, nos enorgullecemos de ser líderes en el sector de servicios
						tecnológicos confiables y de alta calidad. Nuestro enfoque es brindar soluciones integrales y efectivas para
						mantener tus productos y servicios en óptimas condiciones. Con años de experiencia en el mercado, hemos
						establecido una sólida reputación como el socio de confianza para empresas y particulares que buscan un
						mantenimiento y soporte tecnológico excepcional.
					</p>
					<p className="mt-12 text-lg leading-8 text-gray-600">
						<strong>Nuestros Servicios Destacados:</strong>
						<p>- Mantenimiento y Reparación de Productos Tecnológicos.</p>
						<p>- Soporte Técnico en Sitio y Remoto.</p>
						<p>- Actualizaciones y Optimización de Sistemas.</p>
						<p>- Soluciones de Seguridad y Respaldo de Datos.</p>
						Confía en ReliableTech para mantener tu tecnología funcionando sin problemas mientras tú te concentras en
						alcanzar tus metas. ¡Contáctanos hoy mismo para descubrir cómo podemos ayudarte a llevar tu negocio al
						siguiente nivel!
					</p>
					<p className="mt-12 text-lg leading-8 text-gray-600">
						<strong>Por qué somos diferentes: </strong>
						<p>Compromiso con la Excelencia</p>
						<p>
							En ReliableTech, la excelencia es el pilar de todo lo que hacemos. Nos destacamos por nuestro enfoque
							orientado al cliente y nuestra búsqueda continua de la perfección en cada proyecto. Al elegirnos, te
							beneficias de:
						</p>
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
    )
}
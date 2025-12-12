'use client';

import Link from 'next/link';
import { footerData } from '../data/footerData';
import Container from '../reusables/Container';

const Footer = () => {
	const { companyInfo, quickLinks, programs, socialLinks, contactInfo, bottomLinks, copyright } =
		footerData;

	return (
		<footer className="bg-gradient-navy text-white">
			{/* Main Footer */}
			<Container className="px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* About */}
					<div className="space-y-6">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
								<span className="text-navy-dark font-bold text-xl">KF</span>
							</div>
							<div>
								<span className="font-bold text-xl">{companyInfo.name}</span>
								<p className="text-white/60 text-xs">{companyInfo.tagline}</p>
							</div>
						</div>
						<p className="text-white/70 text-sm leading-relaxed">{companyInfo.description}</p>
						<div className="flex gap-3">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.label}
										href={social.href}
										className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-110"
										aria-label={social.label}
									>
										<Icon className="w-5 h-5" />
									</a>
								);
							})}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg mb-6">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white/70 hover:text-gold transition-colors text-sm link-underline"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Programs */}
					<div>
						<h3 className="font-semibold text-lg mb-6">Our Programs</h3>
						<ul className="space-y-3">
							{programs.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white/70 hover:text-gold transition-colors text-sm link-underline"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="font-semibold text-lg mb-6">Contact Us</h3>
						<ul className="space-y-4">
							{contactInfo.map((contact, index) => {
								const Icon = contact.icon;
								return (
									<li key={index} className="flex items-start gap-3 text-sm">
										<Icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
										{contact.href ? (
											<a
												href={contact.href}
												className="text-white/70 hover:text-gold transition-colors whitespace-pre-line"
											>
												{contact.value}
											</a>
										) : (
											<span className="text-white/70 whitespace-pre-line">{contact.value}</span>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Container>

			{/* Bottom Bar */}
			<div className="border-t border-white/10">
				<Container className="px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
						<p>{copyright}</p>
						<div className="flex gap-6">
							{bottomLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="hover:text-gold transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;

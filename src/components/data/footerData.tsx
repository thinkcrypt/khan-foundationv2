'use client';

import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const quickLinks = [
	{ name: 'About Us', href: '/who-we-are' },
	{ name: 'Our Programs', href: '/programs/democracy' },
	{ name: 'Research', href: '/research' },
	{ name: 'News', href: '/news' },
	{ name: 'Careers', href: '/careers' },
	{ name: 'Contact', href: '/contact' },
];

export const programs = [
	{ name: 'Democracy Programs', href: '/programs/democracy' },
	{ name: 'Human Rights', href: '/programs/human-rights' },
	{ name: 'Socio-Economic', href: '/programs/socio-economic' },
	{ name: 'Advocacy & Gender', href: '/programs/advocacy-gender' },
	{ name: 'Education', href: '/programs/education' },
];

export const socialLinks = [
	{ icon: Facebook, href: '#', label: 'Facebook' },
	{ icon: Twitter, href: '#', label: 'Twitter' },
	{ icon: Linkedin, href: '#', label: 'LinkedIn' },
	{ icon: Youtube, href: '#', label: 'YouTube' },
];

export const footerData = {
	companyInfo: {
		name: 'Khan Foundation',
		tagline: 'Building Tomorrow Together',
		description:
			'Dedicated to promoting democracy, human rights, and sustainable development across Bangladesh and beyond since 1990.',
	},
	quickLinks,
	programs,
	socialLinks,
	contactInfo: [
		{
			type: 'address',
			value: 'House 45, Road 7, Dhanmondi\nDhaka 1205, Bangladesh',
			icon: MapPin,
		},
		{
			type: 'phone',
			value: '+880 1712-345678',
			href: 'tel:+8801712345678',
			icon: Phone,
		},
		{
			type: 'email',
			value: 'info@khanfoundation.org',
			href: 'mailto:info@khanfoundation.org',
			icon: Mail,
		},
	],
	bottomLinks: [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms of Service', href: '/terms' },
	],
	copyright: `© ${new Date().getFullYear()} Khan Foundation. All rights reserved.`,
};

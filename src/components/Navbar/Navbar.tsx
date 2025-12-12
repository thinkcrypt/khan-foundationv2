'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '../data/navData';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../reusables/ButtonPrimary';
import Container from '../reusables/Container';
import MobileNav from './MobileNav';

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const pathname = usePathname();

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-gradient-hero backdrop-blur-lg border-b border-white/10">
			<nav>
				<Container className="px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
								<span className="text-navy-dark font-bold text-xl">KF</span>
							</div>
							<div className="hidden sm:block">
								<span className="text-white font-bold text-xl tracking-tight">Khan Foundation</span>
								<p className="text-white/60 text-xs">Building Tomorrow Together</p>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center gap-1">
							{navigation.map((item) => (
								<div
									key={item.name}
									className="relative group"
									onMouseEnter={() => item.children && setOpenDropdown(item.name)}
									onMouseLeave={() => setOpenDropdown(null)}
								>
									<Link
										href={item.href}
										className={cn(
											'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
											isActive(item.href)
												? 'bg-white/20 text-white'
												: 'text-white/70 hover:text-white hover:bg-white/10'
										)}
									>
										{item.name}
										{item.children && (
											<ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
										)}
									</Link>

									{/* Dropdown */}
									{item.children && (
										<div
											className={cn(
												'absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 origin-top',
												openDropdown === item.name
													? 'opacity-100 scale-100 visible'
													: 'opacity-0 scale-95 invisible'
											)}
										>
											{item.children.map((child) => (
												<Link
													key={child.name}
													href={child.href}
													className="block px-4 py-3 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
												>
													{child.name}
												</Link>
											))}
										</div>
									)}
								</div>
							))}
						</div>

						{/* CTA Button */}
						<div className="hidden lg:block">
							<ButtonPrimary
								href="/contact"
								className="bg-gradient-gold text-navy-dark font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 px-6 py-2 rounded-lg border-0"
							>
								Donate Now
							</ButtonPrimary>
						</div>

						{/* Mobile menu button */}
						<button
							className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label="Toggle menu"
						>
							{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</Container>

				{/* Mobile Navigation */}
				<MobileNav
					isOpen={mobileMenuOpen}
					onClose={() => setMobileMenuOpen(false)}
					navigation={navigation}
					isActive={isActive}
				/>
			</nav>
		</header>
	);
};

export default Navbar;

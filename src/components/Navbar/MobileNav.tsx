'use client';

import Link from 'next/link';
import { NavItem } from '../data/navData';
import { cn } from '@/lib/utils';
import ButtonPrimary from '../reusables/ButtonPrimary';
import Container from '../reusables/Container';

interface MobileNavProps {
	isOpen: boolean;
	onClose: () => void;
	navigation: NavItem[];
	isActive: (href: string) => boolean;
}

const MobileNav = ({ isOpen, onClose, navigation, isActive }: MobileNavProps) => {
	return (
		<div
			className={cn(
				'lg:hidden overflow-hidden transition-all duration-300',
				isOpen ? 'max-h-[80vh] opacity-100 pb-6' : 'max-h-0 opacity-0'
			)}
		>
			<Container className="px-4 sm:px-6 lg:px-8">
				<div className="space-y-1 pt-4">
					{navigation.map((item) => (
						<div key={item.name}>
							<Link
								href={item.href}
								onClick={() => !item.children && onClose()}
								className={cn(
									'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
									isActive(item.href)
										? 'bg-white/20 text-white'
										: 'text-white/70 hover:text-white hover:bg-white/10'
								)}
							>
								{item.name}
							</Link>
							{item.children && (
								<div className="pl-4 mt-1 space-y-1">
									{item.children.map((child) => (
										<Link
											key={child.name}
											href={child.href}
											onClick={() => onClose()}
											className="block px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
										>
											{child.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
					<div className="pt-4 px-4">
						<ButtonPrimary
							href="/contact"
							onClick={onClose}
							className="w-full bg-gradient-gold text-navy-dark font-bold shadow-lg hover:shadow-xl px-6 py-2 rounded-lg border-0"
						>
							Donate Now
						</ButtonPrimary>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MobileNav;

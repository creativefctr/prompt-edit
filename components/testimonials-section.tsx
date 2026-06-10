"use client";

import { cn } from "@/lib/utils";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { motion } from "motion/react";

const testimonials = [
	{
		name: "Alex Rivera",
		role: "Senior Video Editor",
		quote: "PromptEdit is so polished, it saved me hours on my latest commercial video. The ecosystem is in safe hands.",
		avatar: "/testimonials/alex.png",
		fallback: "AR"
	},
	{
		name: "Sarah Chen",
		role: "Motion Designer & Animator",
		quote: "The pay-as-you-go credits are a lifesaver. I only pay for what I actually render, saving me hundreds every month.",
		avatar: "/testimonials/sarah.png",
		fallback: "SC"
	},
	{
		name: "Marcus Thorn",
		role: "Digital Artist",
		quote: "Being able to access all major image models from a single place is incredible. No more stacking expensive subscriptions.",
		avatar: "/testimonials/marcus.png",
		fallback: "MT"
	},
	{
		name: "Zoe Henderson",
		role: "Travel Content Creator",
		quote: "The integration with the templates library is top-notch. I can pull cinematic LUTs and voiceovers instantly.",
		avatar: "/testimonials/zoe.png",
		fallback: "ZH"
	},
	{
		name: "Elena Rostova",
		role: "Brand Identity Designer",
		quote: "The plugins open right inside my editing software, meaning I don't even have to open a browser window. Highly recommend!",
		avatar: "/testimonials/elena.png",
		fallback: "ER"
	},
	{
		name: "Liam Bennett",
		role: "Social Media Producer",
		quote: "We got more editing work done in 3 hours than we normally do in 3 days thanks to the templates and fast AI generation speeds.",
		avatar: "/testimonials/liam.png",
		fallback: "LB"
	}
];

export function TestimonialsSection() {
	return (
		<div className="w-full max-w-6xl mx-auto py-16 px-4">
			<div className="text-center space-y-4 mb-16">
				<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
					Loved by Creators & Designers
				</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
					See how creative professionals are saving time and money using our decentralized AI marketplace.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
				{testimonials.map((t, idx) => (
					<motion.figure
						key={idx}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: idx * 0.1 }}
						className="group relative flex w-full max-w-sm flex-col items-center justify-between mx-auto bg-card/30 backdrop-blur-md border border-border/40 rounded-xl p-6 hover:border-foreground/15 hover:bg-card/50 transition-all duration-300 md:grid md:grid-cols-[auto_1fr] md:gap-4 md:items-start"
					>
						<div className="relative flex-shrink-0 mb-4 md:mb-0">
							{/* Vertical lines */}
							<MaskLine className="left-0" orientation="vertical" />
							<MaskLine className="right-0" orientation="vertical" />
							{/* Horizontal lines */}
							<MaskLine className="top-0 md:w-32" orientation="horizontal" />
							<MaskLine className="bottom-0 md:w-32" orientation="horizontal" />

							<Avatar className="mask-[radial-gradient(circle,black_60%,transparent)] size-20 rounded-none *:rounded-none md:size-24 transition-transform duration-300 group-hover:scale-105">
								<AvatarImage
									alt={`${t.name}'s profile picture`}
									src={t.avatar}
								/>
								<AvatarFallback>{t.fallback}</AvatarFallback>
							</Avatar>
						</div>

						<figcaption className="flex flex-col justify-between h-full space-y-4 text-center md:text-left">
							<blockquote className="text-sm md:text-base text-muted-foreground leading-snug tracking-tight">
								&quot;<span className="font-medium text-foreground">{t.quote}</span>&quot;
							</blockquote>

							<div>
								<cite className="font-semibold text-foreground text-sm not-italic">
									{t.name}
								</cite>
								<div className="text-[11px] text-muted-foreground font-medium mt-0.5">
									{t.role}
								</div>
							</div>
						</figcaption>
					</motion.figure>
				))}
			</div>
		</div>
	);
}

export function MaskLine({
	className,
	orientation,
	...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"absolute bg-foreground/20 transition-colors duration-300 group-hover:bg-foreground/40",
				orientation === "vertical" &&
					"mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] -inset-y-1/2 w-px",
				orientation === "horizontal" &&
					"mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] -inset-x-1/2 h-px",
				className
			)}
			{...props}
		/>
	);
}

"use client";
import React, { useState } from "react";
import AuroraText from "../../../ui/AuroraText";
import Link from "next/link";
import { RainbowButton } from "@/ui/rainbow-button";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { AiFillGift } from "react-icons/ai";

// Animated Tooltip Component
const AnimatedTooltip = ({
  iconSrc,
  username,
  platform,
  gradientFrom,
  gradientTo,
}: {
  iconSrc: string;
  username: string;
  platform: string;
  gradientFrom: string;
  gradientTo: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const halfWidth = (event.target as HTMLElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-black/80 px-4 py-2 text-xs shadow-xl border border-white/10"
          >
            <div
              className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%]"
              style={{
                background: `linear-gradient(to right, transparent, ${gradientFrom}, transparent)`,
              }}
            />
            <div
              className="absolute -bottom-px left-10 z-30 h-px w-[40%]"
              style={{
                background: `linear-gradient(to right, transparent, ${gradientTo}, transparent)`,
              }}
            />
            <div className="relative z-30 text-base font-bold text-white">
              {username}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-14 h-14 flex items-center justify-center transition-all duration-300">
        <Image
          src={iconSrc}
          alt={platform}
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default function ContactSection() {
  const [activeField, setActiveField] = useState<string | null>(null);

  const socialLinks = [
    {
      platform: "LinkedIn",
      username: "@kamrulhasan",
      iconSrc: "/icons/tech/linkedin.png",
      href: "https://www.linkedin.com/in/kamrul-hasan-dev/",
      gradientFrom: "#0A66C2",
      gradientTo: "#0077B5",
    },
    {
      platform: "GitHub",
      username: "@Kallolx",
      iconSrc: "/icons/tech/github.png",
      href: "https://github.com/Kallolx",
      gradientFrom: "#6e5494",
      gradientTo: "#333",
    },
    {
      platform: "WhatsApp",
      username: "Chat on WhatsApp",
      iconSrc: "/icons/tech/whatsapp.png",
      href: "https://wa.me/8801831624571",
      gradientFrom: "#25D366",
      gradientTo: "#128C7E",
    },
    {
      platform: "Messenger",
      username: "@kamrulhasan",
      iconSrc: "/icons/tech/messenger.png",
      href: "https://m.me/kamrulhasan.kallol.9",
      gradientFrom: "#00B2FF",
      gradientTo: "#0084FF",
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-6xl md:text-7xl font-regular -tracking-[0.06em] text-center text-white mb-16">
          <AuroraText>Lets Have a Chat</AuroraText>
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Section - 40% */}
          <div
            className="w-full lg:w-[40%] rounded-lg overflow-hidden relative backdrop-blur-md h-[500px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Form Fields */}
              <div className="flex-grow">
                <div className="flex gap-4 mb-6">
                  {/* First Name */}
                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-white/5 border-0 rounded-lg text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-white/50 focus:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                      onFocus={() => setActiveField("firstName")}
                      onBlur={() => setActiveField(null)}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white/5 border-0 rounded-lg text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-white/50 focus:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                      onFocus={() => setActiveField("lastName")}
                      onBlur={() => setActiveField(null)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border-0 rounded-lg text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-white/50 focus:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField(null)}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-white/5 border-0 rounded-lg text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-white/50 resize-none focus:bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                  />
                </div>

                {/* Send Button with Shimmer */}
                <div className="flex justify-center">
                  <motion.div className="block">
                    <RainbowButton
                      className="flex items-center justify-center gap-2 px-8"
                      href="https://wa.me/8801831624571"
                      openInNewTab={true}
                    >
                      Send Message
                    </RainbowButton>
                  </motion.div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex justify-center">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <AnimatedTooltip
                      iconSrc={social.iconSrc}
                      username={social.username}
                      platform={social.platform}
                      gradientFrom={social.gradientFrom}
                      gradientTo={social.gradientTo}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - 60% */}
          <div
            className="w-full lg:w-[60%] rounded-lg overflow-hidden relative backdrop-blur-md h-[500px]"

          >
            <video
              src="/videos/vid1.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-fill"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

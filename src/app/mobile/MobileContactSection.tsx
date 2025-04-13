"use client";
import React from "react";
import AuroraText from "../../ui/AuroraText";
import Link from "next/link";
import { RainbowButton } from "@/ui/rainbow-button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileContactSection() {
  const socialLinks = [
    {
      platform: "LinkedIn",
      username: "@kamrulhasan",
      iconSrc: "/icons/tech/linkedin.png",
      href: "https://www.linkedin.com/in/kamrul-hasan-dev/",
    },
    {
      platform: "GitHub",
      username: "@Kallolx",
      iconSrc: "/icons/tech/github.png",
      href: "https://github.com/Kallolx",
    },
    {
      platform: "WhatsApp",
      username: "Chat on WhatsApp",
      iconSrc: "/icons/tech/whatsapp.png",
      href: "https://wa.me/8801831624571",
    },
    {
      platform: "Messenger",
      username: "@kamrulhasan",
      iconSrc: "/icons/tech/messenger.png",
      href: "https://m.me/kamrulhasan.kallol.9",
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="px-5 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl font-regular -tracking-[0.06em] text-center text-white mb-8">
          <AuroraText>Lets Have a Chat</AuroraText>
        </h2>

        {/* Video Container */}
        <div
          className="w-[80%] rounded-lg overflow-hidden relative backdrop-blur-md mb-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            aspectRatio: "16/9",
          }}
        >
          <video
            src="/videos/vid1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* Message Button */}
        <div className="grid place-items-center w-full mb-10">
          <RainbowButton
            className="flex items-center justify-center gap-2 px-6 py-3 text-base rounded-full min-w-[180px] max-w-[180px]"
            href="https://wa.me/8801831624571"
            openInNewTab={true}
          >
            Message Me
          </RainbowButton>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center w-full">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-5"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={social.iconSrc}
                  alt={social.platform}
                  width={36}
                  height={36}
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

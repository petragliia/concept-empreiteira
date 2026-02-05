"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export function BackToPortfolio() {
    return (
        <motion.div
            className="fixed bottom-6 left-6 z-50 flex flex-col items-start shadow-2xl group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <div className="bg-slate-900 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-t-md uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Projeto Demonstrativo
            </div>
            <Link
                href="https://concept-digital-portfolio.vercel.app/"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-black text-sm md:text-base px-6 py-3 rounded-b-md rounded-tr-md flex items-center gap-3 transition-all hover:pr-8"
            >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-medium opacity-80 mb-0.5 uppercase tracking-wider">Voltar ao</span>
                    <span>PORTFÓLIO</span>
                </div>
            </Link>
        </motion.div>
    )
}

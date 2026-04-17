import { motion } from "framer-motion";
import { INTRO_DATA8 } from "./introData8";

function IntroTechniquestKite() {
    return (
        <section className="py-24 px-6 bg-[#091c22]">
            <div className="max-w-3xl mx-auto text-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xl md:text-2xl leading-relaxed text-[#e6f6fd] font-light"
                >
                    {INTRO_DATA8.intro}
                </motion.p>
            </div>
        </section>
    );
}
export default IntroTechniquestKite;
import { motion } from "framer-motion";
import { INTRO_DATA8 } from "./introData8";
import { useI18n } from "../../app/providers/i18nContext";

function IntroTechniquestKite() {
    const { t } = useI18n();
    return (
        <section className="bg-[#091c22] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-base font-light leading-relaxed text-[#e6f6fd] sm:text-lg md:text-xl lg:text-2xl"
                >
                    {t(INTRO_DATA8.introKey)}
                </motion.p>
            </div>
        </section>
    );
}
export default IntroTechniquestKite;
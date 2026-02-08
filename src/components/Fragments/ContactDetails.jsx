/* eslint-disable no-unused-vars */
import { MessageSquareText } from "lucide-react";
import { RedirectUrlAction } from "../../hooks/redirectUrlAction";
import { motion } from "motion/react";

const ContactDetails = () => {
  const { redirectToWA } = RedirectUrlAction();

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-auto w-full"
    >
      <div>
        <h1 className="text-charcoal font-montserrat text-4xl font-bold uppercase md:text-6xl">
          Let’s Work Together
        </h1>
        <p className="text-charcoal/15 font-inter mt-10 text-xs font-semibold tracking-[0.3rem] uppercase md:text-sm">
          Direct Message
        </p>
        <div className="mt-4 flex cursor-pointer items-center gap-4 transition-all duration-200 ease-in-out hover:opacity-20">
          <span>
            <MessageSquareText size={28} />
          </span>
          <a onClick={redirectToWA} className="font-inter text-lg md:text-xl">
            WhatsApp us for a consultation
          </a>
        </div>
      </div>

      <hr className="mt-15 text-black/10" />

      <div className="mt-10 flex items-start justify-between md:w-[70%] lg:w-full">
        <div>
          <h3 className="font-inter text-charcoal/20 text-[0.6rem] font-semibold tracking-[0.3rem] uppercase md:text-xs">
            Our Office
          </h3>
          <h1 className="font-inter text-charcoal mt-2 text-sm md:text-base">
            Jl. Parung Jaya
          </h1>
          <h1 className="font-inter text-charcoal mt-1 text-sm md:text-base max-w-[80%]">
            No.42, Karang Tengah Tangerang
          </h1>
        </div>

        <div>
          <h3 className="font-inter text-charcoal/20 text-[0.6rem] font-semibold tracking-[0.3rem] uppercase md:text-xs">
            Enquiries
          </h3>
          <h1 className="font-inter text-charcoal mt-2 text-sm md:text-base">
            tamindoprojectid@gmail.com
          </h1>
          <h1 className="font-inter text-charcoal mt-1 text-sm md:text-base">
            +62 878 8571 8594
          </h1>
          <h1 className="font-inter text-charcoal mt-1 text-sm md:text-base">
            +62 878 4800 1425
          </h1>
          <h1 className="font-inter text-charcoal mt-1 text-sm md:text-base">
            +62 896 0332 0356
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetails;

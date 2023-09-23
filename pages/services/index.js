import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* text */}
          <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-auto lg:mx-0"
            >
              Cái tôi quá lớn chính là rào cản ngăn bạn phát triển bản thân, là
              sợi dây vô hình ngăn cách mọi mối quan hệ. Sống ở đời, tử tế nhưng
              đừng nhu nhược, khiêm tốn nhưng đừng nhút nhát, tự tin nhưng đừng
              cao ngạo.{" "}
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-x-[65%]"
          >
            {/* Slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

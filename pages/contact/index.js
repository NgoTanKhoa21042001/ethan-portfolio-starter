import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form*/}
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Lets <span>connect.</span>
          </h2>
          {/* form */}
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>

            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 flex items-center justify-center">
              <span>Lets talk</span>
              <BsArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

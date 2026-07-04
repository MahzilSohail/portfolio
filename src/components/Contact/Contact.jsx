import ScaleIn from "../animations/ScaleIn";
export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-40 pb-20] text-center"
    >
      <div className="max-w-295 mx-auto px-8">

        {/* Heading */}

        <div className="uppercase tracking-[0.08em] text-[12px] text-cyan-400 font-(--font-mono) flex justify-center">
          CONNECT
        </div>

        <h2 className="mt-4.5 font-(--font-display)] font-bold leading-[1.08] text-[clamp(30px,4vw,60px)]">

          Let&apos;s build the

          <span className="text-cyan-400"> next system </span>

          <br />

          together.

        </h2>

        <p className="mt-4.5 text-[14px] text-[#7E96A3] font-(--font-mono)">
          Open to internships, collaborative builds, and full-stack or mobile
          roles.
        </p>

        {/* CTA */}

        <div className="flex flex-wrap justify-center gap-4 mt-10.5">

          <a
  href="mailto:mahzilsohail1@gmail.com"
  className="inline-flex items-center justify-center px-[6 py-3 rounded-sm border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0B1929] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(95,216,238,.25)]"
>
  mahzilsohail1@gmail.com
</a>

          <a
  href="tel:+923238451415"
  className="
  inline-flex
  items-center
  justify-center
  px-6
  py-3
  rounded-sm
  border
  border-cyan-500/20
  text-white
  transition-all
  duration-300
  hover:border-cyan-400
  hover:text-cyan-400
  hover:-translate-y-0.5
  "
>
  +92 323 8451415
</a>

          <a
  href="/resume/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0B1929] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(95,216,238,.25)]"
>
  Resume
</a>

        </div>

        {/* Contact Card */}

        <div
  className="
    max-w-150
    mx-auto
    mt-12.5
    p-10
    rounded-[20px]
    border border-cyan-500/15
    bg-[#111B32E6]
    bg-[linear-gradient(160deg,rgba(95,216,238,0.05),rgba(17,27,50,0.95)_60%)]
    shadow-[0_15px_40px_rgba(0,0,0,.35)]
  "
>
        
<ScaleIn>
          <div className="max-w-137.5 mx-auto">

            <form
              action="https://formsubmit.co/mahzilsohail1@gmail.com"
              method="POST"
              className="flex flex-col gap-6.25"
            >

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5.5 py-4.5 rounded-[14px] bg-[#0b1932] border border-cyan-500/20 outline-none focus:border-cyan-400 transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                className="w-full px-5.5 py-4.5 rounded-[14px] bg-[#0b1932] border border-cyan-500/20 outline-none focus:border-cyan-400 transition-all"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-5.5 py-4.5 rounded-[14px] bg-[#0b1932] border border-cyan-500/20 outline-none focus:border-cyan-400 transition-all"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full min-h-45 px-5.5 py-4.5 rounded-[14px] bg-[#0b1932] border border-cyan-500/20 resize-y outline-none focus:border-cyan-400 transition-all"
              />

              <button
                type="submit"
                className="
                  w-full
                  py-4.5
                  rounded-[14px]
                  bg-cyan-400
                  text-[#08192f]
                  text-[20px]
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_20px_rgba(89,243,210,.35)]
                "
              >
                Send Message
              </button>

            </form>

          </div>
</ScaleIn>
        </div>

      </div>
    </section>
  );
}
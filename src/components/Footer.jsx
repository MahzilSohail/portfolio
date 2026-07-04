export default function Footer() {
    return (
        <footer className="py-7.5">
            <div className="max-w-295 mx-auto px-8 flex justify-between items-center flex-wrap gap-2.5">
                <p className="text-[12px] text-[#2C5A66] font-(--font-mono)">
                    © 2026 MAHZIL SOHAIL — BUILT WITH REACT, NEXT.JS & TAILWIND CSS
                </p>
                <div className="flex gap-5.5">

                    <a
                        href="https://github.com/MahzilSohail"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-[12px]
                            text-[#7E96A3]
                            font-(--font-mono)
                            transition-colors
                            duration-300
                            hover:text-cyan-400"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mahzil-sohail-02412b371/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-[12px]
                            text-[#7E96A3]
                            font-(--font-mono)
                            transition-colors
                            duration-300
                            hover:text-cyan-400"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:mahzilsohail1@gmail.com"
                        className="
                            text-[12px]
                            text-[#7E96A3]
                            font-(--font-mono)
                            transition-colors
                            duration-300
                            hover:text-cyan-400"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
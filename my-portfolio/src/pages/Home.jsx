import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}>
                <h1>Uchechukwu Henry Udefi</h1>
                <h2>Web Developer | Designer</h2>
                <img src="/profile-pic.jpg" alt="Profile" className="profile-pic" />
                <p>Hi, I'm Uchechukwu, a passionate web developer with expertise in creating dynamic and responsive web applications. I love turning ideas into reality through code.</p>
                <p>With a strong foundation in HTML, CSS, and JavaScript, I enjoy building user-friendly interfaces and seamless user experiences. My goal is to continuously learn and improve my skills while contributing to exciting projects.</p>
                <p>Feel free to explore my portfolio to see some of the projects I've worked on and the skills I've acquired over the years.</p>
                <button onClick={() => window.location.href = '/projects'}>View Projects</button>
                <p>If you'd like to get in touch or discuss a project, feel free to reach out!</p>
                <button onClick={() => window.location.href = '/contact'}>Get in Touch</button>
            </motion.div>
        </>
    );
}
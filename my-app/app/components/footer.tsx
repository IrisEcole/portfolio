import { FaGithub, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-6 text-sm text-white">
      <div className="flex gap-4 mb-2">
        <a
          href="https://github.com/IrisEcole"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-10 h-10 hover:text-white/50 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/iris-dautriat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-10 h-10  hover:text-white/50 transition-colors" />
        </a>
      </div>
      <p>© 2025 Iris. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}

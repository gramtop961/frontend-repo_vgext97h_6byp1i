export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        <nav className="flex items-center gap-5 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#get-started" className="hover:text-gray-900">Get Started</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

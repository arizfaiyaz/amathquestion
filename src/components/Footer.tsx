export default function Footer() {
  return (
    <footer className="w-full text-center py-6 mt-8">
      <p className="text-blue-200/60 text-sm font-medium tracking-wide">
        Built with Love💖 • © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
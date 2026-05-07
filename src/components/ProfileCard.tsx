import  GithubIcon  from "@/components/ui/github-icon";
import  LinkedinIcon  from "@/components/ui/linkedin-icon";
import  TwitterXIcon  from "@/components/ui/twitter-x-icon";
import avatarImage from '@/assets/avatar.jpg';

export function ProfileCard() {
  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center h-full">
            {/* Avatar */}
            <img 
          src={avatarImage}
              alt="Profile Avatar" 
              className="w-32 h-32 rounded-full shadow-md border-4 border-white mb-4"
            />
            
            {/* Bio Details */}
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Ariz Faiyaz</h2>
            <p className="text-sm font-medium text-blue-600 mb-4">Software Developer</p>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              I build tools and web apps. Currently focused on Robust scalable backends, React, TypeScript, and full-stack development.
            </p>
      
            {/* Social Links */}
            <div className="flex gap-4 mt-auto">
              <SocialLink href="https://github.com/arizfaiyaz" icon={<GithubIcon size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/ariz-faiyaz/" icon={<LinkedinIcon size={20} />} label="LinkedIn" />
              <SocialLink href="https://x.com/thatnerdwalaguy" icon={<TwitterXIcon size={20} />} label="X" />
            </div>
          </div>
    </>
  )
}

// Helper component for uniform social buttons
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm border border-gray-100"
    >
      {icon}
    </a>
  );
}
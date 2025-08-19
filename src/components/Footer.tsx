import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="relative bg-sky-200 text-white p-4">
      <div className="text-center pb-4">
        <p className="text-gray-900">Contact: belajarlinkedin@gmail.com</p>
      </div>
      <div className="social-links text-center space-x-5">
        <SocialIcon url="https://www.instagram.com/belajarlinkedin/" />
        <SocialIcon url="https://www.linkedin.com/company/belajar-linkedin/posts/?feedView=all" />
        <SocialIcon url="https://www.youtube.com/belajarlinkedin" />
      </div>
    </footer>
  );
}

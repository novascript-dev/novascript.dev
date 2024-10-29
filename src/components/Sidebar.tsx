import SidebarButton from "./SidebarButton";
import backgroundImage from '../../public/pinkSky.jpg'
import logoImage from '../../public/logo.png'

export default function Sidebar() {
  return (
    <nav className={`navbar w-[400px] h-screen fixed`}
      style={{
        backgroundImage: `url('${backgroundImage.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="h-screen relative w-[100%]"
        style={{
          background: "linear-gradient(180deg, rgba(229, 125, 144, 0.8), rgba(33, 27, 23, 1))"
        }}/>

      <div className="navbar-content flex flex-col justify-between absolute top-0 left-0 h-screen">
        <div className="header">
          <div className="flex items-center mt-10 gap-2 justify-center">
            <img src={logoImage.src} width="70%" />
          </div>
        </div>

        <div className={''}>
          <ul className="flex gap-4 flex-col px-5">
            <li>
              <SidebarButton href="/" title="About me!" variant="static"/>
            </li>
            <li>
              <SidebarButton href="/resume" title="Resume!" variant="static"/>
            </li>
            <li>
              <SidebarButton href="/side-projects" title="Side Projects!" variant="static"/>
            </li>
            <li>
              <SidebarButton href="/about" title="About Me!" variant="static"/>
            </li>
          </ul>
        </div>

        <div className={`subheading-social`}>
          <div className="text-center mb-5">
            <p className="relative inline-block px-12 py-3 font-semibold text-white bg-gradient-to-r from-gray-600 via-white to-gray-500 bg-clip-text text-transparent animate-shine">
              DO YOU HAVE A DREAM?
              <br />
              LET ME CODE IT.
            </p>
          </div>
          <div className="line mx-7" />
          <div className="social-media flex gap-3 my-5 justify-center">
            <a href="https://twitter.com/novatsx" target="_blank">
              tw
            </a>
            <a href="https://github.com/nova-script" target="_blank">
              zz
            </a>
            <a href="https://dev.to/novascript" target="_blank">
              aa
            </a>
          </div>
        </div>  
      </div>
    </nav>
  );
}
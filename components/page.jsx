import React from "react";


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
     
     
     {/*navbar */}
     <header className="bg-white ">
  <div className="flex items-center justify-end gap-6 pr-6 my-4">
    <a className="text-m font-bold">Search</a>
    <a className="text-m font-bold">Contact</a>
    <a className="text-m font-bold">Log in</a>
    <a className="text-m font-bold">Register</a>
    <a className="text-m font-bold">Cart</a>
  </div>
</header>

{/* system 76 image  */}
<img class="header-logo-image justify-center m-auto" src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/250x100/system76-logo-open-source-tagliner4_1730474034__00841.original.png" srcset="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/250x100/system76-logo-open-source-tagliner4_1730474034__00841.original.png 1x, https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/500x200/system76-logo-open-source-tagliner4_1730474034__00841.original.png 2x" alt="System76 logo" title="System76 - Powerful Linux Computers"></img>
     


     <header className="bg-white ">
  <div className="flex items-center justify-center gap-12  my-4">
    <a className="text-m ">Laptop</a>
    <a className="text-m ">Desktop</a>
    <a className="text-m ">Workstations</a>
    <a className="text-m ">Mini</a>
    <a className="text-m ">Servers</a>
    <a className="text-m ">Keyboard</a>
    <a className="text-m ">Component</a>
    <a className="text-m ">pop!_os</a>
    <a className="text-m ">Merch</a>
    <a className="text-m ">Specials</a>

  </div>
</header>


{/* pop_os image  size to fix */}

    <div className="relative w-full bg-[#0e0e0e]">
     
      <img
        src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/pop-hero-tablet-night.jpg?t=1741208618"
        alt="Pop!_OS Hero"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Pop!_OS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          
          <a
  href="https://system76.com/pop/download/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md transition">
    DOWNLOAD
  </button>
</a>
<a
  href="https://system76.com/donate/"
  target="_blank"
  rel="noopener noreferrer"
>
          <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md transition">
            DONATE TO APP
          </button></a>
        </div>
      </div>
    </div>



 {/* pop os is evolving */}
  <section className="bg-blue-100 py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Pop!_OS Is Evolving
    </h2>
    <p className="text-lg text-gray-800 mb-6">
      COSMIC, our budding desktop environment, brings new features, refinements, core apps,
      stability, security, and performance to Pop!_OS users everywhere.
    </p>
    <a
      href="https://system76.com/cosmic/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 font-semibold underline "
    >
      LEARN MORE ABOUT COSMIC 
    </a>
  </div>
</section>


{/* meet pop os */}
<br />
<div className="text-5xl text-center my-10">
  Meet Pop!_OS
</div>




{/* youtube */}
<div className="flex justify-center items-center py-8">
  <a
    href="https://youtu.be/SrWw2LeZ21U"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block group"
  >
    {/* Background Image */}
    <img
      alt="Workflow Customization video"
      src="https://img.youtube.com/vi/SrWw2LeZ21U/maxresdefault.jpg"
      className="w-full max-w-7xl  shadow-lg"
    />

    {/* Play Button */}
    <svg
      viewBox="0 0 512 512"
      className="absolute inset-0 w-12 h-12 m-auto text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:text-gray-300"
      fill="currentColor"
    >
      <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z" />
    </svg>
  </a>
</div>


<div className="text-center font-bold">FEATURES</div>
<div className="text-center text-4xl ">WHY POP!_OS?</div>


{/* workflow*/}
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
     
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Workflow</h2>
        <p className="text-lg text-gray-600">
          Pop!_OS is designed for fast navigation, easy workspace organization, 
          and fluid, convenient workflow. Your operating system should encourage 
          discovery, not obstruct it.
        </p>
        <a
          href="https://system76.com/pop/workflow/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 hover:underline"
        >
          Learn More
        </a>
      </div>

    
      <div className="flex justify-center">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/workflowrr.png?t=1741215480"
          alt="Workflow Illustration"
          className="max-w-full h-auto "
        />
      </div>
    </div>



{/* Compatibility */}

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
      
      <div className="flex justify-center">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/compatibilityr.png?t=1741215688"
          alt="Compatibility Illustration"
          className="max-w-full h-auto "
        />
      </div>

      
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Compatibility</h2>
        <p className="text-lg text-gray-600">
          Develop software out of the box with a vast array of libraries and tools at your disposal. 
          Pop!_OS uses APT and Flatpak package management, meaning it’s easy to install, remove, 
          and update all software on the OS.
        </p>
        <a
          href="https://system76.com/pop/compatibility/"  
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 hover:underline"        >
          Learn More
        </a>
      </div>
    </div>

    
{/* Keep Your Computer Secure */}
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
     
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Keep Your Computer Secure</h2>
        <p className="text-lg text-gray-600">
          Built with security at its core. Full-disk encryption comes standard, keeping your data safe from unauthorized access. 
          You’re in control of system updates, installing them on your schedule to minimize disruptions. Privacy features help protect 
          your personal information, while firmware management ensures your hardware stays up to date with the latest security patches.
        </p>
        <a
          href="https://system76.com/pop/security/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  py-2 hover:underline"
        >
          Learn More
        </a>
      </div>

     
      <div className="flex justify-center">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/security.png?t=1741216101"
          alt="Security Illustration"
          className="max-w-full h-auto "
        />
      </div>
    </div>


{/* Customization */}

     <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
     
      <div className="flex justify-center">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/hyper-customization.png?t=1741216245"
          alt="Customization Illustration"
          className="max-w-full h-auto "
        />
      </div>

    
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Customization</h2>
        <p className="text-lg text-gray-600">
          Get comfy with an extensive, easy-to-find list of preferences. Set dock orientation, 
          window tiling, Super navigation, keyboard layout and shortcuts, privacy controls, 
          and more. Your computer, your tool, your way. <strong>YOURS.</strong>
        </p>
        
      </div>
    </div>


<br />
{/* other features */}
<div className="text-4xl text-center ">OTHER FEATURES</div><br />

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 text-center">
      
      {/* Hybrid Graphics */}
      <div className="space-y-4">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/hybrid-graphics-pop.jpg?t=1740592366"
          alt="Hybrid Graphics"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        <h3 className="text-2xl font-bold">Hybrid Graphics</h3>
        <p className="text-gray-600">
          Set phasers to stunning performance. Toggle between battery-saving and high-powered 
          graphics, or launch individual apps on GPU power.
        </p>
      </div>

      {/* Gaming */}
      <div className="space-y-4">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/gaming-pop.jpg?t=1740592418"
          alt="Gaming"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        <h3 className="text-2xl font-bold">Gaming</h3>
        <p className="text-gray-600">
          Steam, Lutris, and GameHub create an incredible gaming experience in selection and 
          performance. Let your game library roam free on one OS.
        </p>
      </div>

      {/* Do Not Disturb */}
      <div className="space-y-4">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/dnd-pop.jpg?t=1740593051"
          alt="Do Not Disturb"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        <h3 className="text-2xl font-bold">Do Not Disturb</h3>
        <p className="text-gray-600">
          Get rid of any and all notifications for however long you like. Cast out ye heathens, 
          for there is many a work to be done!
        </p>
      </div>

    </div>

{/* THE COMPLETE EXPERIENCE */}
<div className=" text-center ">THE COMPLETE EXPERIENCE</div>
<div className="text-4xl text-center">HARDWARE MADE FOR POP!_OS</div>





<div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 text-center">
      
      {/*Laptops */}
      <div className="space-y-4 p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "rgb(230, 246, 246)" }}>
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/detail-laptop.jpg?t=1741300679"
          alt="Laptops"
          className="w-full h-auto rounded-2xl"
        />
        <h3 className="text-2xl font-bold ">Laptops</h3>
        <p className="">
          High-performance laptops designed to harmonize with their software while tightening security.
        </p>
        <a
          href="https://system76.com/laptops"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-700 transition"
        >
          Shop Now
        </a>
      </div>

      {/*Desktops */}
      <div className="space-y-4 p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "rgb(230, 246, 246)" }}>
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/detail-desktop.jpg?t=1741300712"
          alt="Desktops"
          className="w-full h-auto rounded-2xl"
        />
        <h3 className="text-2xl font-bold ">Desktops</h3>
        <p className="">
          Powerful, quiet handcrafted desktops designed for tinkering and engineered for max performance.
        </p>
        <a
          href="https://system76.com/desktops"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-700 transition"
        >
          Shop Now
        </a>
      </div>

      {/*Workstations */}
      <div className="space-y-4 p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "rgb(230, 246, 246)" }}>
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/detail-workstation.jpg?t=1741300626"
          alt="Workstations"
          className="w-full h-auto rounded-2xl"
        />
        <h3 className="text-2xl font-bold ">Workstations</h3>
        <p className="">
          Computers designed for intense tasks, offering robust performance and open-source adaptability.
        </p>
        <a
          href="https://system76.com/workstations"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-700 transition"
        >
          Shop Now
        </a>
      </div>

      {/*Keyboards */}
      <div className="space-y-4 p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "rgb(230, 246, 246)" }}>
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/detail-keyboard.jpg?t=1741300741"
          alt="Keyboards"
          className="w-full h-auto rounded-2xl"
        />
        <h3 className="text-2xl font-bold ">Keyboards</h3>
        <p className="">
          Handcrafted mechanical keyboards designed by keyboard enthusiasts for typing at warp speed.
        </p>
        <a
          href="https://system76.com/keyboards/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-700 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
    <br /><br /><br />

    {/* Testimonials */}
    <div className="text-4xl text-center">TESTIMONIALS</div>
<br />




{/* swipe */}
<div className="relative w-full h-[500px] overflow-hidden">

  <img
    src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/pop-hero-tablet-night.jpg?t=1741208618"
    alt="Pop!_OS Hero"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute inset-0 flex items-center justify-center">
   
    {(() => {
      const texts = ["Robert T.: 'POP_OS! is very capable'", "Stuart L:'Work done without any problems'", "Amanda T.'Used for several month and loved it'", "Robert H.'It's simple to use'"];
      const [index, setIndex] = React.useState(0);

      const handlePrev = () =>
        setIndex((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
      const handleNext = () =>
        setIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));

      return (
        <>
          <h2 className="text-5xl md:text-3xl font-bold text-white">
            {texts[index]}
          </h2>

          
          <button
            onClick={handlePrev}
            className="absolute left-6 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70"
          >
            ›
          </button>
        </>
      );
    })()}
  </div>
</div>
<br /><br />


<div className="text-center ">Proud Advocates for Open Source</div>
<div className="text-center text-4xl">ABOUT SYSTEM76</div>

 <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
     
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Built for User Freedom</h2>
        <p className="text-lg text-gray-600">
          Pop!_OS is engineered and designed in-house by System76, the US computer manufacturer. 
          From our factory in Colorado, we craft open source software, repairable computers, and 
          airtight firmware—with the aim of empowering users' ambitions on the best-quality product 
          we can muster.
        </p>
        <a
          href="https://system76.com/about/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  underline  py-2  "
        >
          Our Mission
        </a>
      </div>

     
      <div className="flex justify-center">
        <img
          src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/manufacturing-sectioncontent-thelio-building.png?t=1722004652"
          alt="Engineers design linux desktop prototype"
          className="max-w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </div>





    <div className=" py-12 px-6 md:px-16 text-center bg-[rgb(230,246,246)] space-y-8">
      {/* Heading and Subtext */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Unleash Your Potential</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Pop!_OS is free to download, and freeing to use. 
          Get started with this powerful OS and take to the stars.
        </p>
        <a
          href="https://system76.com/pop/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-green-700 transition"
        >
          Download
        </a>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Pop Docs */}
        <a
          href="https://support.system76.com/#pop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6  "
        >
          <img
            src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/poplinks-docsrr.jpg?t=1741301778"
            alt="Pop Docs"
            className="w-20 h-20 object-cover mb-4"
          />
          <span className="text-xl font-semibold">Pop Docs</span>
        </a>

        {/* Pop! Chat */}
        <a
          href="https://chat.pop-os.org/login"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center  p-6 "
        >
          <img
            src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/poplinks-matter.jpg?t=1741301894"
            alt="Pop! Chat"
            className="w-20 h-20 object-cover mb-4"
          />
          <span className="text-xl font-semibold">Pop! Chat</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/pop-os"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center  p-6 "
        >
          <img
            src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/poplinks-github.jpg?t=1741301914"
            alt="GitHub"
            className="w-20 h-20 object-cover mb-4"
          />
          <span className="text-3xl font-semibold">GitHub</span>
        </a>
      </div>
    </div>



<br />
<br />

{/* links */}
<footer className="bg-[rgb(87,79,74)] text-white px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-2 gap-8">
         
          <ul className="space-y-3">
            <li><a href="https://system76.com/contact/" className="hover:underline">Contact</a></li>
            <li><a href="https://system76.com/shipping/" className="hover:underline">Shipping</a></li>
            <li><a href="https://system76.com/careers/" className="hover:underline">Careers</a></li>
            <li><a href="https://system76.com/about/" className="hover:underline">About Us</a></li>
          </ul>

         
          <ul className="space-y-3">
            <li><a href="https://system76.com/sustainability/" className="hover:underline">Sustainability</a></li>
            <li><a href="https://system76.com/privacy-and-legal/" className="hover:underline">Privacy & Legal</a></li>
            <li><a href="https://blog.system76.com/" className="hover:underline">Blog</a></li>
            <li><a href="https://system76.com/donate/" className="hover:underline">Donate</a></li>
          </ul>
        </div>

        
        <div></div>

        {/* subs */}
        <div className="space-y-4 text-left md:text-right">
          <h3 className="text-lg space-x-5-2 font-bold">Subscribe</h3>
          <p>Subscribe for updates on products, OS features, and promotions.</p>
          <form className="flex flex-col sm:flex-row md:justify-end gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>

         
          <div className="flex space-x-4 justify-start md:justify-end mt-4">
            <a href="https://www.linkedin.com/company/system76/" target="_blank" rel="noopener noreferrer" className="hover:underline">🔗 LinkedIn</a>
            <a href="https://github.com/pop-os" target="_blank" rel="noopener noreferrer" className="hover:underline">💻 GitHub</a>
            <a href="https://www.instagram.com/system76_com/" target="_blank" rel="noopener noreferrer" className="hover:underline">📷 Instagram</a>
            <a href="https://x.com/system76/" target="_blank" rel="noopener noreferrer" className="hover:underline">✖ X</a>
          </div>
        </div>
      </div>

      {/*copyright*/}
      <div className="mt-12 text-center text-sm text-gray-300 space-y-2 max-w-4xl mx-auto">
        <p>Copyright © 2025 System76, Inc.</p>
        <p>* Financing issued by WebBank, member FDIC and serviced by Klarna. See terms.</p>
        <p>
          Intel, the Intel Logo, Intel Core, Iris, and Xeon are trademarks of Intel Corporation
          or its subsidiaries in the U.S. and/or other countries.
        </p>
      </div>
    </footer>














</div>
  );
}

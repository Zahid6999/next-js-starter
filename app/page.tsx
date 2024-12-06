import React from 'react'

const page = () => {
  return (
    <div>
      <section className="relative overflow-hidden pb-20 max-xl:pt-[170px] md:pb-[100px] xl:pt-[230px]">
        <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 h-full w-full blur-[60px]">
          <img
            src="/images/hero-gradient-background.png"
            alt="hero-gradient-background"
            id="hero-gradient"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="reveal-me container">
          <div className="text-center">
            <div className="rv-badge mb-7 md:mb-10">
              <span className="rv-badge-text">Open for new work</span>
            </div>
            <h1 className="mb-7 xl:mb-8">
              Empowering Brand
              <br />
              with Cutting-Edge
              <br />
              <span className="font-instrument italic">Design</span> Solutions
            </h1>

            <p className="mx-auto mb-14 max-w-[750px] xl:mb-[76px]">
              Turn your vision into reality with Rivor. We blend design, strategy, and technology to build powerful
              digital experiences that elevate your brand.
            </p>
            <ul className="flex list-none flex-col items-center justify-center gap-6 md:flex-row">
              <li>
                <a href="/contact.html" className="rv-button rv-button-secondary">
                  <div className="rv-button-top">
                    <span>Start a Project</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Start a Project</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/project.html" className="rv-button rv-button-white">
                  <div className="rv-button-top">
                    <span>Our Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Our Services</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page

export const Herobg = () => {
  return (
    <section className="herobg container-fluid relative flex flex-col h-screen justify-center bg-[url('https://beshop-demo.vercel.app/assets/img/main-bg.jpg')] bg-cover bg-center md:bg-right bg-no-repeat">
      <div className="herobg__intro flex flex-col items-start justify-center sm:pl-[20%] text-left">
        <h3 className="eyri m-0 text-[48px] md:text-6xl leading-none text-[#D05278]">
          Professional
        </h3>
        <h1 className="yazi2  text-[54px] md:whitespace-nowrap lg:text-8xl leading-none">
          Beauty &amp;  Care
        </h1>
        <div>
            <p className="yazi2 mt-6 max-w-md text-xl text-[#666666]">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can’t refuse.
        </p>
        </div>
        
        <button className="px-12.5 py-4 bg-[#222222] hover:bg-[#22222250] transition-all delay-75 duration-300 ease z-10 text-white yazi1 flex justify-center items-center mt-15">SHOP NOW</button>
      </div>
      <img src="https://beshop-demo.vercel.app/assets/img/main-block-decor.png" className="absolute hidden md:top-[40%] md:block" alt="" />
    </section>
  );
};
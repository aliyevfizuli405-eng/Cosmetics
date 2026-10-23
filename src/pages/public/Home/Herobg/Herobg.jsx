export const Herobg = () => {
  return (
    <section className="herobg container-fluid relative flex flex-col h-screen justify-center bg-[url('https://beshop-demo.vercel.app/assets/img/main-bg.jpg')] bg-cover bg-right bg-no-repeat">
      <div className="herobg__intro flex flex-col items-start justify-center pl-[20%] text-left">
        <h3 className="eyri m-0 text-6xl leading-none text-[#D05278]">
          Professional
        </h3>
        <h1 className="yazi2  m-0 whitespace-nowrap text-8xl leading-none">
          Beauty &amp; Care
        </h1>
        <div>
            <p className="yazi2 mt-6 max-w-md text-xl text-[#666666]">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can’t refuse.
        </p>
        </div>
        
        <button className="px-12.5 py-4 bg-[#222222] hover:bg-[#22222250] transition-all delay-75 duration-300 ease z-10 text-white yazi1 flex justify-center items-center mt-15">SHOP NOW</button>
      </div>
      <img src="https://beshop-demo.vercel.app/assets/img/main-block-decor.png" className="absolute top-[40%]" alt="" />
    </section>
  );
};
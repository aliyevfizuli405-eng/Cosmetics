export const TopCatalog = () => {
  return (
    <section className="top__catalog pt-45">
      <p className="eyri text-[#d05278] text-[40px] md:text-[50px] mb-0 text-center">
        Popular collections
      </p>
      <h2 className="yazi2 text-center text-[40px] md:text-[60px] ">Top Categories</h2>
      <div className="flex justify-center items-center">
        <p className="yazi1 max-w-md text-[#666666] text-[15px] text-center font-medium pt-4">
          Nourish your skin with toxin-free cosmetic products. With the offers
          that you can’t refuse.
        </p>
      </div>
      <div className="catalog__container grid gap-7 mt-14.75 grid-cols-3">
        <div className="w-full h-full col-span-3 md:col-span-1 flex flex-col relative catalog1">
          <div className="w-full">
            <img
              src="https://beshop-demo.vercel.app/assets/img/top-categories-img1.jpg"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-[50%] left-[50%] salam">
            <span className="text-white yazi2 text-2xl fizuli relative">
              <span className="text-black z-10 bg-[url('https://beshop-demo.vercel.app/assets/img/top-categories-decor.png')] bg-contain p-6 bg-center bg-no-repeat">
               SPA
              </span>
            </span>
            <span className="text-white yazi2 text-2xl fizuli">
              BROWSE PRODUCTS
            </span>
          </div>
        </div>
        <div className="w-full h-full col-span-3 md:col-span-1 flex flex-col relative catalog1">
          <div className="w-full">
            <img
              src="https://beshop-demo.vercel.app/assets/img/top-categories-img2.jpg"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-[50%] left-[50%] salam">
            <span className="text-white yazi2 text-2xl fizuli relative">
              <span className="text-black z-10 bg-[url('https://beshop-demo.vercel.app/assets/img/top-categories-decor.png')] bg-contain p-6 bg-no-repeat bg-center">
                Nails
              </span>
            </span>
            <span className="text-white yazi2 text-2xl fizuli">
              BROWSE PRODUCTS
            </span>
          </div>
        </div>
        <div className="w-full h-full col-span-3 md:col-span-1 flex flex-col relative catalog1">
          <div className="w-full">
            <img
              src="https://beshop-demo.vercel.app/assets/img/top-categories-img3.jpg"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-[50%] left-[50%] salam">
            <span className="text-white yazi2 text-2xl fizuli relative">
              <span className="text-black z-10 bg-[url('https://beshop-demo.vercel.app/assets/img/top-categories-decor.png')] bg-contain p-4 bg-no-repeat">
                Perfume
              </span>
            </span>
            <span className="text-white yazi2 text-2xl fizuli">
              BROWSE PRODUCTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

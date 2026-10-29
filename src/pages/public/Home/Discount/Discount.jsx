import decor from "@assets/main-text-decor.png"

export const Discount = ()=>{
    return(
        <section className="h-screen flex justify-center items-center  bg-[url('https://beshop-demo.vercel.app/assets/img/discount-bg.jpg')] bg-no-repeat bg-center-left  bg-cover">
            <div className="pl-[30%]">
                <h3 className="eyri text-[45px] md:text-[60px] text-[#d05278]">Discount</h3>
                <h2 className="text-[48px] md:text-[100px] whitespace-normal m text-left yazi2">Get Your <br /> <span className="text-[#d05278]"><img src={decor} className="absolute" alt="" />50%</span> Off</h2>
                <p className="yazi2 mt-6 max-w-md text-xl text-[#666666]">Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
                <button className="px-12.5 py-4 bg-[#222222] hover:bg-[#22222250] transition-all delay-75 duration-300 ease z-10 text-white yazi1 flex justify-center items-center mt-15">GET NOW</button>
            </div>
        </section>
    )
}
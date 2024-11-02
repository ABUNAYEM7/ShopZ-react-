const Hero = () => {
  return (
    <div className='p-4'>
      <div
  className="hero md:h-[520px] rounded-lg"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/mTmp7dC/cover.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-40 rounded-lg"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-full md:w-3/5">
      <h1 className="mb-5 text-5xl font-bold ">Redefine Your Style, One Trend at a Time</h1>
      <p className="mb-5">
      ShopZ helps you express your unique style with trendy, high-quality clothing designed for every occasion
      </p>
      <button className="btn bg-purple-400 border-none text-white hover:text-purple-700">Explore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero

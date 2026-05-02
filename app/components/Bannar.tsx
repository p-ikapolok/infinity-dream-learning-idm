export default function Banner() {
  return (
     {/* Banner */}  
  <section className="relative">  
    <img  
      src="/images/banner.png"  
      alt="Banner"  
      className="w-full h-64 object-cover"  
    />  
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">  
      <h2 className="text-2xl font-bold">Welcome to the Hub</h2>  
      <p className="mt-2 text-lg">  
        Your Infinity Dream Learning Journey Starts Here  
      </p>  
      <p className="mt-1">Track your progress, achieve your goals.</p>  
    </div>  
  </section>  
  );
}
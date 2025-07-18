import React  from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card";

import Single from './assets/single.png';
import Double from './assets/double.png';
import Triple from './assets/triple.png';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      
      {/* Pricing Section */}
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <Card
                image={Single}
                title="Single User"
                price="$149"
                features={['500 GB Storage', '1 Granted User', 'Send up to 2 GB']}
                buttonText="Start Trial"
            />
            <Card
                image={Double}
                title="Double User"
                price="$199"
                features={['1 TB Storage', '2 Users Allowed', 'Send up to 5 GB']}
                buttonText="Start Trial"
            />
            <Card
                image={Triple}
                title="Triple User"
                price="$299"
                features={['2 TB Storage', '3 Users Allowed', 'Send up to 10 GB']}
                buttonText="Start Trial"
            />
            </div>
        </div>
    </div>
  );
}

export default App;

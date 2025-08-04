import React from 'react';
import { Icon } from '@iconify/react';

function Product_Specification() {
  const carSpecs = [
  { title: "Body Type", value: "Crossover" ,icon:"gravity-ui:car" },
  { title: "Mileage", value: "70,000 (Mi)", icon: "icon-park-twotone:speed-one"},
  { title: "Transmission", value: "Autometic" ,icon:"solar:transmission-bold"},
  { title: "Condition", value: "Used" ,icon:"streamline:hotel-air-conditioner"},
  { title: "Engine Size", value: "1,599 (cc)" , icon:"mdi:engine-outline"},
  { title: "Year", value: "2018" ,icon:"iwwa:year"},
  { title: "Drivetrain", value: "Front Wheel" ,icon:"carbon:while-loop" },
  { title: "Fuel Type", value: "Diesel",icon:"mdi:fuel-pump-outline"  },
  { title: "Color", value: "Black", icon:"mdi:color" },
  { title: "Cylinders", value: "06" ,icon:"iconoir:gas"},
  { title: "VIN", value: "1C4TJPBA1CD" , icon:"hugeicons:vine"},
  { title: "Doors", value: "2 Doors" , icon:"game-icons:car-door"}
];

  return (
    <>
    <h3 className="text-base font-semibold pt-5">Specification</h3>

    <div className='w-full h-9 bg-slate-100 pl-5 rounded-md mt-5 flex items-center'>
      <h1 className='text-base font-semibold'>Key Features</h1>
    </div>
    
    <div className='w-full mt-5 flex gap-3 flex-wrap '>
      {carSpecs.map((car , index)=>{
        return(
          <div key={index} className='w-44 h-14 p-2 rounded-md bg-slate-50 flex gap-3 items-center'>
            <span className='w-10 h-10 rounded-lg border border-gray-200 flex justify-center items-center'>
              <Icon icon={car.icon} width="30" height="30"  style={{color: '#b91c1c'}} />
            </span>
            <div className='flex flex-col'>
              <span className='text-sm font-normal'>{car.title}</span>
              <span className='text-base'>{car.value}</span>
            </div>
          </div>
        )
      })}
    </div>
    <div className='w-full mt-7'>
      <h1 className='text-lg font-bold'>Refueling</h1>
      <p className='text-base font-normal text-gray-500 pt-1'>
        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache
        fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.
         Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan 
         High Life reprehenderit consectetur cupidatat kogi.
        Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.
      </p>
      <h1 className='text-lg font-bold mt-5'>Car Wash</h1>
      <p className='text-base font-normal text-gray-500 pt-1'>
        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache
        fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.
         Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan 
         High Life reprehenderit consectetur cupidatat kogi.
        Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.
      </p>
    </div>
    

    
    </>
  )
}

export default Product_Specification
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import SideNav from '../../components/Dashboard/sideNav';
import NavBar from '../../components/Dashboard/navbar';
import SmoothieSelector from '../../components/Dashboard/smoothieselector'; // Import the SmoothieSelector component

let count = 0;
gsap.registerPlugin(Flip);

const wrapColor = gsap.utils.wrap(["text-blue-600", "text-green-600", "text-red-600", "text-orange-600"]);

function createItem() {
  return { id: ++count, color: wrapColor(count), status: "entered" };
}

function Smoothie() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  const removeItems = useCallback(
    (exitingItems) => {
      if (!exitingItems.length) return;

      setLayout((prev) => ({
        state: Flip.getState(q(".box, .button")),
        items: prev.items.filter((item) => !exitingItems.includes(item))
      }));
    },
    [q]
  );

  const [layout, setLayout] = useState(() => ({
    items: [].reverse()
  }));

  useEffect(() => {
    if (!layout.state) return;

    const exiting = layout.items.filter((item) => item.status === "exiting");
    const timeline = Flip.from(layout.state, {
      absolute: true,
      ease: "power1.inOut",
      targets: q(".box, .button"),
      scale: true,
      simple: true,
      onEnter: (elements) => {
        return gsap.fromTo(
          elements,
          {
            opacity: 0,
            scale: 0
          },
          {
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration: 0.3
          }
        );
      },
      onLeave: (elements) => {
        return gsap.to(elements, {
          opacity: 0,
          scale: 0
        });
      },
      onComplete() {
        let boxes = document.querySelector(".boxes"),
          lastChild = boxes.lastChild;
        boxes.appendChild(lastChild);
      }
    });

    timeline.add(() => removeItems(exiting));
  }, [layout, q, removeItems]);

  const addItem = () => {
    setLayout({
      state: Flip.getState(q(".box, .button")),
      items: [createItem(), ...layout.items]
    });
  };

  const remove = (item) => {
    item.status = "exiting";
    setLayout({
      ...layout,
      state: Flip.getState(q(".box, .button"))
    });
  };
  
  const links = [
    {
      id: 1,
      title: "Smoothie"
    },
    {
      id: 2,
      title: "Parfait"
    },
    {
      id: 3,
      title: "Fish Pie"
    },
    {
      id: 4,
      title: "Meat Pie"
    },
    {
      id: 5,
      title: "Shawama"
    },
    {
      id: 6,
      title: "Spring Roll"
    },
    {
      id: 7,
      title: "Burger"
    },
    {
      id: 8,
      title: "Pizza"
    },
  ];


  const smoothies = [
    {
      id: 1,
      title: "Berry smoothie"
    },
    {
      id: 2,
      title: "Crio bru smoothie"
    },
    {
      id: 3,
      title: "Tropical tumeric smoothie"
    },
    {
      id: 4,
      title: "Avocado smoothie"
    },
    {
      id: 5,
      title: "Banana peach smoothie"
    },
    {
      id: 6,
      title: "Kiwi cucumber smoothie"
    },
    {
      id: 7,
      title: "Berry beet smoothie"
    },
    {
      id: 8,
      title: "Strawberry mango green smoothie"
    },
    {
      id: 8,
      title: "Kale recharge smoothie"
    },
    {
      id: 8,
      title: "Pineapple weight smoothie"
    },
    {
      id: 8,
      title: "Caramel cashew smoothie"
    },
    {
      id: 8,
      title: "Green spirulina smoothie"
    },
    {
      id: 8,
      title: "Avocado peach weightloss smoothie"
    },
    {
      id: 8,
      title: "Spinach avocado smoothie"
    },
    {
      id: 8,
      title: "Apple cinnamon smoothie"
    },
  ]
  return (
    <>
      <div className="flex">
        <div className="basis-1/5">
          <SideNav />
        </div>
        <div className="basis-4/5 ">
          <NavBar />
          <div className="">
            <h1 className="font-bold text-6xl p-8 text-center text-orange-600">Build Your Perfect Smoothie!</h1>
            <div className="p-10" ref={el}>
              <h4 className='py-2 px-3 text-center text-xl font-bold'>Select your favorite fruits to create a custom blend! {"(see options below)"}</h4>  
              <div className="flex md:flex-row grid md:grid-cols-4 gap-2 pt-4 bg-orange-200 px-5">
                {links.map(({id, title}) => (
                  <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 py-5 select-none text-white rounded-full" onClick={addItem}>
                  {title}
                </button>
                ))}
              </div>
              <h4 className='py-2 px-3 mt-10 text-center text-xl font-bold'>Select your favorite weightloss smoothie to create a custom blend! {"(see options below)"}</h4>
              <div className="flex md:flex-row grid md:grid-cols-4 gap-2 pt-4 bg-orange-200 px-5">
                {smoothies.map(({id, title}) => (
                  <button  key={id} className="bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 my-5 py-5 select-none text-white rounded-full" onClick={addItem}>
                  {title}
                </button>
                ))}
              </div>
              <div className="my-10 p-10 select-none boxes bg-gradient-to-t from-orange-600 via-orange-800 to-orange-600 rounded-md flex md:flex-row grid md:grid-cols-4 gap-2">
                {layout.items.map((item) => (
                  <div
                    id={`box-${item.id}`}
                    key={item.id}
                    className="bg-gradient-to-t from-orange-600 via-orange-300 to-orange-200 py-3 rounded-full text-center"
                    onClick={() => remove(item)}
                  >
                    Click Me
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col gap-5">
              <p><span className='text-white bg-orange-600 rounded-full py-2 px-3'>Fruity</span> Select your favorite fruits to create a custom blend! {"(see options below)"}</p>
              <p><span className='text-white bg-orange-600 rounded-full py-2 px-3'>Classic Smoothie</span> Pick a pre-designed smoothie recipe for a quick and delicious choice. {"(see options below)"}</p>
            </div>
            <h1 className="font-bold text-xl p-8 text-center "><span className='text-orange-600 '>Choose</span> Your <span className='text-yellow-300'>Base</span></h1>
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full p-2 bg-orange-600/20 w-fit justify-center flex items-center">
                <button className="rounded-full py-2 px-5 hover:text-white hover:bg-orange-600 ">Fruity</button>
                <button className="rounded-full py-2 px-5 hover:text-white hover:bg-orange-600">Classic Smoothie</button>
              </div>
              <SmoothieSelector /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smoothie;

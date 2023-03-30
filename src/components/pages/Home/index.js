import React from "react";

const Home = () => {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">
                Top most growing startup of Noida
              </h2>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
                voluptas voluptatum doloremque ipsum dolorum, a eos quaerat
                alias rem nihil obcaecati nam esse amet magnam eaque ad cumque
                ipsam praesentium iste nisi!
              </p>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <img src="https://loremflickr.com/320/240" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

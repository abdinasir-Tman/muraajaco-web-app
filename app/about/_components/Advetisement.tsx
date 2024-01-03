import Image from "next/image";
import React from "react";

const Advetisement = () => {
  return (
    <div className="px-5 lg:px-48 flex flex-col lg:flex-row my-16 gap-5">
      <Image
        src={"/assets/gif/goodNews.gif"}
        width={500}
        height={900}
        alt="good news"
        className="object-fill rounded-r-lg rounded-l-sm lg:w-80 w-full lg:h-96"
      />

      <p className="text-md md:text-xl text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        dolor ipsam fuga eveniet ad mollitia aperiam placeat architecto
        quibusdam! Illo mollitia nesciunt accusamus beatae earum nihil similique
        consectetur ea molestiae fuga! In voluptate excepturi facilis et fuga
        labore incidunt amet quis iure id qui eos error, molestiae cum veritatis
        quod.
      </p>
    </div>
  );
};

export default Advetisement;

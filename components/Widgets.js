import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Contact from "./Contact";

const contacts = [
  {
    name: "Taylor Swift",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/300986152_626386922186463_8275934087959846436_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U9d5hxciaOEAX8j9kpx&_nc_ht=scontent-bos5-1.xx&oh=00_AfD9iBvZszQTlSoa7TMe0kaBpOMT5rEENdY_-MzNLz3X-Q&oe=6378FFB9",
  },
  {
    name: "Youtube",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/239363438_10161278832391754_3124586202588104528_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8g-UPGwY-ikAX-EYGCi&_nc_ht=scontent-bos5-1.xx&oh=00_AfAZnGHlbSgtczTtVMOi0PN1nnc8vkEjXWNEChG6SDC_6g&oe=637966BD",
  },
  {
    name: "Will Smith",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/143377912_259542168867351_6767889307839209789_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d9QlDk7zxa0AX_yCMOf&_nc_ht=scontent-bos5-1.xx&oh=00_AfAxD2qdCt1W7WWuPBLS5lDI7Vazoy2wYjR5vF0mkOlZhA&oe=639BBF67",
  },
  {
    name: "Rihanna",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/313266520_660124108818505_2814203090010849312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JOhMnayyGsYAX8sNTKl&_nc_ht=scontent-bos5-1.xx&oh=00_AfB-JqkW4oD8fZaCJWxGPovwT92rMAlNjGx7-sFAlmPFlA&oe=636CA13A",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/312257846_10114737758665291_6588360857015169674_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aAM-vnaHX2EAX9_c_nV&_nc_ht=scontent-bos5-1.xx&oh=00_AfBMqFVMr7-h10gvtW6TlLYCpSrTGTm5m6-WGm5mOTobDA&oe=636D326E",
  },
  {
    name: "Bill Gates",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/302050398_634809458009990_5460100074060768417_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lYsWfZ0f3jYAX8YTvai&_nc_ht=scontent-bos5-1.xx&oh=00_AfBsM9mqgdtNBH3vDIT-RivoMfEdUYZGbKutS0WGWHcm1Q&oe=636D976D",
  },
  {
    name: "Eminem",
    src: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/305444498_643066097187871_134145449597025045_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=A6eP-7rhfsoAX8K1iQI&_nc_ht=scontent-bos5-1.xx&oh=00_AfDFWxtNDQRstxYFWyOlumlp6rtpKxhEJwJN43ujgmDNGQ&oe=636E636C",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      <div>
        {contacts.map((contact) => (
          <Contact key={contact.src} name={contact.name} src={contact.src} />
        ))}
      </div>
    </div>
  );
}

export default Widgets;
